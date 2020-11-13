(ns inlight.audius
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]))

  ;; Testing Audius API
(def user-slush (:body (client/get
                 "https://discoveryprovider.mumbaudius.com/v1/users/search?query=slush"
                 )))

(spit "../inlight/resources/public/json/audius-search-slush.json" user-slush)

(def location-portland (:body (client/get
                                "https://discoveryprovider.mumbaudius.com/v1/users/search?query=portland"
                 )))

(spit "../inlight/resources/public/json/audius-search-location-portland.json" location-portland)
