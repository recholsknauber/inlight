(ns inlight.core
  (:require [incanter.core :as i]
            [incanter.excel :as ixl]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as jdbcrs]
            [sqlingvo.core :as sql])
  (:import java.sql.DriverManager))

;; Create H2 DB.
(def db-cred {:dbtype "h2"
              :classname "org.h2.Driver"
              :dbname "db.h2"})

(def db (jdbc/get-datasource db-cred))

(def h2 (sql/db :postgresql))

;; Import table of Portland Employment Wage & Salary Data
(def table-pdx-earn (ixl/read-xls "../inlight/resources/public/portland-emphrsearn-all-transposed.xlsx"))

(def table-pdx-earn-maps
  (for [mx (i/matrix table-pdx-earn)]
    (zipmap (map keyword (i/col-names table-pdx-earn)) mx)))

;; Create earnings_portland table
(def create-table-earnings-portland
  (sql/sql
   (sql/create-table h2 :earnings_portland
                     (sql/column :month :date)
                     (sql/column :manufacturing :double)
                     (sql/column :construction :double)
                     (sql/column :leisure-hospitality :double)
                     (sql/column :financial :double)
                     (sql/column :trade-transport-utility :double)
                     (sql/column :services-education-health :double)
                     (sql/column :information :double)
                     (sql/column :services-professional-business :double)
                     (sql/column :government :double)
                     (sql/column :other :double))))

(jdbc/execute! db create-table-earnings-portland)

(def insert-table-earnings-portland
(sql/sql
  (sql/insert h2 :earnings_portland []
  (sql/values table-pdx-earn-maps))))

(jdbc/execute! db insert-table-earnings-portland)

(def read-table-earnings-portland
  (sql/sql
   (sql/select h2 [:*]
     (sql/from :earnings_portland)
     (sql/order-by (sql/desc :month)))))

(take 2 (jdbc/execute! db read-table-earnings-portland
               {:return-keys true
                :builder-fn jdbcrs/as-unqualified-lower-maps}))


;;; OLD TABLE FUNCTIONS FOR REFERENCE
;; (defn create-music-table []
;;   (jdbc/execute! db ["create table music (
;; id int auto_increment primary key,
;; artist varchar(255),
;; album varchar(255),
;; label varchar(255),
;; genre varchar(255),
;; location varchar(255),
;; release_date varchar(255),
;; rating varchar(255),
;; embed_link varchar(255),
;; post_date timestamp as current_timestamp)"]))

;; (defn read-music-table []
;;   (jdbc/execute! db ["SELECT * FROM music ORDER BY parsedatetime(release_date, 'MM/dd/YYYY') DESC"
;;                      ]
;;                  {:return-keys true
;;                   :builder-fn rs/as-unqualified-lower-maps}))

;; (defn delete-music-table [id]
;;   "Function to delete a row in the music table"
;;   (sql/delete! db :music {:id id}))

;; (defn update-music-table [id coll]
;;   "Function to update a row in the music table"
;;   (sql/update! db :music coll {:id id}))

;; (defn save-music-table [artist album label genre location release_date rating embed_link]
;;   (sql/insert! db :music {:artist artist
;;                           :album album
;;                           :label label
;;                           :genre genre
;;                           :location location
;;                           :release_date release_date
;;                           :rating rating
;;                           :embed_link embed_link
;;                           :post_date (new java.util.Date)}))
