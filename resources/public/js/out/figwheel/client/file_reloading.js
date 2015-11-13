// Compiled by ClojureScript 1.7.166 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16762__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16762__auto__){
return or__16762__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16762__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22121_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22121_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22126 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22127 = null;
var count__22128 = (0);
var i__22129 = (0);
while(true){
if((i__22129 < count__22128)){
var n = cljs.core._nth.call(null,chunk__22127,i__22129);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22130 = seq__22126;
var G__22131 = chunk__22127;
var G__22132 = count__22128;
var G__22133 = (i__22129 + (1));
seq__22126 = G__22130;
chunk__22127 = G__22131;
count__22128 = G__22132;
i__22129 = G__22133;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22126);
if(temp__4425__auto__){
var seq__22126__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22126__$1)){
var c__17565__auto__ = cljs.core.chunk_first.call(null,seq__22126__$1);
var G__22134 = cljs.core.chunk_rest.call(null,seq__22126__$1);
var G__22135 = c__17565__auto__;
var G__22136 = cljs.core.count.call(null,c__17565__auto__);
var G__22137 = (0);
seq__22126 = G__22134;
chunk__22127 = G__22135;
count__22128 = G__22136;
i__22129 = G__22137;
continue;
} else {
var n = cljs.core.first.call(null,seq__22126__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22138 = cljs.core.next.call(null,seq__22126__$1);
var G__22139 = null;
var G__22140 = (0);
var G__22141 = (0);
seq__22126 = G__22138;
chunk__22127 = G__22139;
count__22128 = G__22140;
i__22129 = G__22141;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22180_22187 = cljs.core.seq.call(null,deps);
var chunk__22181_22188 = null;
var count__22182_22189 = (0);
var i__22183_22190 = (0);
while(true){
if((i__22183_22190 < count__22182_22189)){
var dep_22191 = cljs.core._nth.call(null,chunk__22181_22188,i__22183_22190);
topo_sort_helper_STAR_.call(null,dep_22191,(depth + (1)),state);

var G__22192 = seq__22180_22187;
var G__22193 = chunk__22181_22188;
var G__22194 = count__22182_22189;
var G__22195 = (i__22183_22190 + (1));
seq__22180_22187 = G__22192;
chunk__22181_22188 = G__22193;
count__22182_22189 = G__22194;
i__22183_22190 = G__22195;
continue;
} else {
var temp__4425__auto___22196 = cljs.core.seq.call(null,seq__22180_22187);
if(temp__4425__auto___22196){
var seq__22180_22197__$1 = temp__4425__auto___22196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22180_22197__$1)){
var c__17565__auto___22198 = cljs.core.chunk_first.call(null,seq__22180_22197__$1);
var G__22199 = cljs.core.chunk_rest.call(null,seq__22180_22197__$1);
var G__22200 = c__17565__auto___22198;
var G__22201 = cljs.core.count.call(null,c__17565__auto___22198);
var G__22202 = (0);
seq__22180_22187 = G__22199;
chunk__22181_22188 = G__22200;
count__22182_22189 = G__22201;
i__22183_22190 = G__22202;
continue;
} else {
var dep_22203 = cljs.core.first.call(null,seq__22180_22197__$1);
topo_sort_helper_STAR_.call(null,dep_22203,(depth + (1)),state);

var G__22204 = cljs.core.next.call(null,seq__22180_22197__$1);
var G__22205 = null;
var G__22206 = (0);
var G__22207 = (0);
seq__22180_22187 = G__22204;
chunk__22181_22188 = G__22205;
count__22182_22189 = G__22206;
i__22183_22190 = G__22207;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22184){
var vec__22186 = p__22184;
var x = cljs.core.nth.call(null,vec__22186,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22186,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22186,x,xs,get_deps__$1){
return (function (p1__22142_SHARP_){
return clojure.set.difference.call(null,p1__22142_SHARP_,x);
});})(vec__22186,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22220 = cljs.core.seq.call(null,provides);
var chunk__22221 = null;
var count__22222 = (0);
var i__22223 = (0);
while(true){
if((i__22223 < count__22222)){
var prov = cljs.core._nth.call(null,chunk__22221,i__22223);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22224_22232 = cljs.core.seq.call(null,requires);
var chunk__22225_22233 = null;
var count__22226_22234 = (0);
var i__22227_22235 = (0);
while(true){
if((i__22227_22235 < count__22226_22234)){
var req_22236 = cljs.core._nth.call(null,chunk__22225_22233,i__22227_22235);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22236,prov);

var G__22237 = seq__22224_22232;
var G__22238 = chunk__22225_22233;
var G__22239 = count__22226_22234;
var G__22240 = (i__22227_22235 + (1));
seq__22224_22232 = G__22237;
chunk__22225_22233 = G__22238;
count__22226_22234 = G__22239;
i__22227_22235 = G__22240;
continue;
} else {
var temp__4425__auto___22241 = cljs.core.seq.call(null,seq__22224_22232);
if(temp__4425__auto___22241){
var seq__22224_22242__$1 = temp__4425__auto___22241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22224_22242__$1)){
var c__17565__auto___22243 = cljs.core.chunk_first.call(null,seq__22224_22242__$1);
var G__22244 = cljs.core.chunk_rest.call(null,seq__22224_22242__$1);
var G__22245 = c__17565__auto___22243;
var G__22246 = cljs.core.count.call(null,c__17565__auto___22243);
var G__22247 = (0);
seq__22224_22232 = G__22244;
chunk__22225_22233 = G__22245;
count__22226_22234 = G__22246;
i__22227_22235 = G__22247;
continue;
} else {
var req_22248 = cljs.core.first.call(null,seq__22224_22242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22248,prov);

var G__22249 = cljs.core.next.call(null,seq__22224_22242__$1);
var G__22250 = null;
var G__22251 = (0);
var G__22252 = (0);
seq__22224_22232 = G__22249;
chunk__22225_22233 = G__22250;
count__22226_22234 = G__22251;
i__22227_22235 = G__22252;
continue;
}
} else {
}
}
break;
}

var G__22253 = seq__22220;
var G__22254 = chunk__22221;
var G__22255 = count__22222;
var G__22256 = (i__22223 + (1));
seq__22220 = G__22253;
chunk__22221 = G__22254;
count__22222 = G__22255;
i__22223 = G__22256;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22220);
if(temp__4425__auto__){
var seq__22220__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22220__$1)){
var c__17565__auto__ = cljs.core.chunk_first.call(null,seq__22220__$1);
var G__22257 = cljs.core.chunk_rest.call(null,seq__22220__$1);
var G__22258 = c__17565__auto__;
var G__22259 = cljs.core.count.call(null,c__17565__auto__);
var G__22260 = (0);
seq__22220 = G__22257;
chunk__22221 = G__22258;
count__22222 = G__22259;
i__22223 = G__22260;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22220__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22228_22261 = cljs.core.seq.call(null,requires);
var chunk__22229_22262 = null;
var count__22230_22263 = (0);
var i__22231_22264 = (0);
while(true){
if((i__22231_22264 < count__22230_22263)){
var req_22265 = cljs.core._nth.call(null,chunk__22229_22262,i__22231_22264);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22265,prov);

var G__22266 = seq__22228_22261;
var G__22267 = chunk__22229_22262;
var G__22268 = count__22230_22263;
var G__22269 = (i__22231_22264 + (1));
seq__22228_22261 = G__22266;
chunk__22229_22262 = G__22267;
count__22230_22263 = G__22268;
i__22231_22264 = G__22269;
continue;
} else {
var temp__4425__auto___22270__$1 = cljs.core.seq.call(null,seq__22228_22261);
if(temp__4425__auto___22270__$1){
var seq__22228_22271__$1 = temp__4425__auto___22270__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22228_22271__$1)){
var c__17565__auto___22272 = cljs.core.chunk_first.call(null,seq__22228_22271__$1);
var G__22273 = cljs.core.chunk_rest.call(null,seq__22228_22271__$1);
var G__22274 = c__17565__auto___22272;
var G__22275 = cljs.core.count.call(null,c__17565__auto___22272);
var G__22276 = (0);
seq__22228_22261 = G__22273;
chunk__22229_22262 = G__22274;
count__22230_22263 = G__22275;
i__22231_22264 = G__22276;
continue;
} else {
var req_22277 = cljs.core.first.call(null,seq__22228_22271__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22277,prov);

var G__22278 = cljs.core.next.call(null,seq__22228_22271__$1);
var G__22279 = null;
var G__22280 = (0);
var G__22281 = (0);
seq__22228_22261 = G__22278;
chunk__22229_22262 = G__22279;
count__22230_22263 = G__22280;
i__22231_22264 = G__22281;
continue;
}
} else {
}
}
break;
}

