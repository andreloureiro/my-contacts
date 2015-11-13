(ns my-contacts.logging)

(defmacro log [& args]
  `(.log js/console ~@args))
