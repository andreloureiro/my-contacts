(ns my-contacts.service
  (:import (java.util UUID))
  (:require [monger.collection :as mc]
            [schema.core :as s]
            [my-contacts.model :as model]))

(defn- uuid []
  (str (UUID/randomUUID)))

(defn- show-error-response
  "Show error response"
  [message]
  {:status 500
   :body {:status "error"
          :message message}})

(defn- show-success-response
  "Show success response"
  [message data]
  {:status 200
   :body {:status "success"
          :message message
          :data data}})

(defn get-contacts
  "Get contacts"
  [db coll]
  (let [contacts (mc/find-maps db coll)]
    (if (s/validate [model/Contact] contacts)
      contacts
      (show-error-response "Couldn't get contacts"))))

(defn add-contact
  "Add new contact"
  [db coll contact]
  (let [user-id (uuid)
        new-contact (assoc contact :user_id user-id)
        contact-added (mc/insert-and-return db coll new-contact)]
    (if (s/validate model/Contact contact-added)
      (show-success-response "Contact added" contact-added)
      (show-error-response "Couldn't add contact"))))

(defn get-contact
  "Get a contact with the given user-id"
  [db coll user-id]
  (let [user {:user_id (str user-id)}
        contact (mc/find-one-as-map db coll user)]
    (if (s/validate model/Contact contact)
      contact
      (show-error-response "Couldn't get contact"))))

(defn edit-contact
  "Edit contact"
  [db coll contact]
  (let [user-id (:user_id contact)
        updated-contact (mc/update db coll {:user_id user-id} contact)]
    (if updated-contact
      (show-success-response "Contact updated" updated-contact)
      (show-error-response "Coudnt update contact"))))

(defn remove-contact
  "Remove an user with given user-id"
  [db coll user-id]
  (let [contact-removed (mc/remove db coll {:user_id user-id})]
    (if contact-removed
      (show-success-response "Contact removed" nil)
      (show-error-response "Couldnt remove contact"))))
