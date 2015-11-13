// Compiled by ClojureScript 1.7.166 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19272 = [];
var len__17820__auto___19278 = arguments.length;
var i__17821__auto___19279 = (0);
while(true){
if((i__17821__auto___19279 < len__17820__auto___19278)){
args19272.push((arguments[i__17821__auto___19279]));

var G__19280 = (i__17821__auto___19279 + (1));
i__17821__auto___19279 = G__19280;
continue;
} else {
}
break;
}

var G__19274 = args19272.length;
switch (G__19274) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19272.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19275 = (function (f,blockable,meta19276){
this.f = f;
this.blockable = blockable;
this.meta19276 = meta19276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19277,meta19276__$1){
var self__ = this;
var _19277__$1 = this;
return (new cljs.core.async.t_cljs$core$async19275(self__.f,self__.blockable,meta19276__$1));
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19277){
var self__ = this;
var _19277__$1 = this;
return self__.meta19276;
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19276","meta19276",1085725608,null)], null);
});

cljs.core.async.t_cljs$core$async19275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19275";

cljs.core.async.t_cljs$core$async19275.cljs$lang$ctorPrWriter = (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async19275");
});

cljs.core.async.__GT_t_cljs$core$async19275 = (function cljs$core$async$__GT_t_cljs$core$async19275(f__$1,blockable__$1,meta19276){
return (new cljs.core.async.t_cljs$core$async19275(f__$1,blockable__$1,meta19276));
});

}

return (new cljs.core.async.t_cljs$core$async19275(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19284 = [];
var len__17820__auto___19287 = arguments.length;
var i__17821__auto___19288 = (0);
while(true){
if((i__17821__auto___19288 < len__17820__auto___19287)){
args19284.push((arguments[i__17821__auto___19288]));

var G__19289 = (i__17821__auto___19288 + (1));
i__17821__auto___19288 = G__19289;
continue;
} else {
}
break;
}

var G__19286 = args19284.length;
switch (G__19286) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19284.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19291 = [];
var len__17820__auto___19294 = arguments.length;
var i__17821__auto___19295 = (0);
while(true){
if((i__17821__auto___19295 < len__17820__auto___19294)){
args19291.push((arguments[i__17821__auto___19295]));

var G__19296 = (i__17821__auto___19295 + (1));
i__17821__auto___19295 = G__19296;
continue;
} else {
}
break;
}

var G__19293 = args19291.length;
switch (G__19293) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19291.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19298 = [];
var len__17820__auto___19301 = arguments.length;
var i__17821__auto___19302 = (0);
while(true){
if((i__17821__auto___19302 < len__17820__auto___19301)){
args19298.push((arguments[i__17821__auto___19302]));

var G__19303 = (i__17821__auto___19302 + (1));
i__17821__auto___19302 = G__19303;
continue;
} else {
}
break;
}

var G__19300 = args19298.length;
switch (G__19300) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19298.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19305 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19305);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19305,ret){
return (function (){
return fn1.call(null,val_19305);
});})(val_19305,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19306 = [];
var len__17820__auto___19309 = arguments.length;
var i__17821__auto___19310 = (0);
while(true){
if((i__17821__auto___19310 < len__17820__auto___19309)){
args19306.push((arguments[i__17821__auto___19310]));

var G__19311 = (i__17821__auto___19310 + (1));
i__17821__auto___19310 = G__19311;
continue;
} else {
}
break;
}

var G__19308 = args19306.length;
switch (G__19308) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19306.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17665__auto___19313 = n;
var x_19314 = (0);
while(true){
if((x_19314 < n__17665__auto___19313)){
(a[x_19314] = (0));

var G__19315 = (x_19314 + (1));
x_19314 = G__19315;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19316 = (i + (1));
i = G__19316;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19320 = (function (alt_flag,flag,meta19321){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19321 = meta19321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19322,meta19321__$1){
var self__ = this;
var _19322__$1 = this;
return (new cljs.core.async.t_cljs$core$async19320(self__.alt_flag,self__.flag,meta19321__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19322){
var self__ = this;
var _19322__$1 = this;
return self__.meta19321;
});})(flag))
;

cljs.core.async.t_cljs$core$async19320.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19320.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19321","meta19321",-803718579,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19320";

cljs.core.async.t_cljs$core$async19320.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async19320");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19320 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19320(alt_flag__$1,flag__$1,meta19321){
return (new cljs.core.async.t_cljs$core$async19320(alt_flag__$1,flag__$1,meta19321));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19320(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19326 = (function (alt_handler,flag,cb,meta19327){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19327 = meta19327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19328,meta19327__$1){
var self__ = this;
var _19328__$1 = this;
return (new cljs.core.async.t_cljs$core$async19326(self__.alt_handler,self__.flag,self__.cb,meta19327__$1));
});

cljs.core.async.t_cljs$core$async19326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19328){
var self__ = this;
var _19328__$1 = this;
return self__.meta19327;
});

cljs.core.async.t_cljs$core$async19326.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19327","meta19327",-843075801,null)], null);
});

cljs.core.async.t_cljs$core$async19326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19326";

cljs.core.async.t_cljs$core$async19326.cljs$lang$ctorPrWriter = (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async19326");
});

cljs.core.async.__GT_t_cljs$core$async19326 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19326(alt_handler__$1,flag__$1,cb__$1,meta19327){
return (new cljs.core.async.t_cljs$core$async19326(alt_handler__$1,flag__$1,cb__$1,meta19327));
});

}

