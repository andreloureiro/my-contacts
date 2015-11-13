// Compiled by ClojureScript 1.7.166 {}
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
var seq__23145_23159 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23146_23160 = null;
var count__23147_23161 = (0);
var i__23148_23162 = (0);
while(true){
if((i__23148_23162 < count__23147_23161)){
var f_23163 = cljs.core._nth.call(null,chunk__23146_23160,i__23148_23162);
cljs.core.println.call(null,"  ",f_23163);

var G__23164 = seq__23145_23159;
var G__23165 = chunk__23146_23160;
var G__23166 = count__23147_23161;
var G__23167 = (i__23148_23162 + (1));
seq__23145_23159 = G__23164;
chunk__23146_23160 = G__23165;
count__23147_23161 = G__23166;
i__23148_23162 = G__23167;
continue;
} else {
var temp__4425__auto___23168 = cljs.core.seq.call(null,seq__23145_23159);
if(temp__4425__auto___23168){
var seq__23145_23169__$1 = temp__4425__auto___23168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23145_23169__$1)){
var c__17565__auto___23170 = cljs.core.chunk_first.call(null,seq__23145_23169__$1);
var G__23171 = cljs.core.chunk_rest.call(null,seq__23145_23169__$1);
var G__23172 = c__17565__auto___23170;
var G__23173 = cljs.core.count.call(null,c__17565__auto___23170);
var G__23174 = (0);
seq__23145_23159 = G__23171;
chunk__23146_23160 = G__23172;
count__23147_23161 = G__23173;
i__23148_23162 = G__23174;
continue;
} else {
var f_23175 = cljs.core.first.call(null,seq__23145_23169__$1);
cljs.core.println.call(null,"  ",f_23175);

var G__23176 = cljs.core.next.call(null,seq__23145_23169__$1);
var G__23177 = null;
var G__23178 = (0);
var G__23179 = (0);
seq__23145_23159 = G__23176;
chunk__23146_23160 = G__23177;
count__23147_23161 = G__23178;
i__23148_23162 = G__23179;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23180 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16762__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23180);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23180)))?cljs.core.second.call(null,arglists_23180):arglists_23180));
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
var seq__23149 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23150 = null;
var count__23151 = (0);
var i__23152 = (0);
while(true){
if((i__23152 < count__23151)){
var vec__23153 = cljs.core._nth.call(null,chunk__23150,i__23152);
var name = cljs.core.nth.call(null,vec__23153,(0),null);
var map__23154 = cljs.core.nth.call(null,vec__23153,(1),null);
var map__23154__$1 = ((((!((map__23154 == null)))?((((map__23154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23154):map__23154);
var doc = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23181 = seq__23149;
var G__23182 = chunk__23150;
var G__23183 = count__23151;
var G__23184 = (i__23152 + (1));
seq__23149 = G__23181;
chunk__23150 = G__23182;
count__23151 = G__23183;
i__23152 = G__23184;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23149);
if(temp__4425__auto__){
var seq__23149__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23149__$1)){
var c__17565__auto__ = cljs.core.chunk_first.call(null,seq__23149__$1);
var G__23185 = cljs.core.chunk_rest.call(null,seq__23149__$1);
var G__23186 = c__17565__auto__;
var G__23187 = cljs.core.count.call(null,c__17565__auto__);
var G__23188 = (0);
seq__23149 = G__23185;
chunk__23150 = G__23186;
count__23151 = G__23187;
i__23152 = G__23188;
continue;
} else {
var vec__23156 = cljs.core.first.call(null,seq__23149__$1);
var name = cljs.core.nth.call(null,vec__23156,(0),null);
var map__23157 = cljs.core.nth.call(null,vec__23156,(1),null);
var map__23157__$1 = ((((!((map__23157 == null)))?((((map__23157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23157):map__23157);
var doc = cljs.core.get.call(null,map__23157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23189 = cljs.core.next.call(null,seq__23149__$1);
var G__23190 = null;
var G__23191 = (0);
var G__23192 = (0);
seq__23149 = G__23189;
chunk__23150 = G__23190;
count__23151 = G__23191;
i__23152 = G__23192;
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