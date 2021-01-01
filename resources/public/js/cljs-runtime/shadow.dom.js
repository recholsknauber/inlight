goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37333 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37333(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37339 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37339(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36403 = coll;
var G__36404 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36403,G__36404) : shadow.dom.lazy_native_coll_seq.call(null,G__36403,G__36404));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36439 = arguments.length;
switch (G__36439) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36448 = arguments.length;
switch (G__36448) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36452 = arguments.length;
switch (G__36452) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36464 = arguments.length;
switch (G__36464) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36483 = arguments.length;
switch (G__36483) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36497 = arguments.length;
switch (G__36497) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36505){if((e36505 instanceof Object)){
var e = e36505;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36505;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36513 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36514 = null;
var count__36515 = (0);
var i__36516 = (0);
while(true){
if((i__36516 < count__36515)){
var el = chunk__36514.cljs$core$IIndexed$_nth$arity$2(null,i__36516);
var handler_37369__$1 = ((function (seq__36513,chunk__36514,count__36515,i__36516,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36513,chunk__36514,count__36515,i__36516,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37369__$1);


var G__37370 = seq__36513;
var G__37371 = chunk__36514;
var G__37372 = count__36515;
var G__37373 = (i__36516 + (1));
seq__36513 = G__37370;
chunk__36514 = G__37371;
count__36515 = G__37372;
i__36516 = G__37373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36513);
if(temp__5735__auto__){
var seq__36513__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36513__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36513__$1);
var G__37374 = cljs.core.chunk_rest(seq__36513__$1);
var G__37375 = c__4556__auto__;
var G__37376 = cljs.core.count(c__4556__auto__);
var G__37377 = (0);
seq__36513 = G__37374;
chunk__36514 = G__37375;
count__36515 = G__37376;
i__36516 = G__37377;
continue;
} else {
var el = cljs.core.first(seq__36513__$1);
var handler_37378__$1 = ((function (seq__36513,chunk__36514,count__36515,i__36516,el,seq__36513__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36513,chunk__36514,count__36515,i__36516,el,seq__36513__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37378__$1);


var G__37379 = cljs.core.next(seq__36513__$1);
var G__37380 = null;
var G__37381 = (0);
var G__37382 = (0);
seq__36513 = G__37379;
chunk__36514 = G__37380;
count__36515 = G__37381;
i__36516 = G__37382;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36537 = arguments.length;
switch (G__36537) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36546 = cljs.core.seq(events);
var chunk__36547 = null;
var count__36548 = (0);
var i__36549 = (0);
while(true){
if((i__36549 < count__36548)){
var vec__36563 = chunk__36547.cljs$core$IIndexed$_nth$arity$2(null,i__36549);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36563,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37384 = seq__36546;
var G__37385 = chunk__36547;
var G__37386 = count__36548;
var G__37387 = (i__36549 + (1));
seq__36546 = G__37384;
chunk__36547 = G__37385;
count__36548 = G__37386;
i__36549 = G__37387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36546);
if(temp__5735__auto__){
var seq__36546__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36546__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36546__$1);
var G__37392 = cljs.core.chunk_rest(seq__36546__$1);
var G__37393 = c__4556__auto__;
var G__37394 = cljs.core.count(c__4556__auto__);
var G__37395 = (0);
seq__36546 = G__37392;
chunk__36547 = G__37393;
count__36548 = G__37394;
i__36549 = G__37395;
continue;
} else {
var vec__36570 = cljs.core.first(seq__36546__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36570,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37396 = cljs.core.next(seq__36546__$1);
var G__37397 = null;
var G__37398 = (0);
var G__37399 = (0);
seq__36546 = G__37396;
chunk__36547 = G__37397;
count__36548 = G__37398;
i__36549 = G__37399;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36575 = cljs.core.seq(styles);
var chunk__36576 = null;
var count__36577 = (0);
var i__36578 = (0);
while(true){
if((i__36578 < count__36577)){
var vec__36590 = chunk__36576.cljs$core$IIndexed$_nth$arity$2(null,i__36578);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37400 = seq__36575;
var G__37401 = chunk__36576;
var G__37402 = count__36577;
var G__37403 = (i__36578 + (1));
seq__36575 = G__37400;
chunk__36576 = G__37401;
count__36577 = G__37402;
i__36578 = G__37403;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36575);
if(temp__5735__auto__){
var seq__36575__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36575__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36575__$1);
var G__37404 = cljs.core.chunk_rest(seq__36575__$1);
var G__37405 = c__4556__auto__;
var G__37406 = cljs.core.count(c__4556__auto__);
var G__37407 = (0);
seq__36575 = G__37404;
chunk__36576 = G__37405;
count__36577 = G__37406;
i__36578 = G__37407;
continue;
} else {
var vec__36597 = cljs.core.first(seq__36575__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36597,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37408 = cljs.core.next(seq__36575__$1);
var G__37409 = null;
var G__37410 = (0);
var G__37411 = (0);
seq__36575 = G__37408;
chunk__36576 = G__37409;
count__36577 = G__37410;
i__36578 = G__37411;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36602_37412 = key;
var G__36602_37413__$1 = (((G__36602_37412 instanceof cljs.core.Keyword))?G__36602_37412.fqn:null);
switch (G__36602_37413__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37415 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_37415,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_37415,"aria-");
}
})())){
el.setAttribute(ks_37415,value);
} else {
(el[ks_37415] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36623){
var map__36624 = p__36623;
var map__36624__$1 = (((((!((map__36624 == null))))?(((((map__36624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36624):map__36624);
var props = map__36624__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36624__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36627 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36632 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36632,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36632;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36635 = arguments.length;
switch (G__36635) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36638){
var vec__36640 = p__36638;
var seq__36641 = cljs.core.seq(vec__36640);
var first__36642 = cljs.core.first(seq__36641);
var seq__36641__$1 = cljs.core.next(seq__36641);
var nn = first__36642;
var first__36642__$1 = cljs.core.first(seq__36641__$1);
var seq__36641__$2 = cljs.core.next(seq__36641__$1);
var np = first__36642__$1;
var nc = seq__36641__$2;
var node = vec__36640;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36646 = nn;
var G__36647 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36646,G__36647) : create_fn.call(null,G__36646,G__36647));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36649 = nn;
var G__36650 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36649,G__36650) : create_fn.call(null,G__36649,G__36650));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36654 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36654,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36654,(1),null);
var seq__36657_37422 = cljs.core.seq(node_children);
var chunk__36658_37423 = null;
var count__36659_37424 = (0);
var i__36660_37425 = (0);
while(true){
if((i__36660_37425 < count__36659_37424)){
var child_struct_37427 = chunk__36658_37423.cljs$core$IIndexed$_nth$arity$2(null,i__36660_37425);
var children_37428 = shadow.dom.dom_node(child_struct_37427);
if(cljs.core.seq_QMARK_(children_37428)){
var seq__36699_37429 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37428));
var chunk__36701_37430 = null;
var count__36702_37431 = (0);
var i__36703_37432 = (0);
while(true){
if((i__36703_37432 < count__36702_37431)){
var child_37433 = chunk__36701_37430.cljs$core$IIndexed$_nth$arity$2(null,i__36703_37432);
if(cljs.core.truth_(child_37433)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37433);


var G__37434 = seq__36699_37429;
var G__37435 = chunk__36701_37430;
var G__37436 = count__36702_37431;
var G__37437 = (i__36703_37432 + (1));
seq__36699_37429 = G__37434;
chunk__36701_37430 = G__37435;
count__36702_37431 = G__37436;
i__36703_37432 = G__37437;
continue;
} else {
var G__37438 = seq__36699_37429;
var G__37439 = chunk__36701_37430;
var G__37440 = count__36702_37431;
var G__37441 = (i__36703_37432 + (1));
seq__36699_37429 = G__37438;
chunk__36701_37430 = G__37439;
count__36702_37431 = G__37440;
i__36703_37432 = G__37441;
continue;
}
} else {
var temp__5735__auto___37442 = cljs.core.seq(seq__36699_37429);
if(temp__5735__auto___37442){
var seq__36699_37443__$1 = temp__5735__auto___37442;
if(cljs.core.chunked_seq_QMARK_(seq__36699_37443__$1)){
var c__4556__auto___37444 = cljs.core.chunk_first(seq__36699_37443__$1);
var G__37445 = cljs.core.chunk_rest(seq__36699_37443__$1);
var G__37446 = c__4556__auto___37444;
var G__37447 = cljs.core.count(c__4556__auto___37444);
var G__37448 = (0);
seq__36699_37429 = G__37445;
chunk__36701_37430 = G__37446;
count__36702_37431 = G__37447;
i__36703_37432 = G__37448;
continue;
} else {
var child_37449 = cljs.core.first(seq__36699_37443__$1);
if(cljs.core.truth_(child_37449)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37449);


var G__37450 = cljs.core.next(seq__36699_37443__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__36699_37429 = G__37450;
chunk__36701_37430 = G__37451;
count__36702_37431 = G__37452;
i__36703_37432 = G__37453;
continue;
} else {
var G__37454 = cljs.core.next(seq__36699_37443__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__36699_37429 = G__37454;
chunk__36701_37430 = G__37455;
count__36702_37431 = G__37456;
i__36703_37432 = G__37457;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37428);
}


var G__37458 = seq__36657_37422;
var G__37459 = chunk__36658_37423;
var G__37460 = count__36659_37424;
var G__37461 = (i__36660_37425 + (1));
seq__36657_37422 = G__37458;
chunk__36658_37423 = G__37459;
count__36659_37424 = G__37460;
i__36660_37425 = G__37461;
continue;
} else {
var temp__5735__auto___37462 = cljs.core.seq(seq__36657_37422);
if(temp__5735__auto___37462){
var seq__36657_37463__$1 = temp__5735__auto___37462;
if(cljs.core.chunked_seq_QMARK_(seq__36657_37463__$1)){
var c__4556__auto___37464 = cljs.core.chunk_first(seq__36657_37463__$1);
var G__37465 = cljs.core.chunk_rest(seq__36657_37463__$1);
var G__37466 = c__4556__auto___37464;
var G__37467 = cljs.core.count(c__4556__auto___37464);
var G__37468 = (0);
seq__36657_37422 = G__37465;
chunk__36658_37423 = G__37466;
count__36659_37424 = G__37467;
i__36660_37425 = G__37468;
continue;
} else {
var child_struct_37469 = cljs.core.first(seq__36657_37463__$1);
var children_37470 = shadow.dom.dom_node(child_struct_37469);
if(cljs.core.seq_QMARK_(children_37470)){
var seq__36724_37471 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37470));
var chunk__36726_37472 = null;
var count__36727_37473 = (0);
var i__36728_37474 = (0);
while(true){
if((i__36728_37474 < count__36727_37473)){
var child_37475 = chunk__36726_37472.cljs$core$IIndexed$_nth$arity$2(null,i__36728_37474);
if(cljs.core.truth_(child_37475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37475);


var G__37476 = seq__36724_37471;
var G__37477 = chunk__36726_37472;
var G__37478 = count__36727_37473;
var G__37479 = (i__36728_37474 + (1));
seq__36724_37471 = G__37476;
chunk__36726_37472 = G__37477;
count__36727_37473 = G__37478;
i__36728_37474 = G__37479;
continue;
} else {
var G__37480 = seq__36724_37471;
var G__37481 = chunk__36726_37472;
var G__37482 = count__36727_37473;
var G__37483 = (i__36728_37474 + (1));
seq__36724_37471 = G__37480;
chunk__36726_37472 = G__37481;
count__36727_37473 = G__37482;
i__36728_37474 = G__37483;
continue;
}
} else {
var temp__5735__auto___37484__$1 = cljs.core.seq(seq__36724_37471);
if(temp__5735__auto___37484__$1){
var seq__36724_37485__$1 = temp__5735__auto___37484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36724_37485__$1)){
var c__4556__auto___37486 = cljs.core.chunk_first(seq__36724_37485__$1);
var G__37487 = cljs.core.chunk_rest(seq__36724_37485__$1);
var G__37488 = c__4556__auto___37486;
var G__37489 = cljs.core.count(c__4556__auto___37486);
var G__37490 = (0);
seq__36724_37471 = G__37487;
chunk__36726_37472 = G__37488;
count__36727_37473 = G__37489;
i__36728_37474 = G__37490;
continue;
} else {
var child_37491 = cljs.core.first(seq__36724_37485__$1);
if(cljs.core.truth_(child_37491)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37491);


var G__37492 = cljs.core.next(seq__36724_37485__$1);
var G__37493 = null;
var G__37494 = (0);
var G__37495 = (0);
seq__36724_37471 = G__37492;
chunk__36726_37472 = G__37493;
count__36727_37473 = G__37494;
i__36728_37474 = G__37495;
continue;
} else {
var G__37496 = cljs.core.next(seq__36724_37485__$1);
var G__37497 = null;
var G__37498 = (0);
var G__37499 = (0);
seq__36724_37471 = G__37496;
chunk__36726_37472 = G__37497;
count__36727_37473 = G__37498;
i__36728_37474 = G__37499;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37470);
}


var G__37500 = cljs.core.next(seq__36657_37463__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__36657_37422 = G__37500;
chunk__36658_37423 = G__37501;
count__36659_37424 = G__37502;
i__36660_37425 = G__37503;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36766 = cljs.core.seq(node);
var chunk__36767 = null;
var count__36768 = (0);
var i__36769 = (0);
while(true){
if((i__36769 < count__36768)){
var n = chunk__36767.cljs$core$IIndexed$_nth$arity$2(null,i__36769);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37506 = seq__36766;
var G__37507 = chunk__36767;
var G__37508 = count__36768;
var G__37509 = (i__36769 + (1));
seq__36766 = G__37506;
chunk__36767 = G__37507;
count__36768 = G__37508;
i__36769 = G__37509;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36766);
if(temp__5735__auto__){
var seq__36766__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36766__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36766__$1);
var G__37510 = cljs.core.chunk_rest(seq__36766__$1);
var G__37511 = c__4556__auto__;
var G__37512 = cljs.core.count(c__4556__auto__);
var G__37513 = (0);
seq__36766 = G__37510;
chunk__36767 = G__37511;
count__36768 = G__37512;
i__36769 = G__37513;
continue;
} else {
var n = cljs.core.first(seq__36766__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37515 = cljs.core.next(seq__36766__$1);
var G__37516 = null;
var G__37517 = (0);
var G__37518 = (0);
seq__36766 = G__37515;
chunk__36767 = G__37516;
count__36768 = G__37517;
i__36769 = G__37518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36782 = arguments.length;
switch (G__36782) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36786 = arguments.length;
switch (G__36786) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36815 = arguments.length;
switch (G__36815) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37525 = arguments.length;
var i__4737__auto___37526 = (0);
while(true){
if((i__4737__auto___37526 < len__4736__auto___37525)){
args__4742__auto__.push((arguments[i__4737__auto___37526]));

var G__37527 = (i__4737__auto___37526 + (1));
i__4737__auto___37526 = G__37527;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36837_37529 = cljs.core.seq(nodes);
var chunk__36838_37530 = null;
var count__36839_37531 = (0);
var i__36840_37532 = (0);
while(true){
if((i__36840_37532 < count__36839_37531)){
var node_37533 = chunk__36838_37530.cljs$core$IIndexed$_nth$arity$2(null,i__36840_37532);
fragment.appendChild(shadow.dom._to_dom(node_37533));


var G__37534 = seq__36837_37529;
var G__37535 = chunk__36838_37530;
var G__37536 = count__36839_37531;
var G__37537 = (i__36840_37532 + (1));
seq__36837_37529 = G__37534;
chunk__36838_37530 = G__37535;
count__36839_37531 = G__37536;
i__36840_37532 = G__37537;
continue;
} else {
var temp__5735__auto___37538 = cljs.core.seq(seq__36837_37529);
if(temp__5735__auto___37538){
var seq__36837_37539__$1 = temp__5735__auto___37538;
if(cljs.core.chunked_seq_QMARK_(seq__36837_37539__$1)){
var c__4556__auto___37540 = cljs.core.chunk_first(seq__36837_37539__$1);
var G__37541 = cljs.core.chunk_rest(seq__36837_37539__$1);
var G__37542 = c__4556__auto___37540;
var G__37543 = cljs.core.count(c__4556__auto___37540);
var G__37544 = (0);
seq__36837_37529 = G__37541;
chunk__36838_37530 = G__37542;
count__36839_37531 = G__37543;
i__36840_37532 = G__37544;
continue;
} else {
var node_37545 = cljs.core.first(seq__36837_37539__$1);
fragment.appendChild(shadow.dom._to_dom(node_37545));


var G__37547 = cljs.core.next(seq__36837_37539__$1);
var G__37548 = null;
var G__37549 = (0);
var G__37550 = (0);
seq__36837_37529 = G__37547;
chunk__36838_37530 = G__37548;
count__36839_37531 = G__37549;
i__36840_37532 = G__37550;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36828){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36828));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36864_37552 = cljs.core.seq(scripts);
var chunk__36865_37553 = null;
var count__36866_37554 = (0);
var i__36867_37555 = (0);
while(true){
if((i__36867_37555 < count__36866_37554)){
var vec__36887_37556 = chunk__36865_37553.cljs$core$IIndexed$_nth$arity$2(null,i__36867_37555);
var script_tag_37557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887_37556,(0),null);
var script_body_37558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887_37556,(1),null);
eval(script_body_37558);


var G__37559 = seq__36864_37552;
var G__37560 = chunk__36865_37553;
var G__37561 = count__36866_37554;
var G__37562 = (i__36867_37555 + (1));
seq__36864_37552 = G__37559;
chunk__36865_37553 = G__37560;
count__36866_37554 = G__37561;
i__36867_37555 = G__37562;
continue;
} else {
var temp__5735__auto___37563 = cljs.core.seq(seq__36864_37552);
if(temp__5735__auto___37563){
var seq__36864_37564__$1 = temp__5735__auto___37563;
if(cljs.core.chunked_seq_QMARK_(seq__36864_37564__$1)){
var c__4556__auto___37565 = cljs.core.chunk_first(seq__36864_37564__$1);
var G__37566 = cljs.core.chunk_rest(seq__36864_37564__$1);
var G__37567 = c__4556__auto___37565;
var G__37568 = cljs.core.count(c__4556__auto___37565);
var G__37569 = (0);
seq__36864_37552 = G__37566;
chunk__36865_37553 = G__37567;
count__36866_37554 = G__37568;
i__36867_37555 = G__37569;
continue;
} else {
var vec__36897_37570 = cljs.core.first(seq__36864_37564__$1);
var script_tag_37571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36897_37570,(0),null);
var script_body_37572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36897_37570,(1),null);
eval(script_body_37572);


var G__37573 = cljs.core.next(seq__36864_37564__$1);
var G__37574 = null;
var G__37575 = (0);
var G__37576 = (0);
seq__36864_37552 = G__37573;
chunk__36865_37553 = G__37574;
count__36866_37554 = G__37575;
i__36867_37555 = G__37576;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36901){
var vec__36904 = p__36901;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36924 = arguments.length;
switch (G__36924) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36948 = cljs.core.seq(style_keys);
var chunk__36949 = null;
var count__36950 = (0);
var i__36951 = (0);
while(true){
if((i__36951 < count__36950)){
var it = chunk__36949.cljs$core$IIndexed$_nth$arity$2(null,i__36951);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37588 = seq__36948;
var G__37589 = chunk__36949;
var G__37590 = count__36950;
var G__37591 = (i__36951 + (1));
seq__36948 = G__37588;
chunk__36949 = G__37589;
count__36950 = G__37590;
i__36951 = G__37591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36948);
if(temp__5735__auto__){
var seq__36948__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36948__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36948__$1);
var G__37595 = cljs.core.chunk_rest(seq__36948__$1);
var G__37596 = c__4556__auto__;
var G__37597 = cljs.core.count(c__4556__auto__);
var G__37598 = (0);
seq__36948 = G__37595;
chunk__36949 = G__37596;
count__36950 = G__37597;
i__36951 = G__37598;
continue;
} else {
var it = cljs.core.first(seq__36948__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37604 = cljs.core.next(seq__36948__$1);
var G__37605 = null;
var G__37606 = (0);
var G__37607 = (0);
seq__36948 = G__37604;
chunk__36949 = G__37605;
count__36950 = G__37606;
i__36951 = G__37607;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36957,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36961 = k36957;
var G__36961__$1 = (((G__36961 instanceof cljs.core.Keyword))?G__36961.fqn:null);
switch (G__36961__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36957,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36966){
var vec__36967 = p__36966;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36956){
var self__ = this;
var G__36956__$1 = this;
return (new cljs.core.RecordIter((0),G__36956__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36958,other36959){
var self__ = this;
var this36958__$1 = this;
return (((!((other36959 == null)))) && ((this36958__$1.constructor === other36959.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36958__$1.x,other36959.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36958__$1.y,other36959.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36958__$1.__extmap,other36959.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36956){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36989 = cljs.core.keyword_identical_QMARK_;
var expr__36990 = k__4388__auto__;
if(cljs.core.truth_((pred__36989.cljs$core$IFn$_invoke$arity$2 ? pred__36989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36990) : pred__36989.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36990)))){
return (new shadow.dom.Coordinate(G__36956,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36989.cljs$core$IFn$_invoke$arity$2 ? pred__36989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36990) : pred__36989.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36990)))){
return (new shadow.dom.Coordinate(self__.x,G__36956,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36956),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36956){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36956,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36960){
var extmap__4419__auto__ = (function (){var G__37001 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36960,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36960)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37001);
} else {
return G__37001;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36960),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36960),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37006,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37018 = k37006;
var G__37018__$1 = (((G__37018 instanceof cljs.core.Keyword))?G__37018.fqn:null);
switch (G__37018__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37006,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37024){
var vec__37025 = p__37024;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37025,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37025,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37005){
var self__ = this;
var G__37005__$1 = this;
return (new cljs.core.RecordIter((0),G__37005__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37007,other37008){
var self__ = this;
var this37007__$1 = this;
return (((!((other37008 == null)))) && ((this37007__$1.constructor === other37008.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37007__$1.w,other37008.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37007__$1.h,other37008.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37007__$1.__extmap,other37008.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37005){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37048 = cljs.core.keyword_identical_QMARK_;
var expr__37049 = k__4388__auto__;
if(cljs.core.truth_((pred__37048.cljs$core$IFn$_invoke$arity$2 ? pred__37048.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37049) : pred__37048.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37049)))){
return (new shadow.dom.Size(G__37005,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37048.cljs$core$IFn$_invoke$arity$2 ? pred__37048.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37049) : pred__37048.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37049)))){
return (new shadow.dom.Size(self__.w,G__37005,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37005),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37005){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37005,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37009){
var extmap__4419__auto__ = (function (){var G__37063 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37009,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37009)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37063);
} else {
return G__37063;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37009),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37009),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__37694 = (i + (1));
var G__37695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37694;
ret = G__37695;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37092){
var vec__37093 = p__37092;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37093,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37100 = arguments.length;
switch (G__37100) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37702 = ps;
var G__37703 = (i + (1));
el__$1 = G__37702;
i = G__37703;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37155 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37162_37710 = cljs.core.seq(props);
var chunk__37163_37711 = null;
var count__37164_37712 = (0);
var i__37165_37713 = (0);
while(true){
if((i__37165_37713 < count__37164_37712)){
var vec__37182_37717 = chunk__37163_37711.cljs$core$IIndexed$_nth$arity$2(null,i__37165_37713);
var k_37718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37182_37717,(0),null);
var v_37719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37182_37717,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37718);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37718),v_37719);


var G__37720 = seq__37162_37710;
var G__37721 = chunk__37163_37711;
var G__37722 = count__37164_37712;
var G__37723 = (i__37165_37713 + (1));
seq__37162_37710 = G__37720;
chunk__37163_37711 = G__37721;
count__37164_37712 = G__37722;
i__37165_37713 = G__37723;
continue;
} else {
var temp__5735__auto___37724 = cljs.core.seq(seq__37162_37710);
if(temp__5735__auto___37724){
var seq__37162_37725__$1 = temp__5735__auto___37724;
if(cljs.core.chunked_seq_QMARK_(seq__37162_37725__$1)){
var c__4556__auto___37726 = cljs.core.chunk_first(seq__37162_37725__$1);
var G__37727 = cljs.core.chunk_rest(seq__37162_37725__$1);
var G__37728 = c__4556__auto___37726;
var G__37729 = cljs.core.count(c__4556__auto___37726);
var G__37730 = (0);
seq__37162_37710 = G__37727;
chunk__37163_37711 = G__37728;
count__37164_37712 = G__37729;
i__37165_37713 = G__37730;
continue;
} else {
var vec__37193_37731 = cljs.core.first(seq__37162_37725__$1);
var k_37732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37193_37731,(0),null);
var v_37733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37193_37731,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37732);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37732),v_37733);


var G__37738 = cljs.core.next(seq__37162_37725__$1);
var G__37739 = null;
var G__37740 = (0);
var G__37741 = (0);
seq__37162_37710 = G__37738;
chunk__37163_37711 = G__37739;
count__37164_37712 = G__37740;
i__37165_37713 = G__37741;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37205 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37205,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37205,(1),null);
var seq__37209_37757 = cljs.core.seq(node_children);
var chunk__37211_37758 = null;
var count__37212_37759 = (0);
var i__37213_37760 = (0);
while(true){
if((i__37213_37760 < count__37212_37759)){
var child_struct_37766 = chunk__37211_37758.cljs$core$IIndexed$_nth$arity$2(null,i__37213_37760);
if((!((child_struct_37766 == null)))){
if(typeof child_struct_37766 === 'string'){
var text_37767 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37767),child_struct_37766].join(''));
} else {
var children_37768 = shadow.dom.svg_node(child_struct_37766);
if(cljs.core.seq_QMARK_(children_37768)){
var seq__37252_37769 = cljs.core.seq(children_37768);
var chunk__37254_37770 = null;
var count__37255_37771 = (0);
var i__37256_37772 = (0);
while(true){
if((i__37256_37772 < count__37255_37771)){
var child_37773 = chunk__37254_37770.cljs$core$IIndexed$_nth$arity$2(null,i__37256_37772);
if(cljs.core.truth_(child_37773)){
node.appendChild(child_37773);


var G__37777 = seq__37252_37769;
var G__37778 = chunk__37254_37770;
var G__37779 = count__37255_37771;
var G__37780 = (i__37256_37772 + (1));
seq__37252_37769 = G__37777;
chunk__37254_37770 = G__37778;
count__37255_37771 = G__37779;
i__37256_37772 = G__37780;
continue;
} else {
var G__37781 = seq__37252_37769;
var G__37782 = chunk__37254_37770;
var G__37783 = count__37255_37771;
var G__37784 = (i__37256_37772 + (1));
seq__37252_37769 = G__37781;
chunk__37254_37770 = G__37782;
count__37255_37771 = G__37783;
i__37256_37772 = G__37784;
continue;
}
} else {
var temp__5735__auto___37785 = cljs.core.seq(seq__37252_37769);
if(temp__5735__auto___37785){
var seq__37252_37786__$1 = temp__5735__auto___37785;
if(cljs.core.chunked_seq_QMARK_(seq__37252_37786__$1)){
var c__4556__auto___37787 = cljs.core.chunk_first(seq__37252_37786__$1);
var G__37788 = cljs.core.chunk_rest(seq__37252_37786__$1);
var G__37789 = c__4556__auto___37787;
var G__37790 = cljs.core.count(c__4556__auto___37787);
var G__37791 = (0);
seq__37252_37769 = G__37788;
chunk__37254_37770 = G__37789;
count__37255_37771 = G__37790;
i__37256_37772 = G__37791;
continue;
} else {
var child_37792 = cljs.core.first(seq__37252_37786__$1);
if(cljs.core.truth_(child_37792)){
node.appendChild(child_37792);


var G__37793 = cljs.core.next(seq__37252_37786__$1);
var G__37794 = null;
var G__37795 = (0);
var G__37796 = (0);
seq__37252_37769 = G__37793;
chunk__37254_37770 = G__37794;
count__37255_37771 = G__37795;
i__37256_37772 = G__37796;
continue;
} else {
var G__37797 = cljs.core.next(seq__37252_37786__$1);
var G__37798 = null;
var G__37799 = (0);
var G__37800 = (0);
seq__37252_37769 = G__37797;
chunk__37254_37770 = G__37798;
count__37255_37771 = G__37799;
i__37256_37772 = G__37800;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37768);
}
}


var G__37805 = seq__37209_37757;
var G__37806 = chunk__37211_37758;
var G__37807 = count__37212_37759;
var G__37808 = (i__37213_37760 + (1));
seq__37209_37757 = G__37805;
chunk__37211_37758 = G__37806;
count__37212_37759 = G__37807;
i__37213_37760 = G__37808;
continue;
} else {
var G__37810 = seq__37209_37757;
var G__37811 = chunk__37211_37758;
var G__37812 = count__37212_37759;
var G__37813 = (i__37213_37760 + (1));
seq__37209_37757 = G__37810;
chunk__37211_37758 = G__37811;
count__37212_37759 = G__37812;
i__37213_37760 = G__37813;
continue;
}
} else {
var temp__5735__auto___37818 = cljs.core.seq(seq__37209_37757);
if(temp__5735__auto___37818){
var seq__37209_37819__$1 = temp__5735__auto___37818;
if(cljs.core.chunked_seq_QMARK_(seq__37209_37819__$1)){
var c__4556__auto___37821 = cljs.core.chunk_first(seq__37209_37819__$1);
var G__37822 = cljs.core.chunk_rest(seq__37209_37819__$1);
var G__37823 = c__4556__auto___37821;
var G__37824 = cljs.core.count(c__4556__auto___37821);
var G__37825 = (0);
seq__37209_37757 = G__37822;
chunk__37211_37758 = G__37823;
count__37212_37759 = G__37824;
i__37213_37760 = G__37825;
continue;
} else {
var child_struct_37835 = cljs.core.first(seq__37209_37819__$1);
if((!((child_struct_37835 == null)))){
if(typeof child_struct_37835 === 'string'){
var text_37836 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37836),child_struct_37835].join(''));
} else {
var children_37838 = shadow.dom.svg_node(child_struct_37835);
if(cljs.core.seq_QMARK_(children_37838)){
var seq__37269_37843 = cljs.core.seq(children_37838);
var chunk__37271_37844 = null;
var count__37272_37845 = (0);
var i__37273_37846 = (0);
while(true){
if((i__37273_37846 < count__37272_37845)){
var child_37847 = chunk__37271_37844.cljs$core$IIndexed$_nth$arity$2(null,i__37273_37846);
if(cljs.core.truth_(child_37847)){
node.appendChild(child_37847);


var G__37848 = seq__37269_37843;
var G__37849 = chunk__37271_37844;
var G__37850 = count__37272_37845;
var G__37851 = (i__37273_37846 + (1));
seq__37269_37843 = G__37848;
chunk__37271_37844 = G__37849;
count__37272_37845 = G__37850;
i__37273_37846 = G__37851;
continue;
} else {
var G__37852 = seq__37269_37843;
var G__37853 = chunk__37271_37844;
var G__37854 = count__37272_37845;
var G__37855 = (i__37273_37846 + (1));
seq__37269_37843 = G__37852;
chunk__37271_37844 = G__37853;
count__37272_37845 = G__37854;
i__37273_37846 = G__37855;
continue;
}
} else {
var temp__5735__auto___37856__$1 = cljs.core.seq(seq__37269_37843);
if(temp__5735__auto___37856__$1){
var seq__37269_37857__$1 = temp__5735__auto___37856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37269_37857__$1)){
var c__4556__auto___37858 = cljs.core.chunk_first(seq__37269_37857__$1);
var G__37859 = cljs.core.chunk_rest(seq__37269_37857__$1);
var G__37860 = c__4556__auto___37858;
var G__37861 = cljs.core.count(c__4556__auto___37858);
var G__37862 = (0);
seq__37269_37843 = G__37859;
chunk__37271_37844 = G__37860;
count__37272_37845 = G__37861;
i__37273_37846 = G__37862;
continue;
} else {
var child_37863 = cljs.core.first(seq__37269_37857__$1);
if(cljs.core.truth_(child_37863)){
node.appendChild(child_37863);


var G__37864 = cljs.core.next(seq__37269_37857__$1);
var G__37865 = null;
var G__37866 = (0);
var G__37867 = (0);
seq__37269_37843 = G__37864;
chunk__37271_37844 = G__37865;
count__37272_37845 = G__37866;
i__37273_37846 = G__37867;
continue;
} else {
var G__37872 = cljs.core.next(seq__37269_37857__$1);
var G__37873 = null;
var G__37874 = (0);
var G__37875 = (0);
seq__37269_37843 = G__37872;
chunk__37271_37844 = G__37873;
count__37272_37845 = G__37874;
i__37273_37846 = G__37875;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37838);
}
}


var G__37877 = cljs.core.next(seq__37209_37819__$1);
var G__37878 = null;
var G__37879 = (0);
var G__37880 = (0);
seq__37209_37757 = G__37877;
chunk__37211_37758 = G__37878;
count__37212_37759 = G__37879;
i__37213_37760 = G__37880;
continue;
} else {
var G__37885 = cljs.core.next(seq__37209_37819__$1);
var G__37886 = null;
var G__37887 = (0);
var G__37888 = (0);
seq__37209_37757 = G__37885;
chunk__37211_37758 = G__37886;
count__37212_37759 = G__37887;
i__37213_37760 = G__37888;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37905 = arguments.length;
var i__4737__auto___37906 = (0);
while(true){
if((i__4737__auto___37906 < len__4736__auto___37905)){
args__4742__auto__.push((arguments[i__4737__auto___37906]));

var G__37907 = (i__4737__auto___37906 + (1));
i__4737__auto___37906 = G__37907;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37290){
var G__37291 = cljs.core.first(seq37290);
var seq37290__$1 = cljs.core.next(seq37290);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37291,seq37290__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37304 = arguments.length;
switch (G__37304) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33475__auto___37910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33476__auto__ = (function (){var switch__33189__auto__ = (function (state_37316){
var state_val_37317 = (state_37316[(1)]);
if((state_val_37317 === (1))){
var state_37316__$1 = state_37316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37316__$1,(2),once_or_cleanup);
} else {
if((state_val_37317 === (2))){
var inst_37313 = (state_37316[(2)]);
var inst_37314 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37316__$1 = (function (){var statearr_37321 = state_37316;
(statearr_37321[(7)] = inst_37313);

return statearr_37321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37316__$1,inst_37314);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33190__auto__ = null;
var shadow$dom$state_machine__33190__auto____0 = (function (){
var statearr_37322 = [null,null,null,null,null,null,null,null];
(statearr_37322[(0)] = shadow$dom$state_machine__33190__auto__);

(statearr_37322[(1)] = (1));

return statearr_37322;
});
var shadow$dom$state_machine__33190__auto____1 = (function (state_37316){
while(true){
var ret_value__33191__auto__ = (function (){try{while(true){
var result__33192__auto__ = switch__33189__auto__(state_37316);
if(cljs.core.keyword_identical_QMARK_(result__33192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33192__auto__;
}
break;
}
}catch (e37323){var ex__33193__auto__ = e37323;
var statearr_37325_37913 = state_37316;
(statearr_37325_37913[(2)] = ex__33193__auto__);


if(cljs.core.seq((state_37316[(4)]))){
var statearr_37326_37914 = state_37316;
(statearr_37326_37914[(1)] = cljs.core.first((state_37316[(4)])));

} else {
throw ex__33193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37915 = state_37316;
state_37316 = G__37915;
continue;
} else {
return ret_value__33191__auto__;
}
break;
}
});
shadow$dom$state_machine__33190__auto__ = function(state_37316){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33190__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33190__auto____1.call(this,state_37316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33190__auto____0;
shadow$dom$state_machine__33190__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33190__auto____1;
return shadow$dom$state_machine__33190__auto__;
})()
})();
var state__33477__auto__ = (function (){var statearr_37327 = f__33476__auto__();
(statearr_37327[(6)] = c__33475__auto___37910);

return statearr_37327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33477__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
