(ns my-contacts.model
  (:require [schema.core :as s]))

(def Contact
  "Contact model"
  {(s/optional-key :_id) Object
   :user_id s/Str
   :name s/Str
   :desc s/Str})
