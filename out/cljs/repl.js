// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33183_33197 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33184_33198 = null;
var count__33185_33199 = (0);
var i__33186_33200 = (0);
while(true){
if((i__33186_33200 < count__33185_33199)){
var f_33201 = cljs.core._nth.call(null,chunk__33184_33198,i__33186_33200);
cljs.core.println.call(null,"  ",f_33201);

var G__33202 = seq__33183_33197;
var G__33203 = chunk__33184_33198;
var G__33204 = count__33185_33199;
var G__33205 = (i__33186_33200 + (1));
seq__33183_33197 = G__33202;
chunk__33184_33198 = G__33203;
count__33185_33199 = G__33204;
i__33186_33200 = G__33205;
continue;
} else {
var temp__4425__auto___33206 = cljs.core.seq.call(null,seq__33183_33197);
if(temp__4425__auto___33206){
var seq__33183_33207__$1 = temp__4425__auto___33206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33183_33207__$1)){
var c__17178__auto___33208 = cljs.core.chunk_first.call(null,seq__33183_33207__$1);
var G__33209 = cljs.core.chunk_rest.call(null,seq__33183_33207__$1);
var G__33210 = c__17178__auto___33208;
var G__33211 = cljs.core.count.call(null,c__17178__auto___33208);
var G__33212 = (0);
seq__33183_33197 = G__33209;
chunk__33184_33198 = G__33210;
count__33185_33199 = G__33211;
i__33186_33200 = G__33212;
continue;
} else {
var f_33213 = cljs.core.first.call(null,seq__33183_33207__$1);
cljs.core.println.call(null,"  ",f_33213);

var G__33214 = cljs.core.next.call(null,seq__33183_33207__$1);
var G__33215 = null;
var G__33216 = (0);
var G__33217 = (0);
seq__33183_33197 = G__33214;
chunk__33184_33198 = G__33215;
count__33185_33199 = G__33216;
i__33186_33200 = G__33217;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33218 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16375__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33218);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33218)))?cljs.core.second.call(null,arglists_33218):arglists_33218));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33188 = null;
var count__33189 = (0);
var i__33190 = (0);
while(true){
if((i__33190 < count__33189)){
var vec__33191 = cljs.core._nth.call(null,chunk__33188,i__33190);
var name = cljs.core.nth.call(null,vec__33191,(0),null);
var map__33192 = cljs.core.nth.call(null,vec__33191,(1),null);
var map__33192__$1 = ((((!((map__33192 == null)))?((((map__33192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33192):map__33192);
var doc = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33219 = seq__33187;
var G__33220 = chunk__33188;
var G__33221 = count__33189;
var G__33222 = (i__33190 + (1));
seq__33187 = G__33219;
chunk__33188 = G__33220;
count__33189 = G__33221;
i__33190 = G__33222;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33187);
if(temp__4425__auto__){
var seq__33187__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33187__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__33187__$1);
var G__33223 = cljs.core.chunk_rest.call(null,seq__33187__$1);
var G__33224 = c__17178__auto__;
var G__33225 = cljs.core.count.call(null,c__17178__auto__);
var G__33226 = (0);
seq__33187 = G__33223;
chunk__33188 = G__33224;
count__33189 = G__33225;
i__33190 = G__33226;
continue;
} else {
var vec__33194 = cljs.core.first.call(null,seq__33187__$1);
var name = cljs.core.nth.call(null,vec__33194,(0),null);
var map__33195 = cljs.core.nth.call(null,vec__33194,(1),null);
var map__33195__$1 = ((((!((map__33195 == null)))?((((map__33195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33195):map__33195);
var doc = cljs.core.get.call(null,map__33195__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33195__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33227 = cljs.core.next.call(null,seq__33187__$1);
var G__33228 = null;
var G__33229 = (0);
var G__33230 = (0);
seq__33187 = G__33227;
chunk__33188 = G__33228;
count__33189 = G__33229;
i__33190 = G__33230;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map