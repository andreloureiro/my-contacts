// Compiled by ClojureScript 1.7.166 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23564 = cljs.core._EQ_;
var expr__23565 = (function (){var or__16762__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23564.call(null,"true",expr__23565))){
return true;
} else {
if(cljs.core.truth_(pred__23564.call(null,"false",expr__23565))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23565)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23567__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23568__i = 0, G__23568__a = new Array(arguments.length -  0);
while (G__23568__i < G__23568__a.length) {G__23568__a[G__23568__i] = arguments[G__23568__i + 0]; ++G__23568__i;}
  args = new cljs.core.IndexedSeq(G__23568__a,0);
} 
return G__23567__delegate.call(this,args);};
G__23567.cljs$lang$maxFixedArity = 0;
G__23567.cljs$lang$applyTo = (function (arglist__23569){
var args = cljs.core.seq(arglist__23569);
return G__23567__delegate(args);
});
G__23567.cljs$core$IFn$_invoke$arity$variadic = G__23567__delegate;
return G__23567;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23570){
var map__23573 = p__23570;
var map__23573__$1 = ((((!((map__23573 == null)))?((((map__23573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23573):map__23573);
var message = cljs.core.get.call(null,map__23573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16762__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16750__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16750__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16750__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19227__auto___23735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___23735,ch){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___23735,ch){
return (function (state_23704){
var state_val_23705 = (state_23704[(1)]);
if((state_val_23705 === (7))){
var inst_23700 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23706_23736 = state_23704__$1;
(statearr_23706_23736[(2)] = inst_23700);

(statearr_23706_23736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (1))){
var state_23704__$1 = state_23704;
var statearr_23707_23737 = state_23704__$1;
(statearr_23707_23737[(2)] = null);

(statearr_23707_23737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (4))){
var inst_23657 = (state_23704[(7)]);
var inst_23657__$1 = (state_23704[(2)]);
var state_23704__$1 = (function (){var statearr_23708 = state_23704;
(statearr_23708[(7)] = inst_23657__$1);

return statearr_23708;
})();
if(cljs.core.truth_(inst_23657__$1)){
var statearr_23709_23738 = state_23704__$1;
(statearr_23709_23738[(1)] = (5));

} else {
var statearr_23710_23739 = state_23704__$1;
(statearr_23710_23739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (15))){
var inst_23664 = (state_23704[(8)]);
var inst_23679 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23664);
var inst_23680 = cljs.core.first.call(null,inst_23679);
var inst_23681 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23680);
var inst_23682 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23681)].join('');
var inst_23683 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23682);
var state_23704__$1 = state_23704;
var statearr_23711_23740 = state_23704__$1;
(statearr_23711_23740[(2)] = inst_23683);

(statearr_23711_23740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (13))){
var inst_23688 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23712_23741 = state_23704__$1;
(statearr_23712_23741[(2)] = inst_23688);

(statearr_23712_23741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (6))){
var state_23704__$1 = state_23704;
var statearr_23713_23742 = state_23704__$1;
(statearr_23713_23742[(2)] = null);

(statearr_23713_23742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (17))){
var inst_23686 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23714_23743 = state_23704__$1;
(statearr_23714_23743[(2)] = inst_23686);

(statearr_23714_23743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (3))){
var inst_23702 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23704__$1,inst_23702);
} else {
if((state_val_23705 === (12))){
var inst_23663 = (state_23704[(9)]);
var inst_23677 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23663,opts);
var state_23704__$1 = state_23704;
if(cljs.core.truth_(inst_23677)){
var statearr_23715_23744 = state_23704__$1;
(statearr_23715_23744[(1)] = (15));

} else {
var statearr_23716_23745 = state_23704__$1;
(statearr_23716_23745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (2))){
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23704__$1,(4),ch);
} else {
if((state_val_23705 === (11))){
var inst_23664 = (state_23704[(8)]);
var inst_23669 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23670 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23664);
var inst_23671 = cljs.core.async.timeout.call(null,(1000));
var inst_23672 = [inst_23670,inst_23671];
var inst_23673 = (new cljs.core.PersistentVector(null,2,(5),inst_23669,inst_23672,null));
var state_23704__$1 = state_23704;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23704__$1,(14),inst_23673);
} else {
if((state_val_23705 === (9))){
var inst_23664 = (state_23704[(8)]);
var inst_23690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23691 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23664);
var inst_23692 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23691);
var inst_23693 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23692)].join('');
var inst_23694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23693);
var state_23704__$1 = (function (){var statearr_23717 = state_23704;
(statearr_23717[(10)] = inst_23690);

return statearr_23717;
})();
var statearr_23718_23746 = state_23704__$1;
(statearr_23718_23746[(2)] = inst_23694);

