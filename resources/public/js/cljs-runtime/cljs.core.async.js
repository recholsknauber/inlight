goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33599 = arguments.length;
switch (G__33599) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33600 = (function (f,blockable,meta33601){
this.f = f;
this.blockable = blockable;
this.meta33601 = meta33601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33602,meta33601__$1){
var self__ = this;
var _33602__$1 = this;
return (new cljs.core.async.t_cljs$core$async33600(self__.f,self__.blockable,meta33601__$1));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33602){
var self__ = this;
var _33602__$1 = this;
return self__.meta33601;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33601","meta33601",1934242518,null)], null);
}));

(cljs.core.async.t_cljs$core$async33600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33600");

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33600.
 */
cljs.core.async.__GT_t_cljs$core$async33600 = (function cljs$core$async$__GT_t_cljs$core$async33600(f__$1,blockable__$1,meta33601){
return (new cljs.core.async.t_cljs$core$async33600(f__$1,blockable__$1,meta33601));
});

}

return (new cljs.core.async.t_cljs$core$async33600(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33648 = arguments.length;
switch (G__33648) {
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
var G__33666 = arguments.length;
switch (G__33666) {
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
var G__33683 = arguments.length;
switch (G__33683) {
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
var val_36315 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36315) : fn1.call(null,val_36315));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36315) : fn1.call(null,val_36315));
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
var G__33698 = arguments.length;
switch (G__33698) {
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
var n__4613__auto___36317 = n;
var x_36318 = (0);
while(true){
if((x_36318 < n__4613__auto___36317)){
(a[x_36318] = x_36318);

var G__36319 = (x_36318 + (1));
x_36318 = G__36319;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33779 = (function (flag,meta33780){
this.flag = flag;
this.meta33780 = meta33780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33781,meta33780__$1){
var self__ = this;
var _33781__$1 = this;
return (new cljs.core.async.t_cljs$core$async33779(self__.flag,meta33780__$1));
}));

(cljs.core.async.t_cljs$core$async33779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33781){
var self__ = this;
var _33781__$1 = this;
return self__.meta33780;
}));

(cljs.core.async.t_cljs$core$async33779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33780","meta33780",875105116,null)], null);
}));

(cljs.core.async.t_cljs$core$async33779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33779");

(cljs.core.async.t_cljs$core$async33779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33779.
 */
cljs.core.async.__GT_t_cljs$core$async33779 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33779(flag__$1,meta33780){
return (new cljs.core.async.t_cljs$core$async33779(flag__$1,meta33780));
});

}

return (new cljs.core.async.t_cljs$core$async33779(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33815 = (function (flag,cb,meta33816){
this.flag = flag;
this.cb = cb;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new cljs.core.async.t_cljs$core$async33815(self__.flag,self__.cb,meta33816__$1));
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
}));

(cljs.core.async.t_cljs$core$async33815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33815");

(cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33815.
 */
cljs.core.async.__GT_t_cljs$core$async33815 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33815(flag__$1,cb__$1,meta33816){
return (new cljs.core.async.t_cljs$core$async33815(flag__$1,cb__$1,meta33816));
});

}

