(ns my-contacts.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :refer [env]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.util.response :refer [response]]
            [ring.adapter.jetty :as jetty]
            [monger.core :as mg]
            [my-contacts.service :as service]
            monger.json))

(defn api-routes []
  (context "/api" []
    (let [{:keys [conn db]} (mg/connect-via-uri "mongodb://andre:1234@ds035240.mongolab.com:35240/my-contacts")
          contacts-coll "contacts"]
      (context "/contacts" []
        (GET "/" [] (response (service/get-contacts db contacts-coll)))
        (POST "/" {body :body} (service/add-contact db contacts-coll body))
        (context "/:id" [id]
          (GET "/" [] (response (service/get-contact db contacts-coll id)))
          (PUT "/" {body :body} (service/edit-contact db contacts-coll body))
          (DELETE "/" [] (service/remove-contact db contacts-coll id)))))))

(defroutes app-routes
  (api-routes)
  (GET "/" [] (slurp "resources/public/index.html"))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-json-body {:keywords? true})
      (wrap-json-response)
      (wrap-defaults (assoc site-defaults :security {:anti-forgery false}))))

(defn -main
  "Start server"
  []
  (let [port 8080]
    (jetty/run-jetty #'app {:port port :join? false})))