(statearr_23718_23746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (5))){
var inst_23657 = (state_23704[(7)]);
var inst_23659 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23660 = (new cljs.core.PersistentArrayMap(null,2,inst_23659,null));
var inst_23661 = (new cljs.core.PersistentHashSet(null,inst_23660,null));
var inst_23662 = figwheel.client.focus_msgs.call(null,inst_23661,inst_23657);
var inst_23663 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23662);
var inst_23664 = cljs.core.first.call(null,inst_23662);
var inst_23665 = figwheel.client.autoload_QMARK_.call(null);
var state_23704__$1 = (function (){var statearr_23719 = state_23704;
(statearr_23719[(9)] = inst_23663);

(statearr_23719[(8)] = inst_23664);

return statearr_23719;
})();
if(cljs.core.truth_(inst_23665)){
var statearr_23720_23747 = state_23704__$1;
(statearr_23720_23747[(1)] = (8));

} else {
var statearr_23721_23748 = state_23704__$1;
(statearr_23721_23748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (14))){
var inst_23675 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23722_23749 = state_23704__$1;
(statearr_23722_23749[(2)] = inst_23675);

(statearr_23722_23749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (16))){
var state_23704__$1 = state_23704;
var statearr_23723_23750 = state_23704__$1;
(statearr_23723_23750[(2)] = null);

(statearr_23723_23750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (10))){
var inst_23696 = (state_23704[(2)]);
var state_23704__$1 = (function (){var statearr_23724 = state_23704;
(statearr_23724[(11)] = inst_23696);

return statearr_23724;
})();
var statearr_23725_23751 = state_23704__$1;
(statearr_23725_23751[(2)] = null);

(statearr_23725_23751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (8))){
var inst_23663 = (state_23704[(9)]);
var inst_23667 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23663,opts);
var state_23704__$1 = state_23704;
if(cljs.core.truth_(inst_23667)){
var statearr_23726_23752 = state_23704__$1;
(statearr_23726_23752[(1)] = (11));

} else {
var statearr_23727_23753 = state_23704__$1;
(statearr_23727_23753[(1)] = (12));

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
});})(c__19227__auto___23735,ch))
;
return ((function (switch__19115__auto__,c__19227__auto___23735,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19116__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19116__auto____0 = (function (){
var statearr_23731 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23731[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19116__auto__);

(statearr_23731[(1)] = (1));

return statearr_23731;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19116__auto____1 = (function (state_23704){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_23704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e23732){if((e23732 instanceof Object)){
var ex__19119__auto__ = e23732;
var statearr_23733_23754 = state_23704;
(statearr_23733_23754[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23755 = state_23704;
state_23704 = G__23755;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19116__auto__ = function(state_23704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19116__auto____1.call(this,state_23704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19116__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19116__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___23735,ch))
})();
var state__19229__auto__ = (function (){var statearr_23734 = f__19228__auto__.call(null);
(statearr_23734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___23735);

return statearr_23734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___23735,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23756_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23756_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23763 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23763){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23761 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23762 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23761,_STAR_print_newline_STAR_23762,base_path_23763){
return (function() { 
var G__23764__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23765__i = 0, G__23765__a = new Array(arguments.length -  0);
while (G__23765__i < G__23765__a.length) {G__23765__a[G__23765__i] = arguments[G__23765__i + 0]; ++G__23765__i;}
  args = new cljs.core.IndexedSeq(G__23765__a,0);
} 
return G__23764__delegate.call(this,args);};
G__23764.cljs$lang$maxFixedArity = 0;
G__23764.cljs$lang$applyTo = (function (arglist__23766){
var args = cljs.core.seq(arglist__23766);
return G__23764__delegate(args);
});
G__23764.cljs$core$IFn$_invoke$arity$variadic = G__23764__delegate;
return G__23764;
})()
;})(_STAR_print_fn_STAR_23761,_STAR_print_newline_STAR_23762,base_path_23763))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23762;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23761;
}}catch (e23760){if((e23760 instanceof Error)){
var e = e23760;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23763], null));
} else {
var e = e23760;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23763))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23767){
var map__23774 = p__23767;
var map__23774__$1 = ((((!((map__23774 == null)))?((((map__23774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23774):map__23774);
var opts = map__23774__$1;
var build_id = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23774,map__23774__$1,opts,build_id){
return (function (p__23776){
var vec__23777 = p__23776;
var map__23778 = cljs.core.nth.call(null,vec__23777,(0),null);
var map__23778__$1 = ((((!((map__23778 == null)))?((((map__23778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23778):map__23778);
var msg = map__23778__$1;
var msg_name = cljs.core.get.call(null,map__23778__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23777,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23777,map__23778,map__23778__$1,msg,msg_name,_,map__23774,map__23774__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23777,map__23778,map__23778__$1,msg,msg_name,_,map__23774,map__23774__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23774,map__23774__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23784){
var vec__23785 = p__23784;
var map__23786 = cljs.core.nth.call(null,vec__23785,(0),null);
var map__23786__$1 = ((((!((map__23786 == null)))?((((map__23786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23786):map__23786);
var msg = map__23786__$1;
var msg_name = cljs.core.get.call(null,map__23786__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23785,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23788){
var map__23798 = p__23788;
var map__23798__$1 = ((((!((map__23798 == null)))?((((map__23798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23798):map__23798);
var on_compile_warning = cljs.core.get.call(null,map__23798__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23798__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23798,map__23798__$1,on_compile_warning,on_compile_fail){
return (function (p__23800){
var vec__23801 = p__23800;
var map__23802 = cljs.core.nth.call(null,vec__23801,(0),null);
var map__23802__$1 = ((((!((map__23802 == null)))?((((map__23802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23802):map__23802);
var msg = map__23802__$1;
var msg_name = cljs.core.get.call(null,map__23802__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23801,(1));
var pred__23804 = cljs.core._EQ_;
var expr__23805 = msg_name;
if(cljs.core.truth_(pred__23804.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23805))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23804.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23805))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23798,map__23798__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__,msg_hist,msg_names,msg){
return (function (state_24021){
var state_val_24022 = (state_24021[(1)]);
if((state_val_24022 === (7))){
var inst_23945 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23945)){
var statearr_24023_24069 = state_24021__$1;
(statearr_24023_24069[(1)] = (8));

} else {
var statearr_24024_24070 = state_24021__$1;
(statearr_24024_24070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (20))){
var inst_24015 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24025_24071 = state_24021__$1;
(statearr_24025_24071[(2)] = inst_24015);

(statearr_24025_24071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (27))){
var inst_24011 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24026_24072 = state_24021__$1;
(statearr_24026_24072[(2)] = inst_24011);

(statearr_24026_24072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (1))){
var inst_23938 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23938)){
var statearr_24027_24073 = state_24021__$1;
(statearr_24027_24073[(1)] = (2));

} else {
var statearr_24028_24074 = state_24021__$1;
(statearr_24028_24074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (24))){
var inst_24013 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24029_24075 = state_24021__$1;
(statearr_24029_24075[(2)] = inst_24013);

(statearr_24029_24075[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (4))){
var inst_24019 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24021__$1,inst_24019);
} else {
if((state_val_24022 === (15))){
var inst_24017 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24030_24076 = state_24021__$1;
(statearr_24030_24076[(2)] = inst_24017);

(statearr_24030_24076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (21))){
var inst_23976 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24031_24077 = state_24021__$1;
(statearr_24031_24077[(2)] = inst_23976);

(statearr_24031_24077[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (31))){
var inst_24000 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_24000)){
var statearr_24032_24078 = state_24021__$1;
(statearr_24032_24078[(1)] = (34));

} else {
var statearr_24033_24079 = state_24021__$1;
(statearr_24033_24079[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (32))){
var inst_24009 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24034_24080 = state_24021__$1;
(statearr_24034_24080[(2)] = inst_24009);

(statearr_24034_24080[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (33))){
var inst_23998 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24035_24081 = state_24021__$1;
(statearr_24035_24081[(2)] = inst_23998);

(statearr_24035_24081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (13))){
var inst_23959 = figwheel.client.heads_up.clear.call(null);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(16),inst_23959);
} else {
if((state_val_24022 === (22))){
var inst_23980 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23981 = figwheel.client.heads_up.append_message.call(null,inst_23980);
var state_24021__$1 = state_24021;
var statearr_24036_24082 = state_24021__$1;
(statearr_24036_24082[(2)] = inst_23981);

(statearr_24036_24082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (36))){
var inst_24007 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24037_24083 = state_24021__$1;
(statearr_24037_24083[(2)] = inst_24007);

(statearr_24037_24083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (29))){
var inst_23991 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24038_24084 = state_24021__$1;
(statearr_24038_24084[(2)] = inst_23991);

(statearr_24038_24084[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (6))){
var inst_23940 = (state_24021[(7)]);
var state_24021__$1 = state_24021;
var statearr_24039_24085 = state_24021__$1;
(statearr_24039_24085[(2)] = inst_23940);

(statearr_24039_24085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (28))){
var inst_23987 = (state_24021[(2)]);
var inst_23988 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23989 = figwheel.client.heads_up.display_warning.call(null,inst_23988);
var state_24021__$1 = (function (){var statearr_24040 = state_24021;
(statearr_24040[(8)] = inst_23987);

return statearr_24040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(29),inst_23989);
} else {
if((state_val_24022 === (25))){
var inst_23985 = figwheel.client.heads_up.clear.call(null);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(28),inst_23985);
} else {
if((state_val_24022 === (34))){
var inst_24002 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(37),inst_24002);
} else {
if((state_val_24022 === (17))){
var inst_23967 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24041_24086 = state_24021__$1;
(statearr_24041_24086[(2)] = inst_23967);

(statearr_24041_24086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (3))){
var inst_23957 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23957)){
var statearr_24042_24087 = state_24021__$1;
(statearr_24042_24087[(1)] = (13));

} else {
var statearr_24043_24088 = state_24021__$1;
(statearr_24043_24088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (12))){
var inst_23953 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24044_24089 = state_24021__$1;
(statearr_24044_24089[(2)] = inst_23953);

(statearr_24044_24089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (2))){
var inst_23940 = (state_24021[(7)]);
var inst_23940__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24021__$1 = (function (){var statearr_24045 = state_24021;
(statearr_24045[(7)] = inst_23940__$1);

return statearr_24045;
})();
if(cljs.core.truth_(inst_23940__$1)){
var statearr_24046_24090 = state_24021__$1;
(statearr_24046_24090[(1)] = (5));

} else {
var statearr_24047_24091 = state_24021__$1;
(statearr_24047_24091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (23))){
var inst_23983 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23983)){
var statearr_24048_24092 = state_24021__$1;
(statearr_24048_24092[(1)] = (25));

} else {
var statearr_24049_24093 = state_24021__$1;
(statearr_24049_24093[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (35))){
var state_24021__$1 = state_24021;
var statearr_24050_24094 = state_24021__$1;
(statearr_24050_24094[(2)] = null);

(statearr_24050_24094[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (19))){
var inst_23978 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23978)){
var statearr_24051_24095 = state_24021__$1;
(statearr_24051_24095[(1)] = (22));

} else {
var statearr_24052_24096 = state_24021__$1;
(statearr_24052_24096[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (11))){
var inst_23949 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24053_24097 = state_24021__$1;
(statearr_24053_24097[(2)] = inst_23949);

(statearr_24053_24097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (9))){
var inst_23951 = figwheel.client.heads_up.clear.call(null);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(12),inst_23951);
} else {
if((state_val_24022 === (5))){
var inst_23942 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24021__$1 = state_24021;
var statearr_24054_24098 = state_24021__$1;
(statearr_24054_24098[(2)] = inst_23942);

(statearr_24054_24098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (14))){
var inst_23969 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23969)){
var statearr_24055_24099 = state_24021__$1;
(statearr_24055_24099[(1)] = (18));

} else {
var statearr_24056_24100 = state_24021__$1;
(statearr_24056_24100[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (26))){
var inst_23993 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24021__$1 = state_24021;
if(cljs.core.truth_(inst_23993)){
var statearr_24057_24101 = state_24021__$1;
(statearr_24057_24101[(1)] = (30));

} else {
var statearr_24058_24102 = state_24021__$1;
(statearr_24058_24102[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (16))){
var inst_23961 = (state_24021[(2)]);
var inst_23962 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23963 = figwheel.client.format_messages.call(null,inst_23962);
var inst_23964 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23965 = figwheel.client.heads_up.display_error.call(null,inst_23963,inst_23964);
var state_24021__$1 = (function (){var statearr_24059 = state_24021;
(statearr_24059[(9)] = inst_23961);

return statearr_24059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(17),inst_23965);
} else {
if((state_val_24022 === (30))){
var inst_23995 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23996 = figwheel.client.heads_up.display_warning.call(null,inst_23995);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(33),inst_23996);
} else {
if((state_val_24022 === (10))){
var inst_23955 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24060_24103 = state_24021__$1;
(statearr_24060_24103[(2)] = inst_23955);

(statearr_24060_24103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (18))){
var inst_23971 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23972 = figwheel.client.format_messages.call(null,inst_23971);
var inst_23973 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23974 = figwheel.client.heads_up.display_error.call(null,inst_23972,inst_23973);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(21),inst_23974);
} else {
if((state_val_24022 === (37))){
var inst_24004 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24061_24104 = state_24021__$1;
(statearr_24061_24104[(2)] = inst_24004);

(statearr_24061_24104[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (8))){
var inst_23947 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(11),inst_23947);
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
});})(c__19227__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19115__auto__,c__19227__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto____0 = (function (){
var statearr_24065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24065[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto__);

(statearr_24065[(1)] = (1));

return statearr_24065;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto____1 = (function (state_24021){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_24021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e24066){if((e24066 instanceof Object)){
var ex__19119__auto__ = e24066;
var statearr_24067_24105 = state_24021;
(statearr_24067_24105[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24106 = state_24021;
state_24021 = G__24106;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto__ = function(state_24021){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto____1.call(this,state_24021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__,msg_hist,msg_names,msg))
})();
var state__19229__auto__ = (function (){var statearr_24068 = f__19228__auto__.call(null);
(statearr_24068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_24068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__,msg_hist,msg_names,msg))
);

return c__19227__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19227__auto___24169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___24169,ch){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___24169,ch){
return (function (state_24152){
var state_val_24153 = (state_24152[(1)]);
if((state_val_24153 === (1))){
var state_24152__$1 = state_24152;
var statearr_24154_24170 = state_24152__$1;
(statearr_24154_24170[(2)] = null);

(statearr_24154_24170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (2))){
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24152__$1,(4),ch);
} else {
if((state_val_24153 === (3))){
var inst_24150 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24152__$1,inst_24150);
} else {
if((state_val_24153 === (4))){
var inst_24140 = (state_24152[(7)]);
var inst_24140__$1 = (state_24152[(2)]);
var state_24152__$1 = (function (){var statearr_24155 = state_24152;
(statearr_24155[(7)] = inst_24140__$1);

return statearr_24155;
})();
if(cljs.core.truth_(inst_24140__$1)){
var statearr_24156_24171 = state_24152__$1;
(statearr_24156_24171[(1)] = (5));

} else {
var statearr_24157_24172 = state_24152__$1;
(statearr_24157_24172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (5))){
var inst_24140 = (state_24152[(7)]);
var inst_24142 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24140);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24152__$1,(8),inst_24142);
} else {
if((state_val_24153 === (6))){
var state_24152__$1 = state_24152;
var statearr_24158_24173 = state_24152__$1;
(statearr_24158_24173[(2)] = null);

(statearr_24158_24173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (7))){
var inst_24148 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24159_24174 = state_24152__$1;
(statearr_24159_24174[(2)] = inst_24148);

(statearr_24159_24174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (8))){
var inst_24144 = (state_24152[(2)]);
var state_24152__$1 = (function (){var statearr_24160 = state_24152;
(statearr_24160[(8)] = inst_24144);

return statearr_24160;
})();
var statearr_24161_24175 = state_24152__$1;
(statearr_24161_24175[(2)] = null);

(statearr_24161_24175[(1)] = (2));


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
});})(c__19227__auto___24169,ch))
;
return ((function (switch__19115__auto__,c__19227__auto___24169,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19116__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19116__auto____0 = (function (){
var statearr_24165 = [null,null,null,null,null,null,null,null,null];
(statearr_24165[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19116__auto__);

(statearr_24165[(1)] = (1));

return statearr_24165;
});
var figwheel$client$heads_up_plugin_$_state_machine__19116__auto____1 = (function (state_24152){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_24152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e24166){if((e24166 instanceof Object)){
var ex__19119__auto__ = e24166;
var statearr_24167_24176 = state_24152;
(statearr_24167_24176[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24177 = state_24152;
state_24152 = G__24177;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19116__auto__ = function(state_24152){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19116__auto____1.call(this,state_24152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19116__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19116__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___24169,ch))
})();
var state__19229__auto__ = (function (){var statearr_24168 = f__19228__auto__.call(null);
(statearr_24168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___24169);

return statearr_24168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___24169,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__){
return (function (state_24198){
var state_val_24199 = (state_24198[(1)]);
if((state_val_24199 === (1))){
var inst_24193 = cljs.core.async.timeout.call(null,(3000));
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24198__$1,(2),inst_24193);
} else {
if((state_val_24199 === (2))){
var inst_24195 = (state_24198[(2)]);
var inst_24196 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24198__$1 = (function (){var statearr_24200 = state_24198;
(statearr_24200[(7)] = inst_24195);

return statearr_24200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24198__$1,inst_24196);
} else {
return null;
}
}
});})(c__19227__auto__))
;
return ((function (switch__19115__auto__,c__19227__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19116__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19116__auto____0 = (function (){
var statearr_24204 = [null,null,null,null,null,null,null,null];
(statearr_24204[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19116__auto__);

(statearr_24204[(1)] = (1));

return statearr_24204;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19116__auto____1 = (function (state_24198){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_24198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e24205){if((e24205 instanceof Object)){
var ex__19119__auto__ = e24205;
var statearr_24206_24208 = state_24198;
(statearr_24206_24208[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24209 = state_24198;
state_24198 = G__24209;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19116__auto__ = function(state_24198){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19116__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19116__auto____1.call(this,state_24198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19116__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19116__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__))
})();
var state__19229__auto__ = (function (){var statearr_24207 = f__19228__auto__.call(null);
(statearr_24207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_24207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__))
);

return c__19227__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24210){
var map__24217 = p__24210;
var map__24217__$1 = ((((!((map__24217 == null)))?((((map__24217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24217):map__24217);
var ed = map__24217__$1;
var formatted_exception = cljs.core.get.call(null,map__24217__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24217__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24217__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24219_24223 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24220_24224 = null;
var count__24221_24225 = (0);
var i__24222_24226 = (0);
while(true){
if((i__24222_24226 < count__24221_24225)){
var msg_24227 = cljs.core._nth.call(null,chunk__24220_24224,i__24222_24226);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24227);

var G__24228 = seq__24219_24223;
var G__24229 = chunk__24220_24224;
var G__24230 = count__24221_24225;
var G__24231 = (i__24222_24226 + (1));
seq__24219_24223 = G__24228;
chunk__24220_24224 = G__24229;
count__24221_24225 = G__24230;
i__24222_24226 = G__24231;
continue;
} else {
var temp__4425__auto___24232 = cljs.core.seq.call(null,seq__24219_24223);
if(temp__4425__auto___24232){
var seq__24219_24233__$1 = temp__4425__auto___24232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24219_24233__$1)){
var c__17565__auto___24234 = cljs.core.chunk_first.call(null,seq__24219_24233__$1);
var G__24235 = cljs.core.chunk_rest.call(null,seq__24219_24233__$1);
var G__24236 = c__17565__auto___24234;
var G__24237 = cljs.core.count.call(null,c__17565__auto___24234);
var G__24238 = (0);
seq__24219_24223 = G__24235;
chunk__24220_24224 = G__24236;
count__24221_24225 = G__24237;
i__24222_24226 = G__24238;
continue;
} else {
var msg_24239 = cljs.core.first.call(null,seq__24219_24233__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24239);

var G__24240 = cljs.core.next.call(null,seq__24219_24233__$1);
var G__24241 = null;
var G__24242 = (0);
var G__24243 = (0);
seq__24219_24223 = G__24240;
chunk__24220_24224 = G__24241;
count__24221_24225 = G__24242;
i__24222_24226 = G__24243;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24244){
var map__24247 = p__24244;
var map__24247__$1 = ((((!((map__24247 == null)))?((((map__24247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24247):map__24247);
var w = map__24247__$1;
var message = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16750__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16750__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16750__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24255 = cljs.core.seq.call(null,plugins);
var chunk__24256 = null;
var count__24257 = (0);
var i__24258 = (0);
while(true){
if((i__24258 < count__24257)){
var vec__24259 = cljs.core._nth.call(null,chunk__24256,i__24258);
var k = cljs.core.nth.call(null,vec__24259,(0),null);
var plugin = cljs.core.nth.call(null,vec__24259,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24261 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24255,chunk__24256,count__24257,i__24258,pl_24261,vec__24259,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24261.call(null,msg_hist);
});})(seq__24255,chunk__24256,count__24257,i__24258,pl_24261,vec__24259,k,plugin))
);
} else {
}

var G__24262 = seq__24255;
var G__24263 = chunk__24256;
var G__24264 = count__24257;
var G__24265 = (i__24258 + (1));
seq__24255 = G__24262;
chunk__24256 = G__24263;
count__24257 = G__24264;
i__24258 = G__24265;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24255);
if(temp__4425__auto__){
var seq__24255__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24255__$1)){
var c__17565__auto__ = cljs.core.chunk_first.call(null,seq__24255__$1);
var G__24266 = cljs.core.chunk_rest.call(null,seq__24255__$1);
var G__24267 = c__17565__auto__;
var G__24268 = cljs.core.count.call(null,c__17565__auto__);
var G__24269 = (0);
seq__24255 = G__24266;
chunk__24256 = G__24267;
count__24257 = G__24268;
i__24258 = G__24269;
continue;
} else {
var vec__24260 = cljs.core.first.call(null,seq__24255__$1);
var k = cljs.core.nth.call(null,vec__24260,(0),null);
var plugin = cljs.core.nth.call(null,vec__24260,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24270 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24255,chunk__24256,count__24257,i__24258,pl_24270,vec__24260,k,plugin,seq__24255__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24270.call(null,msg_hist);
});})(seq__24255,chunk__24256,count__24257,i__24258,pl_24270,vec__24260,k,plugin,seq__24255__$1,temp__4425__auto__))
);
} else {
}

var G__24271 = cljs.core.next.call(null,seq__24255__$1);
var G__24272 = null;
var G__24273 = (0);
var G__24274 = (0);
seq__24255 = G__24271;
chunk__24256 = G__24272;
count__24257 = G__24273;
i__24258 = G__24274;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24275 = [];
var len__17820__auto___24278 = arguments.length;
var i__17821__auto___24279 = (0);
while(true){
if((i__17821__auto___24279 < len__17820__auto___24278)){
args24275.push((arguments[i__17821__auto___24279]));

var G__24280 = (i__17821__auto___24279 + (1));
i__17821__auto___24279 = G__24280;
continue;
} else {
}
break;
}

var G__24277 = args24275.length;
switch (G__24277) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24275.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17827__auto__ = [];
var len__17820__auto___24286 = arguments.length;
var i__17821__auto___24287 = (0);
while(true){
if((i__17821__auto___24287 < len__17820__auto___24286)){
args__17827__auto__.push((arguments[i__17821__auto___24287]));

var G__24288 = (i__17821__auto___24287 + (1));
i__17821__auto___24287 = G__24288;
continue;
} else {
}
break;
}

var argseq__17828__auto__ = ((((0) < args__17827__auto__.length))?(new cljs.core.IndexedSeq(args__17827__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17828__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24283){
var map__24284 = p__24283;
var map__24284__$1 = ((((!((map__24284 == null)))?((((map__24284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24284):map__24284);
var opts = map__24284__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24282){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24282));
});

//# sourceMappingURL=client.js.map