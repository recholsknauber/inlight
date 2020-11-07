(ns inlight.core
  (:require [incanter.core :as i]
            [incanter.excel :as ixl]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as jdbcrs]
            [sqlingvo.core :as sql]
            [clojure.string :as str])
  (:import java.sql.DriverManager))

;; Create H2 DB.
(def db-cred {:dbtype "h2"
              :classname "org.h2.Driver"
              :dbname "db.h2"})

(def db (jdbc/get-datasource db-cred))

(def h2 (sql/db :postgresql))



;; REPL -- Import table of Portland Employment Wage & Salary Data
(def table-pdx-earn (ixl/read-xls "../inlight/resources/public/portland-emphrsearn-all-transposed.xlsx"))

;; Convert column names to uppercase and keywords, zipping with data values.
(def table-pdx-earn-maps
  (for [mx (i/matrix table-pdx-earn)]
    (zipmap (map keyword
                 (map str/upper-case
                      (map #(str/replace % "-" "_") (i/col-names table-pdx-earn))))
            mx)))
;; (take 2 table-pdx-earn-maps)

;; Create earnings_portland table
;; (jdbc/execute! db ["DROP TABLE PDX_ECON.EARNINGS_PORTLAND;"])
(def create-table-earnings-portland
  (sql/sql
   (sql/create-table h2 :PDX_ECON.EARNINGS_PORTLAND
                     (sql/column :MONTH :date)
                     (sql/column :MANUFACTURING :double)
                     (sql/column :CONSTRUCTION :double)
                     (sql/column :LEISURE_HOSPITALITY :double)
                     (sql/column :FINANCIAL :double)
                     (sql/column :TRADE_TRANSPORT_UTILITY :double)
                     (sql/column :SERVICES_EDUCATION_HEALTH :double)
                     (sql/column :INFORMATION :double)
                     (sql/column :SERVICES_PROFESSIONAL_BUSINESS :double)
                     (sql/column :GOVERNMENT :double)
                     (sql/column :OTHER :double))))

(jdbc/execute! db create-table-earnings-portland)

(def insert-table-earnings-portland
(sql/sql
  (sql/insert h2 :PDX_ECON.EARNINGS_PORTLAND []
  (sql/values table-pdx-earn-maps))))

(jdbc/execute! db insert-table-earnings-portland)



;; REPL -- Import table of Portland Employment
(def table-pdx-emp (ixl/read-xls "../inlight/resources/public/portland-employment.xlsx"))

(def table-pdx-emp-maps
  (for [mx (i/matrix table-pdx-emp)]
    (zipmap (map keyword
                 (map str/upper-case
                      (map #(str/replace % "-" "_") (i/col-names table-pdx-emp))))
            mx)))

;; Create employment_portland table
;; (jdbc/execute! db ["DROP TABLE PDX_ECON.EMPLOYMENT_PORTLAND;"])
(def create-table-employment-portland
  (sql/sql
   (sql/create-table h2 :PDX_ECON.EMPLOYMENT_PORTLAND
                     (sql/column :MONTH :date)
                     (sql/column :LABOR_FORCE :double)
                     (sql/column :EMPLOYMENT :double)
                     (sql/column :UNEMPLOYMENT :double)
                     (sql/column :UNEMPLOYMENT_RATE :double)
                     )))


(jdbc/execute! db create-table-employment-portland)

(def insert-table-employment-portland
(sql/sql
  (sql/insert h2 :PDX_ECON.EMPLOYMENT_PORTLAND []
  (sql/values table-pdx-emp-maps))))

(jdbc/execute! db insert-table-employment-portland)




;; REPL -- Read earnings_portland table
(def read-table-earnings-portland
  (sql/sql
   (sql/select h2 [:*]
     (sql/from :PDX_ECON.EARNINGS_PORTLAND)
     (sql/order-by (sql/desc :MONTH)))))

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