return (new cljs.core.async.t_cljs$core$async19326(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19329_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19329_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19330_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19330_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16762__auto__ = wport;
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19331 = (i + (1));
i = G__19331;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16762__auto__ = ret;
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16750__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16750__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16750__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17827__auto__ = [];
var len__17820__auto___19337 = arguments.length;
var i__17821__auto___19338 = (0);
while(true){
if((i__17821__auto___19338 < len__17820__auto___19337)){
args__17827__auto__.push((arguments[i__17821__auto___19338]));

var G__19339 = (i__17821__auto___19338 + (1));
i__17821__auto___19338 = G__19339;
continue;
} else {
}
break;
}

var argseq__17828__auto__ = ((((1) < args__17827__auto__.length))?(new cljs.core.IndexedSeq(args__17827__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17828__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19334){
var map__19335 = p__19334;
var map__19335__$1 = ((((!((map__19335 == null)))?((((map__19335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19335):map__19335);
var opts = map__19335__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19332){
var G__19333 = cljs.core.first.call(null,seq19332);
var seq19332__$1 = cljs.core.next.call(null,seq19332);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19333,seq19332__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19340 = [];
var len__17820__auto___19390 = arguments.length;
var i__17821__auto___19391 = (0);
while(true){
if((i__17821__auto___19391 < len__17820__auto___19390)){
args19340.push((arguments[i__17821__auto___19391]));

var G__19392 = (i__17821__auto___19391 + (1));
i__17821__auto___19391 = G__19392;
continue;
} else {
}
break;
}

var G__19342 = args19340.length;
switch (G__19342) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19340.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19227__auto___19394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___19394){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___19394){
return (function (state_19366){
var state_val_19367 = (state_19366[(1)]);
if((state_val_19367 === (7))){
var inst_19362 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19368_19395 = state_19366__$1;
(statearr_19368_19395[(2)] = inst_19362);

(statearr_19368_19395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (1))){
var state_19366__$1 = state_19366;
var statearr_19369_19396 = state_19366__$1;
(statearr_19369_19396[(2)] = null);

(statearr_19369_19396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (4))){
var inst_19345 = (state_19366[(7)]);
var inst_19345__$1 = (state_19366[(2)]);
var inst_19346 = (inst_19345__$1 == null);
var state_19366__$1 = (function (){var statearr_19370 = state_19366;
(statearr_19370[(7)] = inst_19345__$1);

return statearr_19370;
})();
if(cljs.core.truth_(inst_19346)){
var statearr_19371_19397 = state_19366__$1;
(statearr_19371_19397[(1)] = (5));

} else {
var statearr_19372_19398 = state_19366__$1;
(statearr_19372_19398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (13))){
var state_19366__$1 = state_19366;
var statearr_19373_19399 = state_19366__$1;
(statearr_19373_19399[(2)] = null);

(statearr_19373_19399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (6))){
var inst_19345 = (state_19366[(7)]);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19366__$1,(11),to,inst_19345);
} else {
if((state_val_19367 === (3))){
var inst_19364 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19366__$1,inst_19364);
} else {
if((state_val_19367 === (12))){
var state_19366__$1 = state_19366;
var statearr_19374_19400 = state_19366__$1;
(statearr_19374_19400[(2)] = null);

(statearr_19374_19400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (2))){
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19366__$1,(4),from);
} else {
if((state_val_19367 === (11))){
var inst_19355 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
if(cljs.core.truth_(inst_19355)){
var statearr_19375_19401 = state_19366__$1;
(statearr_19375_19401[(1)] = (12));

} else {
var statearr_19376_19402 = state_19366__$1;
(statearr_19376_19402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (9))){
var state_19366__$1 = state_19366;
var statearr_19377_19403 = state_19366__$1;
(statearr_19377_19403[(2)] = null);

(statearr_19377_19403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (5))){
var state_19366__$1 = state_19366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19378_19404 = state_19366__$1;
(statearr_19378_19404[(1)] = (8));

} else {
var statearr_19379_19405 = state_19366__$1;
(statearr_19379_19405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (14))){
var inst_19360 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19380_19406 = state_19366__$1;
(statearr_19380_19406[(2)] = inst_19360);

(statearr_19380_19406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (10))){
var inst_19352 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19381_19407 = state_19366__$1;
(statearr_19381_19407[(2)] = inst_19352);

(statearr_19381_19407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (8))){
var inst_19349 = cljs.core.async.close_BANG_.call(null,to);
var state_19366__$1 = state_19366;
var statearr_19382_19408 = state_19366__$1;
(statearr_19382_19408[(2)] = inst_19349);

(statearr_19382_19408[(1)] = (10));


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
});})(c__19227__auto___19394))
;
return ((function (switch__19115__auto__,c__19227__auto___19394){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_19386 = [null,null,null,null,null,null,null,null];
(statearr_19386[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_19386[(1)] = (1));

return statearr_19386;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_19366){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19387){if((e19387 instanceof Object)){
var ex__19119__auto__ = e19387;
var statearr_19388_19409 = state_19366;
(statearr_19388_19409[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19410 = state_19366;
state_19366 = G__19410;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_19366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_19366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___19394))
})();
var state__19229__auto__ = (function (){var statearr_19389 = f__19228__auto__.call(null);
(statearr_19389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___19394);

return statearr_19389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___19394))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19594){
var vec__19595 = p__19594;
var v = cljs.core.nth.call(null,vec__19595,(0),null);
var p = cljs.core.nth.call(null,vec__19595,(1),null);
var job = vec__19595;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19227__auto___19777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___19777,res,vec__19595,v,p,job,jobs,results){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___19777,res,vec__19595,v,p,job,jobs,results){
return (function (state_19600){
var state_val_19601 = (state_19600[(1)]);
if((state_val_19601 === (1))){
var state_19600__$1 = state_19600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19600__$1,(2),res,v);
} else {
if((state_val_19601 === (2))){
var inst_19597 = (state_19600[(2)]);
var inst_19598 = cljs.core.async.close_BANG_.call(null,res);
var state_19600__$1 = (function (){var statearr_19602 = state_19600;
(statearr_19602[(7)] = inst_19597);

return statearr_19602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19600__$1,inst_19598);
} else {
return null;
}
}
});})(c__19227__auto___19777,res,vec__19595,v,p,job,jobs,results))
;
return ((function (switch__19115__auto__,c__19227__auto___19777,res,vec__19595,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0 = (function (){
var statearr_19606 = [null,null,null,null,null,null,null,null];
(statearr_19606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__);

(statearr_19606[(1)] = (1));

return statearr_19606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1 = (function (state_19600){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19607){if((e19607 instanceof Object)){
var ex__19119__auto__ = e19607;
var statearr_19608_19778 = state_19600;
(statearr_19608_19778[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19779 = state_19600;
state_19600 = G__19779;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = function(state_19600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1.call(this,state_19600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___19777,res,vec__19595,v,p,job,jobs,results))
})();
var state__19229__auto__ = (function (){var statearr_19609 = f__19228__auto__.call(null);
(statearr_19609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___19777);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___19777,res,vec__19595,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19610){
var vec__19611 = p__19610;
var v = cljs.core.nth.call(null,vec__19611,(0),null);
var p = cljs.core.nth.call(null,vec__19611,(1),null);
var job = vec__19611;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17665__auto___19780 = n;
var __19781 = (0);
while(true){
if((__19781 < n__17665__auto___19780)){
var G__19612_19782 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19612_19782) {
case "compute":
var c__19227__auto___19784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19781,c__19227__auto___19784,G__19612_19782,n__17665__auto___19780,jobs,results,process,async){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (__19781,c__19227__auto___19784,G__19612_19782,n__17665__auto___19780,jobs,results,process,async){
return (function (state_19625){
var state_val_19626 = (state_19625[(1)]);
if((state_val_19626 === (1))){
var state_19625__$1 = state_19625;
var statearr_19627_19785 = state_19625__$1;
(statearr_19627_19785[(2)] = null);

(statearr_19627_19785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (2))){
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19625__$1,(4),jobs);
} else {
if((state_val_19626 === (3))){
var inst_19623 = (state_19625[(2)]);
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19625__$1,inst_19623);
} else {
if((state_val_19626 === (4))){
var inst_19615 = (state_19625[(2)]);
var inst_19616 = process.call(null,inst_19615);
var state_19625__$1 = state_19625;
if(cljs.core.truth_(inst_19616)){
var statearr_19628_19786 = state_19625__$1;
(statearr_19628_19786[(1)] = (5));

} else {
var statearr_19629_19787 = state_19625__$1;
(statearr_19629_19787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (5))){
var state_19625__$1 = state_19625;
var statearr_19630_19788 = state_19625__$1;
(statearr_19630_19788[(2)] = null);

(statearr_19630_19788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (6))){
var state_19625__$1 = state_19625;
var statearr_19631_19789 = state_19625__$1;
(statearr_19631_19789[(2)] = null);

(statearr_19631_19789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (7))){
var inst_19621 = (state_19625[(2)]);
var state_19625__$1 = state_19625;
var statearr_19632_19790 = state_19625__$1;
(statearr_19632_19790[(2)] = inst_19621);

(statearr_19632_19790[(1)] = (3));


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
});})(__19781,c__19227__auto___19784,G__19612_19782,n__17665__auto___19780,jobs,results,process,async))
;
return ((function (__19781,switch__19115__auto__,c__19227__auto___19784,G__19612_19782,n__17665__auto___19780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0 = (function (){
var statearr_19636 = [null,null,null,null,null,null,null];
(statearr_19636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__);

(statearr_19636[(1)] = (1));

return statearr_19636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1 = (function (state_19625){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19637){if((e19637 instanceof Object)){
var ex__19119__auto__ = e19637;
var statearr_19638_19791 = state_19625;
(statearr_19638_19791[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19792 = state_19625;
state_19625 = G__19792;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = function(state_19625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1.call(this,state_19625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__;
})()
;})(__19781,switch__19115__auto__,c__19227__auto___19784,G__19612_19782,n__17665__auto___19780,jobs,results,process,async))
})();
var state__19229__auto__ = (function (){var statearr_19639 = f__19228__auto__.call(null);
(statearr_19639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___19784);

return statearr_19639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(__19781,c__19227__auto___19784,G__19612_19782,n__17665__auto___19780,jobs,results,process,async))
);


break;
case "async":
var c__19227__auto___19793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19781,c__19227__auto___19793,G__19612_19782,n__17665__auto___19780,jobs,results,process,async){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (__19781,c__19227__auto___19793,G__19612_19782,n__17665__auto___19780,jobs,results,process,async){
return (function (state_19652){
var state_val_19653 = (state_19652[(1)]);
if((state_val_19653 === (1))){
var state_19652__$1 = state_19652;
var statearr_19654_19794 = state_19652__$1;
(statearr_19654_19794[(2)] = null);

(statearr_19654_19794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (2))){
var state_19652__$1 = state_19652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19652__$1,(4),jobs);
} else {
if((state_val_19653 === (3))){
var inst_19650 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19652__$1,inst_19650);
} else {
if((state_val_19653 === (4))){
var inst_19642 = (state_19652[(2)]);
var inst_19643 = async.call(null,inst_19642);
var state_19652__$1 = state_19652;
if(cljs.core.truth_(inst_19643)){
var statearr_19655_19795 = state_19652__$1;
(statearr_19655_19795[(1)] = (5));

} else {
var statearr_19656_19796 = state_19652__$1;
(statearr_19656_19796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (5))){
var state_19652__$1 = state_19652;
var statearr_19657_19797 = state_19652__$1;
(statearr_19657_19797[(2)] = null);

(statearr_19657_19797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (6))){
var state_19652__$1 = state_19652;
var statearr_19658_19798 = state_19652__$1;
(statearr_19658_19798[(2)] = null);

(statearr_19658_19798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (7))){
var inst_19648 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
var statearr_19659_19799 = state_19652__$1;
(statearr_19659_19799[(2)] = inst_19648);

(statearr_19659_19799[(1)] = (3));


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
});})(__19781,c__19227__auto___19793,G__19612_19782,n__17665__auto___19780,jobs,results,process,async))
;
return ((function (__19781,switch__19115__auto__,c__19227__auto___19793,G__19612_19782,n__17665__auto___19780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0 = (function (){
var statearr_19663 = [null,null,null,null,null,null,null];
(statearr_19663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__);

(statearr_19663[(1)] = (1));

return statearr_19663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1 = (function (state_19652){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19664){if((e19664 instanceof Object)){
var ex__19119__auto__ = e19664;
var statearr_19665_19800 = state_19652;
(statearr_19665_19800[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19801 = state_19652;
state_19652 = G__19801;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = function(state_19652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1.call(this,state_19652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__;
})()
;})(__19781,switch__19115__auto__,c__19227__auto___19793,G__19612_19782,n__17665__auto___19780,jobs,results,process,async))
})();
var state__19229__auto__ = (function (){var statearr_19666 = f__19228__auto__.call(null);
(statearr_19666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___19793);

return statearr_19666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(__19781,c__19227__auto___19793,G__19612_19782,n__17665__auto___19780,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19802 = (__19781 + (1));
__19781 = G__19802;
continue;
} else {
}
break;
}

var c__19227__auto___19803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___19803,jobs,results,process,async){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___19803,jobs,results,process,async){
return (function (state_19688){
var state_val_19689 = (state_19688[(1)]);
if((state_val_19689 === (1))){
var state_19688__$1 = state_19688;
var statearr_19690_19804 = state_19688__$1;
(statearr_19690_19804[(2)] = null);

(statearr_19690_19804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (2))){
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19688__$1,(4),from);
} else {
if((state_val_19689 === (3))){
var inst_19686 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19688__$1,inst_19686);
} else {
if((state_val_19689 === (4))){
var inst_19669 = (state_19688[(7)]);
var inst_19669__$1 = (state_19688[(2)]);
var inst_19670 = (inst_19669__$1 == null);
var state_19688__$1 = (function (){var statearr_19691 = state_19688;
(statearr_19691[(7)] = inst_19669__$1);

return statearr_19691;
})();
if(cljs.core.truth_(inst_19670)){
var statearr_19692_19805 = state_19688__$1;
(statearr_19692_19805[(1)] = (5));

} else {
var statearr_19693_19806 = state_19688__$1;
(statearr_19693_19806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (5))){
var inst_19672 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19688__$1 = state_19688;
var statearr_19694_19807 = state_19688__$1;
(statearr_19694_19807[(2)] = inst_19672);

(statearr_19694_19807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (6))){
var inst_19669 = (state_19688[(7)]);
var inst_19674 = (state_19688[(8)]);
var inst_19674__$1 = cljs.core.async.chan.call(null,(1));
var inst_19675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19676 = [inst_19669,inst_19674__$1];
var inst_19677 = (new cljs.core.PersistentVector(null,2,(5),inst_19675,inst_19676,null));
var state_19688__$1 = (function (){var statearr_19695 = state_19688;
(statearr_19695[(8)] = inst_19674__$1);

return statearr_19695;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19688__$1,(8),jobs,inst_19677);
} else {
if((state_val_19689 === (7))){
var inst_19684 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
var statearr_19696_19808 = state_19688__$1;
(statearr_19696_19808[(2)] = inst_19684);

(statearr_19696_19808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (8))){
var inst_19674 = (state_19688[(8)]);
var inst_19679 = (state_19688[(2)]);
var state_19688__$1 = (function (){var statearr_19697 = state_19688;
(statearr_19697[(9)] = inst_19679);

return statearr_19697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19688__$1,(9),results,inst_19674);
} else {
if((state_val_19689 === (9))){
var inst_19681 = (state_19688[(2)]);
var state_19688__$1 = (function (){var statearr_19698 = state_19688;
(statearr_19698[(10)] = inst_19681);

return statearr_19698;
})();
var statearr_19699_19809 = state_19688__$1;
(statearr_19699_19809[(2)] = null);

(statearr_19699_19809[(1)] = (2));


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
});})(c__19227__auto___19803,jobs,results,process,async))
;
return ((function (switch__19115__auto__,c__19227__auto___19803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0 = (function (){
var statearr_19703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__);

(statearr_19703[(1)] = (1));

return statearr_19703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1 = (function (state_19688){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19704){if((e19704 instanceof Object)){
var ex__19119__auto__ = e19704;
var statearr_19705_19810 = state_19688;
(statearr_19705_19810[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19811 = state_19688;
state_19688 = G__19811;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = function(state_19688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1.call(this,state_19688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___19803,jobs,results,process,async))
})();
var state__19229__auto__ = (function (){var statearr_19706 = f__19228__auto__.call(null);
(statearr_19706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___19803);

return statearr_19706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___19803,jobs,results,process,async))
);


var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__,jobs,results,process,async){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__,jobs,results,process,async){
return (function (state_19744){
var state_val_19745 = (state_19744[(1)]);
if((state_val_19745 === (7))){
var inst_19740 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19746_19812 = state_19744__$1;
(statearr_19746_19812[(2)] = inst_19740);

(statearr_19746_19812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (20))){
var state_19744__$1 = state_19744;
var statearr_19747_19813 = state_19744__$1;
(statearr_19747_19813[(2)] = null);

(statearr_19747_19813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (1))){
var state_19744__$1 = state_19744;
var statearr_19748_19814 = state_19744__$1;
(statearr_19748_19814[(2)] = null);

(statearr_19748_19814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (4))){
var inst_19709 = (state_19744[(7)]);
var inst_19709__$1 = (state_19744[(2)]);
var inst_19710 = (inst_19709__$1 == null);
var state_19744__$1 = (function (){var statearr_19749 = state_19744;
(statearr_19749[(7)] = inst_19709__$1);

return statearr_19749;
})();
if(cljs.core.truth_(inst_19710)){
var statearr_19750_19815 = state_19744__$1;
(statearr_19750_19815[(1)] = (5));

} else {
var statearr_19751_19816 = state_19744__$1;
(statearr_19751_19816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (15))){
var inst_19722 = (state_19744[(8)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19744__$1,(18),to,inst_19722);
} else {
if((state_val_19745 === (21))){
var inst_19735 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19752_19817 = state_19744__$1;
(statearr_19752_19817[(2)] = inst_19735);

(statearr_19752_19817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (13))){
var inst_19737 = (state_19744[(2)]);
var state_19744__$1 = (function (){var statearr_19753 = state_19744;
(statearr_19753[(9)] = inst_19737);

return statearr_19753;
})();
var statearr_19754_19818 = state_19744__$1;
(statearr_19754_19818[(2)] = null);

(statearr_19754_19818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (6))){
var inst_19709 = (state_19744[(7)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19744__$1,(11),inst_19709);
} else {
if((state_val_19745 === (17))){
var inst_19730 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
if(cljs.core.truth_(inst_19730)){
var statearr_19755_19819 = state_19744__$1;
(statearr_19755_19819[(1)] = (19));

} else {
var statearr_19756_19820 = state_19744__$1;
(statearr_19756_19820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (3))){
var inst_19742 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19744__$1,inst_19742);
} else {
if((state_val_19745 === (12))){
var inst_19719 = (state_19744[(10)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19744__$1,(14),inst_19719);
} else {
if((state_val_19745 === (2))){
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19744__$1,(4),results);
} else {
if((state_val_19745 === (19))){
var state_19744__$1 = state_19744;
var statearr_19757_19821 = state_19744__$1;
(statearr_19757_19821[(2)] = null);

(statearr_19757_19821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (11))){
var inst_19719 = (state_19744[(2)]);
var state_19744__$1 = (function (){var statearr_19758 = state_19744;
(statearr_19758[(10)] = inst_19719);

return statearr_19758;
})();
var statearr_19759_19822 = state_19744__$1;
(statearr_19759_19822[(2)] = null);

(statearr_19759_19822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (9))){
var state_19744__$1 = state_19744;
var statearr_19760_19823 = state_19744__$1;
(statearr_19760_19823[(2)] = null);

(statearr_19760_19823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (5))){
var state_19744__$1 = state_19744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19761_19824 = state_19744__$1;
(statearr_19761_19824[(1)] = (8));

} else {
var statearr_19762_19825 = state_19744__$1;
(statearr_19762_19825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (14))){
var inst_19722 = (state_19744[(8)]);
var inst_19724 = (state_19744[(11)]);
var inst_19722__$1 = (state_19744[(2)]);
var inst_19723 = (inst_19722__$1 == null);
var inst_19724__$1 = cljs.core.not.call(null,inst_19723);
var state_19744__$1 = (function (){var statearr_19763 = state_19744;
(statearr_19763[(8)] = inst_19722__$1);

(statearr_19763[(11)] = inst_19724__$1);

return statearr_19763;
})();
if(inst_19724__$1){
var statearr_19764_19826 = state_19744__$1;
(statearr_19764_19826[(1)] = (15));

} else {
var statearr_19765_19827 = state_19744__$1;
(statearr_19765_19827[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (16))){
var inst_19724 = (state_19744[(11)]);
var state_19744__$1 = state_19744;
var statearr_19766_19828 = state_19744__$1;
(statearr_19766_19828[(2)] = inst_19724);

(statearr_19766_19828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (10))){
var inst_19716 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19767_19829 = state_19744__$1;
(statearr_19767_19829[(2)] = inst_19716);

(statearr_19767_19829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (18))){
var inst_19727 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19768_19830 = state_19744__$1;
(statearr_19768_19830[(2)] = inst_19727);

(statearr_19768_19830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (8))){
var inst_19713 = cljs.core.async.close_BANG_.call(null,to);
var state_19744__$1 = state_19744;
var statearr_19769_19831 = state_19744__$1;
(statearr_19769_19831[(2)] = inst_19713);

(statearr_19769_19831[(1)] = (10));


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
});})(c__19227__auto__,jobs,results,process,async))
;
return ((function (switch__19115__auto__,c__19227__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0 = (function (){
var statearr_19773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__);

(statearr_19773[(1)] = (1));

return statearr_19773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1 = (function (state_19744){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19774){if((e19774 instanceof Object)){
var ex__19119__auto__ = e19774;
var statearr_19775_19832 = state_19744;
(statearr_19775_19832[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19833 = state_19744;
state_19744 = G__19833;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__ = function(state_19744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1.call(this,state_19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__,jobs,results,process,async))
})();
var state__19229__auto__ = (function (){var statearr_19776 = f__19228__auto__.call(null);
(statearr_19776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_19776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__,jobs,results,process,async))
);

return c__19227__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19834 = [];
var len__17820__auto___19837 = arguments.length;
var i__17821__auto___19838 = (0);
while(true){
if((i__17821__auto___19838 < len__17820__auto___19837)){
args19834.push((arguments[i__17821__auto___19838]));

var G__19839 = (i__17821__auto___19838 + (1));
i__17821__auto___19838 = G__19839;
continue;
} else {
}
break;
}

var G__19836 = args19834.length;
switch (G__19836) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19834.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19841 = [];
var len__17820__auto___19844 = arguments.length;
var i__17821__auto___19845 = (0);
while(true){
if((i__17821__auto___19845 < len__17820__auto___19844)){
args19841.push((arguments[i__17821__auto___19845]));

var G__19846 = (i__17821__auto___19845 + (1));
i__17821__auto___19845 = G__19846;
continue;
} else {
}
break;
}

var G__19843 = args19841.length;
switch (G__19843) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19841.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19848 = [];
var len__17820__auto___19901 = arguments.length;
var i__17821__auto___19902 = (0);
while(true){
if((i__17821__auto___19902 < len__17820__auto___19901)){
args19848.push((arguments[i__17821__auto___19902]));

var G__19903 = (i__17821__auto___19902 + (1));
i__17821__auto___19902 = G__19903;
continue;
} else {
}
break;
}

var G__19850 = args19848.length;
switch (G__19850) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19848.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19227__auto___19905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___19905,tc,fc){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___19905,tc,fc){
return (function (state_19876){
var state_val_19877 = (state_19876[(1)]);
if((state_val_19877 === (7))){
var inst_19872 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
var statearr_19878_19906 = state_19876__$1;
(statearr_19878_19906[(2)] = inst_19872);

(statearr_19878_19906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (1))){
var state_19876__$1 = state_19876;
var statearr_19879_19907 = state_19876__$1;
(statearr_19879_19907[(2)] = null);

(statearr_19879_19907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (4))){
var inst_19853 = (state_19876[(7)]);
var inst_19853__$1 = (state_19876[(2)]);
var inst_19854 = (inst_19853__$1 == null);
var state_19876__$1 = (function (){var statearr_19880 = state_19876;
(statearr_19880[(7)] = inst_19853__$1);

return statearr_19880;
})();
if(cljs.core.truth_(inst_19854)){
var statearr_19881_19908 = state_19876__$1;
(statearr_19881_19908[(1)] = (5));

} else {
var statearr_19882_19909 = state_19876__$1;
(statearr_19882_19909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (13))){
var state_19876__$1 = state_19876;
var statearr_19883_19910 = state_19876__$1;
(statearr_19883_19910[(2)] = null);

(statearr_19883_19910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (6))){
var inst_19853 = (state_19876[(7)]);
var inst_19859 = p.call(null,inst_19853);
var state_19876__$1 = state_19876;
if(cljs.core.truth_(inst_19859)){
var statearr_19884_19911 = state_19876__$1;
(statearr_19884_19911[(1)] = (9));

} else {
var statearr_19885_19912 = state_19876__$1;
(statearr_19885_19912[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (3))){
var inst_19874 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19876__$1,inst_19874);
} else {
if((state_val_19877 === (12))){
var state_19876__$1 = state_19876;
var statearr_19886_19913 = state_19876__$1;
(statearr_19886_19913[(2)] = null);

(statearr_19886_19913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (2))){
var state_19876__$1 = state_19876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19876__$1,(4),ch);
} else {
if((state_val_19877 === (11))){
var inst_19853 = (state_19876[(7)]);
var inst_19863 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19876__$1,(8),inst_19863,inst_19853);
} else {
if((state_val_19877 === (9))){
var state_19876__$1 = state_19876;
var statearr_19887_19914 = state_19876__$1;
(statearr_19887_19914[(2)] = tc);

(statearr_19887_19914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (5))){
var inst_19856 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19857 = cljs.core.async.close_BANG_.call(null,fc);
var state_19876__$1 = (function (){var statearr_19888 = state_19876;
(statearr_19888[(8)] = inst_19856);

return statearr_19888;
})();
var statearr_19889_19915 = state_19876__$1;
(statearr_19889_19915[(2)] = inst_19857);

(statearr_19889_19915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (14))){
var inst_19870 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
var statearr_19890_19916 = state_19876__$1;
(statearr_19890_19916[(2)] = inst_19870);

(statearr_19890_19916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (10))){
var state_19876__$1 = state_19876;
var statearr_19891_19917 = state_19876__$1;
(statearr_19891_19917[(2)] = fc);

(statearr_19891_19917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (8))){
var inst_19865 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
if(cljs.core.truth_(inst_19865)){
var statearr_19892_19918 = state_19876__$1;
(statearr_19892_19918[(1)] = (12));

} else {
var statearr_19893_19919 = state_19876__$1;
(statearr_19893_19919[(1)] = (13));

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
});})(c__19227__auto___19905,tc,fc))
;
return ((function (switch__19115__auto__,c__19227__auto___19905,tc,fc){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_19897 = [null,null,null,null,null,null,null,null,null];
(statearr_19897[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_19897[(1)] = (1));

return statearr_19897;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_19876){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e19898){if((e19898 instanceof Object)){
var ex__19119__auto__ = e19898;
var statearr_19899_19920 = state_19876;
(statearr_19899_19920[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19921 = state_19876;
state_19876 = G__19921;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_19876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_19876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___19905,tc,fc))
})();
var state__19229__auto__ = (function (){var statearr_19900 = f__19228__auto__.call(null);
(statearr_19900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___19905);

return statearr_19900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___19905,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__){
return (function (state_19985){
var state_val_19986 = (state_19985[(1)]);
if((state_val_19986 === (7))){
var inst_19981 = (state_19985[(2)]);
var state_19985__$1 = state_19985;
var statearr_19987_20008 = state_19985__$1;
(statearr_19987_20008[(2)] = inst_19981);

(statearr_19987_20008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (1))){
var inst_19965 = init;
var state_19985__$1 = (function (){var statearr_19988 = state_19985;
(statearr_19988[(7)] = inst_19965);

return statearr_19988;
})();
var statearr_19989_20009 = state_19985__$1;
(statearr_19989_20009[(2)] = null);

(statearr_19989_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (4))){
var inst_19968 = (state_19985[(8)]);
var inst_19968__$1 = (state_19985[(2)]);
var inst_19969 = (inst_19968__$1 == null);
var state_19985__$1 = (function (){var statearr_19990 = state_19985;
(statearr_19990[(8)] = inst_19968__$1);

return statearr_19990;
})();
if(cljs.core.truth_(inst_19969)){
var statearr_19991_20010 = state_19985__$1;
(statearr_19991_20010[(1)] = (5));

} else {
var statearr_19992_20011 = state_19985__$1;
(statearr_19992_20011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (6))){
var inst_19965 = (state_19985[(7)]);
var inst_19972 = (state_19985[(9)]);
var inst_19968 = (state_19985[(8)]);
var inst_19972__$1 = f.call(null,inst_19965,inst_19968);
var inst_19973 = cljs.core.reduced_QMARK_.call(null,inst_19972__$1);
var state_19985__$1 = (function (){var statearr_19993 = state_19985;
(statearr_19993[(9)] = inst_19972__$1);

return statearr_19993;
})();
if(inst_19973){
var statearr_19994_20012 = state_19985__$1;
(statearr_19994_20012[(1)] = (8));

} else {
var statearr_19995_20013 = state_19985__$1;
(statearr_19995_20013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (3))){
var inst_19983 = (state_19985[(2)]);
var state_19985__$1 = state_19985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19985__$1,inst_19983);
} else {
if((state_val_19986 === (2))){
var state_19985__$1 = state_19985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19985__$1,(4),ch);
} else {
if((state_val_19986 === (9))){
var inst_19972 = (state_19985[(9)]);
var inst_19965 = inst_19972;
var state_19985__$1 = (function (){var statearr_19996 = state_19985;
(statearr_19996[(7)] = inst_19965);

return statearr_19996;
})();
var statearr_19997_20014 = state_19985__$1;
(statearr_19997_20014[(2)] = null);

(statearr_19997_20014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (5))){
var inst_19965 = (state_19985[(7)]);
var state_19985__$1 = state_19985;
var statearr_19998_20015 = state_19985__$1;
(statearr_19998_20015[(2)] = inst_19965);

(statearr_19998_20015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (10))){
var inst_19979 = (state_19985[(2)]);
var state_19985__$1 = state_19985;
var statearr_19999_20016 = state_19985__$1;
(statearr_19999_20016[(2)] = inst_19979);

(statearr_19999_20016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19986 === (8))){
var inst_19972 = (state_19985[(9)]);
var inst_19975 = cljs.core.deref.call(null,inst_19972);
var state_19985__$1 = state_19985;
var statearr_20000_20017 = state_19985__$1;
(statearr_20000_20017[(2)] = inst_19975);

(statearr_20000_20017[(1)] = (10));


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
});})(c__19227__auto__))
;
return ((function (switch__19115__auto__,c__19227__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19116__auto____0 = (function (){
var statearr_20004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20004[(0)] = cljs$core$async$reduce_$_state_machine__19116__auto__);

(statearr_20004[(1)] = (1));

return statearr_20004;
});
var cljs$core$async$reduce_$_state_machine__19116__auto____1 = (function (state_19985){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_19985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e20005){if((e20005 instanceof Object)){
var ex__19119__auto__ = e20005;
var statearr_20006_20018 = state_19985;
(statearr_20006_20018[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20019 = state_19985;
state_19985 = G__20019;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19116__auto__ = function(state_19985){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19116__auto____1.call(this,state_19985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19116__auto____0;
cljs$core$async$reduce_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19116__auto____1;
return cljs$core$async$reduce_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__))
})();
var state__19229__auto__ = (function (){var statearr_20007 = f__19228__auto__.call(null);
(statearr_20007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_20007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__))
);

return c__19227__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20020 = [];
var len__17820__auto___20072 = arguments.length;
var i__17821__auto___20073 = (0);
while(true){
if((i__17821__auto___20073 < len__17820__auto___20072)){
args20020.push((arguments[i__17821__auto___20073]));

var G__20074 = (i__17821__auto___20073 + (1));
i__17821__auto___20073 = G__20074;
continue;
} else {
}
break;
}

var G__20022 = args20020.length;
switch (G__20022) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20020.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__){
return (function (state_20047){
var state_val_20048 = (state_20047[(1)]);
if((state_val_20048 === (7))){
var inst_20029 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
var statearr_20049_20076 = state_20047__$1;
(statearr_20049_20076[(2)] = inst_20029);

(statearr_20049_20076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (1))){
var inst_20023 = cljs.core.seq.call(null,coll);
var inst_20024 = inst_20023;
var state_20047__$1 = (function (){var statearr_20050 = state_20047;
(statearr_20050[(7)] = inst_20024);

return statearr_20050;
})();
var statearr_20051_20077 = state_20047__$1;
(statearr_20051_20077[(2)] = null);

(statearr_20051_20077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (4))){
var inst_20024 = (state_20047[(7)]);
var inst_20027 = cljs.core.first.call(null,inst_20024);
var state_20047__$1 = state_20047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20047__$1,(7),ch,inst_20027);
} else {
if((state_val_20048 === (13))){
var inst_20041 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
var statearr_20052_20078 = state_20047__$1;
(statearr_20052_20078[(2)] = inst_20041);

(statearr_20052_20078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (6))){
var inst_20032 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
if(cljs.core.truth_(inst_20032)){
var statearr_20053_20079 = state_20047__$1;
(statearr_20053_20079[(1)] = (8));

} else {
var statearr_20054_20080 = state_20047__$1;
(statearr_20054_20080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (3))){
var inst_20045 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20047__$1,inst_20045);
} else {
if((state_val_20048 === (12))){
var state_20047__$1 = state_20047;
var statearr_20055_20081 = state_20047__$1;
(statearr_20055_20081[(2)] = null);

(statearr_20055_20081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (2))){
var inst_20024 = (state_20047[(7)]);
var state_20047__$1 = state_20047;
if(cljs.core.truth_(inst_20024)){
var statearr_20056_20082 = state_20047__$1;
(statearr_20056_20082[(1)] = (4));

} else {
var statearr_20057_20083 = state_20047__$1;
(statearr_20057_20083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (11))){
var inst_20038 = cljs.core.async.close_BANG_.call(null,ch);
var state_20047__$1 = state_20047;
var statearr_20058_20084 = state_20047__$1;
(statearr_20058_20084[(2)] = inst_20038);

(statearr_20058_20084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (9))){
var state_20047__$1 = state_20047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20059_20085 = state_20047__$1;
(statearr_20059_20085[(1)] = (11));

} else {
var statearr_20060_20086 = state_20047__$1;
(statearr_20060_20086[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (5))){
var inst_20024 = (state_20047[(7)]);
var state_20047__$1 = state_20047;
var statearr_20061_20087 = state_20047__$1;
(statearr_20061_20087[(2)] = inst_20024);

(statearr_20061_20087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (10))){
var inst_20043 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
var statearr_20062_20088 = state_20047__$1;
(statearr_20062_20088[(2)] = inst_20043);

(statearr_20062_20088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (8))){
var inst_20024 = (state_20047[(7)]);
var inst_20034 = cljs.core.next.call(null,inst_20024);
var inst_20024__$1 = inst_20034;
var state_20047__$1 = (function (){var statearr_20063 = state_20047;
(statearr_20063[(7)] = inst_20024__$1);

return statearr_20063;
})();
var statearr_20064_20089 = state_20047__$1;
(statearr_20064_20089[(2)] = null);

(statearr_20064_20089[(1)] = (2));


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
});})(c__19227__auto__))
;
return ((function (switch__19115__auto__,c__19227__auto__){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_20068 = [null,null,null,null,null,null,null,null];
(statearr_20068[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_20068[(1)] = (1));

return statearr_20068;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_20047){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_20047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e20069){if((e20069 instanceof Object)){
var ex__19119__auto__ = e20069;
var statearr_20070_20090 = state_20047;
(statearr_20070_20090[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20091 = state_20047;
state_20047 = G__20091;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_20047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_20047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__))
})();
var state__19229__auto__ = (function (){var statearr_20071 = f__19228__auto__.call(null);
(statearr_20071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_20071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__))
);

return c__19227__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17417__auto__ = (((_ == null))?null:_);
var m__17418__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,_);
} else {
var m__17418__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17418__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m,ch);
} else {
var m__17418__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m);
} else {
var m__17418__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20313 = (function (mult,ch,cs,meta20314){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20314 = meta20314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20315,meta20314__$1){
var self__ = this;
var _20315__$1 = this;
return (new cljs.core.async.t_cljs$core$async20313(self__.mult,self__.ch,self__.cs,meta20314__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20315){
var self__ = this;
var _20315__$1 = this;
return self__.meta20314;
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20314","meta20314",-221135995,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20313";

cljs.core.async.t_cljs$core$async20313.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async20313");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20313 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20313(mult__$1,ch__$1,cs__$1,meta20314){
return (new cljs.core.async.t_cljs$core$async20313(mult__$1,ch__$1,cs__$1,meta20314));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20313(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19227__auto___20534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___20534,cs,m,dchan,dctr,done){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___20534,cs,m,dchan,dctr,done){
return (function (state_20446){
var state_val_20447 = (state_20446[(1)]);
if((state_val_20447 === (7))){
var inst_20442 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20448_20535 = state_20446__$1;
(statearr_20448_20535[(2)] = inst_20442);

(statearr_20448_20535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (20))){
var inst_20347 = (state_20446[(7)]);
var inst_20357 = cljs.core.first.call(null,inst_20347);
var inst_20358 = cljs.core.nth.call(null,inst_20357,(0),null);
var inst_20359 = cljs.core.nth.call(null,inst_20357,(1),null);
var state_20446__$1 = (function (){var statearr_20449 = state_20446;
(statearr_20449[(8)] = inst_20358);

return statearr_20449;
})();
if(cljs.core.truth_(inst_20359)){
var statearr_20450_20536 = state_20446__$1;
(statearr_20450_20536[(1)] = (22));

} else {
var statearr_20451_20537 = state_20446__$1;
(statearr_20451_20537[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (27))){
var inst_20394 = (state_20446[(9)]);
var inst_20318 = (state_20446[(10)]);
var inst_20389 = (state_20446[(11)]);
var inst_20387 = (state_20446[(12)]);
var inst_20394__$1 = cljs.core._nth.call(null,inst_20387,inst_20389);
var inst_20395 = cljs.core.async.put_BANG_.call(null,inst_20394__$1,inst_20318,done);
var state_20446__$1 = (function (){var statearr_20452 = state_20446;
(statearr_20452[(9)] = inst_20394__$1);

return statearr_20452;
})();
if(cljs.core.truth_(inst_20395)){
var statearr_20453_20538 = state_20446__$1;
(statearr_20453_20538[(1)] = (30));

} else {
var statearr_20454_20539 = state_20446__$1;
(statearr_20454_20539[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (1))){
var state_20446__$1 = state_20446;
var statearr_20455_20540 = state_20446__$1;
(statearr_20455_20540[(2)] = null);

(statearr_20455_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (24))){
var inst_20347 = (state_20446[(7)]);
var inst_20364 = (state_20446[(2)]);
var inst_20365 = cljs.core.next.call(null,inst_20347);
var inst_20327 = inst_20365;
var inst_20328 = null;
var inst_20329 = (0);
var inst_20330 = (0);
var state_20446__$1 = (function (){var statearr_20456 = state_20446;
(statearr_20456[(13)] = inst_20364);

(statearr_20456[(14)] = inst_20328);

(statearr_20456[(15)] = inst_20327);

(statearr_20456[(16)] = inst_20329);

(statearr_20456[(17)] = inst_20330);

return statearr_20456;
})();
var statearr_20457_20541 = state_20446__$1;
(statearr_20457_20541[(2)] = null);

(statearr_20457_20541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (39))){
var state_20446__$1 = state_20446;
var statearr_20461_20542 = state_20446__$1;
(statearr_20461_20542[(2)] = null);

(statearr_20461_20542[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (4))){
var inst_20318 = (state_20446[(10)]);
var inst_20318__$1 = (state_20446[(2)]);
var inst_20319 = (inst_20318__$1 == null);
var state_20446__$1 = (function (){var statearr_20462 = state_20446;
(statearr_20462[(10)] = inst_20318__$1);

return statearr_20462;
})();
if(cljs.core.truth_(inst_20319)){
var statearr_20463_20543 = state_20446__$1;
(statearr_20463_20543[(1)] = (5));

} else {
var statearr_20464_20544 = state_20446__$1;
(statearr_20464_20544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (15))){
var inst_20328 = (state_20446[(14)]);
var inst_20327 = (state_20446[(15)]);
var inst_20329 = (state_20446[(16)]);
var inst_20330 = (state_20446[(17)]);
var inst_20343 = (state_20446[(2)]);
var inst_20344 = (inst_20330 + (1));
var tmp20458 = inst_20328;
var tmp20459 = inst_20327;
var tmp20460 = inst_20329;
var inst_20327__$1 = tmp20459;
var inst_20328__$1 = tmp20458;
var inst_20329__$1 = tmp20460;
var inst_20330__$1 = inst_20344;
var state_20446__$1 = (function (){var statearr_20465 = state_20446;
(statearr_20465[(14)] = inst_20328__$1);

(statearr_20465[(15)] = inst_20327__$1);

(statearr_20465[(18)] = inst_20343);

(statearr_20465[(16)] = inst_20329__$1);

(statearr_20465[(17)] = inst_20330__$1);

return statearr_20465;
})();
var statearr_20466_20545 = state_20446__$1;
(statearr_20466_20545[(2)] = null);

(statearr_20466_20545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (21))){
var inst_20368 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20470_20546 = state_20446__$1;
(statearr_20470_20546[(2)] = inst_20368);

(statearr_20470_20546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (31))){
var inst_20394 = (state_20446[(9)]);
var inst_20398 = done.call(null,null);
var inst_20399 = cljs.core.async.untap_STAR_.call(null,m,inst_20394);
var state_20446__$1 = (function (){var statearr_20471 = state_20446;
(statearr_20471[(19)] = inst_20398);

return statearr_20471;
})();
var statearr_20472_20547 = state_20446__$1;
(statearr_20472_20547[(2)] = inst_20399);

(statearr_20472_20547[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (32))){
var inst_20389 = (state_20446[(11)]);
var inst_20387 = (state_20446[(12)]);
var inst_20386 = (state_20446[(20)]);
var inst_20388 = (state_20446[(21)]);
var inst_20401 = (state_20446[(2)]);
var inst_20402 = (inst_20389 + (1));
var tmp20467 = inst_20387;
var tmp20468 = inst_20386;
var tmp20469 = inst_20388;
var inst_20386__$1 = tmp20468;
var inst_20387__$1 = tmp20467;
var inst_20388__$1 = tmp20469;
var inst_20389__$1 = inst_20402;
var state_20446__$1 = (function (){var statearr_20473 = state_20446;
(statearr_20473[(11)] = inst_20389__$1);

(statearr_20473[(12)] = inst_20387__$1);

(statearr_20473[(20)] = inst_20386__$1);

(statearr_20473[(21)] = inst_20388__$1);

(statearr_20473[(22)] = inst_20401);

return statearr_20473;
})();
var statearr_20474_20548 = state_20446__$1;
(statearr_20474_20548[(2)] = null);

(statearr_20474_20548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (40))){
var inst_20414 = (state_20446[(23)]);
var inst_20418 = done.call(null,null);
var inst_20419 = cljs.core.async.untap_STAR_.call(null,m,inst_20414);
var state_20446__$1 = (function (){var statearr_20475 = state_20446;
(statearr_20475[(24)] = inst_20418);

return statearr_20475;
})();
var statearr_20476_20549 = state_20446__$1;
(statearr_20476_20549[(2)] = inst_20419);

(statearr_20476_20549[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (33))){
var inst_20405 = (state_20446[(25)]);
var inst_20407 = cljs.core.chunked_seq_QMARK_.call(null,inst_20405);
var state_20446__$1 = state_20446;
if(inst_20407){
var statearr_20477_20550 = state_20446__$1;
(statearr_20477_20550[(1)] = (36));

} else {
var statearr_20478_20551 = state_20446__$1;
(statearr_20478_20551[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (13))){
var inst_20337 = (state_20446[(26)]);
var inst_20340 = cljs.core.async.close_BANG_.call(null,inst_20337);
var state_20446__$1 = state_20446;
var statearr_20479_20552 = state_20446__$1;
(statearr_20479_20552[(2)] = inst_20340);

(statearr_20479_20552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (22))){
var inst_20358 = (state_20446[(8)]);
var inst_20361 = cljs.core.async.close_BANG_.call(null,inst_20358);
var state_20446__$1 = state_20446;
var statearr_20480_20553 = state_20446__$1;
(statearr_20480_20553[(2)] = inst_20361);

(statearr_20480_20553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (36))){
var inst_20405 = (state_20446[(25)]);
var inst_20409 = cljs.core.chunk_first.call(null,inst_20405);
var inst_20410 = cljs.core.chunk_rest.call(null,inst_20405);
var inst_20411 = cljs.core.count.call(null,inst_20409);
var inst_20386 = inst_20410;
var inst_20387 = inst_20409;
var inst_20388 = inst_20411;
var inst_20389 = (0);
var state_20446__$1 = (function (){var statearr_20481 = state_20446;
(statearr_20481[(11)] = inst_20389);

(statearr_20481[(12)] = inst_20387);

(statearr_20481[(20)] = inst_20386);

(statearr_20481[(21)] = inst_20388);

return statearr_20481;
})();
var statearr_20482_20554 = state_20446__$1;
(statearr_20482_20554[(2)] = null);

(statearr_20482_20554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (41))){
var inst_20405 = (state_20446[(25)]);
var inst_20421 = (state_20446[(2)]);
var inst_20422 = cljs.core.next.call(null,inst_20405);
var inst_20386 = inst_20422;
var inst_20387 = null;
var inst_20388 = (0);
var inst_20389 = (0);
var state_20446__$1 = (function (){var statearr_20483 = state_20446;
(statearr_20483[(11)] = inst_20389);

(statearr_20483[(12)] = inst_20387);

(statearr_20483[(27)] = inst_20421);

(statearr_20483[(20)] = inst_20386);

(statearr_20483[(21)] = inst_20388);

return statearr_20483;
})();
var statearr_20484_20555 = state_20446__$1;
(statearr_20484_20555[(2)] = null);

(statearr_20484_20555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (43))){
var state_20446__$1 = state_20446;
var statearr_20485_20556 = state_20446__$1;
(statearr_20485_20556[(2)] = null);

(statearr_20485_20556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (29))){
var inst_20430 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20486_20557 = state_20446__$1;
(statearr_20486_20557[(2)] = inst_20430);

(statearr_20486_20557[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (44))){
var inst_20439 = (state_20446[(2)]);
var state_20446__$1 = (function (){var statearr_20487 = state_20446;
(statearr_20487[(28)] = inst_20439);

return statearr_20487;
})();
var statearr_20488_20558 = state_20446__$1;
(statearr_20488_20558[(2)] = null);

(statearr_20488_20558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (6))){
var inst_20378 = (state_20446[(29)]);
var inst_20377 = cljs.core.deref.call(null,cs);
var inst_20378__$1 = cljs.core.keys.call(null,inst_20377);
var inst_20379 = cljs.core.count.call(null,inst_20378__$1);
var inst_20380 = cljs.core.reset_BANG_.call(null,dctr,inst_20379);
var inst_20385 = cljs.core.seq.call(null,inst_20378__$1);
var inst_20386 = inst_20385;
var inst_20387 = null;
var inst_20388 = (0);
var inst_20389 = (0);
var state_20446__$1 = (function (){var statearr_20489 = state_20446;
(statearr_20489[(11)] = inst_20389);

(statearr_20489[(12)] = inst_20387);

(statearr_20489[(20)] = inst_20386);

(statearr_20489[(30)] = inst_20380);

(statearr_20489[(29)] = inst_20378__$1);

(statearr_20489[(21)] = inst_20388);

return statearr_20489;
})();
var statearr_20490_20559 = state_20446__$1;
(statearr_20490_20559[(2)] = null);

(statearr_20490_20559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (28))){
var inst_20386 = (state_20446[(20)]);
var inst_20405 = (state_20446[(25)]);
var inst_20405__$1 = cljs.core.seq.call(null,inst_20386);
var state_20446__$1 = (function (){var statearr_20491 = state_20446;
(statearr_20491[(25)] = inst_20405__$1);

return statearr_20491;
})();
if(inst_20405__$1){
var statearr_20492_20560 = state_20446__$1;
(statearr_20492_20560[(1)] = (33));

} else {
var statearr_20493_20561 = state_20446__$1;
(statearr_20493_20561[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (25))){
var inst_20389 = (state_20446[(11)]);
var inst_20388 = (state_20446[(21)]);
var inst_20391 = (inst_20389 < inst_20388);
var inst_20392 = inst_20391;
var state_20446__$1 = state_20446;
if(cljs.core.truth_(inst_20392)){
var statearr_20494_20562 = state_20446__$1;
(statearr_20494_20562[(1)] = (27));

} else {
var statearr_20495_20563 = state_20446__$1;
(statearr_20495_20563[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (34))){
var state_20446__$1 = state_20446;
var statearr_20496_20564 = state_20446__$1;
(statearr_20496_20564[(2)] = null);

(statearr_20496_20564[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (17))){
var state_20446__$1 = state_20446;
var statearr_20497_20565 = state_20446__$1;
(statearr_20497_20565[(2)] = null);

(statearr_20497_20565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (3))){
var inst_20444 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20446__$1,inst_20444);
} else {
if((state_val_20447 === (12))){
var inst_20373 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20498_20566 = state_20446__$1;
(statearr_20498_20566[(2)] = inst_20373);

(statearr_20498_20566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (2))){
var state_20446__$1 = state_20446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20446__$1,(4),ch);
} else {
if((state_val_20447 === (23))){
var state_20446__$1 = state_20446;
var statearr_20499_20567 = state_20446__$1;
(statearr_20499_20567[(2)] = null);

(statearr_20499_20567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (35))){
var inst_20428 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20500_20568 = state_20446__$1;
(statearr_20500_20568[(2)] = inst_20428);

(statearr_20500_20568[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (19))){
var inst_20347 = (state_20446[(7)]);
var inst_20351 = cljs.core.chunk_first.call(null,inst_20347);
var inst_20352 = cljs.core.chunk_rest.call(null,inst_20347);
var inst_20353 = cljs.core.count.call(null,inst_20351);
var inst_20327 = inst_20352;
var inst_20328 = inst_20351;
var inst_20329 = inst_20353;
var inst_20330 = (0);
var state_20446__$1 = (function (){var statearr_20501 = state_20446;
(statearr_20501[(14)] = inst_20328);

(statearr_20501[(15)] = inst_20327);

(statearr_20501[(16)] = inst_20329);

(statearr_20501[(17)] = inst_20330);

return statearr_20501;
})();
var statearr_20502_20569 = state_20446__$1;
(statearr_20502_20569[(2)] = null);

(statearr_20502_20569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (11))){
var inst_20327 = (state_20446[(15)]);
var inst_20347 = (state_20446[(7)]);
var inst_20347__$1 = cljs.core.seq.call(null,inst_20327);
var state_20446__$1 = (function (){var statearr_20503 = state_20446;
(statearr_20503[(7)] = inst_20347__$1);

return statearr_20503;
})();
if(inst_20347__$1){
var statearr_20504_20570 = state_20446__$1;
(statearr_20504_20570[(1)] = (16));

} else {
var statearr_20505_20571 = state_20446__$1;
(statearr_20505_20571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (9))){
var inst_20375 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20506_20572 = state_20446__$1;
(statearr_20506_20572[(2)] = inst_20375);

(statearr_20506_20572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (5))){
var inst_20325 = cljs.core.deref.call(null,cs);
var inst_20326 = cljs.core.seq.call(null,inst_20325);
var inst_20327 = inst_20326;
var inst_20328 = null;
var inst_20329 = (0);
var inst_20330 = (0);
var state_20446__$1 = (function (){var statearr_20507 = state_20446;
(statearr_20507[(14)] = inst_20328);

(statearr_20507[(15)] = inst_20327);

(statearr_20507[(16)] = inst_20329);

(statearr_20507[(17)] = inst_20330);

return statearr_20507;
})();
var statearr_20508_20573 = state_20446__$1;
(statearr_20508_20573[(2)] = null);

(statearr_20508_20573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (14))){
var state_20446__$1 = state_20446;
var statearr_20509_20574 = state_20446__$1;
(statearr_20509_20574[(2)] = null);

(statearr_20509_20574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (45))){
var inst_20436 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20510_20575 = state_20446__$1;
(statearr_20510_20575[(2)] = inst_20436);

(statearr_20510_20575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (26))){
var inst_20378 = (state_20446[(29)]);
var inst_20432 = (state_20446[(2)]);
var inst_20433 = cljs.core.seq.call(null,inst_20378);
var state_20446__$1 = (function (){var statearr_20511 = state_20446;
(statearr_20511[(31)] = inst_20432);

return statearr_20511;
})();
if(inst_20433){
var statearr_20512_20576 = state_20446__$1;
(statearr_20512_20576[(1)] = (42));

} else {
var statearr_20513_20577 = state_20446__$1;
(statearr_20513_20577[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (16))){
var inst_20347 = (state_20446[(7)]);
var inst_20349 = cljs.core.chunked_seq_QMARK_.call(null,inst_20347);
var state_20446__$1 = state_20446;
if(inst_20349){
var statearr_20514_20578 = state_20446__$1;
(statearr_20514_20578[(1)] = (19));

} else {
var statearr_20515_20579 = state_20446__$1;
(statearr_20515_20579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (38))){
var inst_20425 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20516_20580 = state_20446__$1;
(statearr_20516_20580[(2)] = inst_20425);

(statearr_20516_20580[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (30))){
var state_20446__$1 = state_20446;
var statearr_20517_20581 = state_20446__$1;
(statearr_20517_20581[(2)] = null);

(statearr_20517_20581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (10))){
var inst_20328 = (state_20446[(14)]);
var inst_20330 = (state_20446[(17)]);
var inst_20336 = cljs.core._nth.call(null,inst_20328,inst_20330);
var inst_20337 = cljs.core.nth.call(null,inst_20336,(0),null);
var inst_20338 = cljs.core.nth.call(null,inst_20336,(1),null);
var state_20446__$1 = (function (){var statearr_20518 = state_20446;
(statearr_20518[(26)] = inst_20337);

return statearr_20518;
})();
if(cljs.core.truth_(inst_20338)){
var statearr_20519_20582 = state_20446__$1;
(statearr_20519_20582[(1)] = (13));

} else {
var statearr_20520_20583 = state_20446__$1;
(statearr_20520_20583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (18))){
var inst_20371 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20521_20584 = state_20446__$1;
(statearr_20521_20584[(2)] = inst_20371);

(statearr_20521_20584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (42))){
var state_20446__$1 = state_20446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20446__$1,(45),dchan);
} else {
if((state_val_20447 === (37))){
var inst_20318 = (state_20446[(10)]);
var inst_20414 = (state_20446[(23)]);
var inst_20405 = (state_20446[(25)]);
var inst_20414__$1 = cljs.core.first.call(null,inst_20405);
var inst_20415 = cljs.core.async.put_BANG_.call(null,inst_20414__$1,inst_20318,done);
var state_20446__$1 = (function (){var statearr_20522 = state_20446;
(statearr_20522[(23)] = inst_20414__$1);

return statearr_20522;
})();
if(cljs.core.truth_(inst_20415)){
var statearr_20523_20585 = state_20446__$1;
(statearr_20523_20585[(1)] = (39));

} else {
var statearr_20524_20586 = state_20446__$1;
(statearr_20524_20586[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (8))){
var inst_20329 = (state_20446[(16)]);
var inst_20330 = (state_20446[(17)]);
var inst_20332 = (inst_20330 < inst_20329);
var inst_20333 = inst_20332;
var state_20446__$1 = state_20446;
if(cljs.core.truth_(inst_20333)){
var statearr_20525_20587 = state_20446__$1;
(statearr_20525_20587[(1)] = (10));

} else {
var statearr_20526_20588 = state_20446__$1;
(statearr_20526_20588[(1)] = (11));

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
});})(c__19227__auto___20534,cs,m,dchan,dctr,done))
;
return ((function (switch__19115__auto__,c__19227__auto___20534,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19116__auto__ = null;
var cljs$core$async$mult_$_state_machine__19116__auto____0 = (function (){
var statearr_20530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20530[(0)] = cljs$core$async$mult_$_state_machine__19116__auto__);

(statearr_20530[(1)] = (1));

return statearr_20530;
});
var cljs$core$async$mult_$_state_machine__19116__auto____1 = (function (state_20446){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_20446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e20531){if((e20531 instanceof Object)){
var ex__19119__auto__ = e20531;
var statearr_20532_20589 = state_20446;
(statearr_20532_20589[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20590 = state_20446;
state_20446 = G__20590;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19116__auto__ = function(state_20446){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19116__auto____1.call(this,state_20446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19116__auto____0;
cljs$core$async$mult_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19116__auto____1;
return cljs$core$async$mult_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___20534,cs,m,dchan,dctr,done))
})();
var state__19229__auto__ = (function (){var statearr_20533 = f__19228__auto__.call(null);
(statearr_20533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___20534);

return statearr_20533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___20534,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20591 = [];
var len__17820__auto___20594 = arguments.length;
var i__17821__auto___20595 = (0);
while(true){
if((i__17821__auto___20595 < len__17820__auto___20594)){
args20591.push((arguments[i__17821__auto___20595]));

var G__20596 = (i__17821__auto___20595 + (1));
i__17821__auto___20595 = G__20596;
continue;
} else {
}
break;
}

var G__20593 = args20591.length;
switch (G__20593) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20591.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m,ch);
} else {
var m__17418__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m,ch);
} else {
var m__17418__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m);
} else {
var m__17418__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m,state_map);
} else {
var m__17418__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17417__auto__ = (((m == null))?null:m);
var m__17418__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,m,mode);
} else {
var m__17418__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17827__auto__ = [];
var len__17820__auto___20608 = arguments.length;
var i__17821__auto___20609 = (0);
while(true){
if((i__17821__auto___20609 < len__17820__auto___20608)){
args__17827__auto__.push((arguments[i__17821__auto___20609]));

var G__20610 = (i__17821__auto___20609 + (1));
i__17821__auto___20609 = G__20610;
continue;
} else {
}
break;
}

var argseq__17828__auto__ = ((((3) < args__17827__auto__.length))?(new cljs.core.IndexedSeq(args__17827__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17828__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20602){
var map__20603 = p__20602;
var map__20603__$1 = ((((!((map__20603 == null)))?((((map__20603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20603):map__20603);
var opts = map__20603__$1;
var statearr_20605_20611 = state;
(statearr_20605_20611[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20603,map__20603__$1,opts){
return (function (val){
var statearr_20606_20612 = state;
(statearr_20606_20612[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20603,map__20603__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20607_20613 = state;
(statearr_20607_20613[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20598){
var G__20599 = cljs.core.first.call(null,seq20598);
var seq20598__$1 = cljs.core.next.call(null,seq20598);
var G__20600 = cljs.core.first.call(null,seq20598__$1);
var seq20598__$2 = cljs.core.next.call(null,seq20598__$1);
var G__20601 = cljs.core.first.call(null,seq20598__$2);
var seq20598__$3 = cljs.core.next.call(null,seq20598__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20599,G__20600,G__20601,seq20598__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20777 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20778){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20778 = meta20778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20779,meta20778__$1){
var self__ = this;
var _20779__$1 = this;
return (new cljs.core.async.t_cljs$core$async20777(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20778__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20779){
var self__ = this;
var _20779__$1 = this;
return self__.meta20778;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20778","meta20778",-894584271,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20777";

cljs.core.async.t_cljs$core$async20777.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async20777");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20777 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20777(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20778){
return (new cljs.core.async.t_cljs$core$async20777(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20778));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20777(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19227__auto___20940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___20940,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___20940,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20877){
var state_val_20878 = (state_20877[(1)]);
if((state_val_20878 === (7))){
var inst_20795 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
var statearr_20879_20941 = state_20877__$1;
(statearr_20879_20941[(2)] = inst_20795);

(statearr_20879_20941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (20))){
var inst_20807 = (state_20877[(7)]);
var state_20877__$1 = state_20877;
var statearr_20880_20942 = state_20877__$1;
(statearr_20880_20942[(2)] = inst_20807);

(statearr_20880_20942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (27))){
var state_20877__$1 = state_20877;
var statearr_20881_20943 = state_20877__$1;
(statearr_20881_20943[(2)] = null);

(statearr_20881_20943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (1))){
var inst_20783 = (state_20877[(8)]);
var inst_20783__$1 = calc_state.call(null);
var inst_20785 = (inst_20783__$1 == null);
var inst_20786 = cljs.core.not.call(null,inst_20785);
var state_20877__$1 = (function (){var statearr_20882 = state_20877;
(statearr_20882[(8)] = inst_20783__$1);

return statearr_20882;
})();
if(inst_20786){
var statearr_20883_20944 = state_20877__$1;
(statearr_20883_20944[(1)] = (2));

} else {
var statearr_20884_20945 = state_20877__$1;
(statearr_20884_20945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (24))){
var inst_20851 = (state_20877[(9)]);
var inst_20837 = (state_20877[(10)]);
var inst_20830 = (state_20877[(11)]);
var inst_20851__$1 = inst_20830.call(null,inst_20837);
var state_20877__$1 = (function (){var statearr_20885 = state_20877;
(statearr_20885[(9)] = inst_20851__$1);

return statearr_20885;
})();
if(cljs.core.truth_(inst_20851__$1)){
var statearr_20886_20946 = state_20877__$1;
(statearr_20886_20946[(1)] = (29));

} else {
var statearr_20887_20947 = state_20877__$1;
(statearr_20887_20947[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (4))){
var inst_20798 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20798)){
var statearr_20888_20948 = state_20877__$1;
(statearr_20888_20948[(1)] = (8));

} else {
var statearr_20889_20949 = state_20877__$1;
(statearr_20889_20949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (15))){
var inst_20824 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20824)){
var statearr_20890_20950 = state_20877__$1;
(statearr_20890_20950[(1)] = (19));

} else {
var statearr_20891_20951 = state_20877__$1;
(statearr_20891_20951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (21))){
var inst_20829 = (state_20877[(12)]);
var inst_20829__$1 = (state_20877[(2)]);
var inst_20830 = cljs.core.get.call(null,inst_20829__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20831 = cljs.core.get.call(null,inst_20829__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20832 = cljs.core.get.call(null,inst_20829__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20877__$1 = (function (){var statearr_20892 = state_20877;
(statearr_20892[(12)] = inst_20829__$1);

(statearr_20892[(13)] = inst_20831);

(statearr_20892[(11)] = inst_20830);

return statearr_20892;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20877__$1,(22),inst_20832);
} else {
if((state_val_20878 === (31))){
var inst_20859 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20859)){
var statearr_20893_20952 = state_20877__$1;
(statearr_20893_20952[(1)] = (32));

} else {
var statearr_20894_20953 = state_20877__$1;
(statearr_20894_20953[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (32))){
var inst_20836 = (state_20877[(14)]);
var state_20877__$1 = state_20877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20877__$1,(35),out,inst_20836);
} else {
if((state_val_20878 === (33))){
var inst_20829 = (state_20877[(12)]);
var inst_20807 = inst_20829;
var state_20877__$1 = (function (){var statearr_20895 = state_20877;
(statearr_20895[(7)] = inst_20807);

return statearr_20895;
})();
var statearr_20896_20954 = state_20877__$1;
(statearr_20896_20954[(2)] = null);

(statearr_20896_20954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (13))){
var inst_20807 = (state_20877[(7)]);
var inst_20814 = inst_20807.cljs$lang$protocol_mask$partition0$;
var inst_20815 = (inst_20814 & (64));
var inst_20816 = inst_20807.cljs$core$ISeq$;
var inst_20817 = (inst_20815) || (inst_20816);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20817)){
var statearr_20897_20955 = state_20877__$1;
(statearr_20897_20955[(1)] = (16));

} else {
var statearr_20898_20956 = state_20877__$1;
(statearr_20898_20956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (22))){
var inst_20837 = (state_20877[(10)]);
var inst_20836 = (state_20877[(14)]);
var inst_20835 = (state_20877[(2)]);
var inst_20836__$1 = cljs.core.nth.call(null,inst_20835,(0),null);
var inst_20837__$1 = cljs.core.nth.call(null,inst_20835,(1),null);
var inst_20838 = (inst_20836__$1 == null);
var inst_20839 = cljs.core._EQ_.call(null,inst_20837__$1,change);
var inst_20840 = (inst_20838) || (inst_20839);
var state_20877__$1 = (function (){var statearr_20899 = state_20877;
(statearr_20899[(10)] = inst_20837__$1);

(statearr_20899[(14)] = inst_20836__$1);

return statearr_20899;
})();
if(cljs.core.truth_(inst_20840)){
var statearr_20900_20957 = state_20877__$1;
(statearr_20900_20957[(1)] = (23));

} else {
var statearr_20901_20958 = state_20877__$1;
(statearr_20901_20958[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (36))){
var inst_20829 = (state_20877[(12)]);
var inst_20807 = inst_20829;
var state_20877__$1 = (function (){var statearr_20902 = state_20877;
(statearr_20902[(7)] = inst_20807);

return statearr_20902;
})();
var statearr_20903_20959 = state_20877__$1;
(statearr_20903_20959[(2)] = null);

(statearr_20903_20959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (29))){
var inst_20851 = (state_20877[(9)]);
var state_20877__$1 = state_20877;
var statearr_20904_20960 = state_20877__$1;
(statearr_20904_20960[(2)] = inst_20851);

(statearr_20904_20960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (6))){
var state_20877__$1 = state_20877;
var statearr_20905_20961 = state_20877__$1;
(statearr_20905_20961[(2)] = false);

(statearr_20905_20961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (28))){
var inst_20847 = (state_20877[(2)]);
var inst_20848 = calc_state.call(null);
var inst_20807 = inst_20848;
var state_20877__$1 = (function (){var statearr_20906 = state_20877;
(statearr_20906[(7)] = inst_20807);

(statearr_20906[(15)] = inst_20847);

return statearr_20906;
})();
var statearr_20907_20962 = state_20877__$1;
(statearr_20907_20962[(2)] = null);

(statearr_20907_20962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (25))){
var inst_20873 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
var statearr_20908_20963 = state_20877__$1;
(statearr_20908_20963[(2)] = inst_20873);

(statearr_20908_20963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (34))){
var inst_20871 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
var statearr_20909_20964 = state_20877__$1;
(statearr_20909_20964[(2)] = inst_20871);

(statearr_20909_20964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (17))){
var state_20877__$1 = state_20877;
var statearr_20910_20965 = state_20877__$1;
(statearr_20910_20965[(2)] = false);

(statearr_20910_20965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (3))){
var state_20877__$1 = state_20877;
var statearr_20911_20966 = state_20877__$1;
(statearr_20911_20966[(2)] = false);

(statearr_20911_20966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (12))){
var inst_20875 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20877__$1,inst_20875);
} else {
if((state_val_20878 === (2))){
var inst_20783 = (state_20877[(8)]);
var inst_20788 = inst_20783.cljs$lang$protocol_mask$partition0$;
var inst_20789 = (inst_20788 & (64));
var inst_20790 = inst_20783.cljs$core$ISeq$;
var inst_20791 = (inst_20789) || (inst_20790);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20791)){
var statearr_20912_20967 = state_20877__$1;
(statearr_20912_20967[(1)] = (5));

} else {
var statearr_20913_20968 = state_20877__$1;
(statearr_20913_20968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (23))){
var inst_20836 = (state_20877[(14)]);
var inst_20842 = (inst_20836 == null);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20842)){
var statearr_20914_20969 = state_20877__$1;
(statearr_20914_20969[(1)] = (26));

} else {
var statearr_20915_20970 = state_20877__$1;
(statearr_20915_20970[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (35))){
var inst_20862 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
if(cljs.core.truth_(inst_20862)){
var statearr_20916_20971 = state_20877__$1;
(statearr_20916_20971[(1)] = (36));

} else {
var statearr_20917_20972 = state_20877__$1;
(statearr_20917_20972[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (19))){
var inst_20807 = (state_20877[(7)]);
var inst_20826 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20807);
var state_20877__$1 = state_20877;
var statearr_20918_20973 = state_20877__$1;
(statearr_20918_20973[(2)] = inst_20826);

(statearr_20918_20973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (11))){
var inst_20807 = (state_20877[(7)]);
var inst_20811 = (inst_20807 == null);
var inst_20812 = cljs.core.not.call(null,inst_20811);
var state_20877__$1 = state_20877;
if(inst_20812){
var statearr_20919_20974 = state_20877__$1;
(statearr_20919_20974[(1)] = (13));

} else {
var statearr_20920_20975 = state_20877__$1;
(statearr_20920_20975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (9))){
var inst_20783 = (state_20877[(8)]);
var state_20877__$1 = state_20877;
var statearr_20921_20976 = state_20877__$1;
(statearr_20921_20976[(2)] = inst_20783);

(statearr_20921_20976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (5))){
var state_20877__$1 = state_20877;
var statearr_20922_20977 = state_20877__$1;
(statearr_20922_20977[(2)] = true);

(statearr_20922_20977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (14))){
var state_20877__$1 = state_20877;
var statearr_20923_20978 = state_20877__$1;
(statearr_20923_20978[(2)] = false);

(statearr_20923_20978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (26))){
var inst_20837 = (state_20877[(10)]);
var inst_20844 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20837);
var state_20877__$1 = state_20877;
var statearr_20924_20979 = state_20877__$1;
(statearr_20924_20979[(2)] = inst_20844);

(statearr_20924_20979[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (16))){
var state_20877__$1 = state_20877;
var statearr_20925_20980 = state_20877__$1;
(statearr_20925_20980[(2)] = true);

(statearr_20925_20980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (38))){
var inst_20867 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
var statearr_20926_20981 = state_20877__$1;
(statearr_20926_20981[(2)] = inst_20867);

(statearr_20926_20981[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (30))){
var inst_20831 = (state_20877[(13)]);
var inst_20837 = (state_20877[(10)]);
var inst_20830 = (state_20877[(11)]);
var inst_20854 = cljs.core.empty_QMARK_.call(null,inst_20830);
var inst_20855 = inst_20831.call(null,inst_20837);
var inst_20856 = cljs.core.not.call(null,inst_20855);
var inst_20857 = (inst_20854) && (inst_20856);
var state_20877__$1 = state_20877;
var statearr_20927_20982 = state_20877__$1;
(statearr_20927_20982[(2)] = inst_20857);

(statearr_20927_20982[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (10))){
var inst_20783 = (state_20877[(8)]);
var inst_20803 = (state_20877[(2)]);
var inst_20804 = cljs.core.get.call(null,inst_20803,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20805 = cljs.core.get.call(null,inst_20803,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20806 = cljs.core.get.call(null,inst_20803,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20807 = inst_20783;
var state_20877__$1 = (function (){var statearr_20928 = state_20877;
(statearr_20928[(16)] = inst_20806);

(statearr_20928[(7)] = inst_20807);

(statearr_20928[(17)] = inst_20804);

(statearr_20928[(18)] = inst_20805);

return statearr_20928;
})();
var statearr_20929_20983 = state_20877__$1;
(statearr_20929_20983[(2)] = null);

(statearr_20929_20983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (18))){
var inst_20821 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
var statearr_20930_20984 = state_20877__$1;
(statearr_20930_20984[(2)] = inst_20821);

(statearr_20930_20984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (37))){
var state_20877__$1 = state_20877;
var statearr_20931_20985 = state_20877__$1;
(statearr_20931_20985[(2)] = null);

(statearr_20931_20985[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (8))){
var inst_20783 = (state_20877[(8)]);
var inst_20800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20783);
var state_20877__$1 = state_20877;
var statearr_20932_20986 = state_20877__$1;
(statearr_20932_20986[(2)] = inst_20800);

(statearr_20932_20986[(1)] = (10));


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
});})(c__19227__auto___20940,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19115__auto__,c__19227__auto___20940,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19116__auto__ = null;
var cljs$core$async$mix_$_state_machine__19116__auto____0 = (function (){
var statearr_20936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20936[(0)] = cljs$core$async$mix_$_state_machine__19116__auto__);

(statearr_20936[(1)] = (1));

return statearr_20936;
});
var cljs$core$async$mix_$_state_machine__19116__auto____1 = (function (state_20877){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_20877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e20937){if((e20937 instanceof Object)){
var ex__19119__auto__ = e20937;
var statearr_20938_20987 = state_20877;
(statearr_20938_20987[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20988 = state_20877;
state_20877 = G__20988;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19116__auto__ = function(state_20877){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19116__auto____1.call(this,state_20877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19116__auto____0;
cljs$core$async$mix_$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19116__auto____1;
return cljs$core$async$mix_$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___20940,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19229__auto__ = (function (){var statearr_20939 = f__19228__auto__.call(null);
(statearr_20939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___20940);

return statearr_20939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___20940,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17417__auto__ = (((p == null))?null:p);
var m__17418__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17418__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17417__auto__ = (((p == null))?null:p);
var m__17418__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,p,v,ch);
} else {
var m__17418__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20989 = [];
var len__17820__auto___20992 = arguments.length;
var i__17821__auto___20993 = (0);
while(true){
if((i__17821__auto___20993 < len__17820__auto___20992)){
args20989.push((arguments[i__17821__auto___20993]));

var G__20994 = (i__17821__auto___20993 + (1));
i__17821__auto___20993 = G__20994;
continue;
} else {
}
break;
}

var G__20991 = args20989.length;
switch (G__20991) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20989.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17417__auto__ = (((p == null))?null:p);
var m__17418__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,p);
} else {
var m__17418__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17417__auto__ = (((p == null))?null:p);
var m__17418__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17417__auto__)]);
if(!((m__17418__auto__ == null))){
return m__17418__auto__.call(null,p,v);
} else {
var m__17418__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17418__auto____$1 == null))){
return m__17418__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20997 = [];
var len__17820__auto___21122 = arguments.length;
var i__17821__auto___21123 = (0);
while(true){
if((i__17821__auto___21123 < len__17820__auto___21122)){
args20997.push((arguments[i__17821__auto___21123]));

var G__21124 = (i__17821__auto___21123 + (1));
i__17821__auto___21123 = G__21124;
continue;
} else {
}
break;
}

var G__20999 = args20997.length;
switch (G__20999) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20997.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16762__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16762__auto__)){
return or__16762__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16762__auto__,mults){
return (function (p1__20996_SHARP_){
if(cljs.core.truth_(p1__20996_SHARP_.call(null,topic))){
return p1__20996_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20996_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16762__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21000 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21001){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21001 = meta21001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21002,meta21001__$1){
var self__ = this;
var _21002__$1 = this;
return (new cljs.core.async.t_cljs$core$async21000(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21001__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21002){
var self__ = this;
var _21002__$1 = this;
return self__.meta21001;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21001","meta21001",-828864240,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21000";

cljs.core.async.t_cljs$core$async21000.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async21000");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21000 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21001){
return (new cljs.core.async.t_cljs$core$async21000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21001));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21000(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19227__auto___21126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21126,mults,ensure_mult,p){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21126,mults,ensure_mult,p){
return (function (state_21074){
var state_val_21075 = (state_21074[(1)]);
if((state_val_21075 === (7))){
var inst_21070 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21076_21127 = state_21074__$1;
(statearr_21076_21127[(2)] = inst_21070);

(statearr_21076_21127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (20))){
var state_21074__$1 = state_21074;
var statearr_21077_21128 = state_21074__$1;
(statearr_21077_21128[(2)] = null);

(statearr_21077_21128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (1))){
var state_21074__$1 = state_21074;
var statearr_21078_21129 = state_21074__$1;
(statearr_21078_21129[(2)] = null);

(statearr_21078_21129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (24))){
var inst_21053 = (state_21074[(7)]);
var inst_21062 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21053);
var state_21074__$1 = state_21074;
var statearr_21079_21130 = state_21074__$1;
(statearr_21079_21130[(2)] = inst_21062);

(statearr_21079_21130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (4))){
var inst_21005 = (state_21074[(8)]);
var inst_21005__$1 = (state_21074[(2)]);
var inst_21006 = (inst_21005__$1 == null);
var state_21074__$1 = (function (){var statearr_21080 = state_21074;
(statearr_21080[(8)] = inst_21005__$1);

return statearr_21080;
})();
if(cljs.core.truth_(inst_21006)){
var statearr_21081_21131 = state_21074__$1;
(statearr_21081_21131[(1)] = (5));

} else {
var statearr_21082_21132 = state_21074__$1;
(statearr_21082_21132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (15))){
var inst_21047 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21083_21133 = state_21074__$1;
(statearr_21083_21133[(2)] = inst_21047);

(statearr_21083_21133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (21))){
var inst_21067 = (state_21074[(2)]);
var state_21074__$1 = (function (){var statearr_21084 = state_21074;
(statearr_21084[(9)] = inst_21067);

return statearr_21084;
})();
var statearr_21085_21134 = state_21074__$1;
(statearr_21085_21134[(2)] = null);

(statearr_21085_21134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (13))){
var inst_21029 = (state_21074[(10)]);
var inst_21031 = cljs.core.chunked_seq_QMARK_.call(null,inst_21029);
var state_21074__$1 = state_21074;
if(inst_21031){
var statearr_21086_21135 = state_21074__$1;
(statearr_21086_21135[(1)] = (16));

} else {
var statearr_21087_21136 = state_21074__$1;
(statearr_21087_21136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (22))){
var inst_21059 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
if(cljs.core.truth_(inst_21059)){
var statearr_21088_21137 = state_21074__$1;
(statearr_21088_21137[(1)] = (23));

} else {
var statearr_21089_21138 = state_21074__$1;
(statearr_21089_21138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (6))){
var inst_21055 = (state_21074[(11)]);
var inst_21005 = (state_21074[(8)]);
var inst_21053 = (state_21074[(7)]);
var inst_21053__$1 = topic_fn.call(null,inst_21005);
var inst_21054 = cljs.core.deref.call(null,mults);
var inst_21055__$1 = cljs.core.get.call(null,inst_21054,inst_21053__$1);
var state_21074__$1 = (function (){var statearr_21090 = state_21074;
(statearr_21090[(11)] = inst_21055__$1);

(statearr_21090[(7)] = inst_21053__$1);

return statearr_21090;
})();
if(cljs.core.truth_(inst_21055__$1)){
var statearr_21091_21139 = state_21074__$1;
(statearr_21091_21139[(1)] = (19));

} else {
var statearr_21092_21140 = state_21074__$1;
(statearr_21092_21140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (25))){
var inst_21064 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21093_21141 = state_21074__$1;
(statearr_21093_21141[(2)] = inst_21064);

(statearr_21093_21141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (17))){
var inst_21029 = (state_21074[(10)]);
var inst_21038 = cljs.core.first.call(null,inst_21029);
var inst_21039 = cljs.core.async.muxch_STAR_.call(null,inst_21038);
var inst_21040 = cljs.core.async.close_BANG_.call(null,inst_21039);
var inst_21041 = cljs.core.next.call(null,inst_21029);
var inst_21015 = inst_21041;
var inst_21016 = null;
var inst_21017 = (0);
var inst_21018 = (0);
var state_21074__$1 = (function (){var statearr_21094 = state_21074;
(statearr_21094[(12)] = inst_21040);

(statearr_21094[(13)] = inst_21015);

(statearr_21094[(14)] = inst_21017);

(statearr_21094[(15)] = inst_21016);

(statearr_21094[(16)] = inst_21018);

return statearr_21094;
})();
var statearr_21095_21142 = state_21074__$1;
(statearr_21095_21142[(2)] = null);

(statearr_21095_21142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (3))){
var inst_21072 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21074__$1,inst_21072);
} else {
if((state_val_21075 === (12))){
var inst_21049 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21096_21143 = state_21074__$1;
(statearr_21096_21143[(2)] = inst_21049);

(statearr_21096_21143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (2))){
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21074__$1,(4),ch);
} else {
if((state_val_21075 === (23))){
var state_21074__$1 = state_21074;
var statearr_21097_21144 = state_21074__$1;
(statearr_21097_21144[(2)] = null);

(statearr_21097_21144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (19))){
var inst_21055 = (state_21074[(11)]);
var inst_21005 = (state_21074[(8)]);
var inst_21057 = cljs.core.async.muxch_STAR_.call(null,inst_21055);
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21074__$1,(22),inst_21057,inst_21005);
} else {
if((state_val_21075 === (11))){
var inst_21015 = (state_21074[(13)]);
var inst_21029 = (state_21074[(10)]);
var inst_21029__$1 = cljs.core.seq.call(null,inst_21015);
var state_21074__$1 = (function (){var statearr_21098 = state_21074;
(statearr_21098[(10)] = inst_21029__$1);

return statearr_21098;
})();
if(inst_21029__$1){
var statearr_21099_21145 = state_21074__$1;
(statearr_21099_21145[(1)] = (13));

} else {
var statearr_21100_21146 = state_21074__$1;
(statearr_21100_21146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (9))){
var inst_21051 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21101_21147 = state_21074__$1;
(statearr_21101_21147[(2)] = inst_21051);

(statearr_21101_21147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (5))){
var inst_21012 = cljs.core.deref.call(null,mults);
var inst_21013 = cljs.core.vals.call(null,inst_21012);
var inst_21014 = cljs.core.seq.call(null,inst_21013);
var inst_21015 = inst_21014;
var inst_21016 = null;
var inst_21017 = (0);
var inst_21018 = (0);
var state_21074__$1 = (function (){var statearr_21102 = state_21074;
(statearr_21102[(13)] = inst_21015);

(statearr_21102[(14)] = inst_21017);

(statearr_21102[(15)] = inst_21016);

(statearr_21102[(16)] = inst_21018);

return statearr_21102;
})();
var statearr_21103_21148 = state_21074__$1;
(statearr_21103_21148[(2)] = null);

(statearr_21103_21148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (14))){
var state_21074__$1 = state_21074;
var statearr_21107_21149 = state_21074__$1;
(statearr_21107_21149[(2)] = null);

(statearr_21107_21149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (16))){
var inst_21029 = (state_21074[(10)]);
var inst_21033 = cljs.core.chunk_first.call(null,inst_21029);
var inst_21034 = cljs.core.chunk_rest.call(null,inst_21029);
var inst_21035 = cljs.core.count.call(null,inst_21033);
var inst_21015 = inst_21034;
var inst_21016 = inst_21033;
var inst_21017 = inst_21035;
var inst_21018 = (0);
var state_21074__$1 = (function (){var statearr_21108 = state_21074;
(statearr_21108[(13)] = inst_21015);

(statearr_21108[(14)] = inst_21017);

(statearr_21108[(15)] = inst_21016);

(statearr_21108[(16)] = inst_21018);

return statearr_21108;
})();
var statearr_21109_21150 = state_21074__$1;
(statearr_21109_21150[(2)] = null);

(statearr_21109_21150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (10))){
var inst_21015 = (state_21074[(13)]);
var inst_21017 = (state_21074[(14)]);
var inst_21016 = (state_21074[(15)]);
var inst_21018 = (state_21074[(16)]);
var inst_21023 = cljs.core._nth.call(null,inst_21016,inst_21018);
var inst_21024 = cljs.core.async.muxch_STAR_.call(null,inst_21023);
var inst_21025 = cljs.core.async.close_BANG_.call(null,inst_21024);
var inst_21026 = (inst_21018 + (1));
var tmp21104 = inst_21015;
var tmp21105 = inst_21017;
var tmp21106 = inst_21016;
var inst_21015__$1 = tmp21104;
var inst_21016__$1 = tmp21106;
var inst_21017__$1 = tmp21105;
var inst_21018__$1 = inst_21026;
var state_21074__$1 = (function (){var statearr_21110 = state_21074;
(statearr_21110[(17)] = inst_21025);

(statearr_21110[(13)] = inst_21015__$1);

(statearr_21110[(14)] = inst_21017__$1);

(statearr_21110[(15)] = inst_21016__$1);

(statearr_21110[(16)] = inst_21018__$1);

return statearr_21110;
})();
var statearr_21111_21151 = state_21074__$1;
(statearr_21111_21151[(2)] = null);

(statearr_21111_21151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (18))){
var inst_21044 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21112_21152 = state_21074__$1;
(statearr_21112_21152[(2)] = inst_21044);

(statearr_21112_21152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (8))){
var inst_21017 = (state_21074[(14)]);
var inst_21018 = (state_21074[(16)]);
var inst_21020 = (inst_21018 < inst_21017);
var inst_21021 = inst_21020;
var state_21074__$1 = state_21074;
if(cljs.core.truth_(inst_21021)){
var statearr_21113_21153 = state_21074__$1;
(statearr_21113_21153[(1)] = (10));

} else {
var statearr_21114_21154 = state_21074__$1;
(statearr_21114_21154[(1)] = (11));

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
});})(c__19227__auto___21126,mults,ensure_mult,p))
;
return ((function (switch__19115__auto__,c__19227__auto___21126,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21118[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21118[(1)] = (1));

return statearr_21118;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21074){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21119){if((e21119 instanceof Object)){
var ex__19119__auto__ = e21119;
var statearr_21120_21155 = state_21074;
(statearr_21120_21155[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21156 = state_21074;
state_21074 = G__21156;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21126,mults,ensure_mult,p))
})();
var state__19229__auto__ = (function (){var statearr_21121 = f__19228__auto__.call(null);
(statearr_21121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21126);

return statearr_21121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21126,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21157 = [];
var len__17820__auto___21160 = arguments.length;
var i__17821__auto___21161 = (0);
while(true){
if((i__17821__auto___21161 < len__17820__auto___21160)){
args21157.push((arguments[i__17821__auto___21161]));

var G__21162 = (i__17821__auto___21161 + (1));
i__17821__auto___21161 = G__21162;
continue;
} else {
}
break;
}

var G__21159 = args21157.length;
switch (G__21159) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21157.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21164 = [];
var len__17820__auto___21167 = arguments.length;
var i__17821__auto___21168 = (0);
while(true){
if((i__17821__auto___21168 < len__17820__auto___21167)){
args21164.push((arguments[i__17821__auto___21168]));

var G__21169 = (i__17821__auto___21168 + (1));
i__17821__auto___21168 = G__21169;
continue;
} else {
}
break;
}

var G__21166 = args21164.length;
switch (G__21166) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21164.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21171 = [];
var len__17820__auto___21242 = arguments.length;
var i__17821__auto___21243 = (0);
while(true){
if((i__17821__auto___21243 < len__17820__auto___21242)){
args21171.push((arguments[i__17821__auto___21243]));

var G__21244 = (i__17821__auto___21243 + (1));
i__17821__auto___21243 = G__21244;
continue;
} else {
}
break;
}

var G__21173 = args21171.length;
switch (G__21173) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21171.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19227__auto___21246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21212){
var state_val_21213 = (state_21212[(1)]);
if((state_val_21213 === (7))){
var state_21212__$1 = state_21212;
var statearr_21214_21247 = state_21212__$1;
(statearr_21214_21247[(2)] = null);

(statearr_21214_21247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (1))){
var state_21212__$1 = state_21212;
var statearr_21215_21248 = state_21212__$1;
(statearr_21215_21248[(2)] = null);

(statearr_21215_21248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (4))){
var inst_21176 = (state_21212[(7)]);
var inst_21178 = (inst_21176 < cnt);
var state_21212__$1 = state_21212;
if(cljs.core.truth_(inst_21178)){
var statearr_21216_21249 = state_21212__$1;
(statearr_21216_21249[(1)] = (6));

} else {
var statearr_21217_21250 = state_21212__$1;
(statearr_21217_21250[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (15))){
var inst_21208 = (state_21212[(2)]);
var state_21212__$1 = state_21212;
var statearr_21218_21251 = state_21212__$1;
(statearr_21218_21251[(2)] = inst_21208);

(statearr_21218_21251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (13))){
var inst_21201 = cljs.core.async.close_BANG_.call(null,out);
var state_21212__$1 = state_21212;
var statearr_21219_21252 = state_21212__$1;
(statearr_21219_21252[(2)] = inst_21201);

(statearr_21219_21252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (6))){
var state_21212__$1 = state_21212;
var statearr_21220_21253 = state_21212__$1;
(statearr_21220_21253[(2)] = null);

(statearr_21220_21253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (3))){
var inst_21210 = (state_21212[(2)]);
var state_21212__$1 = state_21212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21212__$1,inst_21210);
} else {
if((state_val_21213 === (12))){
var inst_21198 = (state_21212[(8)]);
var inst_21198__$1 = (state_21212[(2)]);
var inst_21199 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21198__$1);
var state_21212__$1 = (function (){var statearr_21221 = state_21212;
(statearr_21221[(8)] = inst_21198__$1);

return statearr_21221;
})();
if(cljs.core.truth_(inst_21199)){
var statearr_21222_21254 = state_21212__$1;
(statearr_21222_21254[(1)] = (13));

} else {
var statearr_21223_21255 = state_21212__$1;
(statearr_21223_21255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (2))){
var inst_21175 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21176 = (0);
var state_21212__$1 = (function (){var statearr_21224 = state_21212;
(statearr_21224[(7)] = inst_21176);

(statearr_21224[(9)] = inst_21175);

return statearr_21224;
})();
var statearr_21225_21256 = state_21212__$1;
(statearr_21225_21256[(2)] = null);

(statearr_21225_21256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (11))){
var inst_21176 = (state_21212[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21212,(10),Object,null,(9));
var inst_21185 = chs__$1.call(null,inst_21176);
var inst_21186 = done.call(null,inst_21176);
var inst_21187 = cljs.core.async.take_BANG_.call(null,inst_21185,inst_21186);
var state_21212__$1 = state_21212;
var statearr_21226_21257 = state_21212__$1;
(statearr_21226_21257[(2)] = inst_21187);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21212__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (9))){
var inst_21176 = (state_21212[(7)]);
var inst_21189 = (state_21212[(2)]);
var inst_21190 = (inst_21176 + (1));
var inst_21176__$1 = inst_21190;
var state_21212__$1 = (function (){var statearr_21227 = state_21212;
(statearr_21227[(7)] = inst_21176__$1);

(statearr_21227[(10)] = inst_21189);

return statearr_21227;
})();
var statearr_21228_21258 = state_21212__$1;
(statearr_21228_21258[(2)] = null);

(statearr_21228_21258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (5))){
var inst_21196 = (state_21212[(2)]);
var state_21212__$1 = (function (){var statearr_21229 = state_21212;
(statearr_21229[(11)] = inst_21196);

return statearr_21229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21212__$1,(12),dchan);
} else {
if((state_val_21213 === (14))){
var inst_21198 = (state_21212[(8)]);
var inst_21203 = cljs.core.apply.call(null,f,inst_21198);
var state_21212__$1 = state_21212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21212__$1,(16),out,inst_21203);
} else {
if((state_val_21213 === (16))){
var inst_21205 = (state_21212[(2)]);
var state_21212__$1 = (function (){var statearr_21230 = state_21212;
(statearr_21230[(12)] = inst_21205);

return statearr_21230;
})();
var statearr_21231_21259 = state_21212__$1;
(statearr_21231_21259[(2)] = null);

(statearr_21231_21259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (10))){
var inst_21180 = (state_21212[(2)]);
var inst_21181 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21212__$1 = (function (){var statearr_21232 = state_21212;
(statearr_21232[(13)] = inst_21180);

return statearr_21232;
})();
var statearr_21233_21260 = state_21212__$1;
(statearr_21233_21260[(2)] = inst_21181);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21212__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21213 === (8))){
var inst_21194 = (state_21212[(2)]);
var state_21212__$1 = state_21212;
var statearr_21234_21261 = state_21212__$1;
(statearr_21234_21261[(2)] = inst_21194);

(statearr_21234_21261[(1)] = (5));


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
});})(c__19227__auto___21246,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19115__auto__,c__19227__auto___21246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21238[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21238[(1)] = (1));

return statearr_21238;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21212){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21239){if((e21239 instanceof Object)){
var ex__19119__auto__ = e21239;
var statearr_21240_21262 = state_21212;
(statearr_21240_21262[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21263 = state_21212;
state_21212 = G__21263;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21246,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19229__auto__ = (function (){var statearr_21241 = f__19228__auto__.call(null);
(statearr_21241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21246);

return statearr_21241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21246,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21265 = [];
var len__17820__auto___21321 = arguments.length;
var i__17821__auto___21322 = (0);
while(true){
if((i__17821__auto___21322 < len__17820__auto___21321)){
args21265.push((arguments[i__17821__auto___21322]));

var G__21323 = (i__17821__auto___21322 + (1));
i__17821__auto___21322 = G__21323;
continue;
} else {
}
break;
}

var G__21267 = args21265.length;
switch (G__21267) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21265.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19227__auto___21325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21325,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21325,out){
return (function (state_21297){
var state_val_21298 = (state_21297[(1)]);
if((state_val_21298 === (7))){
var inst_21276 = (state_21297[(7)]);
var inst_21277 = (state_21297[(8)]);
var inst_21276__$1 = (state_21297[(2)]);
var inst_21277__$1 = cljs.core.nth.call(null,inst_21276__$1,(0),null);
var inst_21278 = cljs.core.nth.call(null,inst_21276__$1,(1),null);
var inst_21279 = (inst_21277__$1 == null);
var state_21297__$1 = (function (){var statearr_21299 = state_21297;
(statearr_21299[(7)] = inst_21276__$1);

(statearr_21299[(8)] = inst_21277__$1);

(statearr_21299[(9)] = inst_21278);

return statearr_21299;
})();
if(cljs.core.truth_(inst_21279)){
var statearr_21300_21326 = state_21297__$1;
(statearr_21300_21326[(1)] = (8));

} else {
var statearr_21301_21327 = state_21297__$1;
(statearr_21301_21327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (1))){
var inst_21268 = cljs.core.vec.call(null,chs);
var inst_21269 = inst_21268;
var state_21297__$1 = (function (){var statearr_21302 = state_21297;
(statearr_21302[(10)] = inst_21269);

return statearr_21302;
})();
var statearr_21303_21328 = state_21297__$1;
(statearr_21303_21328[(2)] = null);

(statearr_21303_21328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (4))){
var inst_21269 = (state_21297[(10)]);
var state_21297__$1 = state_21297;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21297__$1,(7),inst_21269);
} else {
if((state_val_21298 === (6))){
var inst_21293 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21304_21329 = state_21297__$1;
(statearr_21304_21329[(2)] = inst_21293);

(statearr_21304_21329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (3))){
var inst_21295 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21297__$1,inst_21295);
} else {
if((state_val_21298 === (2))){
var inst_21269 = (state_21297[(10)]);
var inst_21271 = cljs.core.count.call(null,inst_21269);
var inst_21272 = (inst_21271 > (0));
var state_21297__$1 = state_21297;
if(cljs.core.truth_(inst_21272)){
var statearr_21306_21330 = state_21297__$1;
(statearr_21306_21330[(1)] = (4));

} else {
var statearr_21307_21331 = state_21297__$1;
(statearr_21307_21331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (11))){
var inst_21269 = (state_21297[(10)]);
var inst_21286 = (state_21297[(2)]);
var tmp21305 = inst_21269;
var inst_21269__$1 = tmp21305;
var state_21297__$1 = (function (){var statearr_21308 = state_21297;
(statearr_21308[(10)] = inst_21269__$1);

(statearr_21308[(11)] = inst_21286);

return statearr_21308;
})();
var statearr_21309_21332 = state_21297__$1;
(statearr_21309_21332[(2)] = null);

(statearr_21309_21332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (9))){
var inst_21277 = (state_21297[(8)]);
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21297__$1,(11),out,inst_21277);
} else {
if((state_val_21298 === (5))){
var inst_21291 = cljs.core.async.close_BANG_.call(null,out);
var state_21297__$1 = state_21297;
var statearr_21310_21333 = state_21297__$1;
(statearr_21310_21333[(2)] = inst_21291);

(statearr_21310_21333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (10))){
var inst_21289 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21311_21334 = state_21297__$1;
(statearr_21311_21334[(2)] = inst_21289);

(statearr_21311_21334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (8))){
var inst_21276 = (state_21297[(7)]);
var inst_21269 = (state_21297[(10)]);
var inst_21277 = (state_21297[(8)]);
var inst_21278 = (state_21297[(9)]);
var inst_21281 = (function (){var cs = inst_21269;
var vec__21274 = inst_21276;
var v = inst_21277;
var c = inst_21278;
return ((function (cs,vec__21274,v,c,inst_21276,inst_21269,inst_21277,inst_21278,state_val_21298,c__19227__auto___21325,out){
return (function (p1__21264_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21264_SHARP_);
});
;})(cs,vec__21274,v,c,inst_21276,inst_21269,inst_21277,inst_21278,state_val_21298,c__19227__auto___21325,out))
})();
var inst_21282 = cljs.core.filterv.call(null,inst_21281,inst_21269);
var inst_21269__$1 = inst_21282;
var state_21297__$1 = (function (){var statearr_21312 = state_21297;
(statearr_21312[(10)] = inst_21269__$1);

return statearr_21312;
})();
var statearr_21313_21335 = state_21297__$1;
(statearr_21313_21335[(2)] = null);

(statearr_21313_21335[(1)] = (2));


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
});})(c__19227__auto___21325,out))
;
return ((function (switch__19115__auto__,c__19227__auto___21325,out){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21317[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21317[(1)] = (1));

return statearr_21317;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21297){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21318){if((e21318 instanceof Object)){
var ex__19119__auto__ = e21318;
var statearr_21319_21336 = state_21297;
(statearr_21319_21336[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21337 = state_21297;
state_21297 = G__21337;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21325,out))
})();
var state__19229__auto__ = (function (){var statearr_21320 = f__19228__auto__.call(null);
(statearr_21320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21325);

return statearr_21320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21325,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21338 = [];
var len__17820__auto___21387 = arguments.length;
var i__17821__auto___21388 = (0);
while(true){
if((i__17821__auto___21388 < len__17820__auto___21387)){
args21338.push((arguments[i__17821__auto___21388]));

var G__21389 = (i__17821__auto___21388 + (1));
i__17821__auto___21388 = G__21389;
continue;
} else {
}
break;
}

var G__21340 = args21338.length;
switch (G__21340) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21338.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19227__auto___21391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21391,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21391,out){
return (function (state_21364){
var state_val_21365 = (state_21364[(1)]);
if((state_val_21365 === (7))){
var inst_21346 = (state_21364[(7)]);
var inst_21346__$1 = (state_21364[(2)]);
var inst_21347 = (inst_21346__$1 == null);
var inst_21348 = cljs.core.not.call(null,inst_21347);
var state_21364__$1 = (function (){var statearr_21366 = state_21364;
(statearr_21366[(7)] = inst_21346__$1);

return statearr_21366;
})();
if(inst_21348){
var statearr_21367_21392 = state_21364__$1;
(statearr_21367_21392[(1)] = (8));

} else {
var statearr_21368_21393 = state_21364__$1;
(statearr_21368_21393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (1))){
var inst_21341 = (0);
var state_21364__$1 = (function (){var statearr_21369 = state_21364;
(statearr_21369[(8)] = inst_21341);

return statearr_21369;
})();
var statearr_21370_21394 = state_21364__$1;
(statearr_21370_21394[(2)] = null);

(statearr_21370_21394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (4))){
var state_21364__$1 = state_21364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21364__$1,(7),ch);
} else {
if((state_val_21365 === (6))){
var inst_21359 = (state_21364[(2)]);
var state_21364__$1 = state_21364;
var statearr_21371_21395 = state_21364__$1;
(statearr_21371_21395[(2)] = inst_21359);

(statearr_21371_21395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (3))){
var inst_21361 = (state_21364[(2)]);
var inst_21362 = cljs.core.async.close_BANG_.call(null,out);
var state_21364__$1 = (function (){var statearr_21372 = state_21364;
(statearr_21372[(9)] = inst_21361);

return statearr_21372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21364__$1,inst_21362);
} else {
if((state_val_21365 === (2))){
var inst_21341 = (state_21364[(8)]);
var inst_21343 = (inst_21341 < n);
var state_21364__$1 = state_21364;
if(cljs.core.truth_(inst_21343)){
var statearr_21373_21396 = state_21364__$1;
(statearr_21373_21396[(1)] = (4));

} else {
var statearr_21374_21397 = state_21364__$1;
(statearr_21374_21397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (11))){
var inst_21341 = (state_21364[(8)]);
var inst_21351 = (state_21364[(2)]);
var inst_21352 = (inst_21341 + (1));
var inst_21341__$1 = inst_21352;
var state_21364__$1 = (function (){var statearr_21375 = state_21364;
(statearr_21375[(10)] = inst_21351);

(statearr_21375[(8)] = inst_21341__$1);

return statearr_21375;
})();
var statearr_21376_21398 = state_21364__$1;
(statearr_21376_21398[(2)] = null);

(statearr_21376_21398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (9))){
var state_21364__$1 = state_21364;
var statearr_21377_21399 = state_21364__$1;
(statearr_21377_21399[(2)] = null);

(statearr_21377_21399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (5))){
var state_21364__$1 = state_21364;
var statearr_21378_21400 = state_21364__$1;
(statearr_21378_21400[(2)] = null);

(statearr_21378_21400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (10))){
var inst_21356 = (state_21364[(2)]);
var state_21364__$1 = state_21364;
var statearr_21379_21401 = state_21364__$1;
(statearr_21379_21401[(2)] = inst_21356);

(statearr_21379_21401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21365 === (8))){
var inst_21346 = (state_21364[(7)]);
var state_21364__$1 = state_21364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21364__$1,(11),out,inst_21346);
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
});})(c__19227__auto___21391,out))
;
return ((function (switch__19115__auto__,c__19227__auto___21391,out){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21383[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21383[(1)] = (1));

return statearr_21383;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21364){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21384){if((e21384 instanceof Object)){
var ex__19119__auto__ = e21384;
var statearr_21385_21402 = state_21364;
(statearr_21385_21402[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21403 = state_21364;
state_21364 = G__21403;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21391,out))
})();
var state__19229__auto__ = (function (){var statearr_21386 = f__19228__auto__.call(null);
(statearr_21386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21391);

return statearr_21386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21391,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21411 = (function (map_LT_,f,ch,meta21412){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21412 = meta21412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21413,meta21412__$1){
var self__ = this;
var _21413__$1 = this;
return (new cljs.core.async.t_cljs$core$async21411(self__.map_LT_,self__.f,self__.ch,meta21412__$1));
});

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21413){
var self__ = this;
var _21413__$1 = this;
return self__.meta21412;
});

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21414 = (function (map_LT_,f,ch,meta21412,_,fn1,meta21415){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21412 = meta21412;
this._ = _;
this.fn1 = fn1;
this.meta21415 = meta21415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21416,meta21415__$1){
var self__ = this;
var _21416__$1 = this;
return (new cljs.core.async.t_cljs$core$async21414(self__.map_LT_,self__.f,self__.ch,self__.meta21412,self__._,self__.fn1,meta21415__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21416){
var self__ = this;
var _21416__$1 = this;
return self__.meta21415;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21414.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21404_SHARP_){
return f1.call(null,(((p1__21404_SHARP_ == null))?null:self__.f.call(null,p1__21404_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21414.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21412","meta21412",-319280951,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21411","cljs.core.async/t_cljs$core$async21411",907958567,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21415","meta21415",1662506158,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21414";

cljs.core.async.t_cljs$core$async21414.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async21414");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21414 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21414(map_LT___$1,f__$1,ch__$1,meta21412__$1,___$2,fn1__$1,meta21415){
return (new cljs.core.async.t_cljs$core$async21414(map_LT___$1,f__$1,ch__$1,meta21412__$1,___$2,fn1__$1,meta21415));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21414(self__.map_LT_,self__.f,self__.ch,self__.meta21412,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16750__auto__ = ret;
if(cljs.core.truth_(and__16750__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16750__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21412","meta21412",-319280951,null)], null);
});

cljs.core.async.t_cljs$core$async21411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21411";

cljs.core.async.t_cljs$core$async21411.cljs$lang$ctorPrWriter = (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async21411");
});

cljs.core.async.__GT_t_cljs$core$async21411 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21411(map_LT___$1,f__$1,ch__$1,meta21412){
return (new cljs.core.async.t_cljs$core$async21411(map_LT___$1,f__$1,ch__$1,meta21412));
});

}

return (new cljs.core.async.t_cljs$core$async21411(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21420 = (function (map_GT_,f,ch,meta21421){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21421 = meta21421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21422,meta21421__$1){
var self__ = this;
var _21422__$1 = this;
return (new cljs.core.async.t_cljs$core$async21420(self__.map_GT_,self__.f,self__.ch,meta21421__$1));
});

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21422){
var self__ = this;
var _21422__$1 = this;
return self__.meta21421;
});

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21421","meta21421",-512256754,null)], null);
});

cljs.core.async.t_cljs$core$async21420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21420";

cljs.core.async.t_cljs$core$async21420.cljs$lang$ctorPrWriter = (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async21420");
});

cljs.core.async.__GT_t_cljs$core$async21420 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21420(map_GT___$1,f__$1,ch__$1,meta21421){
return (new cljs.core.async.t_cljs$core$async21420(map_GT___$1,f__$1,ch__$1,meta21421));
});

}

return (new cljs.core.async.t_cljs$core$async21420(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21426 = (function (filter_GT_,p,ch,meta21427){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21427 = meta21427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21428,meta21427__$1){
var self__ = this;
var _21428__$1 = this;
return (new cljs.core.async.t_cljs$core$async21426(self__.filter_GT_,self__.p,self__.ch,meta21427__$1));
});

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21428){
var self__ = this;
var _21428__$1 = this;
return self__.meta21427;
});

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21427","meta21427",-1144452522,null)], null);
});

cljs.core.async.t_cljs$core$async21426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21426";

cljs.core.async.t_cljs$core$async21426.cljs$lang$ctorPrWriter = (function (this__17360__auto__,writer__17361__auto__,opt__17362__auto__){
return cljs.core._write.call(null,writer__17361__auto__,"cljs.core.async/t_cljs$core$async21426");
});

cljs.core.async.__GT_t_cljs$core$async21426 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21426(filter_GT___$1,p__$1,ch__$1,meta21427){
return (new cljs.core.async.t_cljs$core$async21426(filter_GT___$1,p__$1,ch__$1,meta21427));
});

}

return (new cljs.core.async.t_cljs$core$async21426(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21429 = [];
var len__17820__auto___21473 = arguments.length;
var i__17821__auto___21474 = (0);
while(true){
if((i__17821__auto___21474 < len__17820__auto___21473)){
args21429.push((arguments[i__17821__auto___21474]));

var G__21475 = (i__17821__auto___21474 + (1));
i__17821__auto___21474 = G__21475;
continue;
} else {
}
break;
}

var G__21431 = args21429.length;
switch (G__21431) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21429.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19227__auto___21477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21477,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21477,out){
return (function (state_21452){
var state_val_21453 = (state_21452[(1)]);
if((state_val_21453 === (7))){
var inst_21448 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21454_21478 = state_21452__$1;
(statearr_21454_21478[(2)] = inst_21448);

(statearr_21454_21478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (1))){
var state_21452__$1 = state_21452;
var statearr_21455_21479 = state_21452__$1;
(statearr_21455_21479[(2)] = null);

(statearr_21455_21479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (4))){
var inst_21434 = (state_21452[(7)]);
var inst_21434__$1 = (state_21452[(2)]);
var inst_21435 = (inst_21434__$1 == null);
var state_21452__$1 = (function (){var statearr_21456 = state_21452;
(statearr_21456[(7)] = inst_21434__$1);

return statearr_21456;
})();
if(cljs.core.truth_(inst_21435)){
var statearr_21457_21480 = state_21452__$1;
(statearr_21457_21480[(1)] = (5));

} else {
var statearr_21458_21481 = state_21452__$1;
(statearr_21458_21481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (6))){
var inst_21434 = (state_21452[(7)]);
var inst_21439 = p.call(null,inst_21434);
var state_21452__$1 = state_21452;
if(cljs.core.truth_(inst_21439)){
var statearr_21459_21482 = state_21452__$1;
(statearr_21459_21482[(1)] = (8));

} else {
var statearr_21460_21483 = state_21452__$1;
(statearr_21460_21483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (3))){
var inst_21450 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21452__$1,inst_21450);
} else {
if((state_val_21453 === (2))){
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21452__$1,(4),ch);
} else {
if((state_val_21453 === (11))){
var inst_21442 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21461_21484 = state_21452__$1;
(statearr_21461_21484[(2)] = inst_21442);

(statearr_21461_21484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (9))){
var state_21452__$1 = state_21452;
var statearr_21462_21485 = state_21452__$1;
(statearr_21462_21485[(2)] = null);

(statearr_21462_21485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (5))){
var inst_21437 = cljs.core.async.close_BANG_.call(null,out);
var state_21452__$1 = state_21452;
var statearr_21463_21486 = state_21452__$1;
(statearr_21463_21486[(2)] = inst_21437);

(statearr_21463_21486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (10))){
var inst_21445 = (state_21452[(2)]);
var state_21452__$1 = (function (){var statearr_21464 = state_21452;
(statearr_21464[(8)] = inst_21445);

return statearr_21464;
})();
var statearr_21465_21487 = state_21452__$1;
(statearr_21465_21487[(2)] = null);

(statearr_21465_21487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (8))){
var inst_21434 = (state_21452[(7)]);
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21452__$1,(11),out,inst_21434);
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
});})(c__19227__auto___21477,out))
;
return ((function (switch__19115__auto__,c__19227__auto___21477,out){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21469 = [null,null,null,null,null,null,null,null,null];
(statearr_21469[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21469[(1)] = (1));

return statearr_21469;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21452){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21470){if((e21470 instanceof Object)){
var ex__19119__auto__ = e21470;
var statearr_21471_21488 = state_21452;
(statearr_21471_21488[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21489 = state_21452;
state_21452 = G__21489;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21477,out))
})();
var state__19229__auto__ = (function (){var statearr_21472 = f__19228__auto__.call(null);
(statearr_21472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21477);

return statearr_21472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21477,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21490 = [];
var len__17820__auto___21493 = arguments.length;
var i__17821__auto___21494 = (0);
while(true){
if((i__17821__auto___21494 < len__17820__auto___21493)){
args21490.push((arguments[i__17821__auto___21494]));

var G__21495 = (i__17821__auto___21494 + (1));
i__17821__auto___21494 = G__21495;
continue;
} else {
}
break;
}

var G__21492 = args21490.length;
switch (G__21492) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21490.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto__){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto__){
return (function (state_21662){
var state_val_21663 = (state_21662[(1)]);
if((state_val_21663 === (7))){
var inst_21658 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
var statearr_21664_21705 = state_21662__$1;
(statearr_21664_21705[(2)] = inst_21658);

(statearr_21664_21705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (20))){
var inst_21628 = (state_21662[(7)]);
var inst_21639 = (state_21662[(2)]);
var inst_21640 = cljs.core.next.call(null,inst_21628);
var inst_21614 = inst_21640;
var inst_21615 = null;
var inst_21616 = (0);
var inst_21617 = (0);
var state_21662__$1 = (function (){var statearr_21665 = state_21662;
(statearr_21665[(8)] = inst_21616);

(statearr_21665[(9)] = inst_21617);

(statearr_21665[(10)] = inst_21615);

(statearr_21665[(11)] = inst_21639);

(statearr_21665[(12)] = inst_21614);

return statearr_21665;
})();
var statearr_21666_21706 = state_21662__$1;
(statearr_21666_21706[(2)] = null);

(statearr_21666_21706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (1))){
var state_21662__$1 = state_21662;
var statearr_21667_21707 = state_21662__$1;
(statearr_21667_21707[(2)] = null);

(statearr_21667_21707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (4))){
var inst_21603 = (state_21662[(13)]);
var inst_21603__$1 = (state_21662[(2)]);
var inst_21604 = (inst_21603__$1 == null);
var state_21662__$1 = (function (){var statearr_21668 = state_21662;
(statearr_21668[(13)] = inst_21603__$1);

return statearr_21668;
})();
if(cljs.core.truth_(inst_21604)){
var statearr_21669_21708 = state_21662__$1;
(statearr_21669_21708[(1)] = (5));

} else {
var statearr_21670_21709 = state_21662__$1;
(statearr_21670_21709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (15))){
var state_21662__$1 = state_21662;
var statearr_21674_21710 = state_21662__$1;
(statearr_21674_21710[(2)] = null);

(statearr_21674_21710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (21))){
var state_21662__$1 = state_21662;
var statearr_21675_21711 = state_21662__$1;
(statearr_21675_21711[(2)] = null);

(statearr_21675_21711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (13))){
var inst_21616 = (state_21662[(8)]);
var inst_21617 = (state_21662[(9)]);
var inst_21615 = (state_21662[(10)]);
var inst_21614 = (state_21662[(12)]);
var inst_21624 = (state_21662[(2)]);
var inst_21625 = (inst_21617 + (1));
var tmp21671 = inst_21616;
var tmp21672 = inst_21615;
var tmp21673 = inst_21614;
var inst_21614__$1 = tmp21673;
var inst_21615__$1 = tmp21672;
var inst_21616__$1 = tmp21671;
var inst_21617__$1 = inst_21625;
var state_21662__$1 = (function (){var statearr_21676 = state_21662;
(statearr_21676[(8)] = inst_21616__$1);

(statearr_21676[(9)] = inst_21617__$1);

(statearr_21676[(10)] = inst_21615__$1);

(statearr_21676[(12)] = inst_21614__$1);

(statearr_21676[(14)] = inst_21624);

return statearr_21676;
})();
var statearr_21677_21712 = state_21662__$1;
(statearr_21677_21712[(2)] = null);

(statearr_21677_21712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (22))){
var state_21662__$1 = state_21662;
var statearr_21678_21713 = state_21662__$1;
(statearr_21678_21713[(2)] = null);

(statearr_21678_21713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (6))){
var inst_21603 = (state_21662[(13)]);
var inst_21612 = f.call(null,inst_21603);
var inst_21613 = cljs.core.seq.call(null,inst_21612);
var inst_21614 = inst_21613;
var inst_21615 = null;
var inst_21616 = (0);
var inst_21617 = (0);
var state_21662__$1 = (function (){var statearr_21679 = state_21662;
(statearr_21679[(8)] = inst_21616);

(statearr_21679[(9)] = inst_21617);

(statearr_21679[(10)] = inst_21615);

(statearr_21679[(12)] = inst_21614);

return statearr_21679;
})();
var statearr_21680_21714 = state_21662__$1;
(statearr_21680_21714[(2)] = null);

(statearr_21680_21714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (17))){
var inst_21628 = (state_21662[(7)]);
var inst_21632 = cljs.core.chunk_first.call(null,inst_21628);
var inst_21633 = cljs.core.chunk_rest.call(null,inst_21628);
var inst_21634 = cljs.core.count.call(null,inst_21632);
var inst_21614 = inst_21633;
var inst_21615 = inst_21632;
var inst_21616 = inst_21634;
var inst_21617 = (0);
var state_21662__$1 = (function (){var statearr_21681 = state_21662;
(statearr_21681[(8)] = inst_21616);

(statearr_21681[(9)] = inst_21617);

(statearr_21681[(10)] = inst_21615);

(statearr_21681[(12)] = inst_21614);

return statearr_21681;
})();
var statearr_21682_21715 = state_21662__$1;
(statearr_21682_21715[(2)] = null);

(statearr_21682_21715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (3))){
var inst_21660 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21662__$1,inst_21660);
} else {
if((state_val_21663 === (12))){
var inst_21648 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
var statearr_21683_21716 = state_21662__$1;
(statearr_21683_21716[(2)] = inst_21648);

(statearr_21683_21716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (2))){
var state_21662__$1 = state_21662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21662__$1,(4),in$);
} else {
if((state_val_21663 === (23))){
var inst_21656 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
var statearr_21684_21717 = state_21662__$1;
(statearr_21684_21717[(2)] = inst_21656);

(statearr_21684_21717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (19))){
var inst_21643 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
var statearr_21685_21718 = state_21662__$1;
(statearr_21685_21718[(2)] = inst_21643);

(statearr_21685_21718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (11))){
var inst_21628 = (state_21662[(7)]);
var inst_21614 = (state_21662[(12)]);
var inst_21628__$1 = cljs.core.seq.call(null,inst_21614);
var state_21662__$1 = (function (){var statearr_21686 = state_21662;
(statearr_21686[(7)] = inst_21628__$1);

return statearr_21686;
})();
if(inst_21628__$1){
var statearr_21687_21719 = state_21662__$1;
(statearr_21687_21719[(1)] = (14));

} else {
var statearr_21688_21720 = state_21662__$1;
(statearr_21688_21720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (9))){
var inst_21650 = (state_21662[(2)]);
var inst_21651 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21662__$1 = (function (){var statearr_21689 = state_21662;
(statearr_21689[(15)] = inst_21650);

return statearr_21689;
})();
if(cljs.core.truth_(inst_21651)){
var statearr_21690_21721 = state_21662__$1;
(statearr_21690_21721[(1)] = (21));

} else {
var statearr_21691_21722 = state_21662__$1;
(statearr_21691_21722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (5))){
var inst_21606 = cljs.core.async.close_BANG_.call(null,out);
var state_21662__$1 = state_21662;
var statearr_21692_21723 = state_21662__$1;
(statearr_21692_21723[(2)] = inst_21606);

(statearr_21692_21723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (14))){
var inst_21628 = (state_21662[(7)]);
var inst_21630 = cljs.core.chunked_seq_QMARK_.call(null,inst_21628);
var state_21662__$1 = state_21662;
if(inst_21630){
var statearr_21693_21724 = state_21662__$1;
(statearr_21693_21724[(1)] = (17));

} else {
var statearr_21694_21725 = state_21662__$1;
(statearr_21694_21725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (16))){
var inst_21646 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
var statearr_21695_21726 = state_21662__$1;
(statearr_21695_21726[(2)] = inst_21646);

(statearr_21695_21726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21663 === (10))){
var inst_21617 = (state_21662[(9)]);
var inst_21615 = (state_21662[(10)]);
var inst_21622 = cljs.core._nth.call(null,inst_21615,inst_21617);
var state_21662__$1 = state_21662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21662__$1,(13),out,inst_21622);
} else {
if((state_val_21663 === (18))){
var inst_21628 = (state_21662[(7)]);
var inst_21637 = cljs.core.first.call(null,inst_21628);
var state_21662__$1 = state_21662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21662__$1,(20),out,inst_21637);
} else {
if((state_val_21663 === (8))){
var inst_21616 = (state_21662[(8)]);
var inst_21617 = (state_21662[(9)]);
var inst_21619 = (inst_21617 < inst_21616);
var inst_21620 = inst_21619;
var state_21662__$1 = state_21662;
if(cljs.core.truth_(inst_21620)){
var statearr_21696_21727 = state_21662__$1;
(statearr_21696_21727[(1)] = (10));

} else {
var statearr_21697_21728 = state_21662__$1;
(statearr_21697_21728[(1)] = (11));

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
});})(c__19227__auto__))
;
return ((function (switch__19115__auto__,c__19227__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19116__auto____0 = (function (){
var statearr_21701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21701[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19116__auto__);

(statearr_21701[(1)] = (1));

return statearr_21701;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19116__auto____1 = (function (state_21662){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21702){if((e21702 instanceof Object)){
var ex__19119__auto__ = e21702;
var statearr_21703_21729 = state_21662;
(statearr_21703_21729[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21730 = state_21662;
state_21662 = G__21730;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19116__auto__ = function(state_21662){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19116__auto____1.call(this,state_21662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto__))
})();
var state__19229__auto__ = (function (){var statearr_21704 = f__19228__auto__.call(null);
(statearr_21704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto__);

return statearr_21704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto__))
);

return c__19227__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21731 = [];
var len__17820__auto___21734 = arguments.length;
var i__17821__auto___21735 = (0);
while(true){
if((i__17821__auto___21735 < len__17820__auto___21734)){
args21731.push((arguments[i__17821__auto___21735]));

var G__21736 = (i__17821__auto___21735 + (1));
i__17821__auto___21735 = G__21736;
continue;
} else {
}
break;
}

var G__21733 = args21731.length;
switch (G__21733) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21731.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21738 = [];
var len__17820__auto___21741 = arguments.length;
var i__17821__auto___21742 = (0);
while(true){
if((i__17821__auto___21742 < len__17820__auto___21741)){
args21738.push((arguments[i__17821__auto___21742]));

var G__21743 = (i__17821__auto___21742 + (1));
i__17821__auto___21742 = G__21743;
continue;
} else {
}
break;
}

var G__21740 = args21738.length;
switch (G__21740) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21738.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21745 = [];
var len__17820__auto___21796 = arguments.length;
var i__17821__auto___21797 = (0);
while(true){
if((i__17821__auto___21797 < len__17820__auto___21796)){
args21745.push((arguments[i__17821__auto___21797]));

var G__21798 = (i__17821__auto___21797 + (1));
i__17821__auto___21797 = G__21798;
continue;
} else {
}
break;
}

var G__21747 = args21745.length;
switch (G__21747) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21745.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19227__auto___21800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21800,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21800,out){
return (function (state_21771){
var state_val_21772 = (state_21771[(1)]);
if((state_val_21772 === (7))){
var inst_21766 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21773_21801 = state_21771__$1;
(statearr_21773_21801[(2)] = inst_21766);

(statearr_21773_21801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (1))){
var inst_21748 = null;
var state_21771__$1 = (function (){var statearr_21774 = state_21771;
(statearr_21774[(7)] = inst_21748);

return statearr_21774;
})();
var statearr_21775_21802 = state_21771__$1;
(statearr_21775_21802[(2)] = null);

(statearr_21775_21802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (4))){
var inst_21751 = (state_21771[(8)]);
var inst_21751__$1 = (state_21771[(2)]);
var inst_21752 = (inst_21751__$1 == null);
var inst_21753 = cljs.core.not.call(null,inst_21752);
var state_21771__$1 = (function (){var statearr_21776 = state_21771;
(statearr_21776[(8)] = inst_21751__$1);

return statearr_21776;
})();
if(inst_21753){
var statearr_21777_21803 = state_21771__$1;
(statearr_21777_21803[(1)] = (5));

} else {
var statearr_21778_21804 = state_21771__$1;
(statearr_21778_21804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (6))){
var state_21771__$1 = state_21771;
var statearr_21779_21805 = state_21771__$1;
(statearr_21779_21805[(2)] = null);

(statearr_21779_21805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (3))){
var inst_21768 = (state_21771[(2)]);
var inst_21769 = cljs.core.async.close_BANG_.call(null,out);
var state_21771__$1 = (function (){var statearr_21780 = state_21771;
(statearr_21780[(9)] = inst_21768);

return statearr_21780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21771__$1,inst_21769);
} else {
if((state_val_21772 === (2))){
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21771__$1,(4),ch);
} else {
if((state_val_21772 === (11))){
var inst_21751 = (state_21771[(8)]);
var inst_21760 = (state_21771[(2)]);
var inst_21748 = inst_21751;
var state_21771__$1 = (function (){var statearr_21781 = state_21771;
(statearr_21781[(10)] = inst_21760);

(statearr_21781[(7)] = inst_21748);

return statearr_21781;
})();
var statearr_21782_21806 = state_21771__$1;
(statearr_21782_21806[(2)] = null);

(statearr_21782_21806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (9))){
var inst_21751 = (state_21771[(8)]);
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21771__$1,(11),out,inst_21751);
} else {
if((state_val_21772 === (5))){
var inst_21751 = (state_21771[(8)]);
var inst_21748 = (state_21771[(7)]);
var inst_21755 = cljs.core._EQ_.call(null,inst_21751,inst_21748);
var state_21771__$1 = state_21771;
if(inst_21755){
var statearr_21784_21807 = state_21771__$1;
(statearr_21784_21807[(1)] = (8));

} else {
var statearr_21785_21808 = state_21771__$1;
(statearr_21785_21808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (10))){
var inst_21763 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21786_21809 = state_21771__$1;
(statearr_21786_21809[(2)] = inst_21763);

(statearr_21786_21809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (8))){
var inst_21748 = (state_21771[(7)]);
var tmp21783 = inst_21748;
var inst_21748__$1 = tmp21783;
var state_21771__$1 = (function (){var statearr_21787 = state_21771;
(statearr_21787[(7)] = inst_21748__$1);

return statearr_21787;
})();
var statearr_21788_21810 = state_21771__$1;
(statearr_21788_21810[(2)] = null);

(statearr_21788_21810[(1)] = (2));


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
});})(c__19227__auto___21800,out))
;
return ((function (switch__19115__auto__,c__19227__auto___21800,out){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21792[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21792[(1)] = (1));

return statearr_21792;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21771){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21793){if((e21793 instanceof Object)){
var ex__19119__auto__ = e21793;
var statearr_21794_21811 = state_21771;
(statearr_21794_21811[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21812 = state_21771;
state_21771 = G__21812;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21800,out))
})();
var state__19229__auto__ = (function (){var statearr_21795 = f__19228__auto__.call(null);
(statearr_21795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21800);

return statearr_21795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21800,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21813 = [];
var len__17820__auto___21883 = arguments.length;
var i__17821__auto___21884 = (0);
while(true){
if((i__17821__auto___21884 < len__17820__auto___21883)){
args21813.push((arguments[i__17821__auto___21884]));

var G__21885 = (i__17821__auto___21884 + (1));
i__17821__auto___21884 = G__21885;
continue;
} else {
}
break;
}

var G__21815 = args21813.length;
switch (G__21815) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21813.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19227__auto___21887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21887,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21887,out){
return (function (state_21853){
var state_val_21854 = (state_21853[(1)]);
if((state_val_21854 === (7))){
var inst_21849 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21855_21888 = state_21853__$1;
(statearr_21855_21888[(2)] = inst_21849);

(statearr_21855_21888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (1))){
var inst_21816 = (new Array(n));
var inst_21817 = inst_21816;
var inst_21818 = (0);
var state_21853__$1 = (function (){var statearr_21856 = state_21853;
(statearr_21856[(7)] = inst_21818);

(statearr_21856[(8)] = inst_21817);

return statearr_21856;
})();
var statearr_21857_21889 = state_21853__$1;
(statearr_21857_21889[(2)] = null);

(statearr_21857_21889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (4))){
var inst_21821 = (state_21853[(9)]);
var inst_21821__$1 = (state_21853[(2)]);
var inst_21822 = (inst_21821__$1 == null);
var inst_21823 = cljs.core.not.call(null,inst_21822);
var state_21853__$1 = (function (){var statearr_21858 = state_21853;
(statearr_21858[(9)] = inst_21821__$1);

return statearr_21858;
})();
if(inst_21823){
var statearr_21859_21890 = state_21853__$1;
(statearr_21859_21890[(1)] = (5));

} else {
var statearr_21860_21891 = state_21853__$1;
(statearr_21860_21891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (15))){
var inst_21843 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21861_21892 = state_21853__$1;
(statearr_21861_21892[(2)] = inst_21843);

(statearr_21861_21892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (13))){
var state_21853__$1 = state_21853;
var statearr_21862_21893 = state_21853__$1;
(statearr_21862_21893[(2)] = null);

(statearr_21862_21893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (6))){
var inst_21818 = (state_21853[(7)]);
var inst_21839 = (inst_21818 > (0));
var state_21853__$1 = state_21853;
if(cljs.core.truth_(inst_21839)){
var statearr_21863_21894 = state_21853__$1;
(statearr_21863_21894[(1)] = (12));

} else {
var statearr_21864_21895 = state_21853__$1;
(statearr_21864_21895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (3))){
var inst_21851 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21853__$1,inst_21851);
} else {
if((state_val_21854 === (12))){
var inst_21817 = (state_21853[(8)]);
var inst_21841 = cljs.core.vec.call(null,inst_21817);
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21853__$1,(15),out,inst_21841);
} else {
if((state_val_21854 === (2))){
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21853__$1,(4),ch);
} else {
if((state_val_21854 === (11))){
var inst_21833 = (state_21853[(2)]);
var inst_21834 = (new Array(n));
var inst_21817 = inst_21834;
var inst_21818 = (0);
var state_21853__$1 = (function (){var statearr_21865 = state_21853;
(statearr_21865[(7)] = inst_21818);

(statearr_21865[(8)] = inst_21817);

(statearr_21865[(10)] = inst_21833);

return statearr_21865;
})();
var statearr_21866_21896 = state_21853__$1;
(statearr_21866_21896[(2)] = null);

(statearr_21866_21896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (9))){
var inst_21817 = (state_21853[(8)]);
var inst_21831 = cljs.core.vec.call(null,inst_21817);
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21853__$1,(11),out,inst_21831);
} else {
if((state_val_21854 === (5))){
var inst_21826 = (state_21853[(11)]);
var inst_21818 = (state_21853[(7)]);
var inst_21817 = (state_21853[(8)]);
var inst_21821 = (state_21853[(9)]);
var inst_21825 = (inst_21817[inst_21818] = inst_21821);
var inst_21826__$1 = (inst_21818 + (1));
var inst_21827 = (inst_21826__$1 < n);
var state_21853__$1 = (function (){var statearr_21867 = state_21853;
(statearr_21867[(12)] = inst_21825);

(statearr_21867[(11)] = inst_21826__$1);

return statearr_21867;
})();
if(cljs.core.truth_(inst_21827)){
var statearr_21868_21897 = state_21853__$1;
(statearr_21868_21897[(1)] = (8));

} else {
var statearr_21869_21898 = state_21853__$1;
(statearr_21869_21898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (14))){
var inst_21846 = (state_21853[(2)]);
var inst_21847 = cljs.core.async.close_BANG_.call(null,out);
var state_21853__$1 = (function (){var statearr_21871 = state_21853;
(statearr_21871[(13)] = inst_21846);

return statearr_21871;
})();
var statearr_21872_21899 = state_21853__$1;
(statearr_21872_21899[(2)] = inst_21847);

(statearr_21872_21899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (10))){
var inst_21837 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21873_21900 = state_21853__$1;
(statearr_21873_21900[(2)] = inst_21837);

(statearr_21873_21900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (8))){
var inst_21826 = (state_21853[(11)]);
var inst_21817 = (state_21853[(8)]);
var tmp21870 = inst_21817;
var inst_21817__$1 = tmp21870;
var inst_21818 = inst_21826;
var state_21853__$1 = (function (){var statearr_21874 = state_21853;
(statearr_21874[(7)] = inst_21818);

(statearr_21874[(8)] = inst_21817__$1);

return statearr_21874;
})();
var statearr_21875_21901 = state_21853__$1;
(statearr_21875_21901[(2)] = null);

(statearr_21875_21901[(1)] = (2));


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
});})(c__19227__auto___21887,out))
;
return ((function (switch__19115__auto__,c__19227__auto___21887,out){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21879[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21879[(1)] = (1));

return statearr_21879;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21853){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21880){if((e21880 instanceof Object)){
var ex__19119__auto__ = e21880;
var statearr_21881_21902 = state_21853;
(statearr_21881_21902[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21903 = state_21853;
state_21853 = G__21903;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21887,out))
})();
var state__19229__auto__ = (function (){var statearr_21882 = f__19228__auto__.call(null);
(statearr_21882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21887);

return statearr_21882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21887,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21904 = [];
var len__17820__auto___21978 = arguments.length;
var i__17821__auto___21979 = (0);
while(true){
if((i__17821__auto___21979 < len__17820__auto___21978)){
args21904.push((arguments[i__17821__auto___21979]));

var G__21980 = (i__17821__auto___21979 + (1));
i__17821__auto___21979 = G__21980;
continue;
} else {
}
break;
}

var G__21906 = args21904.length;
switch (G__21906) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21904.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19227__auto___21982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19227__auto___21982,out){
return (function (){
var f__19228__auto__ = (function (){var switch__19115__auto__ = ((function (c__19227__auto___21982,out){
return (function (state_21948){
var state_val_21949 = (state_21948[(1)]);
if((state_val_21949 === (7))){
var inst_21944 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21950_21983 = state_21948__$1;
(statearr_21950_21983[(2)] = inst_21944);

(statearr_21950_21983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (1))){
var inst_21907 = [];
var inst_21908 = inst_21907;
var inst_21909 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21948__$1 = (function (){var statearr_21951 = state_21948;
(statearr_21951[(7)] = inst_21908);

(statearr_21951[(8)] = inst_21909);

return statearr_21951;
})();
var statearr_21952_21984 = state_21948__$1;
(statearr_21952_21984[(2)] = null);

(statearr_21952_21984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (4))){
var inst_21912 = (state_21948[(9)]);
var inst_21912__$1 = (state_21948[(2)]);
var inst_21913 = (inst_21912__$1 == null);
var inst_21914 = cljs.core.not.call(null,inst_21913);
var state_21948__$1 = (function (){var statearr_21953 = state_21948;
(statearr_21953[(9)] = inst_21912__$1);

return statearr_21953;
})();
if(inst_21914){
var statearr_21954_21985 = state_21948__$1;
(statearr_21954_21985[(1)] = (5));

} else {
var statearr_21955_21986 = state_21948__$1;
(statearr_21955_21986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (15))){
var inst_21938 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21956_21987 = state_21948__$1;
(statearr_21956_21987[(2)] = inst_21938);

(statearr_21956_21987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (13))){
var state_21948__$1 = state_21948;
var statearr_21957_21988 = state_21948__$1;
(statearr_21957_21988[(2)] = null);

(statearr_21957_21988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (6))){
var inst_21908 = (state_21948[(7)]);
var inst_21933 = inst_21908.length;
var inst_21934 = (inst_21933 > (0));
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21934)){
var statearr_21958_21989 = state_21948__$1;
(statearr_21958_21989[(1)] = (12));

} else {
var statearr_21959_21990 = state_21948__$1;
(statearr_21959_21990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (3))){
var inst_21946 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21948__$1,inst_21946);
} else {
if((state_val_21949 === (12))){
var inst_21908 = (state_21948[(7)]);
var inst_21936 = cljs.core.vec.call(null,inst_21908);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21948__$1,(15),out,inst_21936);
} else {
if((state_val_21949 === (2))){
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21948__$1,(4),ch);
} else {
if((state_val_21949 === (11))){
var inst_21912 = (state_21948[(9)]);
var inst_21916 = (state_21948[(10)]);
var inst_21926 = (state_21948[(2)]);
var inst_21927 = [];
var inst_21928 = inst_21927.push(inst_21912);
var inst_21908 = inst_21927;
var inst_21909 = inst_21916;
var state_21948__$1 = (function (){var statearr_21960 = state_21948;
(statearr_21960[(7)] = inst_21908);

(statearr_21960[(8)] = inst_21909);

(statearr_21960[(11)] = inst_21926);

(statearr_21960[(12)] = inst_21928);

return statearr_21960;
})();
var statearr_21961_21991 = state_21948__$1;
(statearr_21961_21991[(2)] = null);

(statearr_21961_21991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (9))){
var inst_21908 = (state_21948[(7)]);
var inst_21924 = cljs.core.vec.call(null,inst_21908);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21948__$1,(11),out,inst_21924);
} else {
if((state_val_21949 === (5))){
var inst_21912 = (state_21948[(9)]);
var inst_21909 = (state_21948[(8)]);
var inst_21916 = (state_21948[(10)]);
var inst_21916__$1 = f.call(null,inst_21912);
var inst_21917 = cljs.core._EQ_.call(null,inst_21916__$1,inst_21909);
var inst_21918 = cljs.core.keyword_identical_QMARK_.call(null,inst_21909,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21919 = (inst_21917) || (inst_21918);
var state_21948__$1 = (function (){var statearr_21962 = state_21948;
(statearr_21962[(10)] = inst_21916__$1);

return statearr_21962;
})();
if(cljs.core.truth_(inst_21919)){
var statearr_21963_21992 = state_21948__$1;
(statearr_21963_21992[(1)] = (8));

} else {
var statearr_21964_21993 = state_21948__$1;
(statearr_21964_21993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (14))){
var inst_21941 = (state_21948[(2)]);
var inst_21942 = cljs.core.async.close_BANG_.call(null,out);
var state_21948__$1 = (function (){var statearr_21966 = state_21948;
(statearr_21966[(13)] = inst_21941);

return statearr_21966;
})();
var statearr_21967_21994 = state_21948__$1;
(statearr_21967_21994[(2)] = inst_21942);

(statearr_21967_21994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (10))){
var inst_21931 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21968_21995 = state_21948__$1;
(statearr_21968_21995[(2)] = inst_21931);

(statearr_21968_21995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (8))){
var inst_21912 = (state_21948[(9)]);
var inst_21908 = (state_21948[(7)]);
var inst_21916 = (state_21948[(10)]);
var inst_21921 = inst_21908.push(inst_21912);
var tmp21965 = inst_21908;
var inst_21908__$1 = tmp21965;
var inst_21909 = inst_21916;
var state_21948__$1 = (function (){var statearr_21969 = state_21948;
(statearr_21969[(7)] = inst_21908__$1);

(statearr_21969[(14)] = inst_21921);

(statearr_21969[(8)] = inst_21909);

return statearr_21969;
})();
var statearr_21970_21996 = state_21948__$1;
(statearr_21970_21996[(2)] = null);

(statearr_21970_21996[(1)] = (2));


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
});})(c__19227__auto___21982,out))
;
return ((function (switch__19115__auto__,c__19227__auto___21982,out){
return (function() {
var cljs$core$async$state_machine__19116__auto__ = null;
var cljs$core$async$state_machine__19116__auto____0 = (function (){
var statearr_21974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21974[(0)] = cljs$core$async$state_machine__19116__auto__);

(statearr_21974[(1)] = (1));

return statearr_21974;
});
var cljs$core$async$state_machine__19116__auto____1 = (function (state_21948){
while(true){
var ret_value__19117__auto__ = (function (){try{while(true){
var result__19118__auto__ = switch__19115__auto__.call(null,state_21948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19118__auto__;
}
break;
}
}catch (e21975){if((e21975 instanceof Object)){
var ex__19119__auto__ = e21975;
var statearr_21976_21997 = state_21948;
(statearr_21976_21997[(5)] = ex__19119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21998 = state_21948;
state_21948 = G__21998;
continue;
} else {
return ret_value__19117__auto__;
}
break;
}
});
cljs$core$async$state_machine__19116__auto__ = function(state_21948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19116__auto____1.call(this,state_21948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19116__auto____0;
cljs$core$async$state_machine__19116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19116__auto____1;
return cljs$core$async$state_machine__19116__auto__;
})()
;})(switch__19115__auto__,c__19227__auto___21982,out))
})();
var state__19229__auto__ = (function (){var statearr_21977 = f__19228__auto__.call(null);
(statearr_21977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19227__auto___21982);

return statearr_21977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19229__auto__);
});})(c__19227__auto___21982,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map