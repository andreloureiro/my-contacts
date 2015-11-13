(defproject my-contacts-backend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :main my-contacts.handler
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [environ "1.0.1"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-json "0.4.0"]
                 [prismatic/schema "1.0.3"]
                 [com.novemberain/monger "3.0.1"]
                 [org.clojure/clojurescript "1.7.166"]
                 [org.omcljs/om "1.0.0-alpha14"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT"]
                 [binaryage/devtools "0.4.1"]]

  :plugins [[lein-ring "0.8.13"]]
  :source-paths ["src/clj"]
  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/main.js"]
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]
                        [com.cemerick/piggieback "0.2.1"]
                        [org.clojure/tools.nrepl "0.2.10"]]
         :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
         :plugins [[lein-cljsbuild "1.1.1-SNAPSHOT"]
                   [lein-figwheel "0.5.0-SNAPSHOT"]]}}
  :figwheel {:nrepl-port 7888
             :nrepl-middleware ["cider.nrepl/cider-middleware"
                                "refactor-nrepl.middleware/wrap-refactor"
                                "cemerick.piggieback/wrap-cljs-repl"]}
  :cljsbuild
  {:builds
   [{:id "dev"
     :source-paths ["src/cljs"]
     :figwheel true
     :compiler {:main my-contacts.core
                :asset-path "js/out"
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js/out"
                :verbose true
                :optimizations :none}}]})
