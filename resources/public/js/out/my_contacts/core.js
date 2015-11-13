// Compiled by ClojureScript 1.7.166 {}
goog.provide('my_contacts.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('devtools.core');
devtools.core.set_pref_BANG_.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145),true);
devtools.core.install_BANG_.call(null);
my_contacts.core.app_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"My Contacts",new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Andre"], null)], null)], null);
console.log(om.next.normalize.call(null,my_contacts.core.app_state));

//# sourceMappingURL=core.js.map