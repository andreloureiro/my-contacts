(ns ^:figwheel-always my-contacts.core
  (:require-macros [my-contacts.logging :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [goog.dom :as gdom]
            [devtools.core :as devtools]))

(devtools/set-pref! :install-sanity-hints true)
(devtools/install!)


;;- State

(def app-state {:title "My Contacts"
                :contacts [{:name "Andre"}]})

(log (om/normalize app-state))

;;- Parsers



;;- Components


;;- Reconciler
