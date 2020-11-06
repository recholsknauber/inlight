(ns inlight.core
  (:require [next.jdbc :as jdbc]
            [next.jdbc.sql :as sql]
            [next.jdbc.result-set :as rs])
  (:import java.sql.DriverManager))

;; Begin--interfacing with Audius API, getting JSON and formatting data into H2 db.

(def db {:dbtype "h2"
         :classname "org.h2.Driver"
         :dbname "db.h2"})

(def ds (jdbc/get-datasource db))

(defn create-music-table []
  (jdbc/execute! ds ["create table music (
id int auto_increment primary key,
artist varchar(255),
album varchar(255),
label varchar(255),
genre varchar(255),
location varchar(255),
release_date varchar(255),
rating varchar(255),
embed_link varchar(255),
post_date timestamp as current_timestamp)"]))

(defn read-music-table []
  (jdbc/execute! ds ["SELECT * FROM music ORDER BY parsedatetime(release_date, 'MM/dd/YYYY') DESC"
                     ]
                 {:return-keys true
                  :builder-fn rs/as-unqualified-lower-maps}))

(defn delete-music-table [id]
  "Function to delete a row in the music table"
  (sql/delete! ds :music {:id id}))

(defn update-music-table [id coll]
  "Function to update a row in the music table"
  (sql/update! ds :music coll {:id id}))

(defn save-music-table [artist album label genre location release_date rating embed_link]
  (sql/insert! ds :music {:artist artist
                          :album album
                          :label label
                          :genre genre
                          :location location
                          :release_date release_date
                          :rating rating
                          :embed_link embed_link
                          :post_date (new java.util.Date)}))