return (new cljs.core.async.t_cljs$core$async33815(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33829_SHARP_){
var G__33835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33829_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33835) : fret.call(null,G__33835));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33830_SHARP_){
var G__33836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33830_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33836) : fret.call(null,G__33836));
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
var G__36328 = (i + (1));
i = G__36328;
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
var len__4736__auto___36333 = arguments.length;
var i__4737__auto___36334 = (0);
while(true){
if((i__4737__auto___36334 < len__4736__auto___36333)){
args__4742__auto__.push((arguments[i__4737__auto___36334]));

var G__36337 = (i__4737__auto___36334 + (1));
i__4737__auto___36334 = G__36337;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33850){
var map__33851 = p__33850;
var map__33851__$1 = (((((!((map__33851 == null))))?(((((map__33851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33851):map__33851);
var opts = map__33851__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33843){
var G__33844 = cljs.core.first(seq33843);
var seq33843__$1 = cljs.core.next(seq33843);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33844,seq33843__$1);
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
var G__33869 = arguments.length;
switch (G__33869) {
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
var c__33475__auto___36343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_33919){
var state_val_33921 = (state_33919[(1)]);
if((state_val_33921 === (7))){
var inst_33903 = (state_33919[(2)]);
var state_33919__$1 = state_33919;
var statearr_33941_36344 = state_33919__$1;
(statearr_33941_36344[(2)] = inst_33903);

(statearr_33941_36344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (1))){
var state_33919__$1 = state_33919;
var statearr_34006_36345 = state_33919__$1;
(statearr_34006_36345[(2)] = null);

(statearr_34006_36345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (4))){
var inst_33883 = (state_33919[(7)]);
var inst_33883__$1 = (state_33919[(2)]);
var inst_33884 = (inst_33883__$1 == null);
var state_33919__$1 = (function (){var statearr_34007 = state_33919;
(statearr_34007[(7)] = inst_33883__$1);

return statearr_34007;
})();
if(cljs.core.truth_(inst_33884)){
var statearr_34008_36348 = state_33919__$1;
(statearr_34008_36348[(1)] = (5));

} else {
var statearr_34009_36349 = state_33919__$1;
(statearr_34009_36349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (13))){
var state_33919__$1 = state_33919;
var statearr_34011_36355 = state_33919__$1;
(statearr_34011_36355[(2)] = null);

(statearr_34011_36355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (6))){
var inst_33883 = (state_33919[(7)]);
var state_33919__$1 = state_33919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33919__$1,(11),to,inst_33883);
} else {
if((state_val_33921 === (3))){
var inst_33905 = (state_33919[(2)]);
var state_33919__$1 = state_33919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33919__$1,inst_33905);
} else {
if((state_val_33921 === (12))){
var state_33919__$1 = state_33919;
var statearr_34016_36362 = state_33919__$1;
(statearr_34016_36362[(2)] = null);

(statearr_34016_36362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (2))){
var state_33919__$1 = state_33919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33919__$1,(4),from);
} else {
if((state_val_33921 === (11))){
var inst_33896 = (state_33919[(2)]);
var state_33919__$1 = state_33919;
if(cljs.core.truth_(inst_33896)){
var statearr_34021_36367 = state_33919__$1;
(statearr_34021_36367[(1)] = (12));

} else {
var statearr_34022_36368 = state_33919__$1;
(statearr_34022_36368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (9))){
var state_33919__$1 = state_33919;
var statearr_34023_36371 = state_33919__$1;
(statearr_34023_36371[(2)] = null);

(statearr_34023_36371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (5))){
var state_33919__$1 = state_33919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34027_36372 = state_33919__$1;
(statearr_34027_36372[(1)] = (8));

} else {
var statearr_34028_36373 = state_33919__$1;
(statearr_34028_36373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (14))){
var inst_33901 = (state_33919[(2)]);
var state_33919__$1 = state_33919;
var statearr_34031_36376 = state_33919__$1;
(statearr_34031_36376[(2)] = inst_33901);

(statearr_34031_36376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (10))){
var inst_33893 = (state_33919[(2)]);
var state_33919__$1 = state_33919;
var statearr_34035_36377 = state_33919__$1;
(statearr_34035_36377[(2)] = inst_33893);

(statearr_34035_36377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (8))){
var inst_33889 = cljs.core.async.close_BANG_(to);
var state_33919__$1 = state_33919;
var statearr_34036_36378 = state_33919__$1;
(statearr_34036_36378[(2)] = inst_33889);

(statearr_34036_36378[(1)] = (10));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_34041 = [null,null,null,null,null,null,null,null];
(statearr_34041[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_34041[(1)] = (1));

return statearr_34041;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_33919){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_33919);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34042){var ex__33193__auto__ = e34042;
var statearr_34043_36379 = state_33919;
(statearr_34043_36379[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_33919[(4)]))){
var statearr_34044_36380 = state_33919;
(statearr_34044_36380[(1)] = cljs.core.first((state_33919[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36381 = state_33919;
state_33919 = G__36381;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_33919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_33919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34045 = f__33476__auto__();
(statearr_34045[(6)] = c__33475__auto___36343);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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
var process = (function (p__34054){
var vec__34055 = p__34054;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(1),null);
var job = vec__34055;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33475__auto___36382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34066){
var state_val_34067 = (state_34066[(1)]);
if((state_val_34067 === (1))){
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34066__$1,(2),res,v);
} else {
if((state_val_34067 === (2))){
var inst_34062 = (state_34066[(2)]);
var inst_34063 = cljs.core.async.close_BANG_(res);
var state_34066__$1 = (function (){var statearr_34068 = state_34066;
(statearr_34068[(7)] = inst_34062);

return statearr_34068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34066__$1,inst_34063);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0 = (function (){
var statearr_34071 = [null,null,null,null,null,null,null,null];
(statearr_34071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__);

(statearr_34071[(1)] = (1));

return statearr_34071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1 = (function (state_34066){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34066);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34072){var ex__33193__auto__ = e34072;
var statearr_34073_36384 = state_34066;
(statearr_34073_36384[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34066[(4)]))){
var statearr_34074_36385 = state_34066;
(statearr_34074_36385[(1)] = cljs.core.first((state_34066[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36386 = state_34066;
state_34066 = G__36386;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = function(state_34066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1.call(this,state_34066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34077 = f__33476__auto__();
(statearr_34077[(6)] = c__33475__auto___36382);

return statearr_34077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34079){
var vec__34080 = p__34079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(1),null);
var job = vec__34080;
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
var n__4613__auto___36391 = n;
var __36392 = (0);
while(true){
if((__36392 < n__4613__auto___36391)){
var G__34084_36393 = type;
var G__34084_36394__$1 = (((G__34084_36393 instanceof cljs.core.Keyword))?G__34084_36393.fqn:null);
switch (G__34084_36394__$1) {
case "compute":
var c__33475__auto___36398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36392,c__33475__auto___36398,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async){
return (function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = ((function (__36392,c__33475__auto___36398,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async){
return (function (state_34097){
var state_val_34098 = (state_34097[(1)]);
if((state_val_34098 === (1))){
var state_34097__$1 = state_34097;
var statearr_34103_36400 = state_34097__$1;
(statearr_34103_36400[(2)] = null);

(statearr_34103_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (2))){
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34097__$1,(4),jobs);
} else {
if((state_val_34098 === (3))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34097__$1,inst_34095);
} else {
if((state_val_34098 === (4))){
var inst_34087 = (state_34097[(2)]);
var inst_34088 = process(inst_34087);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34088)){
var statearr_34108_36406 = state_34097__$1;
(statearr_34108_36406[(1)] = (5));

} else {
var statearr_34109_36407 = state_34097__$1;
(statearr_34109_36407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (5))){
var state_34097__$1 = state_34097;
var statearr_34112_36408 = state_34097__$1;
(statearr_34112_36408[(2)] = null);

(statearr_34112_36408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (6))){
var state_34097__$1 = state_34097;
var statearr_34114_36409 = state_34097__$1;
(statearr_34114_36409[(2)] = null);

(statearr_34114_36409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (7))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34115_36410 = state_34097__$1;
(statearr_34115_36410[(2)] = inst_34093);

(statearr_34115_36410[(1)] = (3));


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
});})(__36392,c__33475__auto___36398,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async))
;
return ((function (__36392,switch__33189__auto__,c__33475__auto___36398,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null];
(statearr_34116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1 = (function (state_34097){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34097);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34117){var ex__33193__auto__ = e34117;
var statearr_34118_36412 = state_34097;
(statearr_34118_36412[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34097[(4)]))){
var statearr_34119_36413 = state_34097;
(statearr_34119_36413[(1)] = cljs.core.first((state_34097[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36414 = state_34097;
state_34097 = G__36414;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__;
})()
;})(__36392,switch__33189__auto__,c__33475__auto___36398,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async))
})();
var state__33477__auto__ = (function (){var statearr_34122 = f__33476__auto__();
(statearr_34122[(6)] = c__33475__auto___36398);

return statearr_34122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
});})(__36392,c__33475__auto___36398,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async))
);


break;
case "async":
var c__33475__auto___36415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36392,c__33475__auto___36415,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async){
return (function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = ((function (__36392,c__33475__auto___36415,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async){
return (function (state_34138){
var state_val_34139 = (state_34138[(1)]);
if((state_val_34139 === (1))){
var state_34138__$1 = state_34138;
var statearr_34141_36416 = state_34138__$1;
(statearr_34141_36416[(2)] = null);

(statearr_34141_36416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (2))){
var state_34138__$1 = state_34138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34138__$1,(4),jobs);
} else {
if((state_val_34139 === (3))){
var inst_34135 = (state_34138[(2)]);
var state_34138__$1 = state_34138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34138__$1,inst_34135);
} else {
if((state_val_34139 === (4))){
var inst_34126 = (state_34138[(2)]);
var inst_34127 = async(inst_34126);
var state_34138__$1 = state_34138;
if(cljs.core.truth_(inst_34127)){
var statearr_34158_36417 = state_34138__$1;
(statearr_34158_36417[(1)] = (5));

} else {
var statearr_34159_36422 = state_34138__$1;
(statearr_34159_36422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (5))){
var state_34138__$1 = state_34138;
var statearr_34160_36423 = state_34138__$1;
(statearr_34160_36423[(2)] = null);

(statearr_34160_36423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (6))){
var state_34138__$1 = state_34138;
var statearr_34165_36428 = state_34138__$1;
(statearr_34165_36428[(2)] = null);

(statearr_34165_36428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (7))){
var inst_34132 = (state_34138[(2)]);
var state_34138__$1 = state_34138;
var statearr_34166_36433 = state_34138__$1;
(statearr_34166_36433[(2)] = inst_34132);

(statearr_34166_36433[(1)] = (3));


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
});})(__36392,c__33475__auto___36415,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async))
;
return ((function (__36392,switch__33189__auto__,c__33475__auto___36415,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0 = (function (){
var statearr_34167 = [null,null,null,null,null,null,null];
(statearr_34167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__);

(statearr_34167[(1)] = (1));

return statearr_34167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1 = (function (state_34138){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34138);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34168){var ex__33193__auto__ = e34168;
var statearr_34169_36435 = state_34138;
(statearr_34169_36435[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34138[(4)]))){
var statearr_34170_36436 = state_34138;
(statearr_34170_36436[(1)] = cljs.core.first((state_34138[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36437 = state_34138;
state_34138 = G__36437;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = function(state_34138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1.call(this,state_34138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__;
})()
;})(__36392,switch__33189__auto__,c__33475__auto___36415,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async))
})();
var state__33477__auto__ = (function (){var statearr_34172 = f__33476__auto__();
(statearr_34172[(6)] = c__33475__auto___36415);

return statearr_34172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
});})(__36392,c__33475__auto___36415,G__34084_36393,G__34084_36394__$1,n__4613__auto___36391,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34084_36394__$1)].join('')));

}

var G__36440 = (__36392 + (1));
__36392 = G__36440;
continue;
} else {
}
break;
}

var c__33475__auto___36441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34199){
var state_val_34200 = (state_34199[(1)]);
if((state_val_34200 === (7))){
var inst_34194 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34215_36442 = state_34199__$1;
(statearr_34215_36442[(2)] = inst_34194);

(statearr_34215_36442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (1))){
var state_34199__$1 = state_34199;
var statearr_34216_36443 = state_34199__$1;
(statearr_34216_36443[(2)] = null);

(statearr_34216_36443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (4))){
var inst_34176 = (state_34199[(7)]);
var inst_34176__$1 = (state_34199[(2)]);
var inst_34177 = (inst_34176__$1 == null);
var state_34199__$1 = (function (){var statearr_34220 = state_34199;
(statearr_34220[(7)] = inst_34176__$1);

return statearr_34220;
})();
if(cljs.core.truth_(inst_34177)){
var statearr_34228_36445 = state_34199__$1;
(statearr_34228_36445[(1)] = (5));

} else {
var statearr_34229_36447 = state_34199__$1;
(statearr_34229_36447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (6))){
var inst_34176 = (state_34199[(7)]);
var inst_34184 = (state_34199[(8)]);
var inst_34184__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34186 = [inst_34176,inst_34184__$1];
var inst_34187 = (new cljs.core.PersistentVector(null,2,(5),inst_34185,inst_34186,null));
var state_34199__$1 = (function (){var statearr_34232 = state_34199;
(statearr_34232[(8)] = inst_34184__$1);

return statearr_34232;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34199__$1,(8),jobs,inst_34187);
} else {
if((state_val_34200 === (3))){
var inst_34196 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34199__$1,inst_34196);
} else {
if((state_val_34200 === (2))){
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34199__$1,(4),from);
} else {
if((state_val_34200 === (9))){
var inst_34191 = (state_34199[(2)]);
var state_34199__$1 = (function (){var statearr_34234 = state_34199;
(statearr_34234[(9)] = inst_34191);

return statearr_34234;
})();
var statearr_34236_36449 = state_34199__$1;
(statearr_34236_36449[(2)] = null);

(statearr_34236_36449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (5))){
var inst_34179 = cljs.core.async.close_BANG_(jobs);
var state_34199__$1 = state_34199;
var statearr_34237_36450 = state_34199__$1;
(statearr_34237_36450[(2)] = inst_34179);

(statearr_34237_36450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (8))){
var inst_34184 = (state_34199[(8)]);
var inst_34189 = (state_34199[(2)]);
var state_34199__$1 = (function (){var statearr_34239 = state_34199;
(statearr_34239[(10)] = inst_34189);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34199__$1,(9),results,inst_34184);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0 = (function (){
var statearr_34243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__);

(statearr_34243[(1)] = (1));

return statearr_34243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1 = (function (state_34199){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34199);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34245){var ex__33193__auto__ = e34245;
var statearr_34247_36453 = state_34199;
(statearr_34247_36453[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34199[(4)]))){
var statearr_34248_36454 = state_34199;
(statearr_34248_36454[(1)] = cljs.core.first((state_34199[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36455 = state_34199;
state_34199 = G__36455;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = function(state_34199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1.call(this,state_34199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34254 = f__33476__auto__();
(statearr_34254[(6)] = c__33475__auto___36441);

return statearr_34254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


var c__33475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34298){
var state_val_34300 = (state_34298[(1)]);
if((state_val_34300 === (7))){
var inst_34293 = (state_34298[(2)]);
var state_34298__$1 = state_34298;
var statearr_34303_36456 = state_34298__$1;
(statearr_34303_36456[(2)] = inst_34293);

(statearr_34303_36456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (20))){
var state_34298__$1 = state_34298;
var statearr_34314_36457 = state_34298__$1;
(statearr_34314_36457[(2)] = null);

(statearr_34314_36457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (1))){
var state_34298__$1 = state_34298;
var statearr_34315_36458 = state_34298__$1;
(statearr_34315_36458[(2)] = null);

(statearr_34315_36458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (4))){
var inst_34258 = (state_34298[(7)]);
var inst_34258__$1 = (state_34298[(2)]);
var inst_34259 = (inst_34258__$1 == null);
var state_34298__$1 = (function (){var statearr_34318 = state_34298;
(statearr_34318[(7)] = inst_34258__$1);

return statearr_34318;
})();
if(cljs.core.truth_(inst_34259)){
var statearr_34319_36462 = state_34298__$1;
(statearr_34319_36462[(1)] = (5));

} else {
var statearr_34321_36463 = state_34298__$1;
(statearr_34321_36463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (15))){
var inst_34271 = (state_34298[(8)]);
var state_34298__$1 = state_34298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34298__$1,(18),to,inst_34271);
} else {
if((state_val_34300 === (21))){
var inst_34288 = (state_34298[(2)]);
var state_34298__$1 = state_34298;
var statearr_34328_36466 = state_34298__$1;
(statearr_34328_36466[(2)] = inst_34288);

(statearr_34328_36466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (13))){
var inst_34290 = (state_34298[(2)]);
var state_34298__$1 = (function (){var statearr_34329 = state_34298;
(statearr_34329[(9)] = inst_34290);

return statearr_34329;
})();
var statearr_34332_36468 = state_34298__$1;
(statearr_34332_36468[(2)] = null);

(statearr_34332_36468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (6))){
var inst_34258 = (state_34298[(7)]);
var state_34298__$1 = state_34298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34298__$1,(11),inst_34258);
} else {
if((state_val_34300 === (17))){
var inst_34282 = (state_34298[(2)]);
var state_34298__$1 = state_34298;
if(cljs.core.truth_(inst_34282)){
var statearr_34335_36473 = state_34298__$1;
(statearr_34335_36473[(1)] = (19));

} else {
var statearr_34338_36474 = state_34298__$1;
(statearr_34338_36474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (3))){
var inst_34295 = (state_34298[(2)]);
var state_34298__$1 = state_34298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34298__$1,inst_34295);
} else {
if((state_val_34300 === (12))){
var inst_34268 = (state_34298[(10)]);
var state_34298__$1 = state_34298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34298__$1,(14),inst_34268);
} else {
if((state_val_34300 === (2))){
var state_34298__$1 = state_34298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34298__$1,(4),results);
} else {
if((state_val_34300 === (19))){
var state_34298__$1 = state_34298;
var statearr_34344_36477 = state_34298__$1;
(statearr_34344_36477[(2)] = null);

(statearr_34344_36477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (11))){
var inst_34268 = (state_34298[(2)]);
var state_34298__$1 = (function (){var statearr_34347 = state_34298;
(statearr_34347[(10)] = inst_34268);

return statearr_34347;
})();
var statearr_34348_36479 = state_34298__$1;
(statearr_34348_36479[(2)] = null);

(statearr_34348_36479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (9))){
var state_34298__$1 = state_34298;
var statearr_34351_36480 = state_34298__$1;
(statearr_34351_36480[(2)] = null);

(statearr_34351_36480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (5))){
var state_34298__$1 = state_34298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34356_36484 = state_34298__$1;
(statearr_34356_36484[(1)] = (8));

} else {
var statearr_34357_36486 = state_34298__$1;
(statearr_34357_36486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (14))){
var inst_34271 = (state_34298[(8)]);
var inst_34271__$1 = (state_34298[(2)]);
var inst_34275 = (inst_34271__$1 == null);
var inst_34276 = cljs.core.not(inst_34275);
var state_34298__$1 = (function (){var statearr_34359 = state_34298;
(statearr_34359[(8)] = inst_34271__$1);

return statearr_34359;
})();
if(inst_34276){
var statearr_34364_36488 = state_34298__$1;
(statearr_34364_36488[(1)] = (15));

} else {
var statearr_34367_36489 = state_34298__$1;
(statearr_34367_36489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (16))){
var state_34298__$1 = state_34298;
var statearr_34369_36490 = state_34298__$1;
(statearr_34369_36490[(2)] = false);

(statearr_34369_36490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (10))){
var inst_34265 = (state_34298[(2)]);
var state_34298__$1 = state_34298;
var statearr_34370_36492 = state_34298__$1;
(statearr_34370_36492[(2)] = inst_34265);

(statearr_34370_36492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (18))){
var inst_34279 = (state_34298[(2)]);
var state_34298__$1 = state_34298;
var statearr_34373_36493 = state_34298__$1;
(statearr_34373_36493[(2)] = inst_34279);

(statearr_34373_36493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34300 === (8))){
var inst_34262 = cljs.core.async.close_BANG_(to);
var state_34298__$1 = state_34298;
var statearr_34374_36494 = state_34298__$1;
(statearr_34374_36494[(2)] = inst_34262);

(statearr_34374_36494[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0 = (function (){
var statearr_34378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__);

(statearr_34378[(1)] = (1));

return statearr_34378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1 = (function (state_34298){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34298);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34379){var ex__33193__auto__ = e34379;
var statearr_34381_36496 = state_34298;
(statearr_34381_36496[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34298[(4)]))){
var statearr_34384_36498 = state_34298;
(statearr_34384_36498[(1)] = cljs.core.first((state_34298[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36500 = state_34298;
state_34298 = G__36500;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__ = function(state_34298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1.call(this,state_34298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34385 = f__33476__auto__();
(statearr_34385[(6)] = c__33475__auto__);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));

return c__33475__auto__;
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
var G__34389 = arguments.length;
switch (G__34389) {
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
var G__34410 = arguments.length;
switch (G__34410) {
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
var G__34412 = arguments.length;
switch (G__34412) {
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
var c__33475__auto___36520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34443){
var state_val_34444 = (state_34443[(1)]);
if((state_val_34444 === (7))){
var inst_34437 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34445_36522 = state_34443__$1;
(statearr_34445_36522[(2)] = inst_34437);

(statearr_34445_36522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (1))){
var state_34443__$1 = state_34443;
var statearr_34446_36523 = state_34443__$1;
(statearr_34446_36523[(2)] = null);

(statearr_34446_36523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (4))){
var inst_34415 = (state_34443[(7)]);
var inst_34415__$1 = (state_34443[(2)]);
var inst_34419 = (inst_34415__$1 == null);
var state_34443__$1 = (function (){var statearr_34448 = state_34443;
(statearr_34448[(7)] = inst_34415__$1);

return statearr_34448;
})();
if(cljs.core.truth_(inst_34419)){
var statearr_34449_36524 = state_34443__$1;
(statearr_34449_36524[(1)] = (5));

} else {
var statearr_34450_36525 = state_34443__$1;
(statearr_34450_36525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (13))){
var state_34443__$1 = state_34443;
var statearr_34451_36526 = state_34443__$1;
(statearr_34451_36526[(2)] = null);

(statearr_34451_36526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (6))){
var inst_34415 = (state_34443[(7)]);
var inst_34424 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34415) : p.call(null,inst_34415));
var state_34443__$1 = state_34443;
if(cljs.core.truth_(inst_34424)){
var statearr_34452_36527 = state_34443__$1;
(statearr_34452_36527[(1)] = (9));

} else {
var statearr_34453_36528 = state_34443__$1;
(statearr_34453_36528[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (3))){
var inst_34440 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34443__$1,inst_34440);
} else {
if((state_val_34444 === (12))){
var state_34443__$1 = state_34443;
var statearr_34455_36529 = state_34443__$1;
(statearr_34455_36529[(2)] = null);

(statearr_34455_36529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (2))){
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34443__$1,(4),ch);
} else {
if((state_val_34444 === (11))){
var inst_34415 = (state_34443[(7)]);
var inst_34428 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34443__$1,(8),inst_34428,inst_34415);
} else {
if((state_val_34444 === (9))){
var state_34443__$1 = state_34443;
var statearr_34459_36534 = state_34443__$1;
(statearr_34459_36534[(2)] = tc);

(statearr_34459_36534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (5))){
var inst_34421 = cljs.core.async.close_BANG_(tc);
var inst_34422 = cljs.core.async.close_BANG_(fc);
var state_34443__$1 = (function (){var statearr_34460 = state_34443;
(statearr_34460[(8)] = inst_34421);

return statearr_34460;
})();
var statearr_34462_36536 = state_34443__$1;
(statearr_34462_36536[(2)] = inst_34422);

(statearr_34462_36536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (14))){
var inst_34435 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34463_36538 = state_34443__$1;
(statearr_34463_36538[(2)] = inst_34435);

(statearr_34463_36538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (10))){
var state_34443__$1 = state_34443;
var statearr_34464_36539 = state_34443__$1;
(statearr_34464_36539[(2)] = fc);

(statearr_34464_36539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (8))){
var inst_34430 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
if(cljs.core.truth_(inst_34430)){
var statearr_34466_36540 = state_34443__$1;
(statearr_34466_36540[(1)] = (12));

} else {
var statearr_34467_36541 = state_34443__$1;
(statearr_34467_36541[(1)] = (13));

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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_34469 = [null,null,null,null,null,null,null,null,null];
(statearr_34469[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_34469[(1)] = (1));

return statearr_34469;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_34443){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34443);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34470){var ex__33193__auto__ = e34470;
var statearr_34471_36542 = state_34443;
(statearr_34471_36542[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34443[(4)]))){
var statearr_34472_36543 = state_34443;
(statearr_34472_36543[(1)] = cljs.core.first((state_34443[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36544 = state_34443;
state_34443 = G__36544;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_34443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_34443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34473 = f__33476__auto__();
(statearr_34473[(6)] = c__33475__auto___36520);

return statearr_34473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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
var c__33475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34502){
var state_val_34503 = (state_34502[(1)]);
if((state_val_34503 === (7))){
var inst_34498 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
var statearr_34504_36553 = state_34502__$1;
(statearr_34504_36553[(2)] = inst_34498);

(statearr_34504_36553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (1))){
var inst_34480 = init;
var inst_34481 = inst_34480;
var state_34502__$1 = (function (){var statearr_34505 = state_34502;
(statearr_34505[(7)] = inst_34481);

return statearr_34505;
})();
var statearr_34506_36555 = state_34502__$1;
(statearr_34506_36555[(2)] = null);

(statearr_34506_36555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (4))){
var inst_34484 = (state_34502[(8)]);
var inst_34484__$1 = (state_34502[(2)]);
var inst_34485 = (inst_34484__$1 == null);
var state_34502__$1 = (function (){var statearr_34507 = state_34502;
(statearr_34507[(8)] = inst_34484__$1);

return statearr_34507;
})();
if(cljs.core.truth_(inst_34485)){
var statearr_34508_36556 = state_34502__$1;
(statearr_34508_36556[(1)] = (5));

} else {
var statearr_34509_36557 = state_34502__$1;
(statearr_34509_36557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (6))){
var inst_34488 = (state_34502[(9)]);
var inst_34484 = (state_34502[(8)]);
var inst_34481 = (state_34502[(7)]);
var inst_34488__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34481,inst_34484) : f.call(null,inst_34481,inst_34484));
var inst_34489 = cljs.core.reduced_QMARK_(inst_34488__$1);
var state_34502__$1 = (function (){var statearr_34518 = state_34502;
(statearr_34518[(9)] = inst_34488__$1);

return statearr_34518;
})();
if(inst_34489){
var statearr_34520_36561 = state_34502__$1;
(statearr_34520_36561[(1)] = (8));

} else {
var statearr_34521_36562 = state_34502__$1;
(statearr_34521_36562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (3))){
var inst_34500 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34502__$1,inst_34500);
} else {
if((state_val_34503 === (2))){
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34502__$1,(4),ch);
} else {
if((state_val_34503 === (9))){
var inst_34488 = (state_34502[(9)]);
var inst_34481 = inst_34488;
var state_34502__$1 = (function (){var statearr_34522 = state_34502;
(statearr_34522[(7)] = inst_34481);

return statearr_34522;
})();
var statearr_34523_36568 = state_34502__$1;
(statearr_34523_36568[(2)] = null);

(statearr_34523_36568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (5))){
var inst_34481 = (state_34502[(7)]);
var state_34502__$1 = state_34502;
var statearr_34524_36569 = state_34502__$1;
(statearr_34524_36569[(2)] = inst_34481);

(statearr_34524_36569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (10))){
var inst_34495 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
var statearr_34525_36573 = state_34502__$1;
(statearr_34525_36573[(2)] = inst_34495);

(statearr_34525_36573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (8))){
var inst_34488 = (state_34502[(9)]);
var inst_34491 = cljs.core.deref(inst_34488);
var state_34502__$1 = state_34502;
var statearr_34526_36574 = state_34502__$1;
(statearr_34526_36574[(2)] = inst_34491);

(statearr_34526_36574[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33190__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33190__auto____0 = (function (){
var statearr_34527 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34527[(0)] = cljs$core$async$reduce_$_state_machine__33190__auto__);

(statearr_34527[(1)] = (1));

return statearr_34527;
});
var cljs$core$async$reduce_$_state_machine__33190__auto____1 = (function (state_34502){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34502);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34529){var ex__33193__auto__ = e34529;
var statearr_34530_36579 = state_34502;
(statearr_34530_36579[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34502[(4)]))){
var statearr_34532_36583 = state_34502;
(statearr_34532_36583[(1)] = cljs.core.first((state_34502[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36585 = state_34502;
state_34502 = G__36585;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33190__auto__ = function(state_34502){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33190__auto____1.call(this,state_34502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33190__auto____0;
cljs$core$async$reduce_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33190__auto____1;
return cljs$core$async$reduce_$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34533 = f__33476__auto__();
(statearr_34533[(6)] = c__33475__auto__);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));

return c__33475__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34541){
var state_val_34542 = (state_34541[(1)]);
if((state_val_34542 === (1))){
var inst_34536 = cljs.core.async.reduce(f__$1,init,ch);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34541__$1,(2),inst_34536);
} else {
if((state_val_34542 === (2))){
var inst_34538 = (state_34541[(2)]);
var inst_34539 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34538) : f__$1.call(null,inst_34538));
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34541__$1,inst_34539);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33190__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33190__auto____0 = (function (){
var statearr_34543 = [null,null,null,null,null,null,null];
(statearr_34543[(0)] = cljs$core$async$transduce_$_state_machine__33190__auto__);

(statearr_34543[(1)] = (1));

return statearr_34543;
});
var cljs$core$async$transduce_$_state_machine__33190__auto____1 = (function (state_34541){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34541);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34548){var ex__33193__auto__ = e34548;
var statearr_34549_36589 = state_34541;
(statearr_34549_36589[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34541[(4)]))){
var statearr_34550_36593 = state_34541;
(statearr_34550_36593[(1)] = cljs.core.first((state_34541[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36595 = state_34541;
state_34541 = G__36595;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33190__auto__ = function(state_34541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33190__auto____1.call(this,state_34541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33190__auto____0;
cljs$core$async$transduce_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33190__auto____1;
return cljs$core$async$transduce_$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34551 = f__33476__auto__();
(statearr_34551[(6)] = c__33475__auto__);

return statearr_34551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));

return c__33475__auto__;
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
var G__34556 = arguments.length;
switch (G__34556) {
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
var c__33475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (7))){
var inst_34564 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34584_36600 = state_34582__$1;
(statearr_34584_36600[(2)] = inst_34564);

(statearr_34584_36600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (1))){
var inst_34558 = cljs.core.seq(coll);
var inst_34559 = inst_34558;
var state_34582__$1 = (function (){var statearr_34586 = state_34582;
(statearr_34586[(7)] = inst_34559);

return statearr_34586;
})();
var statearr_34587_36601 = state_34582__$1;
(statearr_34587_36601[(2)] = null);

(statearr_34587_36601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (4))){
var inst_34559 = (state_34582[(7)]);
var inst_34562 = cljs.core.first(inst_34559);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34582__$1,(7),ch,inst_34562);
} else {
if((state_val_34583 === (13))){
var inst_34576 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34589_36603 = state_34582__$1;
(statearr_34589_36603[(2)] = inst_34576);

(statearr_34589_36603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (6))){
var inst_34567 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
if(cljs.core.truth_(inst_34567)){
var statearr_34594_36604 = state_34582__$1;
(statearr_34594_36604[(1)] = (8));

} else {
var statearr_34595_36605 = state_34582__$1;
(statearr_34595_36605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (3))){
var inst_34580 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34582__$1,inst_34580);
} else {
if((state_val_34583 === (12))){
var state_34582__$1 = state_34582;
var statearr_34604_36606 = state_34582__$1;
(statearr_34604_36606[(2)] = null);

(statearr_34604_36606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (2))){
var inst_34559 = (state_34582[(7)]);
var state_34582__$1 = state_34582;
if(cljs.core.truth_(inst_34559)){
var statearr_34605_36607 = state_34582__$1;
(statearr_34605_36607[(1)] = (4));

} else {
var statearr_34606_36608 = state_34582__$1;
(statearr_34606_36608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (11))){
var inst_34573 = cljs.core.async.close_BANG_(ch);
var state_34582__$1 = state_34582;
var statearr_34607_36609 = state_34582__$1;
(statearr_34607_36609[(2)] = inst_34573);

(statearr_34607_36609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (9))){
var state_34582__$1 = state_34582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34608_36610 = state_34582__$1;
(statearr_34608_36610[(1)] = (11));

} else {
var statearr_34609_36611 = state_34582__$1;
(statearr_34609_36611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (5))){
var inst_34559 = (state_34582[(7)]);
var state_34582__$1 = state_34582;
var statearr_34610_36612 = state_34582__$1;
(statearr_34610_36612[(2)] = inst_34559);

(statearr_34610_36612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (10))){
var inst_34578 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34611_36613 = state_34582__$1;
(statearr_34611_36613[(2)] = inst_34578);

(statearr_34611_36613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (8))){
var inst_34559 = (state_34582[(7)]);
var inst_34569 = cljs.core.next(inst_34559);
var inst_34559__$1 = inst_34569;
var state_34582__$1 = (function (){var statearr_34612 = state_34582;
(statearr_34612[(7)] = inst_34559__$1);

return statearr_34612;
})();
var statearr_34613_36614 = state_34582__$1;
(statearr_34613_36614[(2)] = null);

(statearr_34613_36614[(1)] = (2));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_34614 = [null,null,null,null,null,null,null,null];
(statearr_34614[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_34614[(1)] = (1));

return statearr_34614;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_34582){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34582);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34615){var ex__33193__auto__ = e34615;
var statearr_34616_36617 = state_34582;
(statearr_34616_36617[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34582[(4)]))){
var statearr_34617_36618 = state_34582;
(statearr_34617_36618[(1)] = cljs.core.first((state_34582[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36619 = state_34582;
state_34582 = G__36619;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34618 = f__33476__auto__();
(statearr_34618[(6)] = c__33475__auto__);

return statearr_34618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));

return c__33475__auto__;
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
var G__34624 = arguments.length;
switch (G__34624) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36621 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_36621(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36622 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_36622(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36626 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_36626(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36633 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_36633(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34643 = (function (ch,cs,meta34644){
this.ch = ch;
this.cs = cs;
this.meta34644 = meta34644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34645,meta34644__$1){
var self__ = this;
var _34645__$1 = this;
return (new cljs.core.async.t_cljs$core$async34643(self__.ch,self__.cs,meta34644__$1));
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34645){
var self__ = this;
var _34645__$1 = this;
return self__.meta34644;
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34644","meta34644",531098110,null)], null);
}));

(cljs.core.async.t_cljs$core$async34643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34643");

(cljs.core.async.t_cljs$core$async34643.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34643.
 */
cljs.core.async.__GT_t_cljs$core$async34643 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34643(ch__$1,cs__$1,meta34644){
return (new cljs.core.async.t_cljs$core$async34643(ch__$1,cs__$1,meta34644));
});

}

return (new cljs.core.async.t_cljs$core$async34643(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33475__auto___36637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_34782){
var state_val_34783 = (state_34782[(1)]);
if((state_val_34783 === (7))){
var inst_34778 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34784_36639 = state_34782__$1;
(statearr_34784_36639[(2)] = inst_34778);

(statearr_34784_36639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (20))){
var inst_34683 = (state_34782[(7)]);
var inst_34695 = cljs.core.first(inst_34683);
var inst_34696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34695,(0),null);
var inst_34697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34695,(1),null);
var state_34782__$1 = (function (){var statearr_34786 = state_34782;
(statearr_34786[(8)] = inst_34696);

return statearr_34786;
})();
if(cljs.core.truth_(inst_34697)){
var statearr_34788_36644 = state_34782__$1;
(statearr_34788_36644[(1)] = (22));

} else {
var statearr_34789_36645 = state_34782__$1;
(statearr_34789_36645[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (27))){
var inst_34727 = (state_34782[(9)]);
var inst_34725 = (state_34782[(10)]);
var inst_34732 = (state_34782[(11)]);
var inst_34652 = (state_34782[(12)]);
var inst_34732__$1 = cljs.core._nth(inst_34725,inst_34727);
var inst_34733 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34732__$1,inst_34652,done);
var state_34782__$1 = (function (){var statearr_34792 = state_34782;
(statearr_34792[(11)] = inst_34732__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34733)){
var statearr_34793_36651 = state_34782__$1;
(statearr_34793_36651[(1)] = (30));

} else {
var statearr_34795_36652 = state_34782__$1;
(statearr_34795_36652[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (1))){
var state_34782__$1 = state_34782;
var statearr_34797_36653 = state_34782__$1;
(statearr_34797_36653[(2)] = null);

(statearr_34797_36653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (24))){
var inst_34683 = (state_34782[(7)]);
var inst_34702 = (state_34782[(2)]);
var inst_34703 = cljs.core.next(inst_34683);
var inst_34661 = inst_34703;
var inst_34662 = null;
var inst_34663 = (0);
var inst_34664 = (0);
var state_34782__$1 = (function (){var statearr_34798 = state_34782;
(statearr_34798[(13)] = inst_34663);

(statearr_34798[(14)] = inst_34664);

(statearr_34798[(15)] = inst_34702);

(statearr_34798[(16)] = inst_34661);

(statearr_34798[(17)] = inst_34662);

return statearr_34798;
})();
var statearr_34799_36661 = state_34782__$1;
(statearr_34799_36661[(2)] = null);

(statearr_34799_36661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (39))){
var state_34782__$1 = state_34782;
var statearr_34803_36663 = state_34782__$1;
(statearr_34803_36663[(2)] = null);

(statearr_34803_36663[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (4))){
var inst_34652 = (state_34782[(12)]);
var inst_34652__$1 = (state_34782[(2)]);
var inst_34653 = (inst_34652__$1 == null);
var state_34782__$1 = (function (){var statearr_34804 = state_34782;
(statearr_34804[(12)] = inst_34652__$1);

return statearr_34804;
})();
if(cljs.core.truth_(inst_34653)){
var statearr_34805_36671 = state_34782__$1;
(statearr_34805_36671[(1)] = (5));

} else {
var statearr_34807_36672 = state_34782__$1;
(statearr_34807_36672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (15))){
var inst_34663 = (state_34782[(13)]);
var inst_34664 = (state_34782[(14)]);
var inst_34661 = (state_34782[(16)]);
var inst_34662 = (state_34782[(17)]);
var inst_34679 = (state_34782[(2)]);
var inst_34680 = (inst_34664 + (1));
var tmp34800 = inst_34663;
var tmp34801 = inst_34661;
var tmp34802 = inst_34662;
var inst_34661__$1 = tmp34801;
var inst_34662__$1 = tmp34802;
var inst_34663__$1 = tmp34800;
var inst_34664__$1 = inst_34680;
var state_34782__$1 = (function (){var statearr_34808 = state_34782;
(statearr_34808[(13)] = inst_34663__$1);

(statearr_34808[(18)] = inst_34679);

(statearr_34808[(14)] = inst_34664__$1);

(statearr_34808[(16)] = inst_34661__$1);

(statearr_34808[(17)] = inst_34662__$1);

return statearr_34808;
})();
var statearr_34809_36673 = state_34782__$1;
(statearr_34809_36673[(2)] = null);

(statearr_34809_36673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (21))){
var inst_34706 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34814_36674 = state_34782__$1;
(statearr_34814_36674[(2)] = inst_34706);

(statearr_34814_36674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (31))){
var inst_34732 = (state_34782[(11)]);
var inst_34736 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34732);
var state_34782__$1 = state_34782;
var statearr_34815_36675 = state_34782__$1;
(statearr_34815_36675[(2)] = inst_34736);

(statearr_34815_36675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (32))){
var inst_34727 = (state_34782[(9)]);
var inst_34725 = (state_34782[(10)]);
var inst_34724 = (state_34782[(19)]);
var inst_34726 = (state_34782[(20)]);
var inst_34738 = (state_34782[(2)]);
var inst_34739 = (inst_34727 + (1));
var tmp34811 = inst_34725;
var tmp34812 = inst_34724;
var tmp34813 = inst_34726;
var inst_34724__$1 = tmp34812;
var inst_34725__$1 = tmp34811;
var inst_34726__$1 = tmp34813;
var inst_34727__$1 = inst_34739;
var state_34782__$1 = (function (){var statearr_34819 = state_34782;
(statearr_34819[(9)] = inst_34727__$1);

(statearr_34819[(10)] = inst_34725__$1);

(statearr_34819[(19)] = inst_34724__$1);

(statearr_34819[(20)] = inst_34726__$1);

(statearr_34819[(21)] = inst_34738);

return statearr_34819;
})();
var statearr_34820_36676 = state_34782__$1;
(statearr_34820_36676[(2)] = null);

(statearr_34820_36676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (40))){
var inst_34751 = (state_34782[(22)]);
var inst_34755 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34751);
var state_34782__$1 = state_34782;
var statearr_34822_36678 = state_34782__$1;
(statearr_34822_36678[(2)] = inst_34755);

(statearr_34822_36678[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (33))){
var inst_34742 = (state_34782[(23)]);
var inst_34744 = cljs.core.chunked_seq_QMARK_(inst_34742);
var state_34782__$1 = state_34782;
if(inst_34744){
var statearr_34831_36679 = state_34782__$1;
(statearr_34831_36679[(1)] = (36));

} else {
var statearr_34833_36686 = state_34782__$1;
(statearr_34833_36686[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (13))){
var inst_34673 = (state_34782[(24)]);
var inst_34676 = cljs.core.async.close_BANG_(inst_34673);
var state_34782__$1 = state_34782;
var statearr_34835_36687 = state_34782__$1;
(statearr_34835_36687[(2)] = inst_34676);

(statearr_34835_36687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (22))){
var inst_34696 = (state_34782[(8)]);
var inst_34699 = cljs.core.async.close_BANG_(inst_34696);
var state_34782__$1 = state_34782;
var statearr_34837_36688 = state_34782__$1;
(statearr_34837_36688[(2)] = inst_34699);

(statearr_34837_36688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (36))){
var inst_34742 = (state_34782[(23)]);
var inst_34746 = cljs.core.chunk_first(inst_34742);
var inst_34747 = cljs.core.chunk_rest(inst_34742);
var inst_34748 = cljs.core.count(inst_34746);
var inst_34724 = inst_34747;
var inst_34725 = inst_34746;
var inst_34726 = inst_34748;
var inst_34727 = (0);
var state_34782__$1 = (function (){var statearr_34839 = state_34782;
(statearr_34839[(9)] = inst_34727);

(statearr_34839[(10)] = inst_34725);

(statearr_34839[(19)] = inst_34724);

(statearr_34839[(20)] = inst_34726);

return statearr_34839;
})();
var statearr_34840_36689 = state_34782__$1;
(statearr_34840_36689[(2)] = null);

(statearr_34840_36689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (41))){
var inst_34742 = (state_34782[(23)]);
var inst_34757 = (state_34782[(2)]);
var inst_34758 = cljs.core.next(inst_34742);
var inst_34724 = inst_34758;
var inst_34725 = null;
var inst_34726 = (0);
var inst_34727 = (0);
var state_34782__$1 = (function (){var statearr_34846 = state_34782;
(statearr_34846[(9)] = inst_34727);

(statearr_34846[(10)] = inst_34725);

(statearr_34846[(19)] = inst_34724);

(statearr_34846[(20)] = inst_34726);

(statearr_34846[(25)] = inst_34757);

return statearr_34846;
})();
var statearr_34850_36693 = state_34782__$1;
(statearr_34850_36693[(2)] = null);

(statearr_34850_36693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (43))){
var state_34782__$1 = state_34782;
var statearr_34851_36695 = state_34782__$1;
(statearr_34851_36695[(2)] = null);

(statearr_34851_36695[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (29))){
var inst_34766 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34852_36697 = state_34782__$1;
(statearr_34852_36697[(2)] = inst_34766);

(statearr_34852_36697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (44))){
var inst_34775 = (state_34782[(2)]);
var state_34782__$1 = (function (){var statearr_34853 = state_34782;
(statearr_34853[(26)] = inst_34775);

return statearr_34853;
})();
var statearr_34854_36698 = state_34782__$1;
(statearr_34854_36698[(2)] = null);

(statearr_34854_36698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (6))){
var inst_34716 = (state_34782[(27)]);
var inst_34715 = cljs.core.deref(cs);
var inst_34716__$1 = cljs.core.keys(inst_34715);
var inst_34717 = cljs.core.count(inst_34716__$1);
var inst_34718 = cljs.core.reset_BANG_(dctr,inst_34717);
var inst_34723 = cljs.core.seq(inst_34716__$1);
var inst_34724 = inst_34723;
var inst_34725 = null;
var inst_34726 = (0);
var inst_34727 = (0);
var state_34782__$1 = (function (){var statearr_34855 = state_34782;
(statearr_34855[(9)] = inst_34727);

(statearr_34855[(10)] = inst_34725);

(statearr_34855[(19)] = inst_34724);

(statearr_34855[(28)] = inst_34718);

(statearr_34855[(27)] = inst_34716__$1);

(statearr_34855[(20)] = inst_34726);

return statearr_34855;
})();
var statearr_34856_36707 = state_34782__$1;
(statearr_34856_36707[(2)] = null);

(statearr_34856_36707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (28))){
var inst_34724 = (state_34782[(19)]);
var inst_34742 = (state_34782[(23)]);
var inst_34742__$1 = cljs.core.seq(inst_34724);
var state_34782__$1 = (function (){var statearr_34857 = state_34782;
(statearr_34857[(23)] = inst_34742__$1);

return statearr_34857;
})();
if(inst_34742__$1){
var statearr_34858_36709 = state_34782__$1;
(statearr_34858_36709[(1)] = (33));

} else {
var statearr_34859_36712 = state_34782__$1;
(statearr_34859_36712[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (25))){
var inst_34727 = (state_34782[(9)]);
var inst_34726 = (state_34782[(20)]);
var inst_34729 = (inst_34727 < inst_34726);
var inst_34730 = inst_34729;
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34730)){
var statearr_34860_36714 = state_34782__$1;
(statearr_34860_36714[(1)] = (27));

} else {
var statearr_34861_36715 = state_34782__$1;
(statearr_34861_36715[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (34))){
var state_34782__$1 = state_34782;
var statearr_34862_36716 = state_34782__$1;
(statearr_34862_36716[(2)] = null);

(statearr_34862_36716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (17))){
var state_34782__$1 = state_34782;
var statearr_34864_36717 = state_34782__$1;
(statearr_34864_36717[(2)] = null);

(statearr_34864_36717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (3))){
var inst_34780 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34782__$1,inst_34780);
} else {
if((state_val_34783 === (12))){
var inst_34711 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34866_36718 = state_34782__$1;
(statearr_34866_36718[(2)] = inst_34711);

(statearr_34866_36718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (2))){
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34782__$1,(4),ch);
} else {
if((state_val_34783 === (23))){
var state_34782__$1 = state_34782;
var statearr_34867_36719 = state_34782__$1;
(statearr_34867_36719[(2)] = null);

(statearr_34867_36719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (35))){
var inst_34764 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34868_36721 = state_34782__$1;
(statearr_34868_36721[(2)] = inst_34764);

(statearr_34868_36721[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (19))){
var inst_34683 = (state_34782[(7)]);
var inst_34687 = cljs.core.chunk_first(inst_34683);
var inst_34688 = cljs.core.chunk_rest(inst_34683);
var inst_34689 = cljs.core.count(inst_34687);
var inst_34661 = inst_34688;
var inst_34662 = inst_34687;
var inst_34663 = inst_34689;
var inst_34664 = (0);
var state_34782__$1 = (function (){var statearr_34869 = state_34782;
(statearr_34869[(13)] = inst_34663);

(statearr_34869[(14)] = inst_34664);

(statearr_34869[(16)] = inst_34661);

(statearr_34869[(17)] = inst_34662);

return statearr_34869;
})();
var statearr_34870_36730 = state_34782__$1;
(statearr_34870_36730[(2)] = null);

(statearr_34870_36730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (11))){
var inst_34683 = (state_34782[(7)]);
var inst_34661 = (state_34782[(16)]);
var inst_34683__$1 = cljs.core.seq(inst_34661);
var state_34782__$1 = (function (){var statearr_34871 = state_34782;
(statearr_34871[(7)] = inst_34683__$1);

return statearr_34871;
})();
if(inst_34683__$1){
var statearr_34872_36733 = state_34782__$1;
(statearr_34872_36733[(1)] = (16));

} else {
var statearr_34873_36734 = state_34782__$1;
(statearr_34873_36734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (9))){
var inst_34713 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34874_36736 = state_34782__$1;
(statearr_34874_36736[(2)] = inst_34713);

(statearr_34874_36736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (5))){
var inst_34659 = cljs.core.deref(cs);
var inst_34660 = cljs.core.seq(inst_34659);
var inst_34661 = inst_34660;
var inst_34662 = null;
var inst_34663 = (0);
var inst_34664 = (0);
var state_34782__$1 = (function (){var statearr_34876 = state_34782;
(statearr_34876[(13)] = inst_34663);

(statearr_34876[(14)] = inst_34664);

(statearr_34876[(16)] = inst_34661);

(statearr_34876[(17)] = inst_34662);

return statearr_34876;
})();
var statearr_34877_36737 = state_34782__$1;
(statearr_34877_36737[(2)] = null);

(statearr_34877_36737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (14))){
var state_34782__$1 = state_34782;
var statearr_34878_36738 = state_34782__$1;
(statearr_34878_36738[(2)] = null);

(statearr_34878_36738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (45))){
var inst_34772 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34880_36739 = state_34782__$1;
(statearr_34880_36739[(2)] = inst_34772);

(statearr_34880_36739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (26))){
var inst_34716 = (state_34782[(27)]);
var inst_34768 = (state_34782[(2)]);
var inst_34769 = cljs.core.seq(inst_34716);
var state_34782__$1 = (function (){var statearr_34881 = state_34782;
(statearr_34881[(29)] = inst_34768);

return statearr_34881;
})();
if(inst_34769){
var statearr_34882_36740 = state_34782__$1;
(statearr_34882_36740[(1)] = (42));

} else {
var statearr_34883_36742 = state_34782__$1;
(statearr_34883_36742[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (16))){
var inst_34683 = (state_34782[(7)]);
var inst_34685 = cljs.core.chunked_seq_QMARK_(inst_34683);
var state_34782__$1 = state_34782;
if(inst_34685){
var statearr_34884_36743 = state_34782__$1;
(statearr_34884_36743[(1)] = (19));

} else {
var statearr_34885_36744 = state_34782__$1;
(statearr_34885_36744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (38))){
var inst_34761 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34888_36746 = state_34782__$1;
(statearr_34888_36746[(2)] = inst_34761);

(statearr_34888_36746[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (30))){
var state_34782__$1 = state_34782;
var statearr_34889_36748 = state_34782__$1;
(statearr_34889_36748[(2)] = null);

(statearr_34889_36748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (10))){
var inst_34664 = (state_34782[(14)]);
var inst_34662 = (state_34782[(17)]);
var inst_34672 = cljs.core._nth(inst_34662,inst_34664);
var inst_34673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34672,(0),null);
var inst_34674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34672,(1),null);
var state_34782__$1 = (function (){var statearr_34899 = state_34782;
(statearr_34899[(24)] = inst_34673);

return statearr_34899;
})();
if(cljs.core.truth_(inst_34674)){
var statearr_34900_36752 = state_34782__$1;
(statearr_34900_36752[(1)] = (13));

} else {
var statearr_34902_36753 = state_34782__$1;
(statearr_34902_36753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (18))){
var inst_34709 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34903_36754 = state_34782__$1;
(statearr_34903_36754[(2)] = inst_34709);

(statearr_34903_36754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (42))){
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34782__$1,(45),dchan);
} else {
if((state_val_34783 === (37))){
var inst_34751 = (state_34782[(22)]);
var inst_34742 = (state_34782[(23)]);
var inst_34652 = (state_34782[(12)]);
var inst_34751__$1 = cljs.core.first(inst_34742);
var inst_34752 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34751__$1,inst_34652,done);
var state_34782__$1 = (function (){var statearr_34911 = state_34782;
(statearr_34911[(22)] = inst_34751__$1);

return statearr_34911;
})();
if(cljs.core.truth_(inst_34752)){
var statearr_34917_36755 = state_34782__$1;
(statearr_34917_36755[(1)] = (39));

} else {
var statearr_34918_36757 = state_34782__$1;
(statearr_34918_36757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (8))){
var inst_34663 = (state_34782[(13)]);
var inst_34664 = (state_34782[(14)]);
var inst_34666 = (inst_34664 < inst_34663);
var inst_34667 = inst_34666;
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34667)){
var statearr_34920_36759 = state_34782__$1;
(statearr_34920_36759[(1)] = (10));

} else {
var statearr_34921_36761 = state_34782__$1;
(statearr_34921_36761[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33190__auto__ = null;
var cljs$core$async$mult_$_state_machine__33190__auto____0 = (function (){
var statearr_34926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34926[(0)] = cljs$core$async$mult_$_state_machine__33190__auto__);

(statearr_34926[(1)] = (1));

return statearr_34926;
});
var cljs$core$async$mult_$_state_machine__33190__auto____1 = (function (state_34782){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_34782);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e34927){var ex__33193__auto__ = e34927;
var statearr_34928_36765 = state_34782;
(statearr_34928_36765[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_34782[(4)]))){
var statearr_34929_36770 = state_34782;
(statearr_34929_36770[(1)] = cljs.core.first((state_34782[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36772 = state_34782;
state_34782 = G__36772;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33190__auto__ = function(state_34782){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33190__auto____1.call(this,state_34782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33190__auto____0;
cljs$core$async$mult_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33190__auto____1;
return cljs$core$async$mult_$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_34930 = f__33476__auto__();
(statearr_34930[(6)] = c__33475__auto___36637);

return statearr_34930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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
var G__34932 = arguments.length;
switch (G__34932) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36778 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36778(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36779 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36779(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36781 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36781(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36783 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36783(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36784 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36784(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36790 = arguments.length;
var i__4737__auto___36791 = (0);
while(true){
if((i__4737__auto___36791 < len__4736__auto___36790)){
args__4742__auto__.push((arguments[i__4737__auto___36791]));

var G__36794 = (i__4737__auto___36791 + (1));
i__4737__auto___36791 = G__36794;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34951){
var map__34952 = p__34951;
var map__34952__$1 = (((((!((map__34952 == null))))?(((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34952):map__34952);
var opts = map__34952__$1;
var statearr_34954_36800 = state;
(statearr_34954_36800[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34955_36801 = state;
(statearr_34955_36801[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34956_36802 = state;
(statearr_34956_36802[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34942){
var G__34943 = cljs.core.first(seq34942);
var seq34942__$1 = cljs.core.next(seq34942);
var G__34944 = cljs.core.first(seq34942__$1);
var seq34942__$2 = cljs.core.next(seq34942__$1);
var G__34945 = cljs.core.first(seq34942__$2);
var seq34942__$3 = cljs.core.next(seq34942__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34943,G__34944,G__34945,seq34942__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34968 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34969){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34969 = meta34969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34970,meta34969__$1){
var self__ = this;
var _34970__$1 = this;
return (new cljs.core.async.t_cljs$core$async34968(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34969__$1));
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34970){
var self__ = this;
var _34970__$1 = this;
return self__.meta34969;
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34969","meta34969",601748321,null)], null);
}));

(cljs.core.async.t_cljs$core$async34968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34968");

(cljs.core.async.t_cljs$core$async34968.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34968.
 */
cljs.core.async.__GT_t_cljs$core$async34968 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34968(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34969){
return (new cljs.core.async.t_cljs$core$async34968(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34969));
});

}

return (new cljs.core.async.t_cljs$core$async34968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33475__auto___36823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35082){
var state_val_35083 = (state_35082[(1)]);
if((state_val_35083 === (7))){
var inst_34992 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35084_36824 = state_35082__$1;
(statearr_35084_36824[(2)] = inst_34992);

(statearr_35084_36824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (20))){
var inst_35004 = (state_35082[(7)]);
var state_35082__$1 = state_35082;
var statearr_35087_36825 = state_35082__$1;
(statearr_35087_36825[(2)] = inst_35004);

(statearr_35087_36825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (27))){
var state_35082__$1 = state_35082;
var statearr_35088_36826 = state_35082__$1;
(statearr_35088_36826[(2)] = null);

(statearr_35088_36826[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (1))){
var inst_34978 = (state_35082[(8)]);
var inst_34978__$1 = calc_state();
var inst_34980 = (inst_34978__$1 == null);
var inst_34981 = cljs.core.not(inst_34980);
var state_35082__$1 = (function (){var statearr_35089 = state_35082;
(statearr_35089[(8)] = inst_34978__$1);

return statearr_35089;
})();
if(inst_34981){
var statearr_35090_36827 = state_35082__$1;
(statearr_35090_36827[(1)] = (2));

} else {
var statearr_35091_36829 = state_35082__$1;
(statearr_35091_36829[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (24))){
var inst_35040 = (state_35082[(9)]);
var inst_35056 = (state_35082[(10)]);
var inst_35030 = (state_35082[(11)]);
var inst_35056__$1 = (inst_35030.cljs$core$IFn$_invoke$arity$1 ? inst_35030.cljs$core$IFn$_invoke$arity$1(inst_35040) : inst_35030.call(null,inst_35040));
var state_35082__$1 = (function (){var statearr_35092 = state_35082;
(statearr_35092[(10)] = inst_35056__$1);

return statearr_35092;
})();
if(cljs.core.truth_(inst_35056__$1)){
var statearr_35093_36831 = state_35082__$1;
(statearr_35093_36831[(1)] = (29));

} else {
var statearr_35094_36832 = state_35082__$1;
(statearr_35094_36832[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (4))){
var inst_34995 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_34995)){
var statearr_35095_36833 = state_35082__$1;
(statearr_35095_36833[(1)] = (8));

} else {
var statearr_35096_36834 = state_35082__$1;
(statearr_35096_36834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (15))){
var inst_35024 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35024)){
var statearr_35097_36835 = state_35082__$1;
(statearr_35097_36835[(1)] = (19));

} else {
var statearr_35098_36836 = state_35082__$1;
(statearr_35098_36836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (21))){
var inst_35029 = (state_35082[(12)]);
var inst_35029__$1 = (state_35082[(2)]);
var inst_35030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35029__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35029__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35029__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35082__$1 = (function (){var statearr_35099 = state_35082;
(statearr_35099[(12)] = inst_35029__$1);

(statearr_35099[(11)] = inst_35030);

(statearr_35099[(13)] = inst_35031);

return statearr_35099;
})();
return cljs.core.async.ioc_alts_BANG_(state_35082__$1,(22),inst_35032);
} else {
if((state_val_35083 === (31))){
var inst_35064 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35064)){
var statearr_35100_36841 = state_35082__$1;
(statearr_35100_36841[(1)] = (32));

} else {
var statearr_35101_36842 = state_35082__$1;
(statearr_35101_36842[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (32))){
var inst_35038 = (state_35082[(14)]);
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35082__$1,(35),out,inst_35038);
} else {
if((state_val_35083 === (33))){
var inst_35029 = (state_35082[(12)]);
var inst_35004 = inst_35029;
var state_35082__$1 = (function (){var statearr_35102 = state_35082;
(statearr_35102[(7)] = inst_35004);

return statearr_35102;
})();
var statearr_35104_36843 = state_35082__$1;
(statearr_35104_36843[(2)] = null);

(statearr_35104_36843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (13))){
var inst_35004 = (state_35082[(7)]);
var inst_35013 = inst_35004.cljs$lang$protocol_mask$partition0$;
var inst_35014 = (inst_35013 & (64));
var inst_35015 = inst_35004.cljs$core$ISeq$;
var inst_35016 = (cljs.core.PROTOCOL_SENTINEL === inst_35015);
var inst_35017 = ((inst_35014) || (inst_35016));
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35017)){
var statearr_35105_36848 = state_35082__$1;
(statearr_35105_36848[(1)] = (16));

} else {
var statearr_35106_36849 = state_35082__$1;
(statearr_35106_36849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (22))){
var inst_35040 = (state_35082[(9)]);
var inst_35038 = (state_35082[(14)]);
var inst_35037 = (state_35082[(2)]);
var inst_35038__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35037,(0),null);
var inst_35040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35037,(1),null);
var inst_35042 = (inst_35038__$1 == null);
var inst_35043 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35040__$1,change);
var inst_35044 = ((inst_35042) || (inst_35043));
var state_35082__$1 = (function (){var statearr_35107 = state_35082;
(statearr_35107[(9)] = inst_35040__$1);

(statearr_35107[(14)] = inst_35038__$1);

return statearr_35107;
})();
if(cljs.core.truth_(inst_35044)){
var statearr_35109_36858 = state_35082__$1;
(statearr_35109_36858[(1)] = (23));

} else {
var statearr_35110_36859 = state_35082__$1;
(statearr_35110_36859[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (36))){
var inst_35029 = (state_35082[(12)]);
var inst_35004 = inst_35029;
var state_35082__$1 = (function (){var statearr_35111 = state_35082;
(statearr_35111[(7)] = inst_35004);

return statearr_35111;
})();
var statearr_35112_36860 = state_35082__$1;
(statearr_35112_36860[(2)] = null);

(statearr_35112_36860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (29))){
var inst_35056 = (state_35082[(10)]);
var state_35082__$1 = state_35082;
var statearr_35113_36861 = state_35082__$1;
(statearr_35113_36861[(2)] = inst_35056);

(statearr_35113_36861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (6))){
var state_35082__$1 = state_35082;
var statearr_35114_36862 = state_35082__$1;
(statearr_35114_36862[(2)] = false);

(statearr_35114_36862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (28))){
var inst_35052 = (state_35082[(2)]);
var inst_35053 = calc_state();
var inst_35004 = inst_35053;
var state_35082__$1 = (function (){var statearr_35115 = state_35082;
(statearr_35115[(15)] = inst_35052);

(statearr_35115[(7)] = inst_35004);

return statearr_35115;
})();
var statearr_35116_36868 = state_35082__$1;
(statearr_35116_36868[(2)] = null);

(statearr_35116_36868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (25))){
var inst_35078 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35117_36872 = state_35082__$1;
(statearr_35117_36872[(2)] = inst_35078);

(statearr_35117_36872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (34))){
var inst_35076 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35118_36876 = state_35082__$1;
(statearr_35118_36876[(2)] = inst_35076);

(statearr_35118_36876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (17))){
var state_35082__$1 = state_35082;
var statearr_35119_36877 = state_35082__$1;
(statearr_35119_36877[(2)] = false);

(statearr_35119_36877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (3))){
var state_35082__$1 = state_35082;
var statearr_35120_36878 = state_35082__$1;
(statearr_35120_36878[(2)] = false);

(statearr_35120_36878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (12))){
var inst_35080 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35082__$1,inst_35080);
} else {
if((state_val_35083 === (2))){
var inst_34978 = (state_35082[(8)]);
var inst_34984 = inst_34978.cljs$lang$protocol_mask$partition0$;
var inst_34985 = (inst_34984 & (64));
var inst_34986 = inst_34978.cljs$core$ISeq$;
var inst_34987 = (cljs.core.PROTOCOL_SENTINEL === inst_34986);
var inst_34988 = ((inst_34985) || (inst_34987));
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_34988)){
var statearr_35121_36884 = state_35082__$1;
(statearr_35121_36884[(1)] = (5));

} else {
var statearr_35122_36886 = state_35082__$1;
(statearr_35122_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (23))){
var inst_35038 = (state_35082[(14)]);
var inst_35047 = (inst_35038 == null);
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35047)){
var statearr_35123_36890 = state_35082__$1;
(statearr_35123_36890[(1)] = (26));

} else {
var statearr_35124_36891 = state_35082__$1;
(statearr_35124_36891[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (35))){
var inst_35067 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35067)){
var statearr_35125_36892 = state_35082__$1;
(statearr_35125_36892[(1)] = (36));

} else {
var statearr_35126_36895 = state_35082__$1;
(statearr_35126_36895[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (19))){
var inst_35004 = (state_35082[(7)]);
var inst_35026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35004);
var state_35082__$1 = state_35082;
var statearr_35127_36900 = state_35082__$1;
(statearr_35127_36900[(2)] = inst_35026);

(statearr_35127_36900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (11))){
var inst_35004 = (state_35082[(7)]);
var inst_35008 = (inst_35004 == null);
var inst_35009 = cljs.core.not(inst_35008);
var state_35082__$1 = state_35082;
if(inst_35009){
var statearr_35128_36902 = state_35082__$1;
(statearr_35128_36902[(1)] = (13));

} else {
var statearr_35129_36903 = state_35082__$1;
(statearr_35129_36903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (9))){
var inst_34978 = (state_35082[(8)]);
var state_35082__$1 = state_35082;
var statearr_35130_36907 = state_35082__$1;
(statearr_35130_36907[(2)] = inst_34978);

(statearr_35130_36907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (5))){
var state_35082__$1 = state_35082;
var statearr_35131_36910 = state_35082__$1;
(statearr_35131_36910[(2)] = true);

(statearr_35131_36910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (14))){
var state_35082__$1 = state_35082;
var statearr_35132_36914 = state_35082__$1;
(statearr_35132_36914[(2)] = false);

(statearr_35132_36914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (26))){
var inst_35040 = (state_35082[(9)]);
var inst_35049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35040);
var state_35082__$1 = state_35082;
var statearr_35133_36915 = state_35082__$1;
(statearr_35133_36915[(2)] = inst_35049);

(statearr_35133_36915[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (16))){
var state_35082__$1 = state_35082;
var statearr_35135_36916 = state_35082__$1;
(statearr_35135_36916[(2)] = true);

(statearr_35135_36916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (38))){
var inst_35072 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35136_36920 = state_35082__$1;
(statearr_35136_36920[(2)] = inst_35072);

(statearr_35136_36920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (30))){
var inst_35040 = (state_35082[(9)]);
var inst_35030 = (state_35082[(11)]);
var inst_35031 = (state_35082[(13)]);
var inst_35059 = cljs.core.empty_QMARK_(inst_35030);
var inst_35060 = (inst_35031.cljs$core$IFn$_invoke$arity$1 ? inst_35031.cljs$core$IFn$_invoke$arity$1(inst_35040) : inst_35031.call(null,inst_35040));
var inst_35061 = cljs.core.not(inst_35060);
var inst_35062 = ((inst_35059) && (inst_35061));
var state_35082__$1 = state_35082;
var statearr_35138_36922 = state_35082__$1;
(statearr_35138_36922[(2)] = inst_35062);

(statearr_35138_36922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (10))){
var inst_34978 = (state_35082[(8)]);
var inst_35000 = (state_35082[(2)]);
var inst_35001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35000,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35000,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35000,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35004 = inst_34978;
var state_35082__$1 = (function (){var statearr_35140 = state_35082;
(statearr_35140[(7)] = inst_35004);

(statearr_35140[(16)] = inst_35003);

(statearr_35140[(17)] = inst_35002);

(statearr_35140[(18)] = inst_35001);

return statearr_35140;
})();
var statearr_35142_36927 = state_35082__$1;
(statearr_35142_36927[(2)] = null);

(statearr_35142_36927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (18))){
var inst_35021 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35143_36928 = state_35082__$1;
(statearr_35143_36928[(2)] = inst_35021);

(statearr_35143_36928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (37))){
var state_35082__$1 = state_35082;
var statearr_35145_36931 = state_35082__$1;
(statearr_35145_36931[(2)] = null);

(statearr_35145_36931[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (8))){
var inst_34978 = (state_35082[(8)]);
var inst_34997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34978);
var state_35082__$1 = state_35082;
var statearr_35146_36933 = state_35082__$1;
(statearr_35146_36933[(2)] = inst_34997);

(statearr_35146_36933[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__33190__auto__ = null;
var cljs$core$async$mix_$_state_machine__33190__auto____0 = (function (){
var statearr_35149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35149[(0)] = cljs$core$async$mix_$_state_machine__33190__auto__);

(statearr_35149[(1)] = (1));

return statearr_35149;
});
var cljs$core$async$mix_$_state_machine__33190__auto____1 = (function (state_35082){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35082);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35150){var ex__33193__auto__ = e35150;
var statearr_35152_36934 = state_35082;
(statearr_35152_36934[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35082[(4)]))){
var statearr_35154_36935 = state_35082;
(statearr_35154_36935[(1)] = cljs.core.first((state_35082[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36936 = state_35082;
state_35082 = G__36936;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33190__auto__ = function(state_35082){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33190__auto____1.call(this,state_35082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33190__auto____0;
cljs$core$async$mix_$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33190__auto____1;
return cljs$core$async$mix_$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35156 = f__33476__auto__();
(statearr_35156[(6)] = c__33475__auto___36823);

return statearr_35156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36940 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36940(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36947 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36947(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36952 = (function() {
var G__36953 = null;
var G__36953__1 = (function (p){
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
var G__36953__2 = (function (p,v){
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
G__36953 = function(p,v){
switch(arguments.length){
case 1:
return G__36953__1.call(this,p);
case 2:
return G__36953__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36953.cljs$core$IFn$_invoke$arity$1 = G__36953__1;
G__36953.cljs$core$IFn$_invoke$arity$2 = G__36953__2;
return G__36953;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35175 = arguments.length;
switch (G__35175) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36952(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36952(p,v);
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
var G__35186 = arguments.length;
switch (G__35186) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35181_SHARP_){
if(cljs.core.truth_((p1__35181_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35181_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35181_SHARP_.call(null,topic)))){
return p1__35181_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35181_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35195 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35196){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35196 = meta35196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35197,meta35196__$1){
var self__ = this;
var _35197__$1 = this;
return (new cljs.core.async.t_cljs$core$async35195(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35196__$1));
}));

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35197){
var self__ = this;
var _35197__$1 = this;
return self__.meta35196;
}));

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35196","meta35196",-622793643,null)], null);
}));

(cljs.core.async.t_cljs$core$async35195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35195");

(cljs.core.async.t_cljs$core$async35195.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35195.
 */
cljs.core.async.__GT_t_cljs$core$async35195 = (function cljs$core$async$__GT_t_cljs$core$async35195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35196){
return (new cljs.core.async.t_cljs$core$async35195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35196));
});

}

return (new cljs.core.async.t_cljs$core$async35195(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33475__auto___36962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35291){
var state_val_35292 = (state_35291[(1)]);
if((state_val_35292 === (7))){
var inst_35287 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35293_36963 = state_35291__$1;
(statearr_35293_36963[(2)] = inst_35287);

(statearr_35293_36963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (20))){
var state_35291__$1 = state_35291;
var statearr_35294_36964 = state_35291__$1;
(statearr_35294_36964[(2)] = null);

(statearr_35294_36964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (1))){
var state_35291__$1 = state_35291;
var statearr_35295_36965 = state_35291__$1;
(statearr_35295_36965[(2)] = null);

(statearr_35295_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (24))){
var inst_35268 = (state_35291[(7)]);
var inst_35279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35268);
var state_35291__$1 = state_35291;
var statearr_35299_36970 = state_35291__$1;
(statearr_35299_36970[(2)] = inst_35279);

(statearr_35299_36970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (4))){
var inst_35216 = (state_35291[(8)]);
var inst_35216__$1 = (state_35291[(2)]);
var inst_35217 = (inst_35216__$1 == null);
var state_35291__$1 = (function (){var statearr_35300 = state_35291;
(statearr_35300[(8)] = inst_35216__$1);

return statearr_35300;
})();
if(cljs.core.truth_(inst_35217)){
var statearr_35301_36971 = state_35291__$1;
(statearr_35301_36971[(1)] = (5));

} else {
var statearr_35302_36972 = state_35291__$1;
(statearr_35302_36972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (15))){
var inst_35259 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35303_36973 = state_35291__$1;
(statearr_35303_36973[(2)] = inst_35259);

(statearr_35303_36973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (21))){
var inst_35284 = (state_35291[(2)]);
var state_35291__$1 = (function (){var statearr_35304 = state_35291;
(statearr_35304[(9)] = inst_35284);

return statearr_35304;
})();
var statearr_35305_36974 = state_35291__$1;
(statearr_35305_36974[(2)] = null);

(statearr_35305_36974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (13))){
var inst_35241 = (state_35291[(10)]);
var inst_35243 = cljs.core.chunked_seq_QMARK_(inst_35241);
var state_35291__$1 = state_35291;
if(inst_35243){
var statearr_35306_36975 = state_35291__$1;
(statearr_35306_36975[(1)] = (16));

} else {
var statearr_35307_36976 = state_35291__$1;
(statearr_35307_36976[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (22))){
var inst_35276 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35276)){
var statearr_35308_36977 = state_35291__$1;
(statearr_35308_36977[(1)] = (23));

} else {
var statearr_35359_36978 = state_35291__$1;
(statearr_35359_36978[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (6))){
var inst_35268 = (state_35291[(7)]);
var inst_35270 = (state_35291[(11)]);
var inst_35216 = (state_35291[(8)]);
var inst_35268__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35216) : topic_fn.call(null,inst_35216));
var inst_35269 = cljs.core.deref(mults);
var inst_35270__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35269,inst_35268__$1);
var state_35291__$1 = (function (){var statearr_35360 = state_35291;
(statearr_35360[(7)] = inst_35268__$1);

(statearr_35360[(11)] = inst_35270__$1);

return statearr_35360;
})();
if(cljs.core.truth_(inst_35270__$1)){
var statearr_35361_36979 = state_35291__$1;
(statearr_35361_36979[(1)] = (19));

} else {
var statearr_35362_36980 = state_35291__$1;
(statearr_35362_36980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (25))){
var inst_35281 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35365_36981 = state_35291__$1;
(statearr_35365_36981[(2)] = inst_35281);

(statearr_35365_36981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (17))){
var inst_35241 = (state_35291[(10)]);
var inst_35250 = cljs.core.first(inst_35241);
var inst_35251 = cljs.core.async.muxch_STAR_(inst_35250);
var inst_35252 = cljs.core.async.close_BANG_(inst_35251);
var inst_35253 = cljs.core.next(inst_35241);
var inst_35227 = inst_35253;
var inst_35228 = null;
var inst_35229 = (0);
var inst_35230 = (0);
var state_35291__$1 = (function (){var statearr_35371 = state_35291;
(statearr_35371[(12)] = inst_35252);

(statearr_35371[(13)] = inst_35227);

(statearr_35371[(14)] = inst_35230);

(statearr_35371[(15)] = inst_35229);

(statearr_35371[(16)] = inst_35228);

return statearr_35371;
})();
var statearr_35372_36982 = state_35291__$1;
(statearr_35372_36982[(2)] = null);

(statearr_35372_36982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (3))){
var inst_35289 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35291__$1,inst_35289);
} else {
if((state_val_35292 === (12))){
var inst_35263 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35373_36983 = state_35291__$1;
(statearr_35373_36983[(2)] = inst_35263);

(statearr_35373_36983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (2))){
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35291__$1,(4),ch);
} else {
if((state_val_35292 === (23))){
var state_35291__$1 = state_35291;
var statearr_35375_36984 = state_35291__$1;
(statearr_35375_36984[(2)] = null);

(statearr_35375_36984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (19))){
var inst_35270 = (state_35291[(11)]);
var inst_35216 = (state_35291[(8)]);
var inst_35274 = cljs.core.async.muxch_STAR_(inst_35270);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35291__$1,(22),inst_35274,inst_35216);
} else {
if((state_val_35292 === (11))){
var inst_35227 = (state_35291[(13)]);
var inst_35241 = (state_35291[(10)]);
var inst_35241__$1 = cljs.core.seq(inst_35227);
var state_35291__$1 = (function (){var statearr_35378 = state_35291;
(statearr_35378[(10)] = inst_35241__$1);

return statearr_35378;
})();
if(inst_35241__$1){
var statearr_35379_36985 = state_35291__$1;
(statearr_35379_36985[(1)] = (13));

} else {
var statearr_35380_36986 = state_35291__$1;
(statearr_35380_36986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (9))){
var inst_35265 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35381_36987 = state_35291__$1;
(statearr_35381_36987[(2)] = inst_35265);

(statearr_35381_36987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (5))){
var inst_35223 = cljs.core.deref(mults);
var inst_35224 = cljs.core.vals(inst_35223);
var inst_35225 = cljs.core.seq(inst_35224);
var inst_35227 = inst_35225;
var inst_35228 = null;
var inst_35229 = (0);
var inst_35230 = (0);
var state_35291__$1 = (function (){var statearr_35382 = state_35291;
(statearr_35382[(13)] = inst_35227);

(statearr_35382[(14)] = inst_35230);

(statearr_35382[(15)] = inst_35229);

(statearr_35382[(16)] = inst_35228);

return statearr_35382;
})();
var statearr_35383_36988 = state_35291__$1;
(statearr_35383_36988[(2)] = null);

(statearr_35383_36988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (14))){
var state_35291__$1 = state_35291;
var statearr_35389_36992 = state_35291__$1;
(statearr_35389_36992[(2)] = null);

(statearr_35389_36992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (16))){
var inst_35241 = (state_35291[(10)]);
var inst_35245 = cljs.core.chunk_first(inst_35241);
var inst_35246 = cljs.core.chunk_rest(inst_35241);
var inst_35247 = cljs.core.count(inst_35245);
var inst_35227 = inst_35246;
var inst_35228 = inst_35245;
var inst_35229 = inst_35247;
var inst_35230 = (0);
var state_35291__$1 = (function (){var statearr_35390 = state_35291;
(statearr_35390[(13)] = inst_35227);

(statearr_35390[(14)] = inst_35230);

(statearr_35390[(15)] = inst_35229);

(statearr_35390[(16)] = inst_35228);

return statearr_35390;
})();
var statearr_35391_36993 = state_35291__$1;
(statearr_35391_36993[(2)] = null);

(statearr_35391_36993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (10))){
var inst_35227 = (state_35291[(13)]);
var inst_35230 = (state_35291[(14)]);
var inst_35229 = (state_35291[(15)]);
var inst_35228 = (state_35291[(16)]);
var inst_35235 = cljs.core._nth(inst_35228,inst_35230);
var inst_35236 = cljs.core.async.muxch_STAR_(inst_35235);
var inst_35237 = cljs.core.async.close_BANG_(inst_35236);
var inst_35238 = (inst_35230 + (1));
var tmp35386 = inst_35227;
var tmp35387 = inst_35229;
var tmp35388 = inst_35228;
var inst_35227__$1 = tmp35386;
var inst_35228__$1 = tmp35388;
var inst_35229__$1 = tmp35387;
var inst_35230__$1 = inst_35238;
var state_35291__$1 = (function (){var statearr_35393 = state_35291;
(statearr_35393[(13)] = inst_35227__$1);

(statearr_35393[(17)] = inst_35237);

(statearr_35393[(14)] = inst_35230__$1);

(statearr_35393[(15)] = inst_35229__$1);

(statearr_35393[(16)] = inst_35228__$1);

return statearr_35393;
})();
var statearr_35394_36994 = state_35291__$1;
(statearr_35394_36994[(2)] = null);

(statearr_35394_36994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (18))){
var inst_35256 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35395_36995 = state_35291__$1;
(statearr_35395_36995[(2)] = inst_35256);

(statearr_35395_36995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (8))){
var inst_35230 = (state_35291[(14)]);
var inst_35229 = (state_35291[(15)]);
var inst_35232 = (inst_35230 < inst_35229);
var inst_35233 = inst_35232;
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35233)){
var statearr_35396_36996 = state_35291__$1;
(statearr_35396_36996[(1)] = (10));

} else {
var statearr_35397_36997 = state_35291__$1;
(statearr_35397_36997[(1)] = (11));

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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_35398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35398[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_35398[(1)] = (1));

return statearr_35398;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_35291){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35291);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35399){var ex__33193__auto__ = e35399;
var statearr_35400_36998 = state_35291;
(statearr_35400_36998[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35291[(4)]))){
var statearr_35401_36999 = state_35291;
(statearr_35401_36999[(1)] = cljs.core.first((state_35291[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_35291;
state_35291 = G__37000;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_35291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_35291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35403 = f__33476__auto__();
(statearr_35403[(6)] = c__33475__auto___36962);

return statearr_35403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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
var G__35405 = arguments.length;
switch (G__35405) {
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
var G__35407 = arguments.length;
switch (G__35407) {
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
var G__35414 = arguments.length;
switch (G__35414) {
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
var c__33475__auto___37010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35462){
var state_val_35463 = (state_35462[(1)]);
if((state_val_35463 === (7))){
var state_35462__$1 = state_35462;
var statearr_35466_37011 = state_35462__$1;
(statearr_35466_37011[(2)] = null);

(statearr_35466_37011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (1))){
var state_35462__$1 = state_35462;
var statearr_35467_37014 = state_35462__$1;
(statearr_35467_37014[(2)] = null);

(statearr_35467_37014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (4))){
var inst_35419 = (state_35462[(7)]);
var inst_35420 = (state_35462[(8)]);
var inst_35422 = (inst_35420 < inst_35419);
var state_35462__$1 = state_35462;
if(cljs.core.truth_(inst_35422)){
var statearr_35468_37016 = state_35462__$1;
(statearr_35468_37016[(1)] = (6));

} else {
var statearr_35469_37017 = state_35462__$1;
(statearr_35469_37017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (15))){
var inst_35448 = (state_35462[(9)]);
var inst_35453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35448);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35462__$1,(17),out,inst_35453);
} else {
if((state_val_35463 === (13))){
var inst_35448 = (state_35462[(9)]);
var inst_35448__$1 = (state_35462[(2)]);
var inst_35449 = cljs.core.some(cljs.core.nil_QMARK_,inst_35448__$1);
var state_35462__$1 = (function (){var statearr_35477 = state_35462;
(statearr_35477[(9)] = inst_35448__$1);

return statearr_35477;
})();
if(cljs.core.truth_(inst_35449)){
var statearr_35478_37019 = state_35462__$1;
(statearr_35478_37019[(1)] = (14));

} else {
var statearr_35479_37020 = state_35462__$1;
(statearr_35479_37020[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (6))){
var state_35462__$1 = state_35462;
var statearr_35480_37021 = state_35462__$1;
(statearr_35480_37021[(2)] = null);

(statearr_35480_37021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (17))){
var inst_35455 = (state_35462[(2)]);
var state_35462__$1 = (function (){var statearr_35484 = state_35462;
(statearr_35484[(10)] = inst_35455);

return statearr_35484;
})();
var statearr_35485_37022 = state_35462__$1;
(statearr_35485_37022[(2)] = null);

(statearr_35485_37022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (3))){
var inst_35460 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35462__$1,inst_35460);
} else {
if((state_val_35463 === (12))){
var _ = (function (){var statearr_35486 = state_35462;
(statearr_35486[(4)] = cljs.core.rest((state_35462[(4)])));

return statearr_35486;
})();
var state_35462__$1 = state_35462;
var ex35483 = (state_35462__$1[(2)]);
var statearr_35487_37028 = state_35462__$1;
(statearr_35487_37028[(5)] = ex35483);


if((ex35483 instanceof Object)){
var statearr_35490_37029 = state_35462__$1;
(statearr_35490_37029[(1)] = (11));

(statearr_35490_37029[(5)] = null);

} else {
throw ex35483;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (2))){
var inst_35418 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35419 = cnt;
var inst_35420 = (0);
var state_35462__$1 = (function (){var statearr_35503 = state_35462;
(statearr_35503[(7)] = inst_35419);

(statearr_35503[(11)] = inst_35418);

(statearr_35503[(8)] = inst_35420);

return statearr_35503;
})();
var statearr_35504_37030 = state_35462__$1;
(statearr_35504_37030[(2)] = null);

(statearr_35504_37030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (11))){
var inst_35427 = (state_35462[(2)]);
var inst_35428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35462__$1 = (function (){var statearr_35505 = state_35462;
(statearr_35505[(12)] = inst_35427);

return statearr_35505;
})();
var statearr_35506_37031 = state_35462__$1;
(statearr_35506_37031[(2)] = inst_35428);

(statearr_35506_37031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (9))){
var inst_35420 = (state_35462[(8)]);
var _ = (function (){var statearr_35507 = state_35462;
(statearr_35507[(4)] = cljs.core.cons((12),(state_35462[(4)])));

return statearr_35507;
})();
var inst_35434 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35420) : chs__$1.call(null,inst_35420));
var inst_35435 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35420) : done.call(null,inst_35420));
var inst_35436 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35434,inst_35435);
var ___$1 = (function (){var statearr_35508 = state_35462;
(statearr_35508[(4)] = cljs.core.rest((state_35462[(4)])));

return statearr_35508;
})();
var state_35462__$1 = state_35462;
var statearr_35509_37032 = state_35462__$1;
(statearr_35509_37032[(2)] = inst_35436);

(statearr_35509_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (5))){
var inst_35446 = (state_35462[(2)]);
var state_35462__$1 = (function (){var statearr_35510 = state_35462;
(statearr_35510[(13)] = inst_35446);

return statearr_35510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35462__$1,(13),dchan);
} else {
if((state_val_35463 === (14))){
var inst_35451 = cljs.core.async.close_BANG_(out);
var state_35462__$1 = state_35462;
var statearr_35511_37033 = state_35462__$1;
(statearr_35511_37033[(2)] = inst_35451);

(statearr_35511_37033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (16))){
var inst_35458 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35512_37034 = state_35462__$1;
(statearr_35512_37034[(2)] = inst_35458);

(statearr_35512_37034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (10))){
var inst_35420 = (state_35462[(8)]);
var inst_35439 = (state_35462[(2)]);
var inst_35440 = (inst_35420 + (1));
var inst_35420__$1 = inst_35440;
var state_35462__$1 = (function (){var statearr_35513 = state_35462;
(statearr_35513[(14)] = inst_35439);

(statearr_35513[(8)] = inst_35420__$1);

return statearr_35513;
})();
var statearr_35514_37036 = state_35462__$1;
(statearr_35514_37036[(2)] = null);

(statearr_35514_37036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (8))){
var inst_35444 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35515_37037 = state_35462__$1;
(statearr_35515_37037[(2)] = inst_35444);

(statearr_35515_37037[(1)] = (5));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_35516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35516[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_35516[(1)] = (1));

return statearr_35516;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_35462){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35462);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35517){var ex__33193__auto__ = e35517;
var statearr_35518_37040 = state_35462;
(statearr_35518_37040[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35462[(4)]))){
var statearr_35519_37041 = state_35462;
(statearr_35519_37041[(1)] = cljs.core.first((state_35462[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_35462;
state_35462 = G__37042;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_35462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_35462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35520 = f__33476__auto__();
(statearr_35520[(6)] = c__33475__auto___37010);

return statearr_35520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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
var G__35526 = arguments.length;
switch (G__35526) {
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
var c__33475__auto___37044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35561){
var state_val_35562 = (state_35561[(1)]);
if((state_val_35562 === (7))){
var inst_35540 = (state_35561[(7)]);
var inst_35541 = (state_35561[(8)]);
var inst_35540__$1 = (state_35561[(2)]);
var inst_35541__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35540__$1,(0),null);
var inst_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35540__$1,(1),null);
var inst_35543 = (inst_35541__$1 == null);
var state_35561__$1 = (function (){var statearr_35563 = state_35561;
(statearr_35563[(9)] = inst_35542);

(statearr_35563[(7)] = inst_35540__$1);

(statearr_35563[(8)] = inst_35541__$1);

return statearr_35563;
})();
if(cljs.core.truth_(inst_35543)){
var statearr_35564_37047 = state_35561__$1;
(statearr_35564_37047[(1)] = (8));

} else {
var statearr_35565_37051 = state_35561__$1;
(statearr_35565_37051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (1))){
var inst_35530 = cljs.core.vec(chs);
var inst_35531 = inst_35530;
var state_35561__$1 = (function (){var statearr_35566 = state_35561;
(statearr_35566[(10)] = inst_35531);

return statearr_35566;
})();
var statearr_35567_37052 = state_35561__$1;
(statearr_35567_37052[(2)] = null);

(statearr_35567_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (4))){
var inst_35531 = (state_35561[(10)]);
var state_35561__$1 = state_35561;
return cljs.core.async.ioc_alts_BANG_(state_35561__$1,(7),inst_35531);
} else {
if((state_val_35562 === (6))){
var inst_35557 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35572_37054 = state_35561__$1;
(statearr_35572_37054[(2)] = inst_35557);

(statearr_35572_37054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (3))){
var inst_35559 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35561__$1,inst_35559);
} else {
if((state_val_35562 === (2))){
var inst_35531 = (state_35561[(10)]);
var inst_35533 = cljs.core.count(inst_35531);
var inst_35534 = (inst_35533 > (0));
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35534)){
var statearr_35574_37055 = state_35561__$1;
(statearr_35574_37055[(1)] = (4));

} else {
var statearr_35575_37056 = state_35561__$1;
(statearr_35575_37056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (11))){
var inst_35531 = (state_35561[(10)]);
var inst_35550 = (state_35561[(2)]);
var tmp35573 = inst_35531;
var inst_35531__$1 = tmp35573;
var state_35561__$1 = (function (){var statearr_35576 = state_35561;
(statearr_35576[(10)] = inst_35531__$1);

(statearr_35576[(11)] = inst_35550);

return statearr_35576;
})();
var statearr_35577_37058 = state_35561__$1;
(statearr_35577_37058[(2)] = null);

(statearr_35577_37058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (9))){
var inst_35541 = (state_35561[(8)]);
var state_35561__$1 = state_35561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35561__$1,(11),out,inst_35541);
} else {
if((state_val_35562 === (5))){
var inst_35555 = cljs.core.async.close_BANG_(out);
var state_35561__$1 = state_35561;
var statearr_35587_37060 = state_35561__$1;
(statearr_35587_37060[(2)] = inst_35555);

(statearr_35587_37060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (10))){
var inst_35553 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35588_37061 = state_35561__$1;
(statearr_35588_37061[(2)] = inst_35553);

(statearr_35588_37061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (8))){
var inst_35542 = (state_35561[(9)]);
var inst_35531 = (state_35561[(10)]);
var inst_35540 = (state_35561[(7)]);
var inst_35541 = (state_35561[(8)]);
var inst_35545 = (function (){var cs = inst_35531;
var vec__35536 = inst_35540;
var v = inst_35541;
var c = inst_35542;
return (function (p1__35521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35521_SHARP_);
});
})();
var inst_35546 = cljs.core.filterv(inst_35545,inst_35531);
var inst_35531__$1 = inst_35546;
var state_35561__$1 = (function (){var statearr_35589 = state_35561;
(statearr_35589[(10)] = inst_35531__$1);

return statearr_35589;
})();
var statearr_35590_37062 = state_35561__$1;
(statearr_35590_37062[(2)] = null);

(statearr_35590_37062[(1)] = (2));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_35595 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35595[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_35595[(1)] = (1));

return statearr_35595;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_35561){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35561);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35596){var ex__33193__auto__ = e35596;
var statearr_35597_37064 = state_35561;
(statearr_35597_37064[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35561[(4)]))){
var statearr_35598_37067 = state_35561;
(statearr_35598_37067[(1)] = cljs.core.first((state_35561[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37069 = state_35561;
state_35561 = G__37069;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_35561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_35561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35600 = f__33476__auto__();
(statearr_35600[(6)] = c__33475__auto___37044);

return statearr_35600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
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
var G__35602 = arguments.length;
switch (G__35602) {
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
var c__33475__auto___37072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35626){
var state_val_35627 = (state_35626[(1)]);
if((state_val_35627 === (7))){
var inst_35608 = (state_35626[(7)]);
var inst_35608__$1 = (state_35626[(2)]);
var inst_35609 = (inst_35608__$1 == null);
var inst_35610 = cljs.core.not(inst_35609);
var state_35626__$1 = (function (){var statearr_35628 = state_35626;
(statearr_35628[(7)] = inst_35608__$1);

return statearr_35628;
})();
if(inst_35610){
var statearr_35629_37073 = state_35626__$1;
(statearr_35629_37073[(1)] = (8));

} else {
var statearr_35630_37074 = state_35626__$1;
(statearr_35630_37074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (1))){
var inst_35603 = (0);
var state_35626__$1 = (function (){var statearr_35631 = state_35626;
(statearr_35631[(8)] = inst_35603);

return statearr_35631;
})();
var statearr_35632_37076 = state_35626__$1;
(statearr_35632_37076[(2)] = null);

(statearr_35632_37076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (4))){
var state_35626__$1 = state_35626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35626__$1,(7),ch);
} else {
if((state_val_35627 === (6))){
var inst_35621 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35633_37077 = state_35626__$1;
(statearr_35633_37077[(2)] = inst_35621);

(statearr_35633_37077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (3))){
var inst_35623 = (state_35626[(2)]);
var inst_35624 = cljs.core.async.close_BANG_(out);
var state_35626__$1 = (function (){var statearr_35634 = state_35626;
(statearr_35634[(9)] = inst_35623);

return statearr_35634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35626__$1,inst_35624);
} else {
if((state_val_35627 === (2))){
var inst_35603 = (state_35626[(8)]);
var inst_35605 = (inst_35603 < n);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35605)){
var statearr_35636_37078 = state_35626__$1;
(statearr_35636_37078[(1)] = (4));

} else {
var statearr_35637_37080 = state_35626__$1;
(statearr_35637_37080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (11))){
var inst_35603 = (state_35626[(8)]);
var inst_35613 = (state_35626[(2)]);
var inst_35614 = (inst_35603 + (1));
var inst_35603__$1 = inst_35614;
var state_35626__$1 = (function (){var statearr_35638 = state_35626;
(statearr_35638[(10)] = inst_35613);

(statearr_35638[(8)] = inst_35603__$1);

return statearr_35638;
})();
var statearr_35639_37081 = state_35626__$1;
(statearr_35639_37081[(2)] = null);

(statearr_35639_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (9))){
var state_35626__$1 = state_35626;
var statearr_35640_37082 = state_35626__$1;
(statearr_35640_37082[(2)] = null);

(statearr_35640_37082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (5))){
var state_35626__$1 = state_35626;
var statearr_35641_37083 = state_35626__$1;
(statearr_35641_37083[(2)] = null);

(statearr_35641_37083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (10))){
var inst_35618 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35642_37085 = state_35626__$1;
(statearr_35642_37085[(2)] = inst_35618);

(statearr_35642_37085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (8))){
var inst_35608 = (state_35626[(7)]);
var state_35626__$1 = state_35626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35626__$1,(11),out,inst_35608);
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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_35643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35643[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_35643[(1)] = (1));

return statearr_35643;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_35626){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35626);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35645){var ex__33193__auto__ = e35645;
var statearr_35646_37096 = state_35626;
(statearr_35646_37096[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35626[(4)]))){
var statearr_35647_37097 = state_35626;
(statearr_35647_37097[(1)] = cljs.core.first((state_35626[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37098 = state_35626;
state_35626 = G__37098;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_35626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_35626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35649 = f__33476__auto__();
(statearr_35649[(6)] = c__33475__auto___37072);

return statearr_35649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35651 = (function (f,ch,meta35652){
this.f = f;
this.ch = ch;
this.meta35652 = meta35652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35653,meta35652__$1){
var self__ = this;
var _35653__$1 = this;
return (new cljs.core.async.t_cljs$core$async35651(self__.f,self__.ch,meta35652__$1));
}));

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35653){
var self__ = this;
var _35653__$1 = this;
return self__.meta35652;
}));

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35664 = (function (f,ch,meta35652,_,fn1,meta35665){
this.f = f;
this.ch = ch;
this.meta35652 = meta35652;
this._ = _;
this.fn1 = fn1;
this.meta35665 = meta35665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35666,meta35665__$1){
var self__ = this;
var _35666__$1 = this;
return (new cljs.core.async.t_cljs$core$async35664(self__.f,self__.ch,self__.meta35652,self__._,self__.fn1,meta35665__$1));
}));

(cljs.core.async.t_cljs$core$async35664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35666){
var self__ = this;
var _35666__$1 = this;
return self__.meta35665;
}));

(cljs.core.async.t_cljs$core$async35664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35650_SHARP_){
var G__35670 = (((p1__35650_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35650_SHARP_) : self__.f.call(null,p1__35650_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35670) : f1.call(null,G__35670));
});
}));

(cljs.core.async.t_cljs$core$async35664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35652","meta35652",2096416572,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35651","cljs.core.async/t_cljs$core$async35651",-1322900745,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35665","meta35665",396264534,null)], null);
}));

(cljs.core.async.t_cljs$core$async35664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35664");

(cljs.core.async.t_cljs$core$async35664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35664.
 */
cljs.core.async.__GT_t_cljs$core$async35664 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35664(f__$1,ch__$1,meta35652__$1,___$2,fn1__$1,meta35665){
return (new cljs.core.async.t_cljs$core$async35664(f__$1,ch__$1,meta35652__$1,___$2,fn1__$1,meta35665));
});

}

return (new cljs.core.async.t_cljs$core$async35664(self__.f,self__.ch,self__.meta35652,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35673 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35673) : self__.f.call(null,G__35673));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35652","meta35652",2096416572,null)], null);
}));

(cljs.core.async.t_cljs$core$async35651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35651");

(cljs.core.async.t_cljs$core$async35651.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35651.
 */
cljs.core.async.__GT_t_cljs$core$async35651 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35651(f__$1,ch__$1,meta35652){
return (new cljs.core.async.t_cljs$core$async35651(f__$1,ch__$1,meta35652));
});

}

return (new cljs.core.async.t_cljs$core$async35651(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35674 = (function (f,ch,meta35675){
this.f = f;
this.ch = ch;
this.meta35675 = meta35675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35676,meta35675__$1){
var self__ = this;
var _35676__$1 = this;
return (new cljs.core.async.t_cljs$core$async35674(self__.f,self__.ch,meta35675__$1));
}));

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35676){
var self__ = this;
var _35676__$1 = this;
return self__.meta35675;
}));

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35675","meta35675",72430380,null)], null);
}));

(cljs.core.async.t_cljs$core$async35674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35674");

(cljs.core.async.t_cljs$core$async35674.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35674.
 */
cljs.core.async.__GT_t_cljs$core$async35674 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35674(f__$1,ch__$1,meta35675){
return (new cljs.core.async.t_cljs$core$async35674(f__$1,ch__$1,meta35675));
});

}

return (new cljs.core.async.t_cljs$core$async35674(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35680 = (function (p,ch,meta35681){
this.p = p;
this.ch = ch;
this.meta35681 = meta35681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35682,meta35681__$1){
var self__ = this;
var _35682__$1 = this;
return (new cljs.core.async.t_cljs$core$async35680(self__.p,self__.ch,meta35681__$1));
}));

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35682){
var self__ = this;
var _35682__$1 = this;
return self__.meta35681;
}));

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35681","meta35681",-1347050001,null)], null);
}));

(cljs.core.async.t_cljs$core$async35680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35680");

(cljs.core.async.t_cljs$core$async35680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35680.
 */
cljs.core.async.__GT_t_cljs$core$async35680 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35680(p__$1,ch__$1,meta35681){
return (new cljs.core.async.t_cljs$core$async35680(p__$1,ch__$1,meta35681));
});

}

return (new cljs.core.async.t_cljs$core$async35680(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35696 = arguments.length;
switch (G__35696) {
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
var c__33475__auto___37172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35717){
var state_val_35718 = (state_35717[(1)]);
if((state_val_35718 === (7))){
var inst_35713 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35722_37173 = state_35717__$1;
(statearr_35722_37173[(2)] = inst_35713);

(statearr_35722_37173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (1))){
var state_35717__$1 = state_35717;
var statearr_35723_37174 = state_35717__$1;
(statearr_35723_37174[(2)] = null);

(statearr_35723_37174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (4))){
var inst_35699 = (state_35717[(7)]);
var inst_35699__$1 = (state_35717[(2)]);
var inst_35700 = (inst_35699__$1 == null);
var state_35717__$1 = (function (){var statearr_35725 = state_35717;
(statearr_35725[(7)] = inst_35699__$1);

return statearr_35725;
})();
if(cljs.core.truth_(inst_35700)){
var statearr_35726_37178 = state_35717__$1;
(statearr_35726_37178[(1)] = (5));

} else {
var statearr_35727_37179 = state_35717__$1;
(statearr_35727_37179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (6))){
var inst_35699 = (state_35717[(7)]);
var inst_35704 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35699) : p.call(null,inst_35699));
var state_35717__$1 = state_35717;
if(cljs.core.truth_(inst_35704)){
var statearr_35728_37180 = state_35717__$1;
(statearr_35728_37180[(1)] = (8));

} else {
var statearr_35731_37181 = state_35717__$1;
(statearr_35731_37181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (3))){
var inst_35715 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35717__$1,inst_35715);
} else {
if((state_val_35718 === (2))){
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35717__$1,(4),ch);
} else {
if((state_val_35718 === (11))){
var inst_35707 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35735_37185 = state_35717__$1;
(statearr_35735_37185[(2)] = inst_35707);

(statearr_35735_37185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (9))){
var state_35717__$1 = state_35717;
var statearr_35737_37188 = state_35717__$1;
(statearr_35737_37188[(2)] = null);

(statearr_35737_37188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (5))){
var inst_35702 = cljs.core.async.close_BANG_(out);
var state_35717__$1 = state_35717;
var statearr_35738_37190 = state_35717__$1;
(statearr_35738_37190[(2)] = inst_35702);

(statearr_35738_37190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (10))){
var inst_35710 = (state_35717[(2)]);
var state_35717__$1 = (function (){var statearr_35739 = state_35717;
(statearr_35739[(8)] = inst_35710);

return statearr_35739;
})();
var statearr_35740_37191 = state_35717__$1;
(statearr_35740_37191[(2)] = null);

(statearr_35740_37191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (8))){
var inst_35699 = (state_35717[(7)]);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35717__$1,(11),out,inst_35699);
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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_35743 = [null,null,null,null,null,null,null,null,null];
(statearr_35743[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_35743[(1)] = (1));

return statearr_35743;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_35717){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35717);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35744){var ex__33193__auto__ = e35744;
var statearr_35745_37196 = state_35717;
(statearr_35745_37196[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35717[(4)]))){
var statearr_35746_37197 = state_35717;
(statearr_35746_37197[(1)] = cljs.core.first((state_35717[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37198 = state_35717;
state_35717 = G__37198;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_35717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_35717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35747 = f__33476__auto__();
(statearr_35747[(6)] = c__33475__auto___37172);

return statearr_35747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35749 = arguments.length;
switch (G__35749) {
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
var c__33475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35815){
var state_val_35816 = (state_35815[(1)]);
if((state_val_35816 === (7))){
var inst_35810 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35818_37208 = state_35815__$1;
(statearr_35818_37208[(2)] = inst_35810);

(statearr_35818_37208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (20))){
var inst_35780 = (state_35815[(7)]);
var inst_35791 = (state_35815[(2)]);
var inst_35792 = cljs.core.next(inst_35780);
var inst_35764 = inst_35792;
var inst_35765 = null;
var inst_35766 = (0);
var inst_35767 = (0);
var state_35815__$1 = (function (){var statearr_35819 = state_35815;
(statearr_35819[(8)] = inst_35764);

(statearr_35819[(9)] = inst_35791);

(statearr_35819[(10)] = inst_35767);

(statearr_35819[(11)] = inst_35765);

(statearr_35819[(12)] = inst_35766);

return statearr_35819;
})();
var statearr_35821_37216 = state_35815__$1;
(statearr_35821_37216[(2)] = null);

(statearr_35821_37216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (1))){
var state_35815__$1 = state_35815;
var statearr_35823_37223 = state_35815__$1;
(statearr_35823_37223[(2)] = null);

(statearr_35823_37223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (4))){
var inst_35753 = (state_35815[(13)]);
var inst_35753__$1 = (state_35815[(2)]);
var inst_35754 = (inst_35753__$1 == null);
var state_35815__$1 = (function (){var statearr_35824 = state_35815;
(statearr_35824[(13)] = inst_35753__$1);

return statearr_35824;
})();
if(cljs.core.truth_(inst_35754)){
var statearr_35825_37225 = state_35815__$1;
(statearr_35825_37225[(1)] = (5));

} else {
var statearr_35826_37226 = state_35815__$1;
(statearr_35826_37226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (15))){
var state_35815__$1 = state_35815;
var statearr_35830_37227 = state_35815__$1;
(statearr_35830_37227[(2)] = null);

(statearr_35830_37227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (21))){
var state_35815__$1 = state_35815;
var statearr_35831_37228 = state_35815__$1;
(statearr_35831_37228[(2)] = null);

(statearr_35831_37228[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (13))){
var inst_35764 = (state_35815[(8)]);
var inst_35767 = (state_35815[(10)]);
var inst_35765 = (state_35815[(11)]);
var inst_35766 = (state_35815[(12)]);
var inst_35774 = (state_35815[(2)]);
var inst_35777 = (inst_35767 + (1));
var tmp35827 = inst_35764;
var tmp35828 = inst_35765;
var tmp35829 = inst_35766;
var inst_35764__$1 = tmp35827;
var inst_35765__$1 = tmp35828;
var inst_35766__$1 = tmp35829;
var inst_35767__$1 = inst_35777;
var state_35815__$1 = (function (){var statearr_35832 = state_35815;
(statearr_35832[(8)] = inst_35764__$1);

(statearr_35832[(10)] = inst_35767__$1);

(statearr_35832[(11)] = inst_35765__$1);

(statearr_35832[(12)] = inst_35766__$1);

(statearr_35832[(14)] = inst_35774);

return statearr_35832;
})();
var statearr_35833_37229 = state_35815__$1;
(statearr_35833_37229[(2)] = null);

(statearr_35833_37229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (22))){
var state_35815__$1 = state_35815;
var statearr_35834_37230 = state_35815__$1;
(statearr_35834_37230[(2)] = null);

(statearr_35834_37230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (6))){
var inst_35753 = (state_35815[(13)]);
var inst_35762 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35753) : f.call(null,inst_35753));
var inst_35763 = cljs.core.seq(inst_35762);
var inst_35764 = inst_35763;
var inst_35765 = null;
var inst_35766 = (0);
var inst_35767 = (0);
var state_35815__$1 = (function (){var statearr_35839 = state_35815;
(statearr_35839[(8)] = inst_35764);

(statearr_35839[(10)] = inst_35767);

(statearr_35839[(11)] = inst_35765);

(statearr_35839[(12)] = inst_35766);

return statearr_35839;
})();
var statearr_35842_37231 = state_35815__$1;
(statearr_35842_37231[(2)] = null);

(statearr_35842_37231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (17))){
var inst_35780 = (state_35815[(7)]);
var inst_35784 = cljs.core.chunk_first(inst_35780);
var inst_35785 = cljs.core.chunk_rest(inst_35780);
var inst_35786 = cljs.core.count(inst_35784);
var inst_35764 = inst_35785;
var inst_35765 = inst_35784;
var inst_35766 = inst_35786;
var inst_35767 = (0);
var state_35815__$1 = (function (){var statearr_35845 = state_35815;
(statearr_35845[(8)] = inst_35764);

(statearr_35845[(10)] = inst_35767);

(statearr_35845[(11)] = inst_35765);

(statearr_35845[(12)] = inst_35766);

return statearr_35845;
})();
var statearr_35850_37232 = state_35815__$1;
(statearr_35850_37232[(2)] = null);

(statearr_35850_37232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (3))){
var inst_35812 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35815__$1,inst_35812);
} else {
if((state_val_35816 === (12))){
var inst_35800 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35855_37233 = state_35815__$1;
(statearr_35855_37233[(2)] = inst_35800);

(statearr_35855_37233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (2))){
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35815__$1,(4),in$);
} else {
if((state_val_35816 === (23))){
var inst_35808 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35858_37240 = state_35815__$1;
(statearr_35858_37240[(2)] = inst_35808);

(statearr_35858_37240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (19))){
var inst_35795 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35860_37241 = state_35815__$1;
(statearr_35860_37241[(2)] = inst_35795);

(statearr_35860_37241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (11))){
var inst_35764 = (state_35815[(8)]);
var inst_35780 = (state_35815[(7)]);
var inst_35780__$1 = cljs.core.seq(inst_35764);
var state_35815__$1 = (function (){var statearr_35861 = state_35815;
(statearr_35861[(7)] = inst_35780__$1);

return statearr_35861;
})();
if(inst_35780__$1){
var statearr_35862_37243 = state_35815__$1;
(statearr_35862_37243[(1)] = (14));

} else {
var statearr_35863_37244 = state_35815__$1;
(statearr_35863_37244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (9))){
var inst_35802 = (state_35815[(2)]);
var inst_35803 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35815__$1 = (function (){var statearr_35870 = state_35815;
(statearr_35870[(15)] = inst_35802);

return statearr_35870;
})();
if(cljs.core.truth_(inst_35803)){
var statearr_35876_37245 = state_35815__$1;
(statearr_35876_37245[(1)] = (21));

} else {
var statearr_35877_37246 = state_35815__$1;
(statearr_35877_37246[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (5))){
var inst_35756 = cljs.core.async.close_BANG_(out);
var state_35815__$1 = state_35815;
var statearr_35881_37247 = state_35815__$1;
(statearr_35881_37247[(2)] = inst_35756);

(statearr_35881_37247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (14))){
var inst_35780 = (state_35815[(7)]);
var inst_35782 = cljs.core.chunked_seq_QMARK_(inst_35780);
var state_35815__$1 = state_35815;
if(inst_35782){
var statearr_35883_37248 = state_35815__$1;
(statearr_35883_37248[(1)] = (17));

} else {
var statearr_35885_37249 = state_35815__$1;
(statearr_35885_37249[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (16))){
var inst_35798 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35888_37250 = state_35815__$1;
(statearr_35888_37250[(2)] = inst_35798);

(statearr_35888_37250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (10))){
var inst_35767 = (state_35815[(10)]);
var inst_35765 = (state_35815[(11)]);
var inst_35772 = cljs.core._nth(inst_35765,inst_35767);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35815__$1,(13),out,inst_35772);
} else {
if((state_val_35816 === (18))){
var inst_35780 = (state_35815[(7)]);
var inst_35789 = cljs.core.first(inst_35780);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35815__$1,(20),out,inst_35789);
} else {
if((state_val_35816 === (8))){
var inst_35767 = (state_35815[(10)]);
var inst_35766 = (state_35815[(12)]);
var inst_35769 = (inst_35767 < inst_35766);
var inst_35770 = inst_35769;
var state_35815__$1 = state_35815;
if(cljs.core.truth_(inst_35770)){
var statearr_35893_37259 = state_35815__$1;
(statearr_35893_37259[(1)] = (10));

} else {
var statearr_35894_37260 = state_35815__$1;
(statearr_35894_37260[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33190__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33190__auto____0 = (function (){
var statearr_35897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35897[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33190__auto__);

(statearr_35897[(1)] = (1));

return statearr_35897;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33190__auto____1 = (function (state_35815){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35815);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e35899){var ex__33193__auto__ = e35899;
var statearr_35900_37261 = state_35815;
(statearr_35900_37261[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35815[(4)]))){
var statearr_35901_37262 = state_35815;
(statearr_35901_37262[(1)] = cljs.core.first((state_35815[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37263 = state_35815;
state_35815 = G__37263;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33190__auto__ = function(state_35815){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33190__auto____1.call(this,state_35815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33190__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33190__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_35902 = f__33476__auto__();
(statearr_35902[(6)] = c__33475__auto__);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));

return c__33475__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35904 = arguments.length;
switch (G__35904) {
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
var G__35917 = arguments.length;
switch (G__35917) {
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
var G__35932 = arguments.length;
switch (G__35932) {
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
var c__33475__auto___37275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_35965){
var state_val_35966 = (state_35965[(1)]);
if((state_val_35966 === (7))){
var inst_35959 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35968_37276 = state_35965__$1;
(statearr_35968_37276[(2)] = inst_35959);

(statearr_35968_37276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (1))){
var inst_35939 = null;
var state_35965__$1 = (function (){var statearr_35971 = state_35965;
(statearr_35971[(7)] = inst_35939);

return statearr_35971;
})();
var statearr_35972_37277 = state_35965__$1;
(statearr_35972_37277[(2)] = null);

(statearr_35972_37277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (4))){
var inst_35942 = (state_35965[(8)]);
var inst_35942__$1 = (state_35965[(2)]);
var inst_35944 = (inst_35942__$1 == null);
var inst_35945 = cljs.core.not(inst_35944);
var state_35965__$1 = (function (){var statearr_35974 = state_35965;
(statearr_35974[(8)] = inst_35942__$1);

return statearr_35974;
})();
if(inst_35945){
var statearr_35977_37279 = state_35965__$1;
(statearr_35977_37279[(1)] = (5));

} else {
var statearr_35978_37280 = state_35965__$1;
(statearr_35978_37280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (6))){
var state_35965__$1 = state_35965;
var statearr_35979_37281 = state_35965__$1;
(statearr_35979_37281[(2)] = null);

(statearr_35979_37281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (3))){
var inst_35961 = (state_35965[(2)]);
var inst_35962 = cljs.core.async.close_BANG_(out);
var state_35965__$1 = (function (){var statearr_35983 = state_35965;
(statearr_35983[(9)] = inst_35961);

return statearr_35983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35965__$1,inst_35962);
} else {
if((state_val_35966 === (2))){
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35965__$1,(4),ch);
} else {
if((state_val_35966 === (11))){
var inst_35942 = (state_35965[(8)]);
var inst_35953 = (state_35965[(2)]);
var inst_35939 = inst_35942;
var state_35965__$1 = (function (){var statearr_35985 = state_35965;
(statearr_35985[(10)] = inst_35953);

(statearr_35985[(7)] = inst_35939);

return statearr_35985;
})();
var statearr_35986_37283 = state_35965__$1;
(statearr_35986_37283[(2)] = null);

(statearr_35986_37283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (9))){
var inst_35942 = (state_35965[(8)]);
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35965__$1,(11),out,inst_35942);
} else {
if((state_val_35966 === (5))){
var inst_35942 = (state_35965[(8)]);
var inst_35939 = (state_35965[(7)]);
var inst_35947 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35942,inst_35939);
var state_35965__$1 = state_35965;
if(inst_35947){
var statearr_35992_37284 = state_35965__$1;
(statearr_35992_37284[(1)] = (8));

} else {
var statearr_35993_37286 = state_35965__$1;
(statearr_35993_37286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (10))){
var inst_35956 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35995_37287 = state_35965__$1;
(statearr_35995_37287[(2)] = inst_35956);

(statearr_35995_37287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (8))){
var inst_35939 = (state_35965[(7)]);
var tmp35987 = inst_35939;
var inst_35939__$1 = tmp35987;
var state_35965__$1 = (function (){var statearr_35998 = state_35965;
(statearr_35998[(7)] = inst_35939__$1);

return statearr_35998;
})();
var statearr_35999_37288 = state_35965__$1;
(statearr_35999_37288[(2)] = null);

(statearr_35999_37288[(1)] = (2));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_36004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36004[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_36004[(1)] = (1));

return statearr_36004;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_35965){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_35965);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e36006){var ex__33193__auto__ = e36006;
var statearr_36007_37292 = state_35965;
(statearr_36007_37292[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_35965[(4)]))){
var statearr_36010_37293 = state_35965;
(statearr_36010_37293[(1)] = cljs.core.first((state_35965[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37295 = state_35965;
state_35965 = G__37295;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_35965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_35965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_36015 = f__33476__auto__();
(statearr_36015[(6)] = c__33475__auto___37275);

return statearr_36015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36021 = arguments.length;
switch (G__36021) {
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
var c__33475__auto___37303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_36070){
var state_val_36071 = (state_36070[(1)]);
if((state_val_36071 === (7))){
var inst_36066 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36079_37306 = state_36070__$1;
(statearr_36079_37306[(2)] = inst_36066);

(statearr_36079_37306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (1))){
var inst_36031 = (new Array(n));
var inst_36033 = inst_36031;
var inst_36034 = (0);
var state_36070__$1 = (function (){var statearr_36083 = state_36070;
(statearr_36083[(7)] = inst_36034);

(statearr_36083[(8)] = inst_36033);

return statearr_36083;
})();
var statearr_36085_37307 = state_36070__$1;
(statearr_36085_37307[(2)] = null);

(statearr_36085_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (4))){
var inst_36038 = (state_36070[(9)]);
var inst_36038__$1 = (state_36070[(2)]);
var inst_36039 = (inst_36038__$1 == null);
var inst_36040 = cljs.core.not(inst_36039);
var state_36070__$1 = (function (){var statearr_36088 = state_36070;
(statearr_36088[(9)] = inst_36038__$1);

return statearr_36088;
})();
if(inst_36040){
var statearr_36089_37309 = state_36070__$1;
(statearr_36089_37309[(1)] = (5));

} else {
var statearr_36090_37310 = state_36070__$1;
(statearr_36090_37310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (15))){
var inst_36060 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36095_37311 = state_36070__$1;
(statearr_36095_37311[(2)] = inst_36060);

(statearr_36095_37311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (13))){
var state_36070__$1 = state_36070;
var statearr_36102_37318 = state_36070__$1;
(statearr_36102_37318[(2)] = null);

(statearr_36102_37318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (6))){
var inst_36034 = (state_36070[(7)]);
var inst_36056 = (inst_36034 > (0));
var state_36070__$1 = state_36070;
if(cljs.core.truth_(inst_36056)){
var statearr_36103_37319 = state_36070__$1;
(statearr_36103_37319[(1)] = (12));

} else {
var statearr_36104_37320 = state_36070__$1;
(statearr_36104_37320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (3))){
var inst_36068 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36070__$1,inst_36068);
} else {
if((state_val_36071 === (12))){
var inst_36033 = (state_36070[(8)]);
var inst_36058 = cljs.core.vec(inst_36033);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36070__$1,(15),out,inst_36058);
} else {
if((state_val_36071 === (2))){
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36070__$1,(4),ch);
} else {
if((state_val_36071 === (11))){
var inst_36050 = (state_36070[(2)]);
var inst_36051 = (new Array(n));
var inst_36033 = inst_36051;
var inst_36034 = (0);
var state_36070__$1 = (function (){var statearr_36113 = state_36070;
(statearr_36113[(10)] = inst_36050);

(statearr_36113[(7)] = inst_36034);

(statearr_36113[(8)] = inst_36033);

return statearr_36113;
})();
var statearr_36119_37324 = state_36070__$1;
(statearr_36119_37324[(2)] = null);

(statearr_36119_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (9))){
var inst_36033 = (state_36070[(8)]);
var inst_36048 = cljs.core.vec(inst_36033);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36070__$1,(11),out,inst_36048);
} else {
if((state_val_36071 === (5))){
var inst_36034 = (state_36070[(7)]);
var inst_36038 = (state_36070[(9)]);
var inst_36043 = (state_36070[(11)]);
var inst_36033 = (state_36070[(8)]);
var inst_36042 = (inst_36033[inst_36034] = inst_36038);
var inst_36043__$1 = (inst_36034 + (1));
var inst_36044 = (inst_36043__$1 < n);
var state_36070__$1 = (function (){var statearr_36133 = state_36070;
(statearr_36133[(12)] = inst_36042);

(statearr_36133[(11)] = inst_36043__$1);

return statearr_36133;
})();
if(cljs.core.truth_(inst_36044)){
var statearr_36135_37328 = state_36070__$1;
(statearr_36135_37328[(1)] = (8));

} else {
var statearr_36136_37329 = state_36070__$1;
(statearr_36136_37329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (14))){
var inst_36063 = (state_36070[(2)]);
var inst_36064 = cljs.core.async.close_BANG_(out);
var state_36070__$1 = (function (){var statearr_36142 = state_36070;
(statearr_36142[(13)] = inst_36063);

return statearr_36142;
})();
var statearr_36143_37330 = state_36070__$1;
(statearr_36143_37330[(2)] = inst_36064);

(statearr_36143_37330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (10))){
var inst_36054 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36146_37331 = state_36070__$1;
(statearr_36146_37331[(2)] = inst_36054);

(statearr_36146_37331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (8))){
var inst_36043 = (state_36070[(11)]);
var inst_36033 = (state_36070[(8)]);
var tmp36141 = inst_36033;
var inst_36033__$1 = tmp36141;
var inst_36034 = inst_36043;
var state_36070__$1 = (function (){var statearr_36151 = state_36070;
(statearr_36151[(7)] = inst_36034);

(statearr_36151[(8)] = inst_36033__$1);

return statearr_36151;
})();
var statearr_36153_37332 = state_36070__$1;
(statearr_36153_37332[(2)] = null);

(statearr_36153_37332[(1)] = (2));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_36161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36161[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_36161[(1)] = (1));

return statearr_36161;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_36070){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_36070);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e36162){var ex__33193__auto__ = e36162;
var statearr_36164_37334 = state_36070;
(statearr_36164_37334[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_36070[(4)]))){
var statearr_36166_37335 = state_36070;
(statearr_36166_37335[(1)] = cljs.core.first((state_36070[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37336 = state_36070;
state_36070 = G__37336;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_36070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_36070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_36174 = f__33476__auto__();
(statearr_36174[(6)] = c__33475__auto___37303);

return statearr_36174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36179 = arguments.length;
switch (G__36179) {
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
var c__33475__auto___37341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_36235){
var state_val_36236 = (state_36235[(1)]);
if((state_val_36236 === (7))){
var inst_36231 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36237_37342 = state_36235__$1;
(statearr_36237_37342[(2)] = inst_36231);

(statearr_36237_37342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (1))){
var inst_36190 = [];
var inst_36191 = inst_36190;
var inst_36192 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36235__$1 = (function (){var statearr_36238 = state_36235;
(statearr_36238[(7)] = inst_36191);

(statearr_36238[(8)] = inst_36192);

return statearr_36238;
})();
var statearr_36241_37343 = state_36235__$1;
(statearr_36241_37343[(2)] = null);

(statearr_36241_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (4))){
var inst_36195 = (state_36235[(9)]);
var inst_36195__$1 = (state_36235[(2)]);
var inst_36196 = (inst_36195__$1 == null);
var inst_36197 = cljs.core.not(inst_36196);
var state_36235__$1 = (function (){var statearr_36246 = state_36235;
(statearr_36246[(9)] = inst_36195__$1);

return statearr_36246;
})();
if(inst_36197){
var statearr_36249_37344 = state_36235__$1;
(statearr_36249_37344[(1)] = (5));

} else {
var statearr_36250_37345 = state_36235__$1;
(statearr_36250_37345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (15))){
var inst_36225 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36251_37346 = state_36235__$1;
(statearr_36251_37346[(2)] = inst_36225);

(statearr_36251_37346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (13))){
var state_36235__$1 = state_36235;
var statearr_36252_37347 = state_36235__$1;
(statearr_36252_37347[(2)] = null);

(statearr_36252_37347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (6))){
var inst_36191 = (state_36235[(7)]);
var inst_36220 = inst_36191.length;
var inst_36221 = (inst_36220 > (0));
var state_36235__$1 = state_36235;
if(cljs.core.truth_(inst_36221)){
var statearr_36253_37348 = state_36235__$1;
(statearr_36253_37348[(1)] = (12));

} else {
var statearr_36254_37349 = state_36235__$1;
(statearr_36254_37349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (3))){
var inst_36233 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36235__$1,inst_36233);
} else {
if((state_val_36236 === (12))){
var inst_36191 = (state_36235[(7)]);
var inst_36223 = cljs.core.vec(inst_36191);
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36235__$1,(15),out,inst_36223);
} else {
if((state_val_36236 === (2))){
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36235__$1,(4),ch);
} else {
if((state_val_36236 === (11))){
var inst_36195 = (state_36235[(9)]);
var inst_36201 = (state_36235[(10)]);
var inst_36212 = (state_36235[(2)]);
var inst_36214 = [];
var inst_36215 = inst_36214.push(inst_36195);
var inst_36191 = inst_36214;
var inst_36192 = inst_36201;
var state_36235__$1 = (function (){var statearr_36258 = state_36235;
(statearr_36258[(11)] = inst_36215);

(statearr_36258[(12)] = inst_36212);

(statearr_36258[(7)] = inst_36191);

(statearr_36258[(8)] = inst_36192);

return statearr_36258;
})();
var statearr_36262_37354 = state_36235__$1;
(statearr_36262_37354[(2)] = null);

(statearr_36262_37354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (9))){
var inst_36191 = (state_36235[(7)]);
var inst_36210 = cljs.core.vec(inst_36191);
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36235__$1,(11),out,inst_36210);
} else {
if((state_val_36236 === (5))){
var inst_36195 = (state_36235[(9)]);
var inst_36201 = (state_36235[(10)]);
var inst_36192 = (state_36235[(8)]);
var inst_36201__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36195) : f.call(null,inst_36195));
var inst_36203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36201__$1,inst_36192);
var inst_36204 = cljs.core.keyword_identical_QMARK_(inst_36192,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36205 = ((inst_36203) || (inst_36204));
var state_36235__$1 = (function (){var statearr_36266 = state_36235;
(statearr_36266[(10)] = inst_36201__$1);

return statearr_36266;
})();
if(cljs.core.truth_(inst_36205)){
var statearr_36267_37361 = state_36235__$1;
(statearr_36267_37361[(1)] = (8));

} else {
var statearr_36268_37362 = state_36235__$1;
(statearr_36268_37362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (14))){
var inst_36228 = (state_36235[(2)]);
var inst_36229 = cljs.core.async.close_BANG_(out);
var state_36235__$1 = (function (){var statearr_36270 = state_36235;
(statearr_36270[(13)] = inst_36228);

return statearr_36270;
})();
var statearr_36271_37363 = state_36235__$1;
(statearr_36271_37363[(2)] = inst_36229);

(statearr_36271_37363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (10))){
var inst_36218 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36276_37364 = state_36235__$1;
(statearr_36276_37364[(2)] = inst_36218);

(statearr_36276_37364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (8))){
var inst_36195 = (state_36235[(9)]);
var inst_36191 = (state_36235[(7)]);
var inst_36201 = (state_36235[(10)]);
var inst_36207 = inst_36191.push(inst_36195);
var tmp36269 = inst_36191;
var inst_36191__$1 = tmp36269;
var inst_36192 = inst_36201;
var state_36235__$1 = (function (){var statearr_36278 = state_36235;
(statearr_36278[(14)] = inst_36207);

(statearr_36278[(7)] = inst_36191__$1);

(statearr_36278[(8)] = inst_36192);

return statearr_36278;
})();
var statearr_36279_37365 = state_36235__$1;
(statearr_36279_37365[(2)] = null);

(statearr_36279_37365[(1)] = (2));


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
var cljs$core$async$state_machine__33190__auto__ = null;
var cljs$core$async$state_machine__33190__auto____0 = (function (){
var statearr_36287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36287[(0)] = cljs$core$async$state_machine__33190__auto__);

(statearr_36287[(1)] = (1));

return statearr_36287;
});
var cljs$core$async$state_machine__33190__auto____1 = (function (state_36235){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_36235);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e36294){var ex__33193__auto__ = e36294;
var statearr_36299_37366 = state_36235;
(statearr_36299_37366[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_36235[(4)]))){
var statearr_36300_37367 = state_36235;
(statearr_36300_37367[(1)] = cljs.core.first((state_36235[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37368 = state_36235;
state_36235 = G__37368;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
cljs$core$async$state_machine__33190__auto__ = function(state_36235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33190__auto____1.call(this,state_36235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33190__auto____0;
cljs$core$async$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33190__auto____1;
return cljs$core$async$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_36304 = f__33476__auto__();
(statearr_36304[(6)] = c__33475__auto___37341);

return statearr_36304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
