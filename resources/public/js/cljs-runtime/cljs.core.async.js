goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30858 = arguments.length;
switch (G__30858) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30859 = (function (f,blockable,meta30860){
this.f = f;
this.blockable = blockable;
this.meta30860 = meta30860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30861,meta30860__$1){
var self__ = this;
var _30861__$1 = this;
return (new cljs.core.async.t_cljs$core$async30859(self__.f,self__.blockable,meta30860__$1));
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30861){
var self__ = this;
var _30861__$1 = this;
return self__.meta30860;
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30860","meta30860",-1975305951,null)], null);
}));

(cljs.core.async.t_cljs$core$async30859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30859");

(cljs.core.async.t_cljs$core$async30859.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30859.
 */
cljs.core.async.__GT_t_cljs$core$async30859 = (function cljs$core$async$__GT_t_cljs$core$async30859(f__$1,blockable__$1,meta30860){
return (new cljs.core.async.t_cljs$core$async30859(f__$1,blockable__$1,meta30860));
});

}

return (new cljs.core.async.t_cljs$core$async30859(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30864 = arguments.length;
switch (G__30864) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30866 = arguments.length;
switch (G__30866) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__30868 = arguments.length;
switch (G__30868) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32631 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32631) : fn1.call(null,val_32631));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32631) : fn1.call(null,val_32631));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30870 = arguments.length;
switch (G__30870) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32635 = n;
var x_32636 = (0);
while(true){
if((x_32636 < n__4613__auto___32635)){
(a[x_32636] = x_32636);

var G__32637 = (x_32636 + (1));
x_32636 = G__32637;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30872 = (function (flag,meta30873){
this.flag = flag;
this.meta30873 = meta30873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30874,meta30873__$1){
var self__ = this;
var _30874__$1 = this;
return (new cljs.core.async.t_cljs$core$async30872(self__.flag,meta30873__$1));
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30874){
var self__ = this;
var _30874__$1 = this;
return self__.meta30873;
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30873","meta30873",-1286441013,null)], null);
}));

(cljs.core.async.t_cljs$core$async30872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30872");

(cljs.core.async.t_cljs$core$async30872.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30872.
 */
cljs.core.async.__GT_t_cljs$core$async30872 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30872(flag__$1,meta30873){
return (new cljs.core.async.t_cljs$core$async30872(flag__$1,meta30873));
});

}

return (new cljs.core.async.t_cljs$core$async30872(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30876 = (function (flag,cb,meta30877){
this.flag = flag;
this.cb = cb;
this.meta30877 = meta30877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30878,meta30877__$1){
var self__ = this;
var _30878__$1 = this;
return (new cljs.core.async.t_cljs$core$async30876(self__.flag,self__.cb,meta30877__$1));
}));

(cljs.core.async.t_cljs$core$async30876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30878){
var self__ = this;
var _30878__$1 = this;
return self__.meta30877;
}));

(cljs.core.async.t_cljs$core$async30876.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30876.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30877","meta30877",2095221397,null)], null);
}));

(cljs.core.async.t_cljs$core$async30876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30876");

(cljs.core.async.t_cljs$core$async30876.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30876.
 */
cljs.core.async.__GT_t_cljs$core$async30876 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30876(flag__$1,cb__$1,meta30877){
return (new cljs.core.async.t_cljs$core$async30876(flag__$1,cb__$1,meta30877));
});

}

