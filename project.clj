(defproject inlight "0.1.0"
  :description "A Clojure Data Science Environment"
  :url "https://github.com/recholsknauber/inlight"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [kixi/stats "0.5.4"]
                 [incanter "1.9.3"]
                 [metasoarous/oz "1.6.0-alpha31"]
                 [clj-http "3.10.3"]
                 [org.clojure/data.json "1.0.0"]
                 ;;JDBC dependencies
                 [com.h2database/h2 "1.4.200"]
                 [seancorfield/next.jdbc "1.1.610"]
                 [org.xerial/sqlite-jdbc "3.7.2"]])
