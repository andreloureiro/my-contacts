// Compiled by ClojureScript 1.7.166 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__17675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17679__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__17675__auto__,prefer_table__17676__auto__,method_cache__17677__auto__,cached_hierarchy__17678__auto__,hierarchy__17679__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__17675__auto__,prefer_table__17676__auto__,method_cache__17677__auto__,cached_hierarchy__17678__auto__,hierarchy__17679__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17679__auto__,method_table__17675__auto__,prefer_table__17676__auto__,method_cache__17677__auto__,cached_hierarchy__17678__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__16762__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__17981 = cljs.core.reduce.call(null,((function (xs){
return (function (p__17983,p__17984){
var vec__17985 = p__17983;
var pre = cljs.core.nth.call(null,vec__17985,(0),null);
var post = cljs.core.nth.call(null,vec__17985,(1),null);
var vec__17986 = p__17984;
var x = cljs.core.nth.call(null,vec__17986,(0),null);
var i = cljs.core.nth.call(null,vec__17986,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__17981,(0),null);
var vec__17982 = cljs.core.nth.call(null,vec__17981,(1),null);
var line = cljs.core.nth.call(null,vec__17982,(0),null);
var column = cljs.core.nth.call(null,vec__17982,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17987 = file;
var G__17987__$1 = ((cljs.stacktrace.starts_with_QMARK_.call(null,file,"("))?clojure.string.replace.call(null,G__17987,"(",""):G__17987);
return G__17987__$1;
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__17988 = line;
var G__17988__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,line,")"))?clojure.string.replace.call(null,G__17988,")",""):G__17988);
return G__17988__$1;
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__17989 = column;
var G__17989__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,column,")"))?clojure.string.replace.call(null,G__17989,")",""):G__17989);
return G__17989__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__17990,file,p__17991){
var map__17996 = p__17990;
var map__17996__$1 = ((((!((map__17996 == null)))?((((map__17996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17996):map__17996);
var repl_env = map__17996__$1;
var host = cljs.core.get.call(null,map__17996__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__17996__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__17996__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__17997 = p__17991;
var map__17997__$1 = ((((!((map__17997 == null)))?((((map__17997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17997):map__17997);
var opts = map__17997__$1;
var asset_path = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__16762__auto__ = host_port;
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__16762__auto__ = (function (){var and__16750__auto__ = asset_path;
if(cljs.core.truth_(and__16750__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__16750__auto__;
}
})();
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4423__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var asset_root = temp__4423__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__18002 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__18002,(0),null);
var flc = cljs.core.nth.call(null,vec__18002,(1),null);
var vec__18003 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__18003,(0),null);
var line = cljs.core.nth.call(null,vec__18003,(1),null);
var column = cljs.core.nth.call(null,vec__18003,(2),null);
if(cljs.core.truth_((function (){var and__16750__auto__ = file;
if(cljs.core.truth_(and__16750__auto__)){
var and__16750__auto____$1 = function$;
if(cljs.core.truth_(and__16750__auto____$1)){
var and__16750__auto____$2 = line;
if(cljs.core.truth_(and__16750__auto____$2)){
return column;
} else {
return and__16750__auto____$2;
}
} else {
return and__16750__auto____$1;
}
} else {
return and__16750__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__18006_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__18006_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__18005_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__18005_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__18004_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__18004_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__18009 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__18009,(0),null);
var flc = cljs.core.nth.call(null,vec__18009,(1),null);
var vec__18010 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__18010,(0),null);
var line = cljs.core.nth.call(null,vec__18010,(1),null);
var column = cljs.core.nth.call(null,vec__18010,(2),null);
if(cljs.core.truth_((function (){var and__16750__auto__ = file;
if(cljs.core.truth_(and__16750__auto__)){
var and__16750__auto____$1 = function$;
if(cljs.core.truth_(and__16750__auto____$1)){
var and__16750__auto____$2 = line;
if(cljs.core.truth_(and__16750__auto____$2)){
return column;
} else {
return and__16750__auto____$2;
}
} else {
return and__16750__auto____$1;
}
} else {
return and__16750__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__18013_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__18013_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__18012_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__18012_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__18011_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__18011_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
var f__$3 = clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
return f__$3;
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__18016 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__18016,(0),null);
var flc = cljs.core.nth.call(null,vec__18016,(1),null);
var vec__18017 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__18017,(0),null);
var line = cljs.core.nth.call(null,vec__18017,(1),null);
var column = cljs.core.nth.call(null,vec__18017,(2),null);
if(cljs.core.truth_((function (){var and__16750__auto__ = file;
if(cljs.core.truth_(and__16750__auto__)){
var and__16750__auto____$1 = function$;
if(cljs.core.truth_(and__16750__auto____$1)){
var and__16750__auto____$2 = line;
if(cljs.core.truth_(and__16750__auto____$2)){
return column;
} else {
return and__16750__auto____$2;
}
} else {
return and__16750__auto____$1;
}
} else {
return and__16750__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__18020_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__18020_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__18019_SHARP_){
return cljs.core._EQ_.call(null,p1__18019_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__18018_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__18018_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__18021){
var map__18022 = p__18021;
var map__18022__$1 = ((((!((map__18022 == null)))?((((map__18022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18022):map__18022);
var opts = map__18022__$1;
var output_dir = cljs.core.get.call(null,map__18022__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__18022,map__18022__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__18030 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__18030,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__18030,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__18031 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__18031,(0),null);
var function$ = cljs.core.nth.call(null,vec__18031,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__16750__auto__ = line;
if(cljs.core.truth_(and__16750__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__16750__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__18022,map__18022__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__18032){
var map__18033 = p__18032;
var map__18033__$1 = ((((!((map__18033 == null)))?((((map__18033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18033):map__18033);
var opts = map__18033__$1;
var output_dir = cljs.core.get.call(null,map__18033__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__18033,map__18033__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__18041 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__18041,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__18041,(1),null);
var vec__18042 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__18042,(0),null);
var line_part = cljs.core.nth.call(null,vec__18042,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__16750__auto__ = line_part;
if(cljs.core.truth_(and__16750__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__16750__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__18033,map__18033__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__16762__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__18043_SHARP_){
return (p1__18043_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__18044_SHARP_,p2__18045_SHARP_){
return p1__18044_SHARP_.call(null,p2__18045_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4423__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4423__auto__)){
var columns = temp__4423__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__18046,sms,opts){
var map__18050 = p__18046;
var map__18050__$1 = ((((!((map__18050 == null)))?((((map__18050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18050):map__18050);
var function$ = cljs.core.get.call(null,map__18050__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__18050__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18050__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18050__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__18052 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18052,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18052,(1),null);
var call = cljs.core.nth.call(null,vec__18052,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args18055 = [];
var len__17820__auto___18058 = arguments.length;
var i__17821__auto___18059 = (0);
while(true){
if((i__17821__auto___18059 < len__17820__auto___18058)){
args18055.push((arguments[i__17821__auto___18059]));

var G__18060 = (i__17821__auto___18059 + (1));
i__17821__auto___18059 = G__18060;
continue;
} else {
}
break;
}

var G__18057 = args18055.length;
switch (G__18057) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18055.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__18053_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__18053_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__18054_SHARP_){
return cljs.core.dissoc.call(null,p1__18054_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args18062 = [];
var len__17820__auto___18075 = arguments.length;
var i__17821__auto___18076 = (0);
while(true){
if((i__17821__auto___18076 < len__17820__auto___18075)){
args18062.push((arguments[i__17821__auto___18076]));

var G__18077 = (i__17821__auto___18076 + (1));
i__17821__auto___18076 = G__18077;
continue;
} else {
}
break;
}

var G__18064 = args18062.length;
switch (G__18064) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18062.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__17736__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18065_18079 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18066_18080 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18065_18079,_STAR_print_fn_STAR_18066_18080,sb__17736__auto__){
return (function (x__17737__auto__){
return sb__17736__auto__.append(x__17737__auto__);
});})(_STAR_print_newline_STAR_18065_18079,_STAR_print_fn_STAR_18066_18080,sb__17736__auto__))
;

try{var seq__18067_18081 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__18068_18082 = null;
var count__18069_18083 = (0);
var i__18070_18084 = (0);
while(true){
if((i__18070_18084 < count__18069_18083)){
var map__18071_18085 = cljs.core._nth.call(null,chunk__18068_18082,i__18070_18084);
var map__18071_18086__$1 = ((((!((map__18071_18085 == null)))?((((map__18071_18085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18071_18085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18071_18085):map__18071_18085);
var function_18087 = cljs.core.get.call(null,map__18071_18086__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_18088 = cljs.core.get.call(null,map__18071_18086__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_18089 = cljs.core.get.call(null,map__18071_18086__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18090 = cljs.core.get.call(null,map__18071_18086__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_18087)?[cljs.core.str(function_18087),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18088),cljs.core.str((cljs.core.truth_(line_18089)?[cljs.core.str(":"),cljs.core.str(line_18089)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18090)?[cljs.core.str(":"),cljs.core.str(column_18090)].join(''):null)),cljs.core.str(")")].join(''));

var G__18091 = seq__18067_18081;
var G__18092 = chunk__18068_18082;
var G__18093 = count__18069_18083;
var G__18094 = (i__18070_18084 + (1));
seq__18067_18081 = G__18091;
chunk__18068_18082 = G__18092;
count__18069_18083 = G__18093;
i__18070_18084 = G__18094;
continue;
} else {
var temp__4425__auto___18095 = cljs.core.seq.call(null,seq__18067_18081);
if(temp__4425__auto___18095){
var seq__18067_18096__$1 = temp__4425__auto___18095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18067_18096__$1)){
var c__17565__auto___18097 = cljs.core.chunk_first.call(null,seq__18067_18096__$1);
var G__18098 = cljs.core.chunk_rest.call(null,seq__18067_18096__$1);
var G__18099 = c__17565__auto___18097;
var G__18100 = cljs.core.count.call(null,c__17565__auto___18097);
var G__18101 = (0);
seq__18067_18081 = G__18098;
chunk__18068_18082 = G__18099;
count__18069_18083 = G__18100;
i__18070_18084 = G__18101;
continue;
} else {
var map__18073_18102 = cljs.core.first.call(null,seq__18067_18096__$1);
var map__18073_18103__$1 = ((((!((map__18073_18102 == null)))?((((map__18073_18102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18073_18102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18073_18102):map__18073_18102);
var function_18104 = cljs.core.get.call(null,map__18073_18103__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_18105 = cljs.core.get.call(null,map__18073_18103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_18106 = cljs.core.get.call(null,map__18073_18103__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18107 = cljs.core.get.call(null,map__18073_18103__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_18104)?[cljs.core.str(function_18104),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18105),cljs.core.str((cljs.core.truth_(line_18106)?[cljs.core.str(":"),cljs.core.str(line_18106)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18107)?[cljs.core.str(":"),cljs.core.str(column_18107)].join(''):null)),cljs.core.str(")")].join(''));

var G__18108 = cljs.core.next.call(null,seq__18067_18096__$1);
var G__18109 = null;
var G__18110 = (0);
var G__18111 = (0);
seq__18067_18081 = G__18108;
chunk__18068_18082 = G__18109;
count__18069_18083 = G__18110;
i__18070_18084 = G__18111;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18066_18080;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18065_18079;
}
return [cljs.core.str(sb__17736__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=stacktrace.js.map