var G__22282 = cljs.core.next.call(null,seq__22220__$1);
var G__22283 = null;
var G__22284 = (0);
var G__22285 = (0);
seq__22220 = G__22282;
chunk__22221 = G__22283;
count__22222 = G__22284;
i__22223 = G__22285;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22290_22294 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22291_22295 = null;
var count__22292_22296 = (0);
var i__22293_22297 = (0);
while(true){
if((i__22293_22297 < count__22292_22296)){
var ns_22298 = cljs.core._nth.call(null,chunk__22291_22295,i__22293_22297);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22298);

var G__22299 = seq__22290_22294;
var G__22300 = chunk__22291_22295;
var G__22301 = count__22292_22296;
var G__22302 = (i__22293_22297 + (1));
seq__22290_22294 = G__22299;
chunk__22291_22295 = G__22300;
count__22292_22296 = G__22301;
i__22293_22297 = G__22302;
continue;
} else {
var temp__4425__auto___22303 = cljs.core.seq.call(null,seq__22290_22294);
if(temp__4425__auto___22303){
var seq__22290_22304__$1 = temp__4425__auto___22303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22290_22304__$1)){
var c__17565__auto___22305 = cljs.core.chunk_first.call(null,seq__22290_22304__$1);
var G__22306 = cljs.core.chunk_rest.call(null,seq__22290_22304__$1);
var G__22307 = c__17565__auto___22305;
var G__22308 = cljs.core.count.call(null,c__17565__auto___22305);
var G__22309 = (0);
seq__22290_22294 = G__22306;
chunk__22291_22295 = G__22307;
count__22292_22296 = G__22308;
i__22293_22297 = G__22309;
continue;
} else {
var ns_22310 = cljs.core.first.call(null,seq__22290_22304__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22310);

var G__22311 = cljs.core.next.call(null,seq__22290_22304__$1);
var G__22312 = null;
var G__22313 = (0);
var G__22314 = (0);
seq__22290_22294 = G__22311;
chunk__22291_22295 = G__22312;
count__22292_22296 = G__22313;
i__22293_22297 = G__22314;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16762__auto__ = goog.require__;
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22315__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22316__i = 0, G__22316__a = new Array(arguments.length -  0);
while (G__22316__i < G__22316__a.length) {G__22316__a[G__22316__i] = arguments[G__22316__i + 0]; ++G__22316__i;}
  args = new cljs.core.IndexedSeq(G__22316__a,0);
} 
return G__22315__delegate.call(this,args);};
G__22315.cljs$lang$maxFixedArity = 0;
G__22315.cljs$lang$applyTo = (function (arglist__22317){
var args = cljs.core.seq(arglist__22317);
return G__22315__delegate(args);
});
G__22315.cljs$core$IFn$_invoke$arity$variadic = G__22315__delegate;
return G__22315;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22319 = cljs.core._EQ_;
var expr__22320 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22319.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22320))){
var path_parts = ((function (pred__22319,expr__22320){
return (function (p1__22318_SHARP_){
return clojure.string.split.call(null,p1__22318_SHARP_,/[\/\\]/);
});})(pred__22319,expr__22320))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22319,expr__22320){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22322){if((e22322 instanceof Error)){
var e = e22322;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22322;

}
}})());
});
;})(path_parts,sep,root,pred__22319,expr__22320))
} else {
if(cljs.core.truth_(pred__22319.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22320))){
return ((function (pred__22319,expr__22320){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22319,expr__22320){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22319,expr__22320))
);

return deferred.addErrback(((function (deferred,pred__22319,expr__22320){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22319,expr__22320))
);
});
;})(pred__22319,expr__22320))
} else {
return ((function (pred__22319,expr__22320){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22319,expr__22320))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22323,callback){
var map__22326 = p__22323;
var map__22326__$1 = ((((!((map__22326 == null)))?((((map__22326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22326):map__22326);
var file_msg = map__22326__$1;
var request_url = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22326,map__22326__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22326,map__22326__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__){
return (function (state_22350){
var state_val_22351 = (state_22350[(1)]);
if((state_val_22351 === (7))){
var inst_22346 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
var statearr_22352_22372 = state_22350__$1;
(statearr_22352_22372[(2)] = inst_22346);

(statearr_22352_22372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (1))){
var state_22350__$1 = state_22350;
var statearr_22353_22373 = state_22350__$1;
(statearr_22353_22373[(2)] = null);

(statearr_22353_22373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (4))){
var inst_22330 = (state_22350[(7)]);
var inst_22330__$1 = (state_22350[(2)]);
var state_22350__$1 = (function (){var statearr_22354 = state_22350;
(statearr_22354[(7)] = inst_22330__$1);

return statearr_22354;
})();
if(cljs.core.truth_(inst_22330__$1)){
var statearr_22355_22374 = state_22350__$1;
(statearr_22355_22374[(1)] = (5));

} else {
var statearr_22356_22375 = state_22350__$1;
(statearr_22356_22375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (6))){
var state_22350__$1 = state_22350;
var statearr_22357_22376 = state_22350__$1;
(statearr_22357_22376[(2)] = null);

(statearr_22357_22376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (3))){
var inst_22348 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22350__$1,inst_22348);
} else {
if((state_val_22351 === (2))){
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22350__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22351 === (11))){
var inst_22342 = (state_22350[(2)]);
var state_22350__$1 = (function (){var statearr_22358 = state_22350;
(statearr_22358[(8)] = inst_22342);

return statearr_22358;
})();
var statearr_22359_22377 = state_22350__$1;
(statearr_22359_22377[(2)] = null);

(statearr_22359_22377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (9))){
var inst_22334 = (state_22350[(9)]);
var inst_22336 = (state_22350[(10)]);
var inst_22338 = inst_22336.call(null,inst_22334);
var state_22350__$1 = state_22350;
var statearr_22360_22378 = state_22350__$1;
(statearr_22360_22378[(2)] = inst_22338);

(statearr_22360_22378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (5))){
var inst_22330 = (state_22350[(7)]);
var inst_22332 = figwheel.client.file_reloading.blocking_load.call(null,inst_22330);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22350__$1,(8),inst_22332);
} else {
if((state_val_22351 === (10))){
var inst_22334 = (state_22350[(9)]);
var inst_22340 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22334);
var state_22350__$1 = state_22350;
var statearr_22361_22379 = state_22350__$1;
(statearr_22361_22379[(2)] = inst_22340);

(statearr_22361_22379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (8))){
var inst_22330 = (state_22350[(7)]);
var inst_22336 = (state_22350[(10)]);
var inst_22334 = (state_22350[(2)]);
var inst_22335 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22336__$1 = cljs.core.get.call(null,inst_22335,inst_22330);
var state_22350__$1 = (function (){var statearr_22362 = state_22350;
(statearr_22362[(9)] = inst_22334);

(statearr_22362[(10)] = inst_22336__$1);

return statearr_22362;
})();
if(cljs.core.truth_(inst_22336__$1)){
var statearr_22363_22380 = state_22350__$1;
(statearr_22363_22380[(1)] = (9));

} else {
var statearr_22364_22381 = state_22350__$1;
(statearr_22364_22381[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19227__auto__))
;
return ((function (switch__19115__auto__,c__19227__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19116__auto__ = null;
var figwheel$client$file_reloading$state_machine__19116__auto____0 = (function (){
var statearr_22368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22368[(0)] = figwheel$client$file_reloading$state_machine__19116__auto__);

(statearr_22368[(1)] = (1));

return statearr_22368;
});
var figwheel$client$file_reloading$state_machine__19116__auto____1 = (function (state_22350){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_22350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e22369){if((e22369 instanceof Object)){
var ex__19119__auto__ = e22369;
var statearr_22370_22382 = state_22350;
(statearr_22370_22382[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22383 = state_22350;
state_22350 = G__22383;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19116__auto__ = function(state_22350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19116__auto____1.call(this,state_22350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19116__auto____0;
figwheel$client$file_reloading$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19116__auto____1;
return figwheel$client$file_reloading$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__))
})();
var state__19229__auto__ = (function (){var statearr_22371 = f__19228__auto__.call(null);
(statearr_22371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_22371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__))
);

return c__19227__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22384,callback){
var map__22387 = p__22384;
var map__22387__$1 = ((((!((map__22387 == null)))?((((map__22387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22387):map__22387);
var file_msg = map__22387__$1;
var namespace = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22387,map__22387__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22387,map__22387__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22389){
var map__22392 = p__22389;
var map__22392__$1 = ((((!((map__22392 == null)))?((((map__22392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22392):map__22392);
var file_msg = map__22392__$1;
var namespace = cljs.core.get.call(null,map__22392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16750__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16750__auto__){
var or__16762__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
var or__16762__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16762__auto____$1)){
return or__16762__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16750__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22394,callback){
var map__22397 = p__22394;
var map__22397__$1 = ((((!((map__22397 == null)))?((((map__22397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22397):map__22397);
var file_msg = map__22397__$1;
var request_url = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19227__auto___22485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___22485,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___22485,out){
return (function (state_22467){
var state_val_22468 = (state_22467[(1)]);
if((state_val_22468 === (1))){
var inst_22445 = cljs.core.nth.call(null,files,(0),null);
var inst_22446 = cljs.core.nthnext.call(null,files,(1));
var inst_22447 = files;
var state_22467__$1 = (function (){var statearr_22469 = state_22467;
(statearr_22469[(7)] = inst_22445);

(statearr_22469[(8)] = inst_22447);

(statearr_22469[(9)] = inst_22446);

return statearr_22469;
})();
var statearr_22470_22486 = state_22467__$1;
(statearr_22470_22486[(2)] = null);

(statearr_22470_22486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (2))){
var inst_22450 = (state_22467[(10)]);
var inst_22447 = (state_22467[(8)]);
var inst_22450__$1 = cljs.core.nth.call(null,inst_22447,(0),null);
var inst_22451 = cljs.core.nthnext.call(null,inst_22447,(1));
var inst_22452 = (inst_22450__$1 == null);
var inst_22453 = cljs.core.not.call(null,inst_22452);
var state_22467__$1 = (function (){var statearr_22471 = state_22467;
(statearr_22471[(10)] = inst_22450__$1);

(statearr_22471[(11)] = inst_22451);

return statearr_22471;
})();
if(inst_22453){
var statearr_22472_22487 = state_22467__$1;
(statearr_22472_22487[(1)] = (4));

} else {
var statearr_22473_22488 = state_22467__$1;
(statearr_22473_22488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (3))){
var inst_22465 = (state_22467[(2)]);
var state_22467__$1 = state_22467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22467__$1,inst_22465);
} else {
if((state_val_22468 === (4))){
var inst_22450 = (state_22467[(10)]);
var inst_22455 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22450);
var state_22467__$1 = state_22467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22467__$1,(7),inst_22455);
} else {
if((state_val_22468 === (5))){
var inst_22461 = cljs.core.async.close_BANG_.call(null,out);
var state_22467__$1 = state_22467;
var statearr_22474_22489 = state_22467__$1;
(statearr_22474_22489[(2)] = inst_22461);

(statearr_22474_22489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (6))){
var inst_22463 = (state_22467[(2)]);
var state_22467__$1 = state_22467;
var statearr_22475_22490 = state_22467__$1;
(statearr_22475_22490[(2)] = inst_22463);

(statearr_22475_22490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (7))){
var inst_22451 = (state_22467[(11)]);
var inst_22457 = (state_22467[(2)]);
var inst_22458 = cljs.core.async.put_BANG_.call(null,out,inst_22457);
var inst_22447 = inst_22451;
var state_22467__$1 = (function (){var statearr_22476 = state_22467;
(statearr_22476[(8)] = inst_22447);

(statearr_22476[(12)] = inst_22458);

return statearr_22476;
})();
var statearr_22477_22491 = state_22467__$1;
(statearr_22477_22491[(2)] = null);

(statearr_22477_22491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19227__auto___22485,out))
;
return ((function (switch__19115__auto__,c__19227__auto___22485,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto____0 = (function (){
var statearr_22481 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22481[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto__);

(statearr_22481[(1)] = (1));

return statearr_22481;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto____1 = (function (state_22467){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_22467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e22482){if((e22482 instanceof Object)){
var ex__19119__auto__ = e22482;
var statearr_22483_22492 = state_22467;
(statearr_22483_22492[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22493 = state_22467;
state_22467 = G__22493;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto__ = function(state_22467){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto____1.call(this,state_22467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___22485,out))
})();
var state__19229__auto__ = (function (){var statearr_22484 = f__19228__auto__.call(null);
(statearr_22484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___22485);

return statearr_22484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___22485,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22494,opts){
var map__22498 = p__22494;
var map__22498__$1 = ((((!((map__22498 == null)))?((((map__22498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22498):map__22498);
var eval_body__$1 = cljs.core.get.call(null,map__22498__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16750__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16750__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16750__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22500){var e = e22500;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22501_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22506){
var vec__22507 = p__22506;
var k = cljs.core.nth.call(null,vec__22507,(0),null);
var v = cljs.core.nth.call(null,vec__22507,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22508){
var vec__22509 = p__22508;
var k = cljs.core.nth.call(null,vec__22509,(0),null);
var v = cljs.core.nth.call(null,vec__22509,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22513,p__22514){
var map__22761 = p__22513;
var map__22761__$1 = ((((!((map__22761 == null)))?((((map__22761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22761):map__22761);
var opts = map__22761__$1;
var before_jsload = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22762 = p__22514;
var map__22762__$1 = ((((!((map__22762 == null)))?((((map__22762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22762):map__22762);
var msg = map__22762__$1;
var files = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22915){
var state_val_22916 = (state_22915[(1)]);
if((state_val_22916 === (7))){
var inst_22779 = (state_22915[(7)]);
var inst_22777 = (state_22915[(8)]);
var inst_22778 = (state_22915[(9)]);
var inst_22776 = (state_22915[(10)]);
var inst_22784 = cljs.core._nth.call(null,inst_22777,inst_22779);
var inst_22785 = figwheel.client.file_reloading.eval_body.call(null,inst_22784,opts);
var inst_22786 = (inst_22779 + (1));
var tmp22917 = inst_22777;
var tmp22918 = inst_22778;
var tmp22919 = inst_22776;
var inst_22776__$1 = tmp22919;
var inst_22777__$1 = tmp22917;
var inst_22778__$1 = tmp22918;
var inst_22779__$1 = inst_22786;
var state_22915__$1 = (function (){var statearr_22920 = state_22915;
(statearr_22920[(7)] = inst_22779__$1);

(statearr_22920[(8)] = inst_22777__$1);

(statearr_22920[(9)] = inst_22778__$1);

(statearr_22920[(10)] = inst_22776__$1);

(statearr_22920[(11)] = inst_22785);

return statearr_22920;
})();
var statearr_22921_23007 = state_22915__$1;
(statearr_22921_23007[(2)] = null);

(statearr_22921_23007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (20))){
var inst_22819 = (state_22915[(12)]);
var inst_22827 = figwheel.client.file_reloading.sort_files.call(null,inst_22819);
var state_22915__$1 = state_22915;
var statearr_22922_23008 = state_22915__$1;
(statearr_22922_23008[(2)] = inst_22827);

(statearr_22922_23008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (27))){
var state_22915__$1 = state_22915;
var statearr_22923_23009 = state_22915__$1;
(statearr_22923_23009[(2)] = null);

(statearr_22923_23009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (1))){
var inst_22768 = (state_22915[(13)]);
var inst_22765 = before_jsload.call(null,files);
var inst_22766 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22767 = (function (){return ((function (inst_22768,inst_22765,inst_22766,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22510_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22510_SHARP_);
});
;})(inst_22768,inst_22765,inst_22766,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22768__$1 = cljs.core.filter.call(null,inst_22767,files);
var inst_22769 = cljs.core.not_empty.call(null,inst_22768__$1);
var state_22915__$1 = (function (){var statearr_22924 = state_22915;
(statearr_22924[(14)] = inst_22766);

(statearr_22924[(15)] = inst_22765);

(statearr_22924[(13)] = inst_22768__$1);

return statearr_22924;
})();
if(cljs.core.truth_(inst_22769)){
var statearr_22925_23010 = state_22915__$1;
(statearr_22925_23010[(1)] = (2));

} else {
var statearr_22926_23011 = state_22915__$1;
(statearr_22926_23011[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (24))){
var state_22915__$1 = state_22915;
var statearr_22927_23012 = state_22915__$1;
(statearr_22927_23012[(2)] = null);

(statearr_22927_23012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (39))){
var inst_22869 = (state_22915[(16)]);
var state_22915__$1 = state_22915;
var statearr_22928_23013 = state_22915__$1;
(statearr_22928_23013[(2)] = inst_22869);

(statearr_22928_23013[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (46))){
var inst_22910 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22929_23014 = state_22915__$1;
(statearr_22929_23014[(2)] = inst_22910);

(statearr_22929_23014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (4))){
var inst_22813 = (state_22915[(2)]);
var inst_22814 = cljs.core.List.EMPTY;
var inst_22815 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22814);
var inst_22816 = (function (){return ((function (inst_22813,inst_22814,inst_22815,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22511_SHARP_){
var and__16750__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22511_SHARP_);
if(cljs.core.truth_(and__16750__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22511_SHARP_));
} else {
return and__16750__auto__;
}
});
;})(inst_22813,inst_22814,inst_22815,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22817 = cljs.core.filter.call(null,inst_22816,files);
var inst_22818 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22819 = cljs.core.concat.call(null,inst_22817,inst_22818);
var state_22915__$1 = (function (){var statearr_22930 = state_22915;
(statearr_22930[(17)] = inst_22813);

(statearr_22930[(12)] = inst_22819);

(statearr_22930[(18)] = inst_22815);

return statearr_22930;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22931_23015 = state_22915__$1;
(statearr_22931_23015[(1)] = (16));

} else {
var statearr_22932_23016 = state_22915__$1;
(statearr_22932_23016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (15))){
var inst_22803 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22933_23017 = state_22915__$1;
(statearr_22933_23017[(2)] = inst_22803);

(statearr_22933_23017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (21))){
var inst_22829 = (state_22915[(19)]);
var inst_22829__$1 = (state_22915[(2)]);
var inst_22830 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22829__$1);
var state_22915__$1 = (function (){var statearr_22934 = state_22915;
(statearr_22934[(19)] = inst_22829__$1);

return statearr_22934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22915__$1,(22),inst_22830);
} else {
if((state_val_22916 === (31))){
var inst_22913 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22915__$1,inst_22913);
} else {
if((state_val_22916 === (32))){
var inst_22869 = (state_22915[(16)]);
var inst_22874 = inst_22869.cljs$lang$protocol_mask$partition0$;
var inst_22875 = (inst_22874 & (64));
var inst_22876 = inst_22869.cljs$core$ISeq$;
var inst_22877 = (inst_22875) || (inst_22876);
var state_22915__$1 = state_22915;
if(cljs.core.truth_(inst_22877)){
var statearr_22935_23018 = state_22915__$1;
(statearr_22935_23018[(1)] = (35));

} else {
var statearr_22936_23019 = state_22915__$1;
(statearr_22936_23019[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (40))){
var inst_22890 = (state_22915[(20)]);
var inst_22889 = (state_22915[(2)]);
var inst_22890__$1 = cljs.core.get.call(null,inst_22889,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22891 = cljs.core.get.call(null,inst_22889,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22892 = cljs.core.not_empty.call(null,inst_22890__$1);
var state_22915__$1 = (function (){var statearr_22937 = state_22915;
(statearr_22937[(21)] = inst_22891);

(statearr_22937[(20)] = inst_22890__$1);

return statearr_22937;
})();
if(cljs.core.truth_(inst_22892)){
var statearr_22938_23020 = state_22915__$1;
(statearr_22938_23020[(1)] = (41));

} else {
var statearr_22939_23021 = state_22915__$1;
(statearr_22939_23021[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (33))){
var state_22915__$1 = state_22915;
var statearr_22940_23022 = state_22915__$1;
(statearr_22940_23022[(2)] = false);

(statearr_22940_23022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (13))){
var inst_22789 = (state_22915[(22)]);
var inst_22793 = cljs.core.chunk_first.call(null,inst_22789);
var inst_22794 = cljs.core.chunk_rest.call(null,inst_22789);
var inst_22795 = cljs.core.count.call(null,inst_22793);
var inst_22776 = inst_22794;
var inst_22777 = inst_22793;
var inst_22778 = inst_22795;
var inst_22779 = (0);
var state_22915__$1 = (function (){var statearr_22941 = state_22915;
(statearr_22941[(7)] = inst_22779);

(statearr_22941[(8)] = inst_22777);

(statearr_22941[(9)] = inst_22778);

(statearr_22941[(10)] = inst_22776);

return statearr_22941;
})();
var statearr_22942_23023 = state_22915__$1;
(statearr_22942_23023[(2)] = null);

(statearr_22942_23023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (22))){
var inst_22832 = (state_22915[(23)]);
var inst_22837 = (state_22915[(24)]);
var inst_22833 = (state_22915[(25)]);
var inst_22829 = (state_22915[(19)]);
var inst_22832__$1 = (state_22915[(2)]);
var inst_22833__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22832__$1);
var inst_22834 = (function (){var all_files = inst_22829;
var res_SINGLEQUOTE_ = inst_22832__$1;
var res = inst_22833__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22832,inst_22837,inst_22833,inst_22829,inst_22832__$1,inst_22833__$1,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22512_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22512_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22832,inst_22837,inst_22833,inst_22829,inst_22832__$1,inst_22833__$1,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22835 = cljs.core.filter.call(null,inst_22834,inst_22832__$1);
var inst_22836 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22837__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22836);
var inst_22838 = cljs.core.not_empty.call(null,inst_22837__$1);
var state_22915__$1 = (function (){var statearr_22943 = state_22915;
(statearr_22943[(23)] = inst_22832__$1);

(statearr_22943[(24)] = inst_22837__$1);

(statearr_22943[(26)] = inst_22835);

(statearr_22943[(25)] = inst_22833__$1);

return statearr_22943;
})();
if(cljs.core.truth_(inst_22838)){
var statearr_22944_23024 = state_22915__$1;
(statearr_22944_23024[(1)] = (23));

} else {
var statearr_22945_23025 = state_22915__$1;
(statearr_22945_23025[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (36))){
var state_22915__$1 = state_22915;
var statearr_22946_23026 = state_22915__$1;
(statearr_22946_23026[(2)] = false);

(statearr_22946_23026[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (41))){
var inst_22890 = (state_22915[(20)]);
var inst_22894 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22895 = cljs.core.map.call(null,inst_22894,inst_22890);
var inst_22896 = cljs.core.pr_str.call(null,inst_22895);
var inst_22897 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22896)].join('');
var inst_22898 = figwheel.client.utils.log.call(null,inst_22897);
var state_22915__$1 = state_22915;
var statearr_22947_23027 = state_22915__$1;
(statearr_22947_23027[(2)] = inst_22898);

(statearr_22947_23027[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (43))){
var inst_22891 = (state_22915[(21)]);
var inst_22901 = (state_22915[(2)]);
var inst_22902 = cljs.core.not_empty.call(null,inst_22891);
var state_22915__$1 = (function (){var statearr_22948 = state_22915;
(statearr_22948[(27)] = inst_22901);

return statearr_22948;
})();
if(cljs.core.truth_(inst_22902)){
var statearr_22949_23028 = state_22915__$1;
(statearr_22949_23028[(1)] = (44));

} else {
var statearr_22950_23029 = state_22915__$1;
(statearr_22950_23029[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (29))){
var inst_22832 = (state_22915[(23)]);
var inst_22869 = (state_22915[(16)]);
var inst_22837 = (state_22915[(24)]);
var inst_22835 = (state_22915[(26)]);
var inst_22833 = (state_22915[(25)]);
var inst_22829 = (state_22915[(19)]);
var inst_22865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22868 = (function (){var all_files = inst_22829;
var res_SINGLEQUOTE_ = inst_22832;
var res = inst_22833;
var files_not_loaded = inst_22835;
var dependencies_that_loaded = inst_22837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22869,inst_22837,inst_22835,inst_22833,inst_22829,inst_22865,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22867){
var map__22951 = p__22867;
var map__22951__$1 = ((((!((map__22951 == null)))?((((map__22951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22951):map__22951);
var namespace = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22869,inst_22837,inst_22835,inst_22833,inst_22829,inst_22865,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22869__$1 = cljs.core.group_by.call(null,inst_22868,inst_22835);
var inst_22871 = (inst_22869__$1 == null);
var inst_22872 = cljs.core.not.call(null,inst_22871);
var state_22915__$1 = (function (){var statearr_22953 = state_22915;
(statearr_22953[(28)] = inst_22865);

(statearr_22953[(16)] = inst_22869__$1);

return statearr_22953;
})();
if(inst_22872){
var statearr_22954_23030 = state_22915__$1;
(statearr_22954_23030[(1)] = (32));

} else {
var statearr_22955_23031 = state_22915__$1;
(statearr_22955_23031[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (44))){
var inst_22891 = (state_22915[(21)]);
var inst_22904 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22891);
var inst_22905 = cljs.core.pr_str.call(null,inst_22904);
var inst_22906 = [cljs.core.str("not required: "),cljs.core.str(inst_22905)].join('');
var inst_22907 = figwheel.client.utils.log.call(null,inst_22906);
var state_22915__$1 = state_22915;
var statearr_22956_23032 = state_22915__$1;
(statearr_22956_23032[(2)] = inst_22907);

(statearr_22956_23032[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (6))){
var inst_22810 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22957_23033 = state_22915__$1;
(statearr_22957_23033[(2)] = inst_22810);

(statearr_22957_23033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (28))){
var inst_22835 = (state_22915[(26)]);
var inst_22862 = (state_22915[(2)]);
var inst_22863 = cljs.core.not_empty.call(null,inst_22835);
var state_22915__$1 = (function (){var statearr_22958 = state_22915;
(statearr_22958[(29)] = inst_22862);

return statearr_22958;
})();
if(cljs.core.truth_(inst_22863)){
var statearr_22959_23034 = state_22915__$1;
(statearr_22959_23034[(1)] = (29));

} else {
var statearr_22960_23035 = state_22915__$1;
(statearr_22960_23035[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (25))){
var inst_22833 = (state_22915[(25)]);
var inst_22849 = (state_22915[(2)]);
var inst_22850 = cljs.core.not_empty.call(null,inst_22833);
var state_22915__$1 = (function (){var statearr_22961 = state_22915;
(statearr_22961[(30)] = inst_22849);

return statearr_22961;
})();
if(cljs.core.truth_(inst_22850)){
var statearr_22962_23036 = state_22915__$1;
(statearr_22962_23036[(1)] = (26));

} else {
var statearr_22963_23037 = state_22915__$1;
(statearr_22963_23037[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (34))){
var inst_22884 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
if(cljs.core.truth_(inst_22884)){
var statearr_22964_23038 = state_22915__$1;
(statearr_22964_23038[(1)] = (38));

} else {
var statearr_22965_23039 = state_22915__$1;
(statearr_22965_23039[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (17))){
var state_22915__$1 = state_22915;
var statearr_22966_23040 = state_22915__$1;
(statearr_22966_23040[(2)] = recompile_dependents);

(statearr_22966_23040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (3))){
var state_22915__$1 = state_22915;
var statearr_22967_23041 = state_22915__$1;
(statearr_22967_23041[(2)] = null);

(statearr_22967_23041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (12))){
var inst_22806 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22968_23042 = state_22915__$1;
(statearr_22968_23042[(2)] = inst_22806);

(statearr_22968_23042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (2))){
var inst_22768 = (state_22915[(13)]);
var inst_22775 = cljs.core.seq.call(null,inst_22768);
var inst_22776 = inst_22775;
var inst_22777 = null;
var inst_22778 = (0);
var inst_22779 = (0);
var state_22915__$1 = (function (){var statearr_22969 = state_22915;
(statearr_22969[(7)] = inst_22779);

(statearr_22969[(8)] = inst_22777);

(statearr_22969[(9)] = inst_22778);

(statearr_22969[(10)] = inst_22776);

return statearr_22969;
})();
var statearr_22970_23043 = state_22915__$1;
(statearr_22970_23043[(2)] = null);

(statearr_22970_23043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (23))){
var inst_22832 = (state_22915[(23)]);
var inst_22837 = (state_22915[(24)]);
var inst_22835 = (state_22915[(26)]);
var inst_22833 = (state_22915[(25)]);
var inst_22829 = (state_22915[(19)]);
var inst_22840 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22842 = (function (){var all_files = inst_22829;
var res_SINGLEQUOTE_ = inst_22832;
var res = inst_22833;
var files_not_loaded = inst_22835;
var dependencies_that_loaded = inst_22837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22837,inst_22835,inst_22833,inst_22829,inst_22840,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22841){
var map__22971 = p__22841;
var map__22971__$1 = ((((!((map__22971 == null)))?((((map__22971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22971):map__22971);
var request_url = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22837,inst_22835,inst_22833,inst_22829,inst_22840,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22843 = cljs.core.reverse.call(null,inst_22837);
var inst_22844 = cljs.core.map.call(null,inst_22842,inst_22843);
var inst_22845 = cljs.core.pr_str.call(null,inst_22844);
var inst_22846 = figwheel.client.utils.log.call(null,inst_22845);
var state_22915__$1 = (function (){var statearr_22973 = state_22915;
(statearr_22973[(31)] = inst_22840);

return statearr_22973;
})();
var statearr_22974_23044 = state_22915__$1;
(statearr_22974_23044[(2)] = inst_22846);

(statearr_22974_23044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (35))){
var state_22915__$1 = state_22915;
var statearr_22975_23045 = state_22915__$1;
(statearr_22975_23045[(2)] = true);

(statearr_22975_23045[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (19))){
var inst_22819 = (state_22915[(12)]);
var inst_22825 = figwheel.client.file_reloading.expand_files.call(null,inst_22819);
var state_22915__$1 = state_22915;
var statearr_22976_23046 = state_22915__$1;
(statearr_22976_23046[(2)] = inst_22825);

(statearr_22976_23046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (11))){
var state_22915__$1 = state_22915;
var statearr_22977_23047 = state_22915__$1;
(statearr_22977_23047[(2)] = null);

(statearr_22977_23047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (9))){
var inst_22808 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22978_23048 = state_22915__$1;
(statearr_22978_23048[(2)] = inst_22808);

(statearr_22978_23048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (5))){
var inst_22779 = (state_22915[(7)]);
var inst_22778 = (state_22915[(9)]);
var inst_22781 = (inst_22779 < inst_22778);
var inst_22782 = inst_22781;
var state_22915__$1 = state_22915;
if(cljs.core.truth_(inst_22782)){
var statearr_22979_23049 = state_22915__$1;
(statearr_22979_23049[(1)] = (7));

} else {
var statearr_22980_23050 = state_22915__$1;
(statearr_22980_23050[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (14))){
var inst_22789 = (state_22915[(22)]);
var inst_22798 = cljs.core.first.call(null,inst_22789);
var inst_22799 = figwheel.client.file_reloading.eval_body.call(null,inst_22798,opts);
var inst_22800 = cljs.core.next.call(null,inst_22789);
var inst_22776 = inst_22800;
var inst_22777 = null;
var inst_22778 = (0);
var inst_22779 = (0);
var state_22915__$1 = (function (){var statearr_22981 = state_22915;
(statearr_22981[(32)] = inst_22799);

(statearr_22981[(7)] = inst_22779);

(statearr_22981[(8)] = inst_22777);

(statearr_22981[(9)] = inst_22778);

(statearr_22981[(10)] = inst_22776);

return statearr_22981;
})();
var statearr_22982_23051 = state_22915__$1;
(statearr_22982_23051[(2)] = null);

(statearr_22982_23051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (45))){
var state_22915__$1 = state_22915;
var statearr_22983_23052 = state_22915__$1;
(statearr_22983_23052[(2)] = null);

(statearr_22983_23052[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (26))){
var inst_22832 = (state_22915[(23)]);
var inst_22837 = (state_22915[(24)]);
var inst_22835 = (state_22915[(26)]);
var inst_22833 = (state_22915[(25)]);
var inst_22829 = (state_22915[(19)]);
var inst_22852 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22854 = (function (){var all_files = inst_22829;
var res_SINGLEQUOTE_ = inst_22832;
var res = inst_22833;
var files_not_loaded = inst_22835;
var dependencies_that_loaded = inst_22837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22837,inst_22835,inst_22833,inst_22829,inst_22852,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22853){
var map__22984 = p__22853;
var map__22984__$1 = ((((!((map__22984 == null)))?((((map__22984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22984):map__22984);
var namespace = cljs.core.get.call(null,map__22984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22837,inst_22835,inst_22833,inst_22829,inst_22852,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22855 = cljs.core.map.call(null,inst_22854,inst_22833);
var inst_22856 = cljs.core.pr_str.call(null,inst_22855);
var inst_22857 = figwheel.client.utils.log.call(null,inst_22856);
var inst_22858 = (function (){var all_files = inst_22829;
var res_SINGLEQUOTE_ = inst_22832;
var res = inst_22833;
var files_not_loaded = inst_22835;
var dependencies_that_loaded = inst_22837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22837,inst_22835,inst_22833,inst_22829,inst_22852,inst_22854,inst_22855,inst_22856,inst_22857,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22832,inst_22837,inst_22835,inst_22833,inst_22829,inst_22852,inst_22854,inst_22855,inst_22856,inst_22857,state_val_22916,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22859 = setTimeout(inst_22858,(10));
var state_22915__$1 = (function (){var statearr_22986 = state_22915;
(statearr_22986[(33)] = inst_22857);

(statearr_22986[(34)] = inst_22852);

return statearr_22986;
})();
var statearr_22987_23053 = state_22915__$1;
(statearr_22987_23053[(2)] = inst_22859);

(statearr_22987_23053[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (16))){
var state_22915__$1 = state_22915;
var statearr_22988_23054 = state_22915__$1;
(statearr_22988_23054[(2)] = reload_dependents);

(statearr_22988_23054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (38))){
var inst_22869 = (state_22915[(16)]);
var inst_22886 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22869);
var state_22915__$1 = state_22915;
var statearr_22989_23055 = state_22915__$1;
(statearr_22989_23055[(2)] = inst_22886);

(statearr_22989_23055[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (30))){
var state_22915__$1 = state_22915;
var statearr_22990_23056 = state_22915__$1;
(statearr_22990_23056[(2)] = null);

(statearr_22990_23056[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (10))){
var inst_22789 = (state_22915[(22)]);
var inst_22791 = cljs.core.chunked_seq_QMARK_.call(null,inst_22789);
var state_22915__$1 = state_22915;
if(inst_22791){
var statearr_22991_23057 = state_22915__$1;
(statearr_22991_23057[(1)] = (13));

} else {
var statearr_22992_23058 = state_22915__$1;
(statearr_22992_23058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (18))){
var inst_22823 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
if(cljs.core.truth_(inst_22823)){
var statearr_22993_23059 = state_22915__$1;
(statearr_22993_23059[(1)] = (19));

} else {
var statearr_22994_23060 = state_22915__$1;
(statearr_22994_23060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (42))){
var state_22915__$1 = state_22915;
var statearr_22995_23061 = state_22915__$1;
(statearr_22995_23061[(2)] = null);

(statearr_22995_23061[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (37))){
var inst_22881 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22996_23062 = state_22915__$1;
(statearr_22996_23062[(2)] = inst_22881);

(statearr_22996_23062[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (8))){
var inst_22776 = (state_22915[(10)]);
var inst_22789 = (state_22915[(22)]);
var inst_22789__$1 = cljs.core.seq.call(null,inst_22776);
var state_22915__$1 = (function (){var statearr_22997 = state_22915;
(statearr_22997[(22)] = inst_22789__$1);

return statearr_22997;
})();
if(inst_22789__$1){
var statearr_22998_23063 = state_22915__$1;
(statearr_22998_23063[(1)] = (10));

} else {
var statearr_22999_23064 = state_22915__$1;
(statearr_22999_23064[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19115__auto__,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto____0 = (function (){
var statearr_23003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23003[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto__);

(statearr_23003[(1)] = (1));

return statearr_23003;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto____1 = (function (state_22915){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_22915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e23004){if((e23004 instanceof Object)){
var ex__19119__auto__ = e23004;
var statearr_23005_23065 = state_22915;
(statearr_23005_23065[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23066 = state_22915;
state_22915 = G__23066;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto__ = function(state_22915){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto____1.call(this,state_22915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19229__auto__ = (function (){var statearr_23006 = f__19228__auto__.call(null);
(statearr_23006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_23006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__,map__22761,map__22761__$1,opts,before_jsload,on_jsload,reload_dependents,map__22762,map__22762__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19227__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23069,link){
var map__23072 = p__23069;
var map__23072__$1 = ((((!((map__23072 == null)))?((((map__23072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23072):map__23072);
var file = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23072,map__23072__$1,file){
return (function (p1__23067_SHARP_,p2__23068_SHARP_){
if(cljs.core._EQ_.call(null,p1__23067_SHARP_,p2__23068_SHARP_)){
return p1__23067_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23072,map__23072__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23078){
var map__23079 = p__23078;
var map__23079__$1 = ((((!((map__23079 == null)))?((((map__23079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var match_length = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23074_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23074_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23081 = [];
var len__17820__auto___23084 = arguments.length;
var i__17821__auto___23085 = (0);
while(true){
if((i__17821__auto___23085 < len__17820__auto___23084)){
args23081.push((arguments[i__17821__auto___23085]));

var G__23086 = (i__17821__auto___23085 + (1));
i__17821__auto___23085 = G__23086;
continue;
} else {
}
break;
}

var G__23083 = args23081.length;
switch (G__23083) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23081.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23088_SHARP_,p2__23089_SHARP_){
return cljs.core.assoc.call(null,p1__23088_SHARP_,cljs.core.get.call(null,p2__23089_SHARP_,key),p2__23089_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23090){
var map__23093 = p__23090;
var map__23093__$1 = ((((!((map__23093 == null)))?((((map__23093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23093):map__23093);
var f_data = map__23093__$1;
var file = cljs.core.get.call(null,map__23093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23095,files_msg){
var map__23102 = p__23095;
var map__23102__$1 = ((((!((map__23102 == null)))?((((map__23102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23102):map__23102);
var opts = map__23102__$1;
var on_cssload = cljs.core.get.call(null,map__23102__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23104_23108 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23105_23109 = null;
var count__23106_23110 = (0);
var i__23107_23111 = (0);
while(true){
if((i__23107_23111 < count__23106_23110)){
var f_23112 = cljs.core._nth.call(null,chunk__23105_23109,i__23107_23111);
figwheel.client.file_reloading.reload_css_file.call(null,f_23112);

var G__23113 = seq__23104_23108;
var G__23114 = chunk__23105_23109;
var G__23115 = count__23106_23110;
var G__23116 = (i__23107_23111 + (1));
seq__23104_23108 = G__23113;
chunk__23105_23109 = G__23114;
count__23106_23110 = G__23115;
i__23107_23111 = G__23116;
continue;
} else {
var temp__4425__auto___23117 = cljs.core.seq.call(null,seq__23104_23108);
if(temp__4425__auto___23117){
var seq__23104_23118__$1 = temp__4425__auto___23117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23104_23118__$1)){
var c__17565__auto___23119 = cljs.core.chunk_first.call(null,seq__23104_23118__$1);
var G__23120 = cljs.core.chunk_rest.call(null,seq__23104_23118__$1);
var G__23121 = c__17565__auto___23119;
var G__23122 = cljs.core.count.call(null,c__17565__auto___23119);
var G__23123 = (0);
seq__23104_23108 = G__23120;
chunk__23105_23109 = G__23121;
count__23106_23110 = G__23122;
i__23107_23111 = G__23123;
continue;
} else {
var f_23124 = cljs.core.first.call(null,seq__23104_23118__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23124);

var G__23125 = cljs.core.next.call(null,seq__23104_23118__$1);
var G__23126 = null;
var G__23127 = (0);
var G__23128 = (0);
seq__23104_23108 = G__23125;
chunk__23105_23109 = G__23126;
count__23106_23110 = G__23127;
i__23107_23111 = G__23128;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23102,map__23102__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23102,map__23102__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map