return (new cljs.core.async.t_cljs$core$async30876(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30896_SHARP_){
var G__30903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30896_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30903) : fret.call(null,G__30903));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30897_SHARP_){
var G__30904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30897_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30904) : fret.call(null,G__30904));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32638 = (i + (1));
i = G__32638;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4742__auto__ = [];
var len__4736__auto___32639 = arguments.length;
var i__4737__auto___32640 = (0);
while(true){
if((i__4737__auto___32640 < len__4736__auto___32639)){
args__4742__auto__.push((arguments[i__4737__auto___32640]));

var G__32641 = (i__4737__auto___32640 + (1));
i__4737__auto___32640 = G__32641;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30911){
var map__30912 = p__30911;
var map__30912__$1 = (((((!((map__30912 == null))))?(((((map__30912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30912):map__30912);
var opts = map__30912__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30905){
var G__30906 = cljs.core.first(seq30905);
var seq30905__$1 = cljs.core.next(seq30905);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30906,seq30905__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30915 = arguments.length;
switch (G__30915) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30787__auto___32643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_30939){
var state_val_30940 = (state_30939[(1)]);
if((state_val_30940 === (7))){
var inst_30935 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30941_32644 = state_30939__$1;
(statearr_30941_32644[(2)] = inst_30935);

(statearr_30941_32644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (1))){
var state_30939__$1 = state_30939;
var statearr_30942_32645 = state_30939__$1;
(statearr_30942_32645[(2)] = null);

(statearr_30942_32645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (4))){
var inst_30918 = (state_30939[(7)]);
var inst_30918__$1 = (state_30939[(2)]);
var inst_30919 = (inst_30918__$1 == null);
var state_30939__$1 = (function (){var statearr_30943 = state_30939;
(statearr_30943[(7)] = inst_30918__$1);

return statearr_30943;
})();
if(cljs.core.truth_(inst_30919)){
var statearr_30944_32646 = state_30939__$1;
(statearr_30944_32646[(1)] = (5));

} else {
var statearr_30945_32647 = state_30939__$1;
(statearr_30945_32647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (13))){
var state_30939__$1 = state_30939;
var statearr_30946_32648 = state_30939__$1;
(statearr_30946_32648[(2)] = null);

(statearr_30946_32648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (6))){
var inst_30918 = (state_30939[(7)]);
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30939__$1,(11),to,inst_30918);
} else {
if((state_val_30940 === (3))){
var inst_30937 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30939__$1,inst_30937);
} else {
if((state_val_30940 === (12))){
var state_30939__$1 = state_30939;
var statearr_30947_32649 = state_30939__$1;
(statearr_30947_32649[(2)] = null);

(statearr_30947_32649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (2))){
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30939__$1,(4),from);
} else {
if((state_val_30940 === (11))){
var inst_30928 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
if(cljs.core.truth_(inst_30928)){
var statearr_30948_32650 = state_30939__$1;
(statearr_30948_32650[(1)] = (12));

} else {
var statearr_30949_32651 = state_30939__$1;
(statearr_30949_32651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (9))){
var state_30939__$1 = state_30939;
var statearr_30950_32652 = state_30939__$1;
(statearr_30950_32652[(2)] = null);

(statearr_30950_32652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (5))){
var state_30939__$1 = state_30939;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30951_32653 = state_30939__$1;
(statearr_30951_32653[(1)] = (8));

} else {
var statearr_30952_32654 = state_30939__$1;
(statearr_30952_32654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (14))){
var inst_30933 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30953_32655 = state_30939__$1;
(statearr_30953_32655[(2)] = inst_30933);

(statearr_30953_32655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (10))){
var inst_30925 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30954_32656 = state_30939__$1;
(statearr_30954_32656[(2)] = inst_30925);

(statearr_30954_32656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (8))){
var inst_30922 = cljs.core.async.close_BANG_(to);
var state_30939__$1 = state_30939;
var statearr_30955_32657 = state_30939__$1;
(statearr_30955_32657[(2)] = inst_30922);

(statearr_30955_32657[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_30939){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_30939);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e30957){var ex__30257__auto__ = e30957;
var statearr_30958_32658 = state_30939;
(statearr_30958_32658[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_30939[(4)]))){
var statearr_30959_32659 = state_30939;
(statearr_30959_32659[(1)] = cljs.core.first((state_30939[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32660 = state_30939;
state_30939 = G__32660;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_30939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_30939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_30960 = f__30788__auto__();
(statearr_30960[(6)] = c__30787__auto___32643);

return statearr_30960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30961){
var vec__30962 = p__30961;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30962,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30962,(1),null);
var job = vec__30962;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30787__auto___32661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_30969){
var state_val_30970 = (state_30969[(1)]);
if((state_val_30970 === (1))){
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30969__$1,(2),res,v);
} else {
if((state_val_30970 === (2))){
var inst_30966 = (state_30969[(2)]);
var inst_30967 = cljs.core.async.close_BANG_(res);
var state_30969__$1 = (function (){var statearr_30971 = state_30969;
(statearr_30971[(7)] = inst_30966);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30969__$1,inst_30967);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0 = (function (){
var statearr_30972 = [null,null,null,null,null,null,null,null];
(statearr_30972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__);

(statearr_30972[(1)] = (1));

return statearr_30972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1 = (function (state_30969){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_30969);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e30973){var ex__30257__auto__ = e30973;
var statearr_30974_32662 = state_30969;
(statearr_30974_32662[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_30969[(4)]))){
var statearr_30975_32663 = state_30969;
(statearr_30975_32663[(1)] = cljs.core.first((state_30969[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32664 = state_30969;
state_30969 = G__32664;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = function(state_30969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1.call(this,state_30969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_30976 = f__30788__auto__();
(statearr_30976[(6)] = c__30787__auto___32661);

return statearr_30976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30977){
var vec__30978 = p__30977;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30978,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30978,(1),null);
var job = vec__30978;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32665 = n;
var __32666 = (0);
while(true){
if((__32666 < n__4613__auto___32665)){
var G__30981_32667 = type;
var G__30981_32668__$1 = (((G__30981_32667 instanceof cljs.core.Keyword))?G__30981_32667.fqn:null);
switch (G__30981_32668__$1) {
case "compute":
var c__30787__auto___32670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32666,c__30787__auto___32670,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = ((function (__32666,c__30787__auto___32670,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (state_30994){
var state_val_30995 = (state_30994[(1)]);
if((state_val_30995 === (1))){
var state_30994__$1 = state_30994;
var statearr_30996_32671 = state_30994__$1;
(statearr_30996_32671[(2)] = null);

(statearr_30996_32671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (2))){
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30994__$1,(4),jobs);
} else {
if((state_val_30995 === (3))){
var inst_30992 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30994__$1,inst_30992);
} else {
if((state_val_30995 === (4))){
var inst_30984 = (state_30994[(2)]);
var inst_30985 = process(inst_30984);
var state_30994__$1 = state_30994;
if(cljs.core.truth_(inst_30985)){
var statearr_30997_32672 = state_30994__$1;
(statearr_30997_32672[(1)] = (5));

} else {
var statearr_30998_32674 = state_30994__$1;
(statearr_30998_32674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (5))){
var state_30994__$1 = state_30994;
var statearr_30999_32675 = state_30994__$1;
(statearr_30999_32675[(2)] = null);

(statearr_30999_32675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (6))){
var state_30994__$1 = state_30994;
var statearr_31000_32676 = state_30994__$1;
(statearr_31000_32676[(2)] = null);

(statearr_31000_32676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (7))){
var inst_30990 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
var statearr_31001_32677 = state_30994__$1;
(statearr_31001_32677[(2)] = inst_30990);

(statearr_31001_32677[(1)] = (3));


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
});})(__32666,c__30787__auto___32670,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__30253__auto__,c__30787__auto___32670,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0 = (function (){
var statearr_31002 = [null,null,null,null,null,null,null];
(statearr_31002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__);

(statearr_31002[(1)] = (1));

return statearr_31002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1 = (function (state_30994){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_30994);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31003){var ex__30257__auto__ = e31003;
var statearr_31004_32680 = state_30994;
(statearr_31004_32680[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_30994[(4)]))){
var statearr_31005_32681 = state_30994;
(statearr_31005_32681[(1)] = cljs.core.first((state_30994[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_30994;
state_30994 = G__32682;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = function(state_30994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1.call(this,state_30994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__;
})()
;})(__32666,switch__30253__auto__,c__30787__auto___32670,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async))
})();
var state__30789__auto__ = (function (){var statearr_31006 = f__30788__auto__();
(statearr_31006[(6)] = c__30787__auto___32670);

return statearr_31006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
});})(__32666,c__30787__auto___32670,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async))
);


break;
case "async":
var c__30787__auto___32683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32666,c__30787__auto___32683,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = ((function (__32666,c__30787__auto___32683,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (state_31019){
var state_val_31020 = (state_31019[(1)]);
if((state_val_31020 === (1))){
var state_31019__$1 = state_31019;
var statearr_31021_32685 = state_31019__$1;
(statearr_31021_32685[(2)] = null);

(statearr_31021_32685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (2))){
var state_31019__$1 = state_31019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31019__$1,(4),jobs);
} else {
if((state_val_31020 === (3))){
var inst_31017 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31019__$1,inst_31017);
} else {
if((state_val_31020 === (4))){
var inst_31009 = (state_31019[(2)]);
var inst_31010 = async(inst_31009);
var state_31019__$1 = state_31019;
if(cljs.core.truth_(inst_31010)){
var statearr_31022_32687 = state_31019__$1;
(statearr_31022_32687[(1)] = (5));

} else {
var statearr_31023_32688 = state_31019__$1;
(statearr_31023_32688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (5))){
var state_31019__$1 = state_31019;
var statearr_31024_32689 = state_31019__$1;
(statearr_31024_32689[(2)] = null);

(statearr_31024_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (6))){
var state_31019__$1 = state_31019;
var statearr_31025_32690 = state_31019__$1;
(statearr_31025_32690[(2)] = null);

(statearr_31025_32690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (7))){
var inst_31015 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
var statearr_31026_32691 = state_31019__$1;
(statearr_31026_32691[(2)] = inst_31015);

(statearr_31026_32691[(1)] = (3));


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
});})(__32666,c__30787__auto___32683,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__30253__auto__,c__30787__auto___32683,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0 = (function (){
var statearr_31027 = [null,null,null,null,null,null,null];
(statearr_31027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__);

(statearr_31027[(1)] = (1));

return statearr_31027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1 = (function (state_31019){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31019);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31028){var ex__30257__auto__ = e31028;
var statearr_31029_32694 = state_31019;
(statearr_31029_32694[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31019[(4)]))){
var statearr_31030_32695 = state_31019;
(statearr_31030_32695[(1)] = cljs.core.first((state_31019[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32696 = state_31019;
state_31019 = G__32696;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = function(state_31019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1.call(this,state_31019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__;
})()
;})(__32666,switch__30253__auto__,c__30787__auto___32683,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async))
})();
var state__30789__auto__ = (function (){var statearr_31031 = f__30788__auto__();
(statearr_31031[(6)] = c__30787__auto___32683);

return statearr_31031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
});})(__32666,c__30787__auto___32683,G__30981_32667,G__30981_32668__$1,n__4613__auto___32665,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30981_32668__$1)].join('')));

}

var G__32697 = (__32666 + (1));
__32666 = G__32697;
continue;
} else {
}
break;
}

var c__30787__auto___32698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31053){
var state_val_31054 = (state_31053[(1)]);
if((state_val_31054 === (7))){
var inst_31049 = (state_31053[(2)]);
var state_31053__$1 = state_31053;
var statearr_31055_32699 = state_31053__$1;
(statearr_31055_32699[(2)] = inst_31049);

(statearr_31055_32699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (1))){
var state_31053__$1 = state_31053;
var statearr_31056_32701 = state_31053__$1;
(statearr_31056_32701[(2)] = null);

(statearr_31056_32701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (4))){
var inst_31034 = (state_31053[(7)]);
var inst_31034__$1 = (state_31053[(2)]);
var inst_31035 = (inst_31034__$1 == null);
var state_31053__$1 = (function (){var statearr_31057 = state_31053;
(statearr_31057[(7)] = inst_31034__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31058_32703 = state_31053__$1;
(statearr_31058_32703[(1)] = (5));

} else {
var statearr_31059_32704 = state_31053__$1;
(statearr_31059_32704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (6))){
var inst_31034 = (state_31053[(7)]);
var inst_31039 = (state_31053[(8)]);
var inst_31039__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31041 = [inst_31034,inst_31039__$1];
var inst_31042 = (new cljs.core.PersistentVector(null,2,(5),inst_31040,inst_31041,null));
var state_31053__$1 = (function (){var statearr_31060 = state_31053;
(statearr_31060[(8)] = inst_31039__$1);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31053__$1,(8),jobs,inst_31042);
} else {
if((state_val_31054 === (3))){
var inst_31051 = (state_31053[(2)]);
var state_31053__$1 = state_31053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31053__$1,inst_31051);
} else {
if((state_val_31054 === (2))){
var state_31053__$1 = state_31053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31053__$1,(4),from);
} else {
if((state_val_31054 === (9))){
var inst_31046 = (state_31053[(2)]);
var state_31053__$1 = (function (){var statearr_31061 = state_31053;
(statearr_31061[(9)] = inst_31046);

return statearr_31061;
})();
var statearr_31062_32705 = state_31053__$1;
(statearr_31062_32705[(2)] = null);

(statearr_31062_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (5))){
var inst_31037 = cljs.core.async.close_BANG_(jobs);
var state_31053__$1 = state_31053;
var statearr_31063_32706 = state_31053__$1;
(statearr_31063_32706[(2)] = inst_31037);

(statearr_31063_32706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (8))){
var inst_31039 = (state_31053[(8)]);
var inst_31044 = (state_31053[(2)]);
var state_31053__$1 = (function (){var statearr_31064 = state_31053;
(statearr_31064[(10)] = inst_31044);

return statearr_31064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31053__$1,(9),results,inst_31039);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0 = (function (){
var statearr_31065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__);

(statearr_31065[(1)] = (1));

return statearr_31065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1 = (function (state_31053){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31053);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31066){var ex__30257__auto__ = e31066;
var statearr_31067_32709 = state_31053;
(statearr_31067_32709[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31053[(4)]))){
var statearr_31068_32710 = state_31053;
(statearr_31068_32710[(1)] = cljs.core.first((state_31053[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32711 = state_31053;
state_31053 = G__32711;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = function(state_31053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1.call(this,state_31053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31069 = f__30788__auto__();
(statearr_31069[(6)] = c__30787__auto___32698);

return statearr_31069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


var c__30787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31107){
var state_val_31108 = (state_31107[(1)]);
if((state_val_31108 === (7))){
var inst_31103 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31109_32712 = state_31107__$1;
(statearr_31109_32712[(2)] = inst_31103);

(statearr_31109_32712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (20))){
var state_31107__$1 = state_31107;
var statearr_31110_32713 = state_31107__$1;
(statearr_31110_32713[(2)] = null);

(statearr_31110_32713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (1))){
var state_31107__$1 = state_31107;
var statearr_31111_32714 = state_31107__$1;
(statearr_31111_32714[(2)] = null);

(statearr_31111_32714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (4))){
var inst_31072 = (state_31107[(7)]);
var inst_31072__$1 = (state_31107[(2)]);
var inst_31073 = (inst_31072__$1 == null);
var state_31107__$1 = (function (){var statearr_31112 = state_31107;
(statearr_31112[(7)] = inst_31072__$1);

return statearr_31112;
})();
if(cljs.core.truth_(inst_31073)){
var statearr_31113_32715 = state_31107__$1;
(statearr_31113_32715[(1)] = (5));

} else {
var statearr_31114_32718 = state_31107__$1;
(statearr_31114_32718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (15))){
var inst_31085 = (state_31107[(8)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31107__$1,(18),to,inst_31085);
} else {
if((state_val_31108 === (21))){
var inst_31098 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31115_32719 = state_31107__$1;
(statearr_31115_32719[(2)] = inst_31098);

(statearr_31115_32719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (13))){
var inst_31100 = (state_31107[(2)]);
var state_31107__$1 = (function (){var statearr_31116 = state_31107;
(statearr_31116[(9)] = inst_31100);

return statearr_31116;
})();
var statearr_31117_32720 = state_31107__$1;
(statearr_31117_32720[(2)] = null);

(statearr_31117_32720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (6))){
var inst_31072 = (state_31107[(7)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31107__$1,(11),inst_31072);
} else {
if((state_val_31108 === (17))){
var inst_31093 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
if(cljs.core.truth_(inst_31093)){
var statearr_31118_32721 = state_31107__$1;
(statearr_31118_32721[(1)] = (19));

} else {
var statearr_31119_32722 = state_31107__$1;
(statearr_31119_32722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (3))){
var inst_31105 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31107__$1,inst_31105);
} else {
if((state_val_31108 === (12))){
var inst_31082 = (state_31107[(10)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31107__$1,(14),inst_31082);
} else {
if((state_val_31108 === (2))){
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31107__$1,(4),results);
} else {
if((state_val_31108 === (19))){
var state_31107__$1 = state_31107;
var statearr_31120_32724 = state_31107__$1;
(statearr_31120_32724[(2)] = null);

(statearr_31120_32724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (11))){
var inst_31082 = (state_31107[(2)]);
var state_31107__$1 = (function (){var statearr_31121 = state_31107;
(statearr_31121[(10)] = inst_31082);

return statearr_31121;
})();
var statearr_31122_32725 = state_31107__$1;
(statearr_31122_32725[(2)] = null);

(statearr_31122_32725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (9))){
var state_31107__$1 = state_31107;
var statearr_31123_32726 = state_31107__$1;
(statearr_31123_32726[(2)] = null);

(statearr_31123_32726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (5))){
var state_31107__$1 = state_31107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31124_32727 = state_31107__$1;
(statearr_31124_32727[(1)] = (8));

} else {
var statearr_31125_32728 = state_31107__$1;
(statearr_31125_32728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (14))){
var inst_31085 = (state_31107[(8)]);
var inst_31085__$1 = (state_31107[(2)]);
var inst_31086 = (inst_31085__$1 == null);
var inst_31087 = cljs.core.not(inst_31086);
var state_31107__$1 = (function (){var statearr_31126 = state_31107;
(statearr_31126[(8)] = inst_31085__$1);

return statearr_31126;
})();
if(inst_31087){
var statearr_31127_32729 = state_31107__$1;
(statearr_31127_32729[(1)] = (15));

} else {
var statearr_31128_32730 = state_31107__$1;
(statearr_31128_32730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (16))){
var state_31107__$1 = state_31107;
var statearr_31129_32731 = state_31107__$1;
(statearr_31129_32731[(2)] = false);

(statearr_31129_32731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (10))){
var inst_31079 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31130_32732 = state_31107__$1;
(statearr_31130_32732[(2)] = inst_31079);

(statearr_31130_32732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (18))){
var inst_31090 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31131_32733 = state_31107__$1;
(statearr_31131_32733[(2)] = inst_31090);

(statearr_31131_32733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (8))){
var inst_31076 = cljs.core.async.close_BANG_(to);
var state_31107__$1 = state_31107;
var statearr_31132_32734 = state_31107__$1;
(statearr_31132_32734[(2)] = inst_31076);

(statearr_31132_32734[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0 = (function (){
var statearr_31133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__);

(statearr_31133[(1)] = (1));

return statearr_31133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1 = (function (state_31107){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31107);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31134){var ex__30257__auto__ = e31134;
var statearr_31135_32735 = state_31107;
(statearr_31135_32735[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31107[(4)]))){
var statearr_31136_32736 = state_31107;
(statearr_31136_32736[(1)] = cljs.core.first((state_31107[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32737 = state_31107;
state_31107 = G__32737;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__ = function(state_31107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1.call(this,state_31107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31137 = f__30788__auto__();
(statearr_31137[(6)] = c__30787__auto__);

return statearr_31137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));

return c__30787__auto__;
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
var G__31139 = arguments.length;
switch (G__31139) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__31141 = arguments.length;
switch (G__31141) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__31143 = arguments.length;
switch (G__31143) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30787__auto___32780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (7))){
var inst_31165 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31171_32781 = state_31169__$1;
(statearr_31171_32781[(2)] = inst_31165);

(statearr_31171_32781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (1))){
var state_31169__$1 = state_31169;
var statearr_31172_32782 = state_31169__$1;
(statearr_31172_32782[(2)] = null);

(statearr_31172_32782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (4))){
var inst_31146 = (state_31169[(7)]);
var inst_31146__$1 = (state_31169[(2)]);
var inst_31147 = (inst_31146__$1 == null);
var state_31169__$1 = (function (){var statearr_31173 = state_31169;
(statearr_31173[(7)] = inst_31146__$1);

return statearr_31173;
})();
if(cljs.core.truth_(inst_31147)){
var statearr_31174_32783 = state_31169__$1;
(statearr_31174_32783[(1)] = (5));

} else {
var statearr_31175_32784 = state_31169__$1;
(statearr_31175_32784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (13))){
var state_31169__$1 = state_31169;
var statearr_31176_32785 = state_31169__$1;
(statearr_31176_32785[(2)] = null);

(statearr_31176_32785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (6))){
var inst_31146 = (state_31169[(7)]);
var inst_31152 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31146) : p.call(null,inst_31146));
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31152)){
var statearr_31177_32786 = state_31169__$1;
(statearr_31177_32786[(1)] = (9));

} else {
var statearr_31178_32787 = state_31169__$1;
(statearr_31178_32787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (3))){
var inst_31167 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31169__$1,inst_31167);
} else {
if((state_val_31170 === (12))){
var state_31169__$1 = state_31169;
var statearr_31179_32788 = state_31169__$1;
(statearr_31179_32788[(2)] = null);

(statearr_31179_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (2))){
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31169__$1,(4),ch);
} else {
if((state_val_31170 === (11))){
var inst_31146 = (state_31169[(7)]);
var inst_31156 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31169__$1,(8),inst_31156,inst_31146);
} else {
if((state_val_31170 === (9))){
var state_31169__$1 = state_31169;
var statearr_31180_32789 = state_31169__$1;
(statearr_31180_32789[(2)] = tc);

(statearr_31180_32789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (5))){
var inst_31149 = cljs.core.async.close_BANG_(tc);
var inst_31150 = cljs.core.async.close_BANG_(fc);
var state_31169__$1 = (function (){var statearr_31181 = state_31169;
(statearr_31181[(8)] = inst_31149);

return statearr_31181;
})();
var statearr_31182_32790 = state_31169__$1;
(statearr_31182_32790[(2)] = inst_31150);

(statearr_31182_32790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (14))){
var inst_31163 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31183_32791 = state_31169__$1;
(statearr_31183_32791[(2)] = inst_31163);

(statearr_31183_32791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (10))){
var state_31169__$1 = state_31169;
var statearr_31184_32792 = state_31169__$1;
(statearr_31184_32792[(2)] = fc);

(statearr_31184_32792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (8))){
var inst_31158 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31158)){
var statearr_31185_32793 = state_31169__$1;
(statearr_31185_32793[(1)] = (12));

} else {
var statearr_31186_32794 = state_31169__$1;
(statearr_31186_32794[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_31187 = [null,null,null,null,null,null,null,null,null];
(statearr_31187[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_31187[(1)] = (1));

return statearr_31187;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_31169){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31169);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31188){var ex__30257__auto__ = e31188;
var statearr_31189_32795 = state_31169;
(statearr_31189_32795[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31169[(4)]))){
var statearr_31190_32796 = state_31169;
(statearr_31190_32796[(1)] = cljs.core.first((state_31169[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32797 = state_31169;
state_31169 = G__32797;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31191 = f__30788__auto__();
(statearr_31191[(6)] = c__30787__auto___32780);

return statearr_31191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31213){
var state_val_31214 = (state_31213[(1)]);
if((state_val_31214 === (7))){
var inst_31209 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31215_32798 = state_31213__$1;
(statearr_31215_32798[(2)] = inst_31209);

(statearr_31215_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (1))){
var inst_31192 = init;
var inst_31193 = inst_31192;
var state_31213__$1 = (function (){var statearr_31216 = state_31213;
(statearr_31216[(7)] = inst_31193);

return statearr_31216;
})();
var statearr_31217_32799 = state_31213__$1;
(statearr_31217_32799[(2)] = null);

(statearr_31217_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (4))){
var inst_31196 = (state_31213[(8)]);
var inst_31196__$1 = (state_31213[(2)]);
var inst_31197 = (inst_31196__$1 == null);
var state_31213__$1 = (function (){var statearr_31218 = state_31213;
(statearr_31218[(8)] = inst_31196__$1);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31197)){
var statearr_31219_32800 = state_31213__$1;
(statearr_31219_32800[(1)] = (5));

} else {
var statearr_31220_32801 = state_31213__$1;
(statearr_31220_32801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (6))){
var inst_31200 = (state_31213[(9)]);
var inst_31193 = (state_31213[(7)]);
var inst_31196 = (state_31213[(8)]);
var inst_31200__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31193,inst_31196) : f.call(null,inst_31193,inst_31196));
var inst_31201 = cljs.core.reduced_QMARK_(inst_31200__$1);
var state_31213__$1 = (function (){var statearr_31221 = state_31213;
(statearr_31221[(9)] = inst_31200__$1);

return statearr_31221;
})();
if(inst_31201){
var statearr_31222_32802 = state_31213__$1;
(statearr_31222_32802[(1)] = (8));

} else {
var statearr_31223_32803 = state_31213__$1;
(statearr_31223_32803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (3))){
var inst_31211 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31213__$1,inst_31211);
} else {
if((state_val_31214 === (2))){
var state_31213__$1 = state_31213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31213__$1,(4),ch);
} else {
if((state_val_31214 === (9))){
var inst_31200 = (state_31213[(9)]);
var inst_31193 = inst_31200;
var state_31213__$1 = (function (){var statearr_31225 = state_31213;
(statearr_31225[(7)] = inst_31193);

return statearr_31225;
})();
var statearr_31227_32804 = state_31213__$1;
(statearr_31227_32804[(2)] = null);

(statearr_31227_32804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (5))){
var inst_31193 = (state_31213[(7)]);
var state_31213__$1 = state_31213;
var statearr_31228_32805 = state_31213__$1;
(statearr_31228_32805[(2)] = inst_31193);

(statearr_31228_32805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (10))){
var inst_31207 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31229_32806 = state_31213__$1;
(statearr_31229_32806[(2)] = inst_31207);

(statearr_31229_32806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (8))){
var inst_31200 = (state_31213[(9)]);
var inst_31203 = cljs.core.deref(inst_31200);
var state_31213__$1 = state_31213;
var statearr_31230_32807 = state_31213__$1;
(statearr_31230_32807[(2)] = inst_31203);

(statearr_31230_32807[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30254__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30254__auto____0 = (function (){
var statearr_31231 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31231[(0)] = cljs$core$async$reduce_$_state_machine__30254__auto__);

(statearr_31231[(1)] = (1));

return statearr_31231;
});
var cljs$core$async$reduce_$_state_machine__30254__auto____1 = (function (state_31213){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31213);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31232){var ex__30257__auto__ = e31232;
var statearr_31234_32808 = state_31213;
(statearr_31234_32808[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31213[(4)]))){
var statearr_31235_32809 = state_31213;
(statearr_31235_32809[(1)] = cljs.core.first((state_31213[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32810 = state_31213;
state_31213 = G__32810;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30254__auto__ = function(state_31213){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30254__auto____1.call(this,state_31213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30254__auto____0;
cljs$core$async$reduce_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30254__auto____1;
return cljs$core$async$reduce_$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31236 = f__30788__auto__();
(statearr_31236[(6)] = c__30787__auto__);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));

return c__30787__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (1))){
var inst_31240 = cljs.core.async.reduce(f__$1,init,ch);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31246__$1,(2),inst_31240);
} else {
if((state_val_31247 === (2))){
var inst_31242 = (state_31246[(2)]);
var inst_31243 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31242) : f__$1.call(null,inst_31242));
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31246__$1,inst_31243);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30254__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30254__auto____0 = (function (){
var statearr_31248 = [null,null,null,null,null,null,null];
(statearr_31248[(0)] = cljs$core$async$transduce_$_state_machine__30254__auto__);

(statearr_31248[(1)] = (1));

return statearr_31248;
});
var cljs$core$async$transduce_$_state_machine__30254__auto____1 = (function (state_31246){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31246);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31249){var ex__30257__auto__ = e31249;
var statearr_31250_32811 = state_31246;
(statearr_31250_32811[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31246[(4)]))){
var statearr_31251_32812 = state_31246;
(statearr_31251_32812[(1)] = cljs.core.first((state_31246[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32813 = state_31246;
state_31246 = G__32813;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30254__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30254__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30254__auto____0;
cljs$core$async$transduce_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30254__auto____1;
return cljs$core$async$transduce_$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31252 = f__30788__auto__();
(statearr_31252[(6)] = c__30787__auto__);

return statearr_31252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));

return c__30787__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31254 = arguments.length;
switch (G__31254) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31279){
var state_val_31280 = (state_31279[(1)]);
if((state_val_31280 === (7))){
var inst_31261 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
var statearr_31281_32815 = state_31279__$1;
(statearr_31281_32815[(2)] = inst_31261);

(statearr_31281_32815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (1))){
var inst_31255 = cljs.core.seq(coll);
var inst_31256 = inst_31255;
var state_31279__$1 = (function (){var statearr_31282 = state_31279;
(statearr_31282[(7)] = inst_31256);

return statearr_31282;
})();
var statearr_31283_32816 = state_31279__$1;
(statearr_31283_32816[(2)] = null);

(statearr_31283_32816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (4))){
var inst_31256 = (state_31279[(7)]);
var inst_31259 = cljs.core.first(inst_31256);
var state_31279__$1 = state_31279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31279__$1,(7),ch,inst_31259);
} else {
if((state_val_31280 === (13))){
var inst_31273 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
var statearr_31294_32817 = state_31279__$1;
(statearr_31294_32817[(2)] = inst_31273);

(statearr_31294_32817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (6))){
var inst_31264 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
if(cljs.core.truth_(inst_31264)){
var statearr_31295_32818 = state_31279__$1;
(statearr_31295_32818[(1)] = (8));

} else {
var statearr_31296_32819 = state_31279__$1;
(statearr_31296_32819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (3))){
var inst_31277 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31279__$1,inst_31277);
} else {
if((state_val_31280 === (12))){
var state_31279__$1 = state_31279;
var statearr_31297_32820 = state_31279__$1;
(statearr_31297_32820[(2)] = null);

(statearr_31297_32820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (2))){
var inst_31256 = (state_31279[(7)]);
var state_31279__$1 = state_31279;
if(cljs.core.truth_(inst_31256)){
var statearr_31301_32821 = state_31279__$1;
(statearr_31301_32821[(1)] = (4));

} else {
var statearr_31302_32822 = state_31279__$1;
(statearr_31302_32822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (11))){
var inst_31270 = cljs.core.async.close_BANG_(ch);
var state_31279__$1 = state_31279;
var statearr_31303_32823 = state_31279__$1;
(statearr_31303_32823[(2)] = inst_31270);

(statearr_31303_32823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (9))){
var state_31279__$1 = state_31279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31304_32824 = state_31279__$1;
(statearr_31304_32824[(1)] = (11));

} else {
var statearr_31305_32825 = state_31279__$1;
(statearr_31305_32825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (5))){
var inst_31256 = (state_31279[(7)]);
var state_31279__$1 = state_31279;
var statearr_31307_32826 = state_31279__$1;
(statearr_31307_32826[(2)] = inst_31256);

(statearr_31307_32826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (10))){
var inst_31275 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
var statearr_31308_32827 = state_31279__$1;
(statearr_31308_32827[(2)] = inst_31275);

(statearr_31308_32827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (8))){
var inst_31256 = (state_31279[(7)]);
var inst_31266 = cljs.core.next(inst_31256);
var inst_31256__$1 = inst_31266;
var state_31279__$1 = (function (){var statearr_31309 = state_31279;
(statearr_31309[(7)] = inst_31256__$1);

return statearr_31309;
})();
var statearr_31311_32828 = state_31279__$1;
(statearr_31311_32828[(2)] = null);

(statearr_31311_32828[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_31312 = [null,null,null,null,null,null,null,null];
(statearr_31312[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_31312[(1)] = (1));

return statearr_31312;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_31279){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31279);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31313){var ex__30257__auto__ = e31313;
var statearr_31314_32829 = state_31279;
(statearr_31314_32829[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31279[(4)]))){
var statearr_31316_32830 = state_31279;
(statearr_31316_32830[(1)] = cljs.core.first((state_31279[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32831 = state_31279;
state_31279 = G__32831;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_31279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_31279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31317 = f__30788__auto__();
(statearr_31317[(6)] = c__30787__auto__);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));

return c__30787__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31321 = arguments.length;
switch (G__31321) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32842 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32842(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32843 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32843(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32845 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32845(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32851 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32851(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31322 = (function (ch,cs,meta31323){
this.ch = ch;
this.cs = cs;
this.meta31323 = meta31323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31324,meta31323__$1){
var self__ = this;
var _31324__$1 = this;
return (new cljs.core.async.t_cljs$core$async31322(self__.ch,self__.cs,meta31323__$1));
}));

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31324){
var self__ = this;
var _31324__$1 = this;
return self__.meta31323;
}));

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31322.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31323","meta31323",1638799166,null)], null);
}));

(cljs.core.async.t_cljs$core$async31322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31322");

(cljs.core.async.t_cljs$core$async31322.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31322.
 */
cljs.core.async.__GT_t_cljs$core$async31322 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31322(ch__$1,cs__$1,meta31323){
return (new cljs.core.async.t_cljs$core$async31322(ch__$1,cs__$1,meta31323));
});

}

return (new cljs.core.async.t_cljs$core$async31322(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30787__auto___32867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31461){
var state_val_31462 = (state_31461[(1)]);
if((state_val_31462 === (7))){
var inst_31457 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31463_32868 = state_31461__$1;
(statearr_31463_32868[(2)] = inst_31457);

(statearr_31463_32868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (20))){
var inst_31362 = (state_31461[(7)]);
var inst_31374 = cljs.core.first(inst_31362);
var inst_31375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31374,(0),null);
var inst_31376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31374,(1),null);
var state_31461__$1 = (function (){var statearr_31464 = state_31461;
(statearr_31464[(8)] = inst_31375);

return statearr_31464;
})();
if(cljs.core.truth_(inst_31376)){
var statearr_31465_32869 = state_31461__$1;
(statearr_31465_32869[(1)] = (22));

} else {
var statearr_31466_32870 = state_31461__$1;
(statearr_31466_32870[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (27))){
var inst_31406 = (state_31461[(9)]);
var inst_31331 = (state_31461[(10)]);
var inst_31404 = (state_31461[(11)]);
var inst_31411 = (state_31461[(12)]);
var inst_31411__$1 = cljs.core._nth(inst_31404,inst_31406);
var inst_31412 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31411__$1,inst_31331,done);
var state_31461__$1 = (function (){var statearr_31467 = state_31461;
(statearr_31467[(12)] = inst_31411__$1);

return statearr_31467;
})();
if(cljs.core.truth_(inst_31412)){
var statearr_31468_32871 = state_31461__$1;
(statearr_31468_32871[(1)] = (30));

} else {
var statearr_31469_32872 = state_31461__$1;
(statearr_31469_32872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (1))){
var state_31461__$1 = state_31461;
var statearr_31471_32879 = state_31461__$1;
(statearr_31471_32879[(2)] = null);

(statearr_31471_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (24))){
var inst_31362 = (state_31461[(7)]);
var inst_31381 = (state_31461[(2)]);
var inst_31382 = cljs.core.next(inst_31362);
var inst_31340 = inst_31382;
var inst_31341 = null;
var inst_31342 = (0);
var inst_31343 = (0);
var state_31461__$1 = (function (){var statearr_31472 = state_31461;
(statearr_31472[(13)] = inst_31381);

(statearr_31472[(14)] = inst_31341);

(statearr_31472[(15)] = inst_31340);

(statearr_31472[(16)] = inst_31342);

(statearr_31472[(17)] = inst_31343);

return statearr_31472;
})();
var statearr_31473_32880 = state_31461__$1;
(statearr_31473_32880[(2)] = null);

(statearr_31473_32880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (39))){
var state_31461__$1 = state_31461;
var statearr_31477_32881 = state_31461__$1;
(statearr_31477_32881[(2)] = null);

(statearr_31477_32881[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (4))){
var inst_31331 = (state_31461[(10)]);
var inst_31331__$1 = (state_31461[(2)]);
var inst_31332 = (inst_31331__$1 == null);
var state_31461__$1 = (function (){var statearr_31479 = state_31461;
(statearr_31479[(10)] = inst_31331__$1);

return statearr_31479;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31480_32882 = state_31461__$1;
(statearr_31480_32882[(1)] = (5));

} else {
var statearr_31481_32883 = state_31461__$1;
(statearr_31481_32883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (15))){
var inst_31341 = (state_31461[(14)]);
var inst_31340 = (state_31461[(15)]);
var inst_31342 = (state_31461[(16)]);
var inst_31343 = (state_31461[(17)]);
var inst_31358 = (state_31461[(2)]);
var inst_31359 = (inst_31343 + (1));
var tmp31474 = inst_31341;
var tmp31475 = inst_31340;
var tmp31476 = inst_31342;
var inst_31340__$1 = tmp31475;
var inst_31341__$1 = tmp31474;
var inst_31342__$1 = tmp31476;
var inst_31343__$1 = inst_31359;
var state_31461__$1 = (function (){var statearr_31482 = state_31461;
(statearr_31482[(14)] = inst_31341__$1);

(statearr_31482[(15)] = inst_31340__$1);

(statearr_31482[(16)] = inst_31342__$1);

(statearr_31482[(17)] = inst_31343__$1);

(statearr_31482[(18)] = inst_31358);

return statearr_31482;
})();
var statearr_31484_32884 = state_31461__$1;
(statearr_31484_32884[(2)] = null);

(statearr_31484_32884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (21))){
var inst_31385 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31488_32885 = state_31461__$1;
(statearr_31488_32885[(2)] = inst_31385);

(statearr_31488_32885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (31))){
var inst_31411 = (state_31461[(12)]);
var inst_31415 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31411);
var state_31461__$1 = state_31461;
var statearr_31490_32886 = state_31461__$1;
(statearr_31490_32886[(2)] = inst_31415);

(statearr_31490_32886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (32))){
var inst_31406 = (state_31461[(9)]);
var inst_31404 = (state_31461[(11)]);
var inst_31405 = (state_31461[(19)]);
var inst_31403 = (state_31461[(20)]);
var inst_31417 = (state_31461[(2)]);
var inst_31418 = (inst_31406 + (1));
var tmp31485 = inst_31404;
var tmp31486 = inst_31405;
var tmp31487 = inst_31403;
var inst_31403__$1 = tmp31487;
var inst_31404__$1 = tmp31485;
var inst_31405__$1 = tmp31486;
var inst_31406__$1 = inst_31418;
var state_31461__$1 = (function (){var statearr_31491 = state_31461;
(statearr_31491[(21)] = inst_31417);

(statearr_31491[(9)] = inst_31406__$1);

(statearr_31491[(11)] = inst_31404__$1);

(statearr_31491[(19)] = inst_31405__$1);

(statearr_31491[(20)] = inst_31403__$1);

return statearr_31491;
})();
var statearr_31492_32893 = state_31461__$1;
(statearr_31492_32893[(2)] = null);

(statearr_31492_32893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (40))){
var inst_31430 = (state_31461[(22)]);
var inst_31434 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31430);
var state_31461__$1 = state_31461;
var statearr_31493_32894 = state_31461__$1;
(statearr_31493_32894[(2)] = inst_31434);

(statearr_31493_32894[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (33))){
var inst_31421 = (state_31461[(23)]);
var inst_31423 = cljs.core.chunked_seq_QMARK_(inst_31421);
var state_31461__$1 = state_31461;
if(inst_31423){
var statearr_31494_32895 = state_31461__$1;
(statearr_31494_32895[(1)] = (36));

} else {
var statearr_31495_32896 = state_31461__$1;
(statearr_31495_32896[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (13))){
var inst_31352 = (state_31461[(24)]);
var inst_31355 = cljs.core.async.close_BANG_(inst_31352);
var state_31461__$1 = state_31461;
var statearr_31496_32897 = state_31461__$1;
(statearr_31496_32897[(2)] = inst_31355);

(statearr_31496_32897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (22))){
var inst_31375 = (state_31461[(8)]);
var inst_31378 = cljs.core.async.close_BANG_(inst_31375);
var state_31461__$1 = state_31461;
var statearr_31497_32898 = state_31461__$1;
(statearr_31497_32898[(2)] = inst_31378);

(statearr_31497_32898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (36))){
var inst_31421 = (state_31461[(23)]);
var inst_31425 = cljs.core.chunk_first(inst_31421);
var inst_31426 = cljs.core.chunk_rest(inst_31421);
var inst_31427 = cljs.core.count(inst_31425);
var inst_31403 = inst_31426;
var inst_31404 = inst_31425;
var inst_31405 = inst_31427;
var inst_31406 = (0);
var state_31461__$1 = (function (){var statearr_31498 = state_31461;
(statearr_31498[(9)] = inst_31406);

(statearr_31498[(11)] = inst_31404);

(statearr_31498[(19)] = inst_31405);

(statearr_31498[(20)] = inst_31403);

return statearr_31498;
})();
var statearr_31499_32899 = state_31461__$1;
(statearr_31499_32899[(2)] = null);

(statearr_31499_32899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (41))){
var inst_31421 = (state_31461[(23)]);
var inst_31436 = (state_31461[(2)]);
var inst_31437 = cljs.core.next(inst_31421);
var inst_31403 = inst_31437;
var inst_31404 = null;
var inst_31405 = (0);
var inst_31406 = (0);
var state_31461__$1 = (function (){var statearr_31502 = state_31461;
(statearr_31502[(9)] = inst_31406);

(statearr_31502[(11)] = inst_31404);

(statearr_31502[(19)] = inst_31405);

(statearr_31502[(20)] = inst_31403);

(statearr_31502[(25)] = inst_31436);

return statearr_31502;
})();
var statearr_31503_32906 = state_31461__$1;
(statearr_31503_32906[(2)] = null);

(statearr_31503_32906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (43))){
var state_31461__$1 = state_31461;
var statearr_31506_32907 = state_31461__$1;
(statearr_31506_32907[(2)] = null);

(statearr_31506_32907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (29))){
var inst_31445 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31508_32908 = state_31461__$1;
(statearr_31508_32908[(2)] = inst_31445);

(statearr_31508_32908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (44))){
var inst_31454 = (state_31461[(2)]);
var state_31461__$1 = (function (){var statearr_31509 = state_31461;
(statearr_31509[(26)] = inst_31454);

return statearr_31509;
})();
var statearr_31510_32909 = state_31461__$1;
(statearr_31510_32909[(2)] = null);

(statearr_31510_32909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (6))){
var inst_31395 = (state_31461[(27)]);
var inst_31394 = cljs.core.deref(cs);
var inst_31395__$1 = cljs.core.keys(inst_31394);
var inst_31396 = cljs.core.count(inst_31395__$1);
var inst_31397 = cljs.core.reset_BANG_(dctr,inst_31396);
var inst_31402 = cljs.core.seq(inst_31395__$1);
var inst_31403 = inst_31402;
var inst_31404 = null;
var inst_31405 = (0);
var inst_31406 = (0);
var state_31461__$1 = (function (){var statearr_31512 = state_31461;
(statearr_31512[(28)] = inst_31397);

(statearr_31512[(27)] = inst_31395__$1);

(statearr_31512[(9)] = inst_31406);

(statearr_31512[(11)] = inst_31404);

(statearr_31512[(19)] = inst_31405);

(statearr_31512[(20)] = inst_31403);

return statearr_31512;
})();
var statearr_31513_32910 = state_31461__$1;
(statearr_31513_32910[(2)] = null);

(statearr_31513_32910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (28))){
var inst_31421 = (state_31461[(23)]);
var inst_31403 = (state_31461[(20)]);
var inst_31421__$1 = cljs.core.seq(inst_31403);
var state_31461__$1 = (function (){var statearr_31514 = state_31461;
(statearr_31514[(23)] = inst_31421__$1);

return statearr_31514;
})();
if(inst_31421__$1){
var statearr_31515_32911 = state_31461__$1;
(statearr_31515_32911[(1)] = (33));

} else {
var statearr_31516_32912 = state_31461__$1;
(statearr_31516_32912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (25))){
var inst_31406 = (state_31461[(9)]);
var inst_31405 = (state_31461[(19)]);
var inst_31408 = (inst_31406 < inst_31405);
var inst_31409 = inst_31408;
var state_31461__$1 = state_31461;
if(cljs.core.truth_(inst_31409)){
var statearr_31517_32913 = state_31461__$1;
(statearr_31517_32913[(1)] = (27));

} else {
var statearr_31518_32914 = state_31461__$1;
(statearr_31518_32914[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (34))){
var state_31461__$1 = state_31461;
var statearr_31519_32915 = state_31461__$1;
(statearr_31519_32915[(2)] = null);

(statearr_31519_32915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (17))){
var state_31461__$1 = state_31461;
var statearr_31521_32916 = state_31461__$1;
(statearr_31521_32916[(2)] = null);

(statearr_31521_32916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (3))){
var inst_31459 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31461__$1,inst_31459);
} else {
if((state_val_31462 === (12))){
var inst_31390 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31522_32917 = state_31461__$1;
(statearr_31522_32917[(2)] = inst_31390);

(statearr_31522_32917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (2))){
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31461__$1,(4),ch);
} else {
if((state_val_31462 === (23))){
var state_31461__$1 = state_31461;
var statearr_31524_32918 = state_31461__$1;
(statearr_31524_32918[(2)] = null);

(statearr_31524_32918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (35))){
var inst_31443 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31525_32919 = state_31461__$1;
(statearr_31525_32919[(2)] = inst_31443);

(statearr_31525_32919[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (19))){
var inst_31362 = (state_31461[(7)]);
var inst_31366 = cljs.core.chunk_first(inst_31362);
var inst_31367 = cljs.core.chunk_rest(inst_31362);
var inst_31368 = cljs.core.count(inst_31366);
var inst_31340 = inst_31367;
var inst_31341 = inst_31366;
var inst_31342 = inst_31368;
var inst_31343 = (0);
var state_31461__$1 = (function (){var statearr_31526 = state_31461;
(statearr_31526[(14)] = inst_31341);

(statearr_31526[(15)] = inst_31340);

(statearr_31526[(16)] = inst_31342);

(statearr_31526[(17)] = inst_31343);

return statearr_31526;
})();
var statearr_31527_32920 = state_31461__$1;
(statearr_31527_32920[(2)] = null);

(statearr_31527_32920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (11))){
var inst_31362 = (state_31461[(7)]);
var inst_31340 = (state_31461[(15)]);
var inst_31362__$1 = cljs.core.seq(inst_31340);
var state_31461__$1 = (function (){var statearr_31529 = state_31461;
(statearr_31529[(7)] = inst_31362__$1);

return statearr_31529;
})();
if(inst_31362__$1){
var statearr_31530_32921 = state_31461__$1;
(statearr_31530_32921[(1)] = (16));

} else {
var statearr_31531_32922 = state_31461__$1;
(statearr_31531_32922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (9))){
var inst_31392 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31532_32923 = state_31461__$1;
(statearr_31532_32923[(2)] = inst_31392);

(statearr_31532_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (5))){
var inst_31338 = cljs.core.deref(cs);
var inst_31339 = cljs.core.seq(inst_31338);
var inst_31340 = inst_31339;
var inst_31341 = null;
var inst_31342 = (0);
var inst_31343 = (0);
var state_31461__$1 = (function (){var statearr_31533 = state_31461;
(statearr_31533[(14)] = inst_31341);

(statearr_31533[(15)] = inst_31340);

(statearr_31533[(16)] = inst_31342);

(statearr_31533[(17)] = inst_31343);

return statearr_31533;
})();
var statearr_31534_32924 = state_31461__$1;
(statearr_31534_32924[(2)] = null);

(statearr_31534_32924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (14))){
var state_31461__$1 = state_31461;
var statearr_31535_32941 = state_31461__$1;
(statearr_31535_32941[(2)] = null);

(statearr_31535_32941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (45))){
var inst_31451 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31538_32942 = state_31461__$1;
(statearr_31538_32942[(2)] = inst_31451);

(statearr_31538_32942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (26))){
var inst_31395 = (state_31461[(27)]);
var inst_31447 = (state_31461[(2)]);
var inst_31448 = cljs.core.seq(inst_31395);
var state_31461__$1 = (function (){var statearr_31539 = state_31461;
(statearr_31539[(29)] = inst_31447);

return statearr_31539;
})();
if(inst_31448){
var statearr_31540_32943 = state_31461__$1;
(statearr_31540_32943[(1)] = (42));

} else {
var statearr_31541_32944 = state_31461__$1;
(statearr_31541_32944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (16))){
var inst_31362 = (state_31461[(7)]);
var inst_31364 = cljs.core.chunked_seq_QMARK_(inst_31362);
var state_31461__$1 = state_31461;
if(inst_31364){
var statearr_31542_32945 = state_31461__$1;
(statearr_31542_32945[(1)] = (19));

} else {
var statearr_31544_32946 = state_31461__$1;
(statearr_31544_32946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (38))){
var inst_31440 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31545_32947 = state_31461__$1;
(statearr_31545_32947[(2)] = inst_31440);

(statearr_31545_32947[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (30))){
var state_31461__$1 = state_31461;
var statearr_31546_32948 = state_31461__$1;
(statearr_31546_32948[(2)] = null);

(statearr_31546_32948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (10))){
var inst_31341 = (state_31461[(14)]);
var inst_31343 = (state_31461[(17)]);
var inst_31351 = cljs.core._nth(inst_31341,inst_31343);
var inst_31352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31351,(0),null);
var inst_31353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31351,(1),null);
var state_31461__$1 = (function (){var statearr_31547 = state_31461;
(statearr_31547[(24)] = inst_31352);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31353)){
var statearr_31548_32949 = state_31461__$1;
(statearr_31548_32949[(1)] = (13));

} else {
var statearr_31549_32950 = state_31461__$1;
(statearr_31549_32950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (18))){
var inst_31388 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31550_32951 = state_31461__$1;
(statearr_31550_32951[(2)] = inst_31388);

(statearr_31550_32951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (42))){
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31461__$1,(45),dchan);
} else {
if((state_val_31462 === (37))){
var inst_31421 = (state_31461[(23)]);
var inst_31331 = (state_31461[(10)]);
var inst_31430 = (state_31461[(22)]);
var inst_31430__$1 = cljs.core.first(inst_31421);
var inst_31431 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31430__$1,inst_31331,done);
var state_31461__$1 = (function (){var statearr_31553 = state_31461;
(statearr_31553[(22)] = inst_31430__$1);

return statearr_31553;
})();
if(cljs.core.truth_(inst_31431)){
var statearr_31554_32952 = state_31461__$1;
(statearr_31554_32952[(1)] = (39));

} else {
var statearr_31555_32953 = state_31461__$1;
(statearr_31555_32953[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (8))){
var inst_31342 = (state_31461[(16)]);
var inst_31343 = (state_31461[(17)]);
var inst_31345 = (inst_31343 < inst_31342);
var inst_31346 = inst_31345;
var state_31461__$1 = state_31461;
if(cljs.core.truth_(inst_31346)){
var statearr_31558_32954 = state_31461__$1;
(statearr_31558_32954[(1)] = (10));

} else {
var statearr_31559_32955 = state_31461__$1;
(statearr_31559_32955[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__30254__auto__ = null;
var cljs$core$async$mult_$_state_machine__30254__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = cljs$core$async$mult_$_state_machine__30254__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var cljs$core$async$mult_$_state_machine__30254__auto____1 = (function (state_31461){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31461);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31561){var ex__30257__auto__ = e31561;
var statearr_31562_32956 = state_31461;
(statearr_31562_32956[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31461[(4)]))){
var statearr_31563_32957 = state_31461;
(statearr_31563_32957[(1)] = cljs.core.first((state_31461[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32958 = state_31461;
state_31461 = G__32958;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30254__auto__ = function(state_31461){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30254__auto____1.call(this,state_31461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30254__auto____0;
cljs$core$async$mult_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30254__auto____1;
return cljs$core$async$mult_$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31564 = f__30788__auto__();
(statearr_31564[(6)] = c__30787__auto___32867);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31566 = arguments.length;
switch (G__31566) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32960 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32960(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32961 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32961(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32962 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32962(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32963 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32963(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32964 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32964(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32965 = arguments.length;
var i__4737__auto___32966 = (0);
while(true){
if((i__4737__auto___32966 < len__4736__auto___32965)){
args__4742__auto__.push((arguments[i__4737__auto___32966]));

var G__32967 = (i__4737__auto___32966 + (1));
i__4737__auto___32966 = G__32967;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31584){
var map__31585 = p__31584;
var map__31585__$1 = (((((!((map__31585 == null))))?(((((map__31585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31585):map__31585);
var opts = map__31585__$1;
var statearr_31587_32968 = state;
(statearr_31587_32968[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31588_32969 = state;
(statearr_31588_32969[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31589_32970 = state;
(statearr_31589_32970[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31580){
var G__31581 = cljs.core.first(seq31580);
var seq31580__$1 = cljs.core.next(seq31580);
var G__31582 = cljs.core.first(seq31580__$1);
var seq31580__$2 = cljs.core.next(seq31580__$1);
var G__31583 = cljs.core.first(seq31580__$2);
var seq31580__$3 = cljs.core.next(seq31580__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31581,G__31582,G__31583,seq31580__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31591 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31592){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31592 = meta31592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31593,meta31592__$1){
var self__ = this;
var _31593__$1 = this;
return (new cljs.core.async.t_cljs$core$async31591(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31592__$1));
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31593){
var self__ = this;
var _31593__$1 = this;
return self__.meta31592;
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31592","meta31592",-1953600029,null)], null);
}));

(cljs.core.async.t_cljs$core$async31591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31591");

(cljs.core.async.t_cljs$core$async31591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31591.
 */
cljs.core.async.__GT_t_cljs$core$async31591 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31591(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31592){
return (new cljs.core.async.t_cljs$core$async31591(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31592));
});

}

return (new cljs.core.async.t_cljs$core$async31591(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30787__auto___32971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (7))){
var inst_31610 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31697_32972 = state_31695__$1;
(statearr_31697_32972[(2)] = inst_31610);

(statearr_31697_32972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (20))){
var inst_31622 = (state_31695[(7)]);
var state_31695__$1 = state_31695;
var statearr_31698_32973 = state_31695__$1;
(statearr_31698_32973[(2)] = inst_31622);

(statearr_31698_32973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (27))){
var state_31695__$1 = state_31695;
var statearr_31699_32974 = state_31695__$1;
(statearr_31699_32974[(2)] = null);

(statearr_31699_32974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (1))){
var inst_31597 = (state_31695[(8)]);
var inst_31597__$1 = calc_state();
var inst_31599 = (inst_31597__$1 == null);
var inst_31600 = cljs.core.not(inst_31599);
var state_31695__$1 = (function (){var statearr_31700 = state_31695;
(statearr_31700[(8)] = inst_31597__$1);

return statearr_31700;
})();
if(inst_31600){
var statearr_31701_32975 = state_31695__$1;
(statearr_31701_32975[(1)] = (2));

} else {
var statearr_31702_32976 = state_31695__$1;
(statearr_31702_32976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (24))){
var inst_31669 = (state_31695[(9)]);
var inst_31655 = (state_31695[(10)]);
var inst_31646 = (state_31695[(11)]);
var inst_31669__$1 = (inst_31646.cljs$core$IFn$_invoke$arity$1 ? inst_31646.cljs$core$IFn$_invoke$arity$1(inst_31655) : inst_31646.call(null,inst_31655));
var state_31695__$1 = (function (){var statearr_31703 = state_31695;
(statearr_31703[(9)] = inst_31669__$1);

return statearr_31703;
})();
if(cljs.core.truth_(inst_31669__$1)){
var statearr_31704_32977 = state_31695__$1;
(statearr_31704_32977[(1)] = (29));

} else {
var statearr_31705_32978 = state_31695__$1;
(statearr_31705_32978[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (4))){
var inst_31613 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31613)){
var statearr_31706_32979 = state_31695__$1;
(statearr_31706_32979[(1)] = (8));

} else {
var statearr_31707_32980 = state_31695__$1;
(statearr_31707_32980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (15))){
var inst_31640 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31640)){
var statearr_31708_32981 = state_31695__$1;
(statearr_31708_32981[(1)] = (19));

} else {
var statearr_31709_32982 = state_31695__$1;
(statearr_31709_32982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (21))){
var inst_31645 = (state_31695[(12)]);
var inst_31645__$1 = (state_31695[(2)]);
var inst_31646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31695__$1 = (function (){var statearr_31710 = state_31695;
(statearr_31710[(12)] = inst_31645__$1);

(statearr_31710[(13)] = inst_31647);

(statearr_31710[(11)] = inst_31646);

return statearr_31710;
})();
return cljs.core.async.ioc_alts_BANG_(state_31695__$1,(22),inst_31648);
} else {
if((state_val_31696 === (31))){
var inst_31677 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31677)){
var statearr_31711_32999 = state_31695__$1;
(statearr_31711_32999[(1)] = (32));

} else {
var statearr_31712_33000 = state_31695__$1;
(statearr_31712_33000[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (32))){
var inst_31654 = (state_31695[(14)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31695__$1,(35),out,inst_31654);
} else {
if((state_val_31696 === (33))){
var inst_31645 = (state_31695[(12)]);
var inst_31622 = inst_31645;
var state_31695__$1 = (function (){var statearr_31713 = state_31695;
(statearr_31713[(7)] = inst_31622);

return statearr_31713;
})();
var statearr_31714_33005 = state_31695__$1;
(statearr_31714_33005[(2)] = null);

(statearr_31714_33005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (13))){
var inst_31622 = (state_31695[(7)]);
var inst_31629 = inst_31622.cljs$lang$protocol_mask$partition0$;
var inst_31630 = (inst_31629 & (64));
var inst_31631 = inst_31622.cljs$core$ISeq$;
var inst_31632 = (cljs.core.PROTOCOL_SENTINEL === inst_31631);
var inst_31633 = ((inst_31630) || (inst_31632));
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31633)){
var statearr_31715_33006 = state_31695__$1;
(statearr_31715_33006[(1)] = (16));

} else {
var statearr_31716_33007 = state_31695__$1;
(statearr_31716_33007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (22))){
var inst_31654 = (state_31695[(14)]);
var inst_31655 = (state_31695[(10)]);
var inst_31653 = (state_31695[(2)]);
var inst_31654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31653,(0),null);
var inst_31655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31653,(1),null);
var inst_31656 = (inst_31654__$1 == null);
var inst_31657 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31655__$1,change);
var inst_31658 = ((inst_31656) || (inst_31657));
var state_31695__$1 = (function (){var statearr_31717 = state_31695;
(statearr_31717[(14)] = inst_31654__$1);

(statearr_31717[(10)] = inst_31655__$1);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31658)){
var statearr_31718_33008 = state_31695__$1;
(statearr_31718_33008[(1)] = (23));

} else {
var statearr_31719_33009 = state_31695__$1;
(statearr_31719_33009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (36))){
var inst_31645 = (state_31695[(12)]);
var inst_31622 = inst_31645;
var state_31695__$1 = (function (){var statearr_31720 = state_31695;
(statearr_31720[(7)] = inst_31622);

return statearr_31720;
})();
var statearr_31721_33010 = state_31695__$1;
(statearr_31721_33010[(2)] = null);

(statearr_31721_33010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (29))){
var inst_31669 = (state_31695[(9)]);
var state_31695__$1 = state_31695;
var statearr_31722_33011 = state_31695__$1;
(statearr_31722_33011[(2)] = inst_31669);

(statearr_31722_33011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (6))){
var state_31695__$1 = state_31695;
var statearr_31723_33013 = state_31695__$1;
(statearr_31723_33013[(2)] = false);

(statearr_31723_33013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (28))){
var inst_31665 = (state_31695[(2)]);
var inst_31666 = calc_state();
var inst_31622 = inst_31666;
var state_31695__$1 = (function (){var statearr_31724 = state_31695;
(statearr_31724[(15)] = inst_31665);

(statearr_31724[(7)] = inst_31622);

return statearr_31724;
})();
var statearr_31725_33015 = state_31695__$1;
(statearr_31725_33015[(2)] = null);

(statearr_31725_33015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (25))){
var inst_31691 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31726_33016 = state_31695__$1;
(statearr_31726_33016[(2)] = inst_31691);

(statearr_31726_33016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (34))){
var inst_31689 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31727_33017 = state_31695__$1;
(statearr_31727_33017[(2)] = inst_31689);

(statearr_31727_33017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (17))){
var state_31695__$1 = state_31695;
var statearr_31728_33018 = state_31695__$1;
(statearr_31728_33018[(2)] = false);

(statearr_31728_33018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (3))){
var state_31695__$1 = state_31695;
var statearr_31729_33019 = state_31695__$1;
(statearr_31729_33019[(2)] = false);

(statearr_31729_33019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (12))){
var inst_31693 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31695__$1,inst_31693);
} else {
if((state_val_31696 === (2))){
var inst_31597 = (state_31695[(8)]);
var inst_31602 = inst_31597.cljs$lang$protocol_mask$partition0$;
var inst_31603 = (inst_31602 & (64));
var inst_31604 = inst_31597.cljs$core$ISeq$;
var inst_31605 = (cljs.core.PROTOCOL_SENTINEL === inst_31604);
var inst_31606 = ((inst_31603) || (inst_31605));
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31606)){
var statearr_31730_33020 = state_31695__$1;
(statearr_31730_33020[(1)] = (5));

} else {
var statearr_31731_33021 = state_31695__$1;
(statearr_31731_33021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (23))){
var inst_31654 = (state_31695[(14)]);
var inst_31660 = (inst_31654 == null);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31660)){
var statearr_31732_33022 = state_31695__$1;
(statearr_31732_33022[(1)] = (26));

} else {
var statearr_31733_33023 = state_31695__$1;
(statearr_31733_33023[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (35))){
var inst_31680 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31680)){
var statearr_31734_33024 = state_31695__$1;
(statearr_31734_33024[(1)] = (36));

} else {
var statearr_31735_33025 = state_31695__$1;
(statearr_31735_33025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (19))){
var inst_31622 = (state_31695[(7)]);
var inst_31642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31622);
var state_31695__$1 = state_31695;
var statearr_31736_33026 = state_31695__$1;
(statearr_31736_33026[(2)] = inst_31642);

(statearr_31736_33026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (11))){
var inst_31622 = (state_31695[(7)]);
var inst_31626 = (inst_31622 == null);
var inst_31627 = cljs.core.not(inst_31626);
var state_31695__$1 = state_31695;
if(inst_31627){
var statearr_31737_33027 = state_31695__$1;
(statearr_31737_33027[(1)] = (13));

} else {
var statearr_31738_33028 = state_31695__$1;
(statearr_31738_33028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (9))){
var inst_31597 = (state_31695[(8)]);
var state_31695__$1 = state_31695;
var statearr_31739_33029 = state_31695__$1;
(statearr_31739_33029[(2)] = inst_31597);

(statearr_31739_33029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (5))){
var state_31695__$1 = state_31695;
var statearr_31740_33030 = state_31695__$1;
(statearr_31740_33030[(2)] = true);

(statearr_31740_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (14))){
var state_31695__$1 = state_31695;
var statearr_31741_33031 = state_31695__$1;
(statearr_31741_33031[(2)] = false);

(statearr_31741_33031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (26))){
var inst_31655 = (state_31695[(10)]);
var inst_31662 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31655);
var state_31695__$1 = state_31695;
var statearr_31742_33032 = state_31695__$1;
(statearr_31742_33032[(2)] = inst_31662);

(statearr_31742_33032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (16))){
var state_31695__$1 = state_31695;
var statearr_31743_33033 = state_31695__$1;
(statearr_31743_33033[(2)] = true);

(statearr_31743_33033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (38))){
var inst_31685 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31744_33034 = state_31695__$1;
(statearr_31744_33034[(2)] = inst_31685);

(statearr_31744_33034[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (30))){
var inst_31655 = (state_31695[(10)]);
var inst_31647 = (state_31695[(13)]);
var inst_31646 = (state_31695[(11)]);
var inst_31672 = cljs.core.empty_QMARK_(inst_31646);
var inst_31673 = (inst_31647.cljs$core$IFn$_invoke$arity$1 ? inst_31647.cljs$core$IFn$_invoke$arity$1(inst_31655) : inst_31647.call(null,inst_31655));
var inst_31674 = cljs.core.not(inst_31673);
var inst_31675 = ((inst_31672) && (inst_31674));
var state_31695__$1 = state_31695;
var statearr_31745_33035 = state_31695__$1;
(statearr_31745_33035[(2)] = inst_31675);

(statearr_31745_33035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (10))){
var inst_31597 = (state_31695[(8)]);
var inst_31618 = (state_31695[(2)]);
var inst_31619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31622 = inst_31597;
var state_31695__$1 = (function (){var statearr_31746 = state_31695;
(statearr_31746[(16)] = inst_31621);

(statearr_31746[(17)] = inst_31619);

(statearr_31746[(7)] = inst_31622);

(statearr_31746[(18)] = inst_31620);

return statearr_31746;
})();
var statearr_31747_33040 = state_31695__$1;
(statearr_31747_33040[(2)] = null);

(statearr_31747_33040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (18))){
var inst_31637 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31748_33041 = state_31695__$1;
(statearr_31748_33041[(2)] = inst_31637);

(statearr_31748_33041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (37))){
var state_31695__$1 = state_31695;
var statearr_31749_33042 = state_31695__$1;
(statearr_31749_33042[(2)] = null);

(statearr_31749_33042[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (8))){
var inst_31597 = (state_31695[(8)]);
var inst_31615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31597);
var state_31695__$1 = state_31695;
var statearr_31750_33043 = state_31695__$1;
(statearr_31750_33043[(2)] = inst_31615);

(statearr_31750_33043[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__30254__auto__ = null;
var cljs$core$async$mix_$_state_machine__30254__auto____0 = (function (){
var statearr_31751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31751[(0)] = cljs$core$async$mix_$_state_machine__30254__auto__);

(statearr_31751[(1)] = (1));

return statearr_31751;
});
var cljs$core$async$mix_$_state_machine__30254__auto____1 = (function (state_31695){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31695);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31752){var ex__30257__auto__ = e31752;
var statearr_31753_33048 = state_31695;
(statearr_31753_33048[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31695[(4)]))){
var statearr_31754_33049 = state_31695;
(statearr_31754_33049[(1)] = cljs.core.first((state_31695[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33051 = state_31695;
state_31695 = G__33051;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30254__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30254__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30254__auto____0;
cljs$core$async$mix_$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30254__auto____1;
return cljs$core$async$mix_$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31755 = f__30788__auto__();
(statearr_31755[(6)] = c__30787__auto___32971);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33053 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33053(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33058 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33058(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33059 = (function() {
var G__33060 = null;
var G__33060__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33060__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33060 = function(p,v){
switch(arguments.length){
case 1:
return G__33060__1.call(this,p);
case 2:
return G__33060__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33060.cljs$core$IFn$_invoke$arity$1 = G__33060__1;
G__33060.cljs$core$IFn$_invoke$arity$2 = G__33060__2;
return G__33060;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31757 = arguments.length;
switch (G__31757) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33059(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33059(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31766 = arguments.length;
switch (G__31766) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31763_SHARP_){
if(cljs.core.truth_((p1__31763_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31763_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31763_SHARP_.call(null,topic)))){
return p1__31763_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31763_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31772 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31773){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31773 = meta31773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31774,meta31773__$1){
var self__ = this;
var _31774__$1 = this;
return (new cljs.core.async.t_cljs$core$async31772(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31773__$1));
}));

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31774){
var self__ = this;
var _31774__$1 = this;
return self__.meta31773;
}));

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31773","meta31773",-265254950,null)], null);
}));

(cljs.core.async.t_cljs$core$async31772.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31772");

(cljs.core.async.t_cljs$core$async31772.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31772");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31772.
 */
cljs.core.async.__GT_t_cljs$core$async31772 = (function cljs$core$async$__GT_t_cljs$core$async31772(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31773){
return (new cljs.core.async.t_cljs$core$async31772(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31773));
});

}

return (new cljs.core.async.t_cljs$core$async31772(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30787__auto___33063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_31863){
var state_val_31864 = (state_31863[(1)]);
if((state_val_31864 === (7))){
var inst_31856 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31865_33078 = state_31863__$1;
(statearr_31865_33078[(2)] = inst_31856);

(statearr_31865_33078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (20))){
var state_31863__$1 = state_31863;
var statearr_31866_33079 = state_31863__$1;
(statearr_31866_33079[(2)] = null);

(statearr_31866_33079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (1))){
var state_31863__$1 = state_31863;
var statearr_31867_33080 = state_31863__$1;
(statearr_31867_33080[(2)] = null);

(statearr_31867_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (24))){
var inst_31839 = (state_31863[(7)]);
var inst_31848 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31839);
var state_31863__$1 = state_31863;
var statearr_31868_33081 = state_31863__$1;
(statearr_31868_33081[(2)] = inst_31848);

(statearr_31868_33081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (4))){
var inst_31791 = (state_31863[(8)]);
var inst_31791__$1 = (state_31863[(2)]);
var inst_31792 = (inst_31791__$1 == null);
var state_31863__$1 = (function (){var statearr_31869 = state_31863;
(statearr_31869[(8)] = inst_31791__$1);

return statearr_31869;
})();
if(cljs.core.truth_(inst_31792)){
var statearr_31870_33085 = state_31863__$1;
(statearr_31870_33085[(1)] = (5));

} else {
var statearr_31871_33086 = state_31863__$1;
(statearr_31871_33086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (15))){
var inst_31833 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31876_33087 = state_31863__$1;
(statearr_31876_33087[(2)] = inst_31833);

(statearr_31876_33087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (21))){
var inst_31853 = (state_31863[(2)]);
var state_31863__$1 = (function (){var statearr_31877 = state_31863;
(statearr_31877[(9)] = inst_31853);

return statearr_31877;
})();
var statearr_31878_33088 = state_31863__$1;
(statearr_31878_33088[(2)] = null);

(statearr_31878_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (13))){
var inst_31815 = (state_31863[(10)]);
var inst_31817 = cljs.core.chunked_seq_QMARK_(inst_31815);
var state_31863__$1 = state_31863;
if(inst_31817){
var statearr_31879_33089 = state_31863__$1;
(statearr_31879_33089[(1)] = (16));

} else {
var statearr_31880_33090 = state_31863__$1;
(statearr_31880_33090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (22))){
var inst_31845 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
if(cljs.core.truth_(inst_31845)){
var statearr_31881_33091 = state_31863__$1;
(statearr_31881_33091[(1)] = (23));

} else {
var statearr_31882_33092 = state_31863__$1;
(statearr_31882_33092[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (6))){
var inst_31791 = (state_31863[(8)]);
var inst_31839 = (state_31863[(7)]);
var inst_31841 = (state_31863[(11)]);
var inst_31839__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31791) : topic_fn.call(null,inst_31791));
var inst_31840 = cljs.core.deref(mults);
var inst_31841__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31840,inst_31839__$1);
var state_31863__$1 = (function (){var statearr_31883 = state_31863;
(statearr_31883[(7)] = inst_31839__$1);

(statearr_31883[(11)] = inst_31841__$1);

return statearr_31883;
})();
if(cljs.core.truth_(inst_31841__$1)){
var statearr_31890_33093 = state_31863__$1;
(statearr_31890_33093[(1)] = (19));

} else {
var statearr_31891_33094 = state_31863__$1;
(statearr_31891_33094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (25))){
var inst_31850 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31895_33095 = state_31863__$1;
(statearr_31895_33095[(2)] = inst_31850);

(statearr_31895_33095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (17))){
var inst_31815 = (state_31863[(10)]);
var inst_31824 = cljs.core.first(inst_31815);
var inst_31825 = cljs.core.async.muxch_STAR_(inst_31824);
var inst_31826 = cljs.core.async.close_BANG_(inst_31825);
var inst_31827 = cljs.core.next(inst_31815);
var inst_31801 = inst_31827;
var inst_31802 = null;
var inst_31803 = (0);
var inst_31804 = (0);
var state_31863__$1 = (function (){var statearr_31896 = state_31863;
(statearr_31896[(12)] = inst_31802);

(statearr_31896[(13)] = inst_31801);

(statearr_31896[(14)] = inst_31826);

(statearr_31896[(15)] = inst_31803);

(statearr_31896[(16)] = inst_31804);

return statearr_31896;
})();
var statearr_31900_33096 = state_31863__$1;
(statearr_31900_33096[(2)] = null);

(statearr_31900_33096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (3))){
var inst_31858 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31863__$1,inst_31858);
} else {
if((state_val_31864 === (12))){
var inst_31835 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31904_33097 = state_31863__$1;
(statearr_31904_33097[(2)] = inst_31835);

(statearr_31904_33097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (2))){
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31863__$1,(4),ch);
} else {
if((state_val_31864 === (23))){
var state_31863__$1 = state_31863;
var statearr_31905_33099 = state_31863__$1;
(statearr_31905_33099[(2)] = null);

(statearr_31905_33099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (19))){
var inst_31791 = (state_31863[(8)]);
var inst_31841 = (state_31863[(11)]);
var inst_31843 = cljs.core.async.muxch_STAR_(inst_31841);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31863__$1,(22),inst_31843,inst_31791);
} else {
if((state_val_31864 === (11))){
var inst_31815 = (state_31863[(10)]);
var inst_31801 = (state_31863[(13)]);
var inst_31815__$1 = cljs.core.seq(inst_31801);
var state_31863__$1 = (function (){var statearr_31909 = state_31863;
(statearr_31909[(10)] = inst_31815__$1);

return statearr_31909;
})();
if(inst_31815__$1){
var statearr_31910_33100 = state_31863__$1;
(statearr_31910_33100[(1)] = (13));

} else {
var statearr_31911_33101 = state_31863__$1;
(statearr_31911_33101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (9))){
var inst_31837 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31912_33102 = state_31863__$1;
(statearr_31912_33102[(2)] = inst_31837);

(statearr_31912_33102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (5))){
var inst_31798 = cljs.core.deref(mults);
var inst_31799 = cljs.core.vals(inst_31798);
var inst_31800 = cljs.core.seq(inst_31799);
var inst_31801 = inst_31800;
var inst_31802 = null;
var inst_31803 = (0);
var inst_31804 = (0);
var state_31863__$1 = (function (){var statearr_31920 = state_31863;
(statearr_31920[(12)] = inst_31802);

(statearr_31920[(13)] = inst_31801);

(statearr_31920[(15)] = inst_31803);

(statearr_31920[(16)] = inst_31804);

return statearr_31920;
})();
var statearr_31921_33103 = state_31863__$1;
(statearr_31921_33103[(2)] = null);

(statearr_31921_33103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (14))){
var state_31863__$1 = state_31863;
var statearr_31925_33104 = state_31863__$1;
(statearr_31925_33104[(2)] = null);

(statearr_31925_33104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (16))){
var inst_31815 = (state_31863[(10)]);
var inst_31819 = cljs.core.chunk_first(inst_31815);
var inst_31820 = cljs.core.chunk_rest(inst_31815);
var inst_31821 = cljs.core.count(inst_31819);
var inst_31801 = inst_31820;
var inst_31802 = inst_31819;
var inst_31803 = inst_31821;
var inst_31804 = (0);
var state_31863__$1 = (function (){var statearr_31926 = state_31863;
(statearr_31926[(12)] = inst_31802);

(statearr_31926[(13)] = inst_31801);

(statearr_31926[(15)] = inst_31803);

(statearr_31926[(16)] = inst_31804);

return statearr_31926;
})();
var statearr_31927_33105 = state_31863__$1;
(statearr_31927_33105[(2)] = null);

(statearr_31927_33105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (10))){
var inst_31802 = (state_31863[(12)]);
var inst_31801 = (state_31863[(13)]);
var inst_31803 = (state_31863[(15)]);
var inst_31804 = (state_31863[(16)]);
var inst_31809 = cljs.core._nth(inst_31802,inst_31804);
var inst_31810 = cljs.core.async.muxch_STAR_(inst_31809);
var inst_31811 = cljs.core.async.close_BANG_(inst_31810);
var inst_31812 = (inst_31804 + (1));
var tmp31922 = inst_31802;
var tmp31923 = inst_31801;
var tmp31924 = inst_31803;
var inst_31801__$1 = tmp31923;
var inst_31802__$1 = tmp31922;
var inst_31803__$1 = tmp31924;
var inst_31804__$1 = inst_31812;
var state_31863__$1 = (function (){var statearr_31928 = state_31863;
(statearr_31928[(12)] = inst_31802__$1);

(statearr_31928[(17)] = inst_31811);

(statearr_31928[(13)] = inst_31801__$1);

(statearr_31928[(15)] = inst_31803__$1);

(statearr_31928[(16)] = inst_31804__$1);

return statearr_31928;
})();
var statearr_31929_33106 = state_31863__$1;
(statearr_31929_33106[(2)] = null);

(statearr_31929_33106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (18))){
var inst_31830 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31930_33107 = state_31863__$1;
(statearr_31930_33107[(2)] = inst_31830);

(statearr_31930_33107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (8))){
var inst_31803 = (state_31863[(15)]);
var inst_31804 = (state_31863[(16)]);
var inst_31806 = (inst_31804 < inst_31803);
var inst_31807 = inst_31806;
var state_31863__$1 = state_31863;
if(cljs.core.truth_(inst_31807)){
var statearr_31931_33108 = state_31863__$1;
(statearr_31931_33108[(1)] = (10));

} else {
var statearr_31932_33109 = state_31863__$1;
(statearr_31932_33109[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_31933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31933[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_31933[(1)] = (1));

return statearr_31933;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_31863){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_31863);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e31934){var ex__30257__auto__ = e31934;
var statearr_31935_33110 = state_31863;
(statearr_31935_33110[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_31863[(4)]))){
var statearr_31936_33111 = state_31863;
(statearr_31936_33111[(1)] = cljs.core.first((state_31863[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_31863;
state_31863 = G__33112;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_31863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_31863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_31937 = f__30788__auto__();
(statearr_31937[(6)] = c__30787__auto___33063);

return statearr_31937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31988 = arguments.length;
switch (G__31988) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31990 = arguments.length;
switch (G__31990) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31992 = arguments.length;
switch (G__31992) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30787__auto___33116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32035){
var state_val_32036 = (state_32035[(1)]);
if((state_val_32036 === (7))){
var state_32035__$1 = state_32035;
var statearr_32037_33117 = state_32035__$1;
(statearr_32037_33117[(2)] = null);

(statearr_32037_33117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (1))){
var state_32035__$1 = state_32035;
var statearr_32038_33118 = state_32035__$1;
(statearr_32038_33118[(2)] = null);

(statearr_32038_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (4))){
var inst_31996 = (state_32035[(7)]);
var inst_31995 = (state_32035[(8)]);
var inst_31998 = (inst_31996 < inst_31995);
var state_32035__$1 = state_32035;
if(cljs.core.truth_(inst_31998)){
var statearr_32039_33119 = state_32035__$1;
(statearr_32039_33119[(1)] = (6));

} else {
var statearr_32040_33120 = state_32035__$1;
(statearr_32040_33120[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (15))){
var inst_32021 = (state_32035[(9)]);
var inst_32026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32021);
var state_32035__$1 = state_32035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32035__$1,(17),out,inst_32026);
} else {
if((state_val_32036 === (13))){
var inst_32021 = (state_32035[(9)]);
var inst_32021__$1 = (state_32035[(2)]);
var inst_32022 = cljs.core.some(cljs.core.nil_QMARK_,inst_32021__$1);
var state_32035__$1 = (function (){var statearr_32041 = state_32035;
(statearr_32041[(9)] = inst_32021__$1);

return statearr_32041;
})();
if(cljs.core.truth_(inst_32022)){
var statearr_32042_33121 = state_32035__$1;
(statearr_32042_33121[(1)] = (14));

} else {
var statearr_32043_33122 = state_32035__$1;
(statearr_32043_33122[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (6))){
var state_32035__$1 = state_32035;
var statearr_32044_33123 = state_32035__$1;
(statearr_32044_33123[(2)] = null);

(statearr_32044_33123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (17))){
var inst_32028 = (state_32035[(2)]);
var state_32035__$1 = (function (){var statearr_32046 = state_32035;
(statearr_32046[(10)] = inst_32028);

return statearr_32046;
})();
var statearr_32047_33124 = state_32035__$1;
(statearr_32047_33124[(2)] = null);

(statearr_32047_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (3))){
var inst_32033 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32035__$1,inst_32033);
} else {
if((state_val_32036 === (12))){
var _ = (function (){var statearr_32048 = state_32035;
(statearr_32048[(4)] = cljs.core.rest((state_32035[(4)])));

return statearr_32048;
})();
var state_32035__$1 = state_32035;
var ex32045 = (state_32035__$1[(2)]);
var statearr_32049_33125 = state_32035__$1;
(statearr_32049_33125[(5)] = ex32045);


if((ex32045 instanceof Object)){
var statearr_32050_33126 = state_32035__$1;
(statearr_32050_33126[(1)] = (11));

(statearr_32050_33126[(5)] = null);

} else {
throw ex32045;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (2))){
var inst_31994 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31995 = cnt;
var inst_31996 = (0);
var state_32035__$1 = (function (){var statearr_32051 = state_32035;
(statearr_32051[(7)] = inst_31996);

(statearr_32051[(8)] = inst_31995);

(statearr_32051[(11)] = inst_31994);

return statearr_32051;
})();
var statearr_32052_33127 = state_32035__$1;
(statearr_32052_33127[(2)] = null);

(statearr_32052_33127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (11))){
var inst_32000 = (state_32035[(2)]);
var inst_32001 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32035__$1 = (function (){var statearr_32053 = state_32035;
(statearr_32053[(12)] = inst_32000);

return statearr_32053;
})();
var statearr_32054_33128 = state_32035__$1;
(statearr_32054_33128[(2)] = inst_32001);

(statearr_32054_33128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (9))){
var inst_31996 = (state_32035[(7)]);
var _ = (function (){var statearr_32055 = state_32035;
(statearr_32055[(4)] = cljs.core.cons((12),(state_32035[(4)])));

return statearr_32055;
})();
var inst_32007 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31996) : chs__$1.call(null,inst_31996));
var inst_32008 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31996) : done.call(null,inst_31996));
var inst_32009 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32007,inst_32008);
var ___$1 = (function (){var statearr_32056 = state_32035;
(statearr_32056[(4)] = cljs.core.rest((state_32035[(4)])));

return statearr_32056;
})();
var state_32035__$1 = state_32035;
var statearr_32057_33129 = state_32035__$1;
(statearr_32057_33129[(2)] = inst_32009);

(statearr_32057_33129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (5))){
var inst_32019 = (state_32035[(2)]);
var state_32035__$1 = (function (){var statearr_32058 = state_32035;
(statearr_32058[(13)] = inst_32019);

return statearr_32058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32035__$1,(13),dchan);
} else {
if((state_val_32036 === (14))){
var inst_32024 = cljs.core.async.close_BANG_(out);
var state_32035__$1 = state_32035;
var statearr_32059_33130 = state_32035__$1;
(statearr_32059_33130[(2)] = inst_32024);

(statearr_32059_33130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (16))){
var inst_32031 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32060_33131 = state_32035__$1;
(statearr_32060_33131[(2)] = inst_32031);

(statearr_32060_33131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (10))){
var inst_31996 = (state_32035[(7)]);
var inst_32012 = (state_32035[(2)]);
var inst_32013 = (inst_31996 + (1));
var inst_31996__$1 = inst_32013;
var state_32035__$1 = (function (){var statearr_32061 = state_32035;
(statearr_32061[(7)] = inst_31996__$1);

(statearr_32061[(14)] = inst_32012);

return statearr_32061;
})();
var statearr_32062_33132 = state_32035__$1;
(statearr_32062_33132[(2)] = null);

(statearr_32062_33132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (8))){
var inst_32017 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32063_33133 = state_32035__$1;
(statearr_32063_33133[(2)] = inst_32017);

(statearr_32063_33133[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32064[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32064[(1)] = (1));

return statearr_32064;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32035){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32035);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32065){var ex__30257__auto__ = e32065;
var statearr_32066_33143 = state_32035;
(statearr_32066_33143[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32035[(4)]))){
var statearr_32067_33145 = state_32035;
(statearr_32067_33145[(1)] = cljs.core.first((state_32035[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33146 = state_32035;
state_32035 = G__33146;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32068 = f__30788__auto__();
(statearr_32068[(6)] = c__30787__auto___33116);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32071 = arguments.length;
switch (G__32071) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30787__auto___33148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32103){
var state_val_32104 = (state_32103[(1)]);
if((state_val_32104 === (7))){
var inst_32082 = (state_32103[(7)]);
var inst_32083 = (state_32103[(8)]);
var inst_32082__$1 = (state_32103[(2)]);
var inst_32083__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32082__$1,(0),null);
var inst_32084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32082__$1,(1),null);
var inst_32085 = (inst_32083__$1 == null);
var state_32103__$1 = (function (){var statearr_32105 = state_32103;
(statearr_32105[(7)] = inst_32082__$1);

(statearr_32105[(9)] = inst_32084);

(statearr_32105[(8)] = inst_32083__$1);

return statearr_32105;
})();
if(cljs.core.truth_(inst_32085)){
var statearr_32106_33149 = state_32103__$1;
(statearr_32106_33149[(1)] = (8));

} else {
var statearr_32107_33150 = state_32103__$1;
(statearr_32107_33150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (1))){
var inst_32072 = cljs.core.vec(chs);
var inst_32073 = inst_32072;
var state_32103__$1 = (function (){var statearr_32108 = state_32103;
(statearr_32108[(10)] = inst_32073);

return statearr_32108;
})();
var statearr_32109_33151 = state_32103__$1;
(statearr_32109_33151[(2)] = null);

(statearr_32109_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (4))){
var inst_32073 = (state_32103[(10)]);
var state_32103__$1 = state_32103;
return cljs.core.async.ioc_alts_BANG_(state_32103__$1,(7),inst_32073);
} else {
if((state_val_32104 === (6))){
var inst_32099 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32110_33152 = state_32103__$1;
(statearr_32110_33152[(2)] = inst_32099);

(statearr_32110_33152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (3))){
var inst_32101 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32103__$1,inst_32101);
} else {
if((state_val_32104 === (2))){
var inst_32073 = (state_32103[(10)]);
var inst_32075 = cljs.core.count(inst_32073);
var inst_32076 = (inst_32075 > (0));
var state_32103__$1 = state_32103;
if(cljs.core.truth_(inst_32076)){
var statearr_32112_33153 = state_32103__$1;
(statearr_32112_33153[(1)] = (4));

} else {
var statearr_32113_33154 = state_32103__$1;
(statearr_32113_33154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (11))){
var inst_32073 = (state_32103[(10)]);
var inst_32092 = (state_32103[(2)]);
var tmp32111 = inst_32073;
var inst_32073__$1 = tmp32111;
var state_32103__$1 = (function (){var statearr_32114 = state_32103;
(statearr_32114[(10)] = inst_32073__$1);

(statearr_32114[(11)] = inst_32092);

return statearr_32114;
})();
var statearr_32115_33155 = state_32103__$1;
(statearr_32115_33155[(2)] = null);

(statearr_32115_33155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (9))){
var inst_32083 = (state_32103[(8)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32103__$1,(11),out,inst_32083);
} else {
if((state_val_32104 === (5))){
var inst_32097 = cljs.core.async.close_BANG_(out);
var state_32103__$1 = state_32103;
var statearr_32116_33156 = state_32103__$1;
(statearr_32116_33156[(2)] = inst_32097);

(statearr_32116_33156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (10))){
var inst_32095 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32117_33157 = state_32103__$1;
(statearr_32117_33157[(2)] = inst_32095);

(statearr_32117_33157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (8))){
var inst_32082 = (state_32103[(7)]);
var inst_32084 = (state_32103[(9)]);
var inst_32073 = (state_32103[(10)]);
var inst_32083 = (state_32103[(8)]);
var inst_32087 = (function (){var cs = inst_32073;
var vec__32078 = inst_32082;
var v = inst_32083;
var c = inst_32084;
return (function (p1__32069_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32069_SHARP_);
});
})();
var inst_32088 = cljs.core.filterv(inst_32087,inst_32073);
var inst_32073__$1 = inst_32088;
var state_32103__$1 = (function (){var statearr_32118 = state_32103;
(statearr_32118[(10)] = inst_32073__$1);

return statearr_32118;
})();
var statearr_32119_33158 = state_32103__$1;
(statearr_32119_33158[(2)] = null);

(statearr_32119_33158[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32120[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32120[(1)] = (1));

return statearr_32120;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32103){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32103);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32121){var ex__30257__auto__ = e32121;
var statearr_32122_33159 = state_32103;
(statearr_32122_33159[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32103[(4)]))){
var statearr_32123_33160 = state_32103;
(statearr_32123_33160[(1)] = cljs.core.first((state_32103[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33161 = state_32103;
state_32103 = G__33161;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32124 = f__30788__auto__();
(statearr_32124[(6)] = c__30787__auto___33148);

return statearr_32124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32126 = arguments.length;
switch (G__32126) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30787__auto___33163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32150){
var state_val_32151 = (state_32150[(1)]);
if((state_val_32151 === (7))){
var inst_32132 = (state_32150[(7)]);
var inst_32132__$1 = (state_32150[(2)]);
var inst_32133 = (inst_32132__$1 == null);
var inst_32134 = cljs.core.not(inst_32133);
var state_32150__$1 = (function (){var statearr_32152 = state_32150;
(statearr_32152[(7)] = inst_32132__$1);

return statearr_32152;
})();
if(inst_32134){
var statearr_32153_33164 = state_32150__$1;
(statearr_32153_33164[(1)] = (8));

} else {
var statearr_32154_33165 = state_32150__$1;
(statearr_32154_33165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (1))){
var inst_32127 = (0);
var state_32150__$1 = (function (){var statearr_32155 = state_32150;
(statearr_32155[(8)] = inst_32127);

return statearr_32155;
})();
var statearr_32156_33169 = state_32150__$1;
(statearr_32156_33169[(2)] = null);

(statearr_32156_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (4))){
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32150__$1,(7),ch);
} else {
if((state_val_32151 === (6))){
var inst_32145 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32157_33174 = state_32150__$1;
(statearr_32157_33174[(2)] = inst_32145);

(statearr_32157_33174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (3))){
var inst_32147 = (state_32150[(2)]);
var inst_32148 = cljs.core.async.close_BANG_(out);
var state_32150__$1 = (function (){var statearr_32158 = state_32150;
(statearr_32158[(9)] = inst_32147);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32150__$1,inst_32148);
} else {
if((state_val_32151 === (2))){
var inst_32127 = (state_32150[(8)]);
var inst_32129 = (inst_32127 < n);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32129)){
var statearr_32159_33178 = state_32150__$1;
(statearr_32159_33178[(1)] = (4));

} else {
var statearr_32160_33179 = state_32150__$1;
(statearr_32160_33179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (11))){
var inst_32127 = (state_32150[(8)]);
var inst_32137 = (state_32150[(2)]);
var inst_32138 = (inst_32127 + (1));
var inst_32127__$1 = inst_32138;
var state_32150__$1 = (function (){var statearr_32161 = state_32150;
(statearr_32161[(8)] = inst_32127__$1);

(statearr_32161[(10)] = inst_32137);

return statearr_32161;
})();
var statearr_32162_33180 = state_32150__$1;
(statearr_32162_33180[(2)] = null);

(statearr_32162_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (9))){
var state_32150__$1 = state_32150;
var statearr_32163_33184 = state_32150__$1;
(statearr_32163_33184[(2)] = null);

(statearr_32163_33184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (5))){
var state_32150__$1 = state_32150;
var statearr_32164_33185 = state_32150__$1;
(statearr_32164_33185[(2)] = null);

(statearr_32164_33185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (10))){
var inst_32142 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32165_33186 = state_32150__$1;
(statearr_32165_33186[(2)] = inst_32142);

(statearr_32165_33186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (8))){
var inst_32132 = (state_32150[(7)]);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32150__$1,(11),out,inst_32132);
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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32166[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32166[(1)] = (1));

return statearr_32166;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32150){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32150);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32167){var ex__30257__auto__ = e32167;
var statearr_32168_33190 = state_32150;
(statearr_32168_33190[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32150[(4)]))){
var statearr_32169_33191 = state_32150;
(statearr_32169_33191[(1)] = cljs.core.first((state_32150[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33195 = state_32150;
state_32150 = G__33195;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32170 = f__30788__auto__();
(statearr_32170[(6)] = c__30787__auto___33163);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32172 = (function (f,ch,meta32173){
this.f = f;
this.ch = ch;
this.meta32173 = meta32173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32174,meta32173__$1){
var self__ = this;
var _32174__$1 = this;
return (new cljs.core.async.t_cljs$core$async32172(self__.f,self__.ch,meta32173__$1));
}));

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32174){
var self__ = this;
var _32174__$1 = this;
return self__.meta32173;
}));

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32175 = (function (f,ch,meta32173,_,fn1,meta32176){
this.f = f;
this.ch = ch;
this.meta32173 = meta32173;
this._ = _;
this.fn1 = fn1;
this.meta32176 = meta32176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32177,meta32176__$1){
var self__ = this;
var _32177__$1 = this;
return (new cljs.core.async.t_cljs$core$async32175(self__.f,self__.ch,self__.meta32173,self__._,self__.fn1,meta32176__$1));
}));

(cljs.core.async.t_cljs$core$async32175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32177){
var self__ = this;
var _32177__$1 = this;
return self__.meta32176;
}));

(cljs.core.async.t_cljs$core$async32175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32171_SHARP_){
var G__32178 = (((p1__32171_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32171_SHARP_) : self__.f.call(null,p1__32171_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32178) : f1.call(null,G__32178));
});
}));

(cljs.core.async.t_cljs$core$async32175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32173","meta32173",1798997596,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32172","cljs.core.async/t_cljs$core$async32172",-1170085327,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32176","meta32176",-249157179,null)], null);
}));

(cljs.core.async.t_cljs$core$async32175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32175");

(cljs.core.async.t_cljs$core$async32175.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32175.
 */
cljs.core.async.__GT_t_cljs$core$async32175 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32175(f__$1,ch__$1,meta32173__$1,___$2,fn1__$1,meta32176){
return (new cljs.core.async.t_cljs$core$async32175(f__$1,ch__$1,meta32173__$1,___$2,fn1__$1,meta32176));
});

}

return (new cljs.core.async.t_cljs$core$async32175(self__.f,self__.ch,self__.meta32173,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32179 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32179) : self__.f.call(null,G__32179));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32173","meta32173",1798997596,null)], null);
}));

(cljs.core.async.t_cljs$core$async32172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32172");

(cljs.core.async.t_cljs$core$async32172.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32172.
 */
cljs.core.async.__GT_t_cljs$core$async32172 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32172(f__$1,ch__$1,meta32173){
return (new cljs.core.async.t_cljs$core$async32172(f__$1,ch__$1,meta32173));
});

}

return (new cljs.core.async.t_cljs$core$async32172(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32180 = (function (f,ch,meta32181){
this.f = f;
this.ch = ch;
this.meta32181 = meta32181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32182,meta32181__$1){
var self__ = this;
var _32182__$1 = this;
return (new cljs.core.async.t_cljs$core$async32180(self__.f,self__.ch,meta32181__$1));
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32182){
var self__ = this;
var _32182__$1 = this;
return self__.meta32181;
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32181","meta32181",-1568686569,null)], null);
}));

(cljs.core.async.t_cljs$core$async32180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32180");

(cljs.core.async.t_cljs$core$async32180.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32180.
 */
cljs.core.async.__GT_t_cljs$core$async32180 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32180(f__$1,ch__$1,meta32181){
return (new cljs.core.async.t_cljs$core$async32180(f__$1,ch__$1,meta32181));
});

}

return (new cljs.core.async.t_cljs$core$async32180(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32183 = (function (p,ch,meta32184){
this.p = p;
this.ch = ch;
this.meta32184 = meta32184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32185,meta32184__$1){
var self__ = this;
var _32185__$1 = this;
return (new cljs.core.async.t_cljs$core$async32183(self__.p,self__.ch,meta32184__$1));
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32185){
var self__ = this;
var _32185__$1 = this;
return self__.meta32184;
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32184","meta32184",-791249900,null)], null);
}));

(cljs.core.async.t_cljs$core$async32183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32183");

(cljs.core.async.t_cljs$core$async32183.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32183.
 */
cljs.core.async.__GT_t_cljs$core$async32183 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32183(p__$1,ch__$1,meta32184){
return (new cljs.core.async.t_cljs$core$async32183(p__$1,ch__$1,meta32184));
});

}

return (new cljs.core.async.t_cljs$core$async32183(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32188 = arguments.length;
switch (G__32188) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30787__auto___33225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32217){
var state_val_32218 = (state_32217[(1)]);
if((state_val_32218 === (7))){
var inst_32213 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32219_33226 = state_32217__$1;
(statearr_32219_33226[(2)] = inst_32213);

(statearr_32219_33226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (1))){
var state_32217__$1 = state_32217;
var statearr_32220_33227 = state_32217__$1;
(statearr_32220_33227[(2)] = null);

(statearr_32220_33227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (4))){
var inst_32194 = (state_32217[(7)]);
var inst_32194__$1 = (state_32217[(2)]);
var inst_32195 = (inst_32194__$1 == null);
var state_32217__$1 = (function (){var statearr_32221 = state_32217;
(statearr_32221[(7)] = inst_32194__$1);

return statearr_32221;
})();
if(cljs.core.truth_(inst_32195)){
var statearr_32222_33228 = state_32217__$1;
(statearr_32222_33228[(1)] = (5));

} else {
var statearr_32223_33229 = state_32217__$1;
(statearr_32223_33229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (6))){
var inst_32194 = (state_32217[(7)]);
var inst_32202 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32194) : p.call(null,inst_32194));
var state_32217__$1 = state_32217;
if(cljs.core.truth_(inst_32202)){
var statearr_32224_33230 = state_32217__$1;
(statearr_32224_33230[(1)] = (8));

} else {
var statearr_32225_33231 = state_32217__$1;
(statearr_32225_33231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (3))){
var inst_32215 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32217__$1,inst_32215);
} else {
if((state_val_32218 === (2))){
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32217__$1,(4),ch);
} else {
if((state_val_32218 === (11))){
var inst_32207 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32226_33232 = state_32217__$1;
(statearr_32226_33232[(2)] = inst_32207);

(statearr_32226_33232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (9))){
var state_32217__$1 = state_32217;
var statearr_32227_33233 = state_32217__$1;
(statearr_32227_33233[(2)] = null);

(statearr_32227_33233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (5))){
var inst_32197 = cljs.core.async.close_BANG_(out);
var state_32217__$1 = state_32217;
var statearr_32228_33234 = state_32217__$1;
(statearr_32228_33234[(2)] = inst_32197);

(statearr_32228_33234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (10))){
var inst_32210 = (state_32217[(2)]);
var state_32217__$1 = (function (){var statearr_32229 = state_32217;
(statearr_32229[(8)] = inst_32210);

return statearr_32229;
})();
var statearr_32230_33235 = state_32217__$1;
(statearr_32230_33235[(2)] = null);

(statearr_32230_33235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (8))){
var inst_32194 = (state_32217[(7)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32217__$1,(11),out,inst_32194);
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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32231 = [null,null,null,null,null,null,null,null,null];
(statearr_32231[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32231[(1)] = (1));

return statearr_32231;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32217){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32217);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32233){var ex__30257__auto__ = e32233;
var statearr_32234_33236 = state_32217;
(statearr_32234_33236[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32217[(4)]))){
var statearr_32235_33237 = state_32217;
(statearr_32235_33237[(1)] = cljs.core.first((state_32217[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33238 = state_32217;
state_32217 = G__33238;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32238 = f__30788__auto__();
(statearr_32238[(6)] = c__30787__auto___33225);

return statearr_32238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32240 = arguments.length;
switch (G__32240) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32303){
var state_val_32304 = (state_32303[(1)]);
if((state_val_32304 === (7))){
var inst_32299 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32305_33246 = state_32303__$1;
(statearr_32305_33246[(2)] = inst_32299);

(statearr_32305_33246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (20))){
var inst_32269 = (state_32303[(7)]);
var inst_32280 = (state_32303[(2)]);
var inst_32281 = cljs.core.next(inst_32269);
var inst_32255 = inst_32281;
var inst_32256 = null;
var inst_32257 = (0);
var inst_32258 = (0);
var state_32303__$1 = (function (){var statearr_32306 = state_32303;
(statearr_32306[(8)] = inst_32258);

(statearr_32306[(9)] = inst_32280);

(statearr_32306[(10)] = inst_32255);

(statearr_32306[(11)] = inst_32256);

(statearr_32306[(12)] = inst_32257);

return statearr_32306;
})();
var statearr_32307_33247 = state_32303__$1;
(statearr_32307_33247[(2)] = null);

(statearr_32307_33247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (1))){
var state_32303__$1 = state_32303;
var statearr_32308_33248 = state_32303__$1;
(statearr_32308_33248[(2)] = null);

(statearr_32308_33248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (4))){
var inst_32243 = (state_32303[(13)]);
var inst_32243__$1 = (state_32303[(2)]);
var inst_32244 = (inst_32243__$1 == null);
var state_32303__$1 = (function (){var statearr_32309 = state_32303;
(statearr_32309[(13)] = inst_32243__$1);

return statearr_32309;
})();
if(cljs.core.truth_(inst_32244)){
var statearr_32310_33249 = state_32303__$1;
(statearr_32310_33249[(1)] = (5));

} else {
var statearr_32317_33250 = state_32303__$1;
(statearr_32317_33250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (15))){
var state_32303__$1 = state_32303;
var statearr_32321_33251 = state_32303__$1;
(statearr_32321_33251[(2)] = null);

(statearr_32321_33251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (21))){
var state_32303__$1 = state_32303;
var statearr_32322_33252 = state_32303__$1;
(statearr_32322_33252[(2)] = null);

(statearr_32322_33252[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (13))){
var inst_32258 = (state_32303[(8)]);
var inst_32255 = (state_32303[(10)]);
var inst_32256 = (state_32303[(11)]);
var inst_32257 = (state_32303[(12)]);
var inst_32265 = (state_32303[(2)]);
var inst_32266 = (inst_32258 + (1));
var tmp32318 = inst_32255;
var tmp32319 = inst_32256;
var tmp32320 = inst_32257;
var inst_32255__$1 = tmp32318;
var inst_32256__$1 = tmp32319;
var inst_32257__$1 = tmp32320;
var inst_32258__$1 = inst_32266;
var state_32303__$1 = (function (){var statearr_32323 = state_32303;
(statearr_32323[(8)] = inst_32258__$1);

(statearr_32323[(14)] = inst_32265);

(statearr_32323[(10)] = inst_32255__$1);

(statearr_32323[(11)] = inst_32256__$1);

(statearr_32323[(12)] = inst_32257__$1);

return statearr_32323;
})();
var statearr_32324_33253 = state_32303__$1;
(statearr_32324_33253[(2)] = null);

(statearr_32324_33253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (22))){
var state_32303__$1 = state_32303;
var statearr_32325_33254 = state_32303__$1;
(statearr_32325_33254[(2)] = null);

(statearr_32325_33254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (6))){
var inst_32243 = (state_32303[(13)]);
var inst_32253 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32243) : f.call(null,inst_32243));
var inst_32254 = cljs.core.seq(inst_32253);
var inst_32255 = inst_32254;
var inst_32256 = null;
var inst_32257 = (0);
var inst_32258 = (0);
var state_32303__$1 = (function (){var statearr_32326 = state_32303;
(statearr_32326[(8)] = inst_32258);

(statearr_32326[(10)] = inst_32255);

(statearr_32326[(11)] = inst_32256);

(statearr_32326[(12)] = inst_32257);

return statearr_32326;
})();
var statearr_32327_33257 = state_32303__$1;
(statearr_32327_33257[(2)] = null);

(statearr_32327_33257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (17))){
var inst_32269 = (state_32303[(7)]);
var inst_32273 = cljs.core.chunk_first(inst_32269);
var inst_32274 = cljs.core.chunk_rest(inst_32269);
var inst_32275 = cljs.core.count(inst_32273);
var inst_32255 = inst_32274;
var inst_32256 = inst_32273;
var inst_32257 = inst_32275;
var inst_32258 = (0);
var state_32303__$1 = (function (){var statearr_32328 = state_32303;
(statearr_32328[(8)] = inst_32258);

(statearr_32328[(10)] = inst_32255);

(statearr_32328[(11)] = inst_32256);

(statearr_32328[(12)] = inst_32257);

return statearr_32328;
})();
var statearr_32329_33258 = state_32303__$1;
(statearr_32329_33258[(2)] = null);

(statearr_32329_33258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (3))){
var inst_32301 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32303__$1,inst_32301);
} else {
if((state_val_32304 === (12))){
var inst_32289 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32330_33259 = state_32303__$1;
(statearr_32330_33259[(2)] = inst_32289);

(statearr_32330_33259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (2))){
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32303__$1,(4),in$);
} else {
if((state_val_32304 === (23))){
var inst_32297 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32331_33260 = state_32303__$1;
(statearr_32331_33260[(2)] = inst_32297);

(statearr_32331_33260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (19))){
var inst_32284 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32332_33261 = state_32303__$1;
(statearr_32332_33261[(2)] = inst_32284);

(statearr_32332_33261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (11))){
var inst_32269 = (state_32303[(7)]);
var inst_32255 = (state_32303[(10)]);
var inst_32269__$1 = cljs.core.seq(inst_32255);
var state_32303__$1 = (function (){var statearr_32333 = state_32303;
(statearr_32333[(7)] = inst_32269__$1);

return statearr_32333;
})();
if(inst_32269__$1){
var statearr_32334_33263 = state_32303__$1;
(statearr_32334_33263[(1)] = (14));

} else {
var statearr_32335_33264 = state_32303__$1;
(statearr_32335_33264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (9))){
var inst_32291 = (state_32303[(2)]);
var inst_32292 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32303__$1 = (function (){var statearr_32336 = state_32303;
(statearr_32336[(15)] = inst_32291);

return statearr_32336;
})();
if(cljs.core.truth_(inst_32292)){
var statearr_32337_33265 = state_32303__$1;
(statearr_32337_33265[(1)] = (21));

} else {
var statearr_32338_33266 = state_32303__$1;
(statearr_32338_33266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (5))){
var inst_32246 = cljs.core.async.close_BANG_(out);
var state_32303__$1 = state_32303;
var statearr_32339_33267 = state_32303__$1;
(statearr_32339_33267[(2)] = inst_32246);

(statearr_32339_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (14))){
var inst_32269 = (state_32303[(7)]);
var inst_32271 = cljs.core.chunked_seq_QMARK_(inst_32269);
var state_32303__$1 = state_32303;
if(inst_32271){
var statearr_32340_33268 = state_32303__$1;
(statearr_32340_33268[(1)] = (17));

} else {
var statearr_32341_33269 = state_32303__$1;
(statearr_32341_33269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (16))){
var inst_32287 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32342_33270 = state_32303__$1;
(statearr_32342_33270[(2)] = inst_32287);

(statearr_32342_33270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (10))){
var inst_32258 = (state_32303[(8)]);
var inst_32256 = (state_32303[(11)]);
var inst_32263 = cljs.core._nth(inst_32256,inst_32258);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32303__$1,(13),out,inst_32263);
} else {
if((state_val_32304 === (18))){
var inst_32269 = (state_32303[(7)]);
var inst_32278 = cljs.core.first(inst_32269);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32303__$1,(20),out,inst_32278);
} else {
if((state_val_32304 === (8))){
var inst_32258 = (state_32303[(8)]);
var inst_32257 = (state_32303[(12)]);
var inst_32260 = (inst_32258 < inst_32257);
var inst_32261 = inst_32260;
var state_32303__$1 = state_32303;
if(cljs.core.truth_(inst_32261)){
var statearr_32343_33271 = state_32303__$1;
(statearr_32343_33271[(1)] = (10));

} else {
var statearr_32344_33272 = state_32303__$1;
(statearr_32344_33272[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30254__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30254__auto____0 = (function (){
var statearr_32345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32345[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30254__auto__);

(statearr_32345[(1)] = (1));

return statearr_32345;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30254__auto____1 = (function (state_32303){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32303);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32346){var ex__30257__auto__ = e32346;
var statearr_32347_33273 = state_32303;
(statearr_32347_33273[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32303[(4)]))){
var statearr_32348_33275 = state_32303;
(statearr_32348_33275[(1)] = cljs.core.first((state_32303[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33276 = state_32303;
state_32303 = G__33276;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30254__auto__ = function(state_32303){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30254__auto____1.call(this,state_32303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30254__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30254__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32349 = f__30788__auto__();
(statearr_32349[(6)] = c__30787__auto__);

return statearr_32349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));

return c__30787__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32351 = arguments.length;
switch (G__32351) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32353 = arguments.length;
switch (G__32353) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32387 = arguments.length;
switch (G__32387) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30787__auto___33292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32411){
var state_val_32412 = (state_32411[(1)]);
if((state_val_32412 === (7))){
var inst_32406 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
var statearr_32416_33293 = state_32411__$1;
(statearr_32416_33293[(2)] = inst_32406);

(statearr_32416_33293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (1))){
var inst_32388 = null;
var state_32411__$1 = (function (){var statearr_32417 = state_32411;
(statearr_32417[(7)] = inst_32388);

return statearr_32417;
})();
var statearr_32420_33294 = state_32411__$1;
(statearr_32420_33294[(2)] = null);

(statearr_32420_33294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (4))){
var inst_32391 = (state_32411[(8)]);
var inst_32391__$1 = (state_32411[(2)]);
var inst_32392 = (inst_32391__$1 == null);
var inst_32393 = cljs.core.not(inst_32392);
var state_32411__$1 = (function (){var statearr_32421 = state_32411;
(statearr_32421[(8)] = inst_32391__$1);

return statearr_32421;
})();
if(inst_32393){
var statearr_32422_33295 = state_32411__$1;
(statearr_32422_33295[(1)] = (5));

} else {
var statearr_32423_33296 = state_32411__$1;
(statearr_32423_33296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (6))){
var state_32411__$1 = state_32411;
var statearr_32424_33297 = state_32411__$1;
(statearr_32424_33297[(2)] = null);

(statearr_32424_33297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (3))){
var inst_32408 = (state_32411[(2)]);
var inst_32409 = cljs.core.async.close_BANG_(out);
var state_32411__$1 = (function (){var statearr_32426 = state_32411;
(statearr_32426[(9)] = inst_32408);

return statearr_32426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32411__$1,inst_32409);
} else {
if((state_val_32412 === (2))){
var state_32411__$1 = state_32411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32411__$1,(4),ch);
} else {
if((state_val_32412 === (11))){
var inst_32391 = (state_32411[(8)]);
var inst_32400 = (state_32411[(2)]);
var inst_32388 = inst_32391;
var state_32411__$1 = (function (){var statearr_32432 = state_32411;
(statearr_32432[(7)] = inst_32388);

(statearr_32432[(10)] = inst_32400);

return statearr_32432;
})();
var statearr_32433_33299 = state_32411__$1;
(statearr_32433_33299[(2)] = null);

(statearr_32433_33299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (9))){
var inst_32391 = (state_32411[(8)]);
var state_32411__$1 = state_32411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32411__$1,(11),out,inst_32391);
} else {
if((state_val_32412 === (5))){
var inst_32388 = (state_32411[(7)]);
var inst_32391 = (state_32411[(8)]);
var inst_32395 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32391,inst_32388);
var state_32411__$1 = state_32411;
if(inst_32395){
var statearr_32437_33301 = state_32411__$1;
(statearr_32437_33301[(1)] = (8));

} else {
var statearr_32438_33302 = state_32411__$1;
(statearr_32438_33302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (10))){
var inst_32403 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
var statearr_32441_33303 = state_32411__$1;
(statearr_32441_33303[(2)] = inst_32403);

(statearr_32441_33303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (8))){
var inst_32388 = (state_32411[(7)]);
var tmp32434 = inst_32388;
var inst_32388__$1 = tmp32434;
var state_32411__$1 = (function (){var statearr_32442 = state_32411;
(statearr_32442[(7)] = inst_32388__$1);

return statearr_32442;
})();
var statearr_32443_33304 = state_32411__$1;
(statearr_32443_33304[(2)] = null);

(statearr_32443_33304[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32444[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32444[(1)] = (1));

return statearr_32444;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32411){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32411);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32445){var ex__30257__auto__ = e32445;
var statearr_32446_33305 = state_32411;
(statearr_32446_33305[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32411[(4)]))){
var statearr_32448_33306 = state_32411;
(statearr_32448_33306[(1)] = cljs.core.first((state_32411[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33307 = state_32411;
state_32411 = G__33307;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32449 = f__30788__auto__();
(statearr_32449[(6)] = c__30787__auto___33292);

return statearr_32449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32451 = arguments.length;
switch (G__32451) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30787__auto___33310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32498){
var state_val_32499 = (state_32498[(1)]);
if((state_val_32499 === (7))){
var inst_32494 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32500_33312 = state_32498__$1;
(statearr_32500_33312[(2)] = inst_32494);

(statearr_32500_33312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (1))){
var inst_32461 = (new Array(n));
var inst_32462 = inst_32461;
var inst_32463 = (0);
var state_32498__$1 = (function (){var statearr_32501 = state_32498;
(statearr_32501[(7)] = inst_32462);

(statearr_32501[(8)] = inst_32463);

return statearr_32501;
})();
var statearr_32502_33313 = state_32498__$1;
(statearr_32502_33313[(2)] = null);

(statearr_32502_33313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (4))){
var inst_32466 = (state_32498[(9)]);
var inst_32466__$1 = (state_32498[(2)]);
var inst_32467 = (inst_32466__$1 == null);
var inst_32468 = cljs.core.not(inst_32467);
var state_32498__$1 = (function (){var statearr_32503 = state_32498;
(statearr_32503[(9)] = inst_32466__$1);

return statearr_32503;
})();
if(inst_32468){
var statearr_32504_33315 = state_32498__$1;
(statearr_32504_33315[(1)] = (5));

} else {
var statearr_32505_33316 = state_32498__$1;
(statearr_32505_33316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (15))){
var inst_32488 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32506_33318 = state_32498__$1;
(statearr_32506_33318[(2)] = inst_32488);

(statearr_32506_33318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (13))){
var state_32498__$1 = state_32498;
var statearr_32507_33319 = state_32498__$1;
(statearr_32507_33319[(2)] = null);

(statearr_32507_33319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (6))){
var inst_32463 = (state_32498[(8)]);
var inst_32484 = (inst_32463 > (0));
var state_32498__$1 = state_32498;
if(cljs.core.truth_(inst_32484)){
var statearr_32508_33320 = state_32498__$1;
(statearr_32508_33320[(1)] = (12));

} else {
var statearr_32509_33321 = state_32498__$1;
(statearr_32509_33321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (3))){
var inst_32496 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32498__$1,inst_32496);
} else {
if((state_val_32499 === (12))){
var inst_32462 = (state_32498[(7)]);
var inst_32486 = cljs.core.vec(inst_32462);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32498__$1,(15),out,inst_32486);
} else {
if((state_val_32499 === (2))){
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32498__$1,(4),ch);
} else {
if((state_val_32499 === (11))){
var inst_32478 = (state_32498[(2)]);
var inst_32479 = (new Array(n));
var inst_32462 = inst_32479;
var inst_32463 = (0);
var state_32498__$1 = (function (){var statearr_32514 = state_32498;
(statearr_32514[(10)] = inst_32478);

(statearr_32514[(7)] = inst_32462);

(statearr_32514[(8)] = inst_32463);

return statearr_32514;
})();
var statearr_32515_33323 = state_32498__$1;
(statearr_32515_33323[(2)] = null);

(statearr_32515_33323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (9))){
var inst_32462 = (state_32498[(7)]);
var inst_32476 = cljs.core.vec(inst_32462);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32498__$1,(11),out,inst_32476);
} else {
if((state_val_32499 === (5))){
var inst_32462 = (state_32498[(7)]);
var inst_32466 = (state_32498[(9)]);
var inst_32471 = (state_32498[(11)]);
var inst_32463 = (state_32498[(8)]);
var inst_32470 = (inst_32462[inst_32463] = inst_32466);
var inst_32471__$1 = (inst_32463 + (1));
var inst_32472 = (inst_32471__$1 < n);
var state_32498__$1 = (function (){var statearr_32523 = state_32498;
(statearr_32523[(11)] = inst_32471__$1);

(statearr_32523[(12)] = inst_32470);

return statearr_32523;
})();
if(cljs.core.truth_(inst_32472)){
var statearr_32524_33325 = state_32498__$1;
(statearr_32524_33325[(1)] = (8));

} else {
var statearr_32525_33326 = state_32498__$1;
(statearr_32525_33326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (14))){
var inst_32491 = (state_32498[(2)]);
var inst_32492 = cljs.core.async.close_BANG_(out);
var state_32498__$1 = (function (){var statearr_32527 = state_32498;
(statearr_32527[(13)] = inst_32491);

return statearr_32527;
})();
var statearr_32528_33327 = state_32498__$1;
(statearr_32528_33327[(2)] = inst_32492);

(statearr_32528_33327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (10))){
var inst_32482 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32529_33328 = state_32498__$1;
(statearr_32529_33328[(2)] = inst_32482);

(statearr_32529_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (8))){
var inst_32462 = (state_32498[(7)]);
var inst_32471 = (state_32498[(11)]);
var tmp32526 = inst_32462;
var inst_32462__$1 = tmp32526;
var inst_32463 = inst_32471;
var state_32498__$1 = (function (){var statearr_32530 = state_32498;
(statearr_32530[(7)] = inst_32462__$1);

(statearr_32530[(8)] = inst_32463);

return statearr_32530;
})();
var statearr_32531_33329 = state_32498__$1;
(statearr_32531_33329[(2)] = null);

(statearr_32531_33329[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32532[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32532[(1)] = (1));

return statearr_32532;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32498){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32498);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32533){var ex__30257__auto__ = e32533;
var statearr_32534_33339 = state_32498;
(statearr_32534_33339[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32498[(4)]))){
var statearr_32535_33340 = state_32498;
(statearr_32535_33340[(1)] = cljs.core.first((state_32498[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33342 = state_32498;
state_32498 = G__33342;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32536 = f__30788__auto__();
(statearr_32536[(6)] = c__30787__auto___33310);

return statearr_32536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32538 = arguments.length;
switch (G__32538) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30787__auto___33349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_32580){
var state_val_32581 = (state_32580[(1)]);
if((state_val_32581 === (7))){
var inst_32576 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32582_33350 = state_32580__$1;
(statearr_32582_33350[(2)] = inst_32576);

(statearr_32582_33350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (1))){
var inst_32539 = [];
var inst_32540 = inst_32539;
var inst_32541 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32580__$1 = (function (){var statearr_32583 = state_32580;
(statearr_32583[(7)] = inst_32540);

(statearr_32583[(8)] = inst_32541);

return statearr_32583;
})();
var statearr_32584_33351 = state_32580__$1;
(statearr_32584_33351[(2)] = null);

(statearr_32584_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (4))){
var inst_32544 = (state_32580[(9)]);
var inst_32544__$1 = (state_32580[(2)]);
var inst_32545 = (inst_32544__$1 == null);
var inst_32546 = cljs.core.not(inst_32545);
var state_32580__$1 = (function (){var statearr_32585 = state_32580;
(statearr_32585[(9)] = inst_32544__$1);

return statearr_32585;
})();
if(inst_32546){
var statearr_32586_33356 = state_32580__$1;
(statearr_32586_33356[(1)] = (5));

} else {
var statearr_32587_33357 = state_32580__$1;
(statearr_32587_33357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (15))){
var inst_32570 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32588_33362 = state_32580__$1;
(statearr_32588_33362[(2)] = inst_32570);

(statearr_32588_33362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (13))){
var state_32580__$1 = state_32580;
var statearr_32589_33367 = state_32580__$1;
(statearr_32589_33367[(2)] = null);

(statearr_32589_33367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (6))){
var inst_32540 = (state_32580[(7)]);
var inst_32565 = inst_32540.length;
var inst_32566 = (inst_32565 > (0));
var state_32580__$1 = state_32580;
if(cljs.core.truth_(inst_32566)){
var statearr_32590_33368 = state_32580__$1;
(statearr_32590_33368[(1)] = (12));

} else {
var statearr_32591_33369 = state_32580__$1;
(statearr_32591_33369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (3))){
var inst_32578 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32580__$1,inst_32578);
} else {
if((state_val_32581 === (12))){
var inst_32540 = (state_32580[(7)]);
var inst_32568 = cljs.core.vec(inst_32540);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32580__$1,(15),out,inst_32568);
} else {
if((state_val_32581 === (2))){
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32580__$1,(4),ch);
} else {
if((state_val_32581 === (11))){
var inst_32544 = (state_32580[(9)]);
var inst_32548 = (state_32580[(10)]);
var inst_32558 = (state_32580[(2)]);
var inst_32559 = [];
var inst_32560 = inst_32559.push(inst_32544);
var inst_32540 = inst_32559;
var inst_32541 = inst_32548;
var state_32580__$1 = (function (){var statearr_32592 = state_32580;
(statearr_32592[(7)] = inst_32540);

(statearr_32592[(8)] = inst_32541);

(statearr_32592[(11)] = inst_32560);

(statearr_32592[(12)] = inst_32558);

return statearr_32592;
})();
var statearr_32593_33382 = state_32580__$1;
(statearr_32593_33382[(2)] = null);

(statearr_32593_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (9))){
var inst_32540 = (state_32580[(7)]);
var inst_32556 = cljs.core.vec(inst_32540);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32580__$1,(11),out,inst_32556);
} else {
if((state_val_32581 === (5))){
var inst_32544 = (state_32580[(9)]);
var inst_32541 = (state_32580[(8)]);
var inst_32548 = (state_32580[(10)]);
var inst_32548__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32544) : f.call(null,inst_32544));
var inst_32549 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32548__$1,inst_32541);
var inst_32550 = cljs.core.keyword_identical_QMARK_(inst_32541,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32551 = ((inst_32549) || (inst_32550));
var state_32580__$1 = (function (){var statearr_32594 = state_32580;
(statearr_32594[(10)] = inst_32548__$1);

return statearr_32594;
})();
if(cljs.core.truth_(inst_32551)){
var statearr_32595_33383 = state_32580__$1;
(statearr_32595_33383[(1)] = (8));

} else {
var statearr_32596_33384 = state_32580__$1;
(statearr_32596_33384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (14))){
var inst_32573 = (state_32580[(2)]);
var inst_32574 = cljs.core.async.close_BANG_(out);
var state_32580__$1 = (function (){var statearr_32598 = state_32580;
(statearr_32598[(13)] = inst_32573);

return statearr_32598;
})();
var statearr_32599_33385 = state_32580__$1;
(statearr_32599_33385[(2)] = inst_32574);

(statearr_32599_33385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (10))){
var inst_32563 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32600_33386 = state_32580__$1;
(statearr_32600_33386[(2)] = inst_32563);

(statearr_32600_33386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (8))){
var inst_32540 = (state_32580[(7)]);
var inst_32544 = (state_32580[(9)]);
var inst_32548 = (state_32580[(10)]);
var inst_32553 = inst_32540.push(inst_32544);
var tmp32597 = inst_32540;
var inst_32540__$1 = tmp32597;
var inst_32541 = inst_32548;
var state_32580__$1 = (function (){var statearr_32601 = state_32580;
(statearr_32601[(7)] = inst_32540__$1);

(statearr_32601[(8)] = inst_32541);

(statearr_32601[(14)] = inst_32553);

return statearr_32601;
})();
var statearr_32602_33387 = state_32580__$1;
(statearr_32602_33387[(2)] = null);

(statearr_32602_33387[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30254__auto__ = null;
var cljs$core$async$state_machine__30254__auto____0 = (function (){
var statearr_32603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32603[(0)] = cljs$core$async$state_machine__30254__auto__);

(statearr_32603[(1)] = (1));

return statearr_32603;
});
var cljs$core$async$state_machine__30254__auto____1 = (function (state_32580){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_32580);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e32604){var ex__30257__auto__ = e32604;
var statearr_32605_33388 = state_32580;
(statearr_32605_33388[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_32580[(4)]))){
var statearr_32606_33389 = state_32580;
(statearr_32606_33389[(1)] = cljs.core.first((state_32580[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33390 = state_32580;
state_32580 = G__33390;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
cljs$core$async$state_machine__30254__auto__ = function(state_32580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30254__auto____1.call(this,state_32580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30254__auto____0;
cljs$core$async$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30254__auto____1;
return cljs$core$async$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_32607 = f__30788__auto__();
(statearr_32607[(6)] = c__30787__auto___33349);

return statearr_32607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
