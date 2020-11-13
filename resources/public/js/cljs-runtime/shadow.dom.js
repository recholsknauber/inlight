goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33298 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33298(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33300 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33300(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32632 = coll;
var G__32633 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32632,G__32633) : shadow.dom.lazy_native_coll_seq.call(null,G__32632,G__32633));
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
var G__32679 = arguments.length;
switch (G__32679) {
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
var G__32686 = arguments.length;
switch (G__32686) {
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
var G__32693 = arguments.length;
switch (G__32693) {
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
var G__32702 = arguments.length;
switch (G__32702) {
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
var G__32708 = arguments.length;
switch (G__32708) {
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
var G__32717 = arguments.length;
switch (G__32717) {
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
}catch (e32723){if((e32723 instanceof Object)){
var e = e32723;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32723;

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
var seq__32739 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32740 = null;
var count__32741 = (0);
var i__32742 = (0);
while(true){
if((i__32742 < count__32741)){
var el = chunk__32740.cljs$core$IIndexed$_nth$arity$2(null,i__32742);
var handler_33330__$1 = ((function (seq__32739,chunk__32740,count__32741,i__32742,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32739,chunk__32740,count__32741,i__32742,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33330__$1);


var G__33331 = seq__32739;
var G__33332 = chunk__32740;
var G__33333 = count__32741;
var G__33334 = (i__32742 + (1));
seq__32739 = G__33331;
chunk__32740 = G__33332;
count__32741 = G__33333;
i__32742 = G__33334;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32739);
if(temp__5735__auto__){
var seq__32739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32739__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32739__$1);
var G__33335 = cljs.core.chunk_rest(seq__32739__$1);
var G__33336 = c__4556__auto__;
var G__33337 = cljs.core.count(c__4556__auto__);
var G__33338 = (0);
seq__32739 = G__33335;
chunk__32740 = G__33336;
count__32741 = G__33337;
i__32742 = G__33338;
continue;
} else {
var el = cljs.core.first(seq__32739__$1);
var handler_33341__$1 = ((function (seq__32739,chunk__32740,count__32741,i__32742,el,seq__32739__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32739,chunk__32740,count__32741,i__32742,el,seq__32739__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33341__$1);


var G__33343 = cljs.core.next(seq__32739__$1);
var G__33344 = null;
var G__33345 = (0);
var G__33346 = (0);
seq__32739 = G__33343;
chunk__32740 = G__33344;
count__32741 = G__33345;
i__32742 = G__33346;
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
var G__32744 = arguments.length;
switch (G__32744) {
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
var seq__32745 = cljs.core.seq(events);
var chunk__32746 = null;
var count__32747 = (0);
var i__32748 = (0);
while(true){
if((i__32748 < count__32747)){
var vec__32755 = chunk__32746.cljs$core$IIndexed$_nth$arity$2(null,i__32748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33352 = seq__32745;
var G__33353 = chunk__32746;
var G__33354 = count__32747;
var G__33355 = (i__32748 + (1));
seq__32745 = G__33352;
chunk__32746 = G__33353;
count__32747 = G__33354;
i__32748 = G__33355;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32745);
if(temp__5735__auto__){
var seq__32745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32745__$1);
var G__33358 = cljs.core.chunk_rest(seq__32745__$1);
var G__33359 = c__4556__auto__;
var G__33360 = cljs.core.count(c__4556__auto__);
var G__33361 = (0);
seq__32745 = G__33358;
chunk__32746 = G__33359;
count__32747 = G__33360;
i__32748 = G__33361;
continue;
} else {
var vec__32758 = cljs.core.first(seq__32745__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32758,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33363 = cljs.core.next(seq__32745__$1);
var G__33364 = null;
var G__33365 = (0);
var G__33366 = (0);
seq__32745 = G__33363;
chunk__32746 = G__33364;
count__32747 = G__33365;
i__32748 = G__33366;
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
var seq__32761 = cljs.core.seq(styles);
var chunk__32762 = null;
var count__32763 = (0);
var i__32764 = (0);
while(true){
if((i__32764 < count__32763)){
var vec__32771 = chunk__32762.cljs$core$IIndexed$_nth$arity$2(null,i__32764);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33370 = seq__32761;
var G__33371 = chunk__32762;
var G__33372 = count__32763;
var G__33373 = (i__32764 + (1));
seq__32761 = G__33370;
chunk__32762 = G__33371;
count__32763 = G__33372;
i__32764 = G__33373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32761);
if(temp__5735__auto__){
var seq__32761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32761__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32761__$1);
var G__33374 = cljs.core.chunk_rest(seq__32761__$1);
var G__33375 = c__4556__auto__;
var G__33376 = cljs.core.count(c__4556__auto__);
var G__33377 = (0);
seq__32761 = G__33374;
chunk__32762 = G__33375;
count__32763 = G__33376;
i__32764 = G__33377;
continue;
} else {
var vec__32774 = cljs.core.first(seq__32761__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32774,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33378 = cljs.core.next(seq__32761__$1);
var G__33379 = null;
var G__33380 = (0);
var G__33381 = (0);
seq__32761 = G__33378;
chunk__32762 = G__33379;
count__32763 = G__33380;
i__32764 = G__33381;
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
var G__32777_33397 = key;
var G__32777_33398__$1 = (((G__32777_33397 instanceof cljs.core.Keyword))?G__32777_33397.fqn:null);
switch (G__32777_33398__$1) {
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
var ks_33400 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33400,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33400,"aria-");
}
})())){
el.setAttribute(ks_33400,value);
} else {
(el[ks_33400] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32833){
var map__32834 = p__32833;
var map__32834__$1 = (((((!((map__32834 == null))))?(((((map__32834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32834):map__32834);
var props = map__32834__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32834__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32836 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32839 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32839,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32839;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32841 = arguments.length;
switch (G__32841) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32844){
var vec__32846 = p__32844;
var seq__32847 = cljs.core.seq(vec__32846);
var first__32848 = cljs.core.first(seq__32847);
var seq__32847__$1 = cljs.core.next(seq__32847);
var nn = first__32848;
var first__32848__$1 = cljs.core.first(seq__32847__$1);
var seq__32847__$2 = cljs.core.next(seq__32847__$1);
var np = first__32848__$1;
var nc = seq__32847__$2;
var node = vec__32846;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32849 = nn;
var G__32850 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32849,G__32850) : create_fn.call(null,G__32849,G__32850));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32852 = nn;
var G__32853 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32852,G__32853) : create_fn.call(null,G__32852,G__32853));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32854 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32854,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32854,(1),null);
var seq__32857_33411 = cljs.core.seq(node_children);
var chunk__32858_33412 = null;
var count__32859_33413 = (0);
var i__32860_33414 = (0);
while(true){
if((i__32860_33414 < count__32859_33413)){
var child_struct_33416 = chunk__32858_33412.cljs$core$IIndexed$_nth$arity$2(null,i__32860_33414);
var children_33417 = shadow.dom.dom_node(child_struct_33416);
if(cljs.core.seq_QMARK_(children_33417)){
var seq__32887_33418 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33417));
var chunk__32889_33419 = null;
var count__32890_33420 = (0);
var i__32891_33421 = (0);
while(true){
if((i__32891_33421 < count__32890_33420)){
var child_33422 = chunk__32889_33419.cljs$core$IIndexed$_nth$arity$2(null,i__32891_33421);
if(cljs.core.truth_(child_33422)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33422);


var G__33423 = seq__32887_33418;
var G__33424 = chunk__32889_33419;
var G__33425 = count__32890_33420;
var G__33426 = (i__32891_33421 + (1));
seq__32887_33418 = G__33423;
chunk__32889_33419 = G__33424;
count__32890_33420 = G__33425;
i__32891_33421 = G__33426;
continue;
} else {
var G__33427 = seq__32887_33418;
var G__33428 = chunk__32889_33419;
var G__33429 = count__32890_33420;
var G__33430 = (i__32891_33421 + (1));
seq__32887_33418 = G__33427;
chunk__32889_33419 = G__33428;
count__32890_33420 = G__33429;
i__32891_33421 = G__33430;
continue;
}
} else {
var temp__5735__auto___33431 = cljs.core.seq(seq__32887_33418);
if(temp__5735__auto___33431){
var seq__32887_33432__$1 = temp__5735__auto___33431;
if(cljs.core.chunked_seq_QMARK_(seq__32887_33432__$1)){
var c__4556__auto___33433 = cljs.core.chunk_first(seq__32887_33432__$1);
var G__33434 = cljs.core.chunk_rest(seq__32887_33432__$1);
var G__33435 = c__4556__auto___33433;
var G__33436 = cljs.core.count(c__4556__auto___33433);
var G__33437 = (0);
seq__32887_33418 = G__33434;
chunk__32889_33419 = G__33435;
count__32890_33420 = G__33436;
i__32891_33421 = G__33437;
continue;
} else {
var child_33438 = cljs.core.first(seq__32887_33432__$1);
if(cljs.core.truth_(child_33438)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33438);


var G__33439 = cljs.core.next(seq__32887_33432__$1);
var G__33440 = null;
var G__33441 = (0);
var G__33442 = (0);
seq__32887_33418 = G__33439;
chunk__32889_33419 = G__33440;
count__32890_33420 = G__33441;
i__32891_33421 = G__33442;
continue;
} else {
var G__33443 = cljs.core.next(seq__32887_33432__$1);
var G__33444 = null;
var G__33445 = (0);
var G__33446 = (0);
seq__32887_33418 = G__33443;
chunk__32889_33419 = G__33444;
count__32890_33420 = G__33445;
i__32891_33421 = G__33446;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33417);
}


var G__33447 = seq__32857_33411;
var G__33448 = chunk__32858_33412;
var G__33449 = count__32859_33413;
var G__33450 = (i__32860_33414 + (1));
seq__32857_33411 = G__33447;
chunk__32858_33412 = G__33448;
count__32859_33413 = G__33449;
i__32860_33414 = G__33450;
continue;
} else {
var temp__5735__auto___33451 = cljs.core.seq(seq__32857_33411);
if(temp__5735__auto___33451){
var seq__32857_33452__$1 = temp__5735__auto___33451;
if(cljs.core.chunked_seq_QMARK_(seq__32857_33452__$1)){
var c__4556__auto___33453 = cljs.core.chunk_first(seq__32857_33452__$1);
var G__33454 = cljs.core.chunk_rest(seq__32857_33452__$1);
var G__33455 = c__4556__auto___33453;
var G__33456 = cljs.core.count(c__4556__auto___33453);
var G__33457 = (0);
seq__32857_33411 = G__33454;
chunk__32858_33412 = G__33455;
count__32859_33413 = G__33456;
i__32860_33414 = G__33457;
continue;
} else {
var child_struct_33458 = cljs.core.first(seq__32857_33452__$1);
var children_33459 = shadow.dom.dom_node(child_struct_33458);
if(cljs.core.seq_QMARK_(children_33459)){
var seq__32900_33460 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33459));
var chunk__32902_33461 = null;
var count__32903_33462 = (0);
var i__32904_33463 = (0);
while(true){
if((i__32904_33463 < count__32903_33462)){
var child_33464 = chunk__32902_33461.cljs$core$IIndexed$_nth$arity$2(null,i__32904_33463);
if(cljs.core.truth_(child_33464)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33464);


var G__33465 = seq__32900_33460;
var G__33466 = chunk__32902_33461;
var G__33467 = count__32903_33462;
var G__33468 = (i__32904_33463 + (1));
seq__32900_33460 = G__33465;
chunk__32902_33461 = G__33466;
count__32903_33462 = G__33467;
i__32904_33463 = G__33468;
continue;
} else {
var G__33469 = seq__32900_33460;
var G__33470 = chunk__32902_33461;
var G__33471 = count__32903_33462;
var G__33472 = (i__32904_33463 + (1));
seq__32900_33460 = G__33469;
chunk__32902_33461 = G__33470;
count__32903_33462 = G__33471;
i__32904_33463 = G__33472;
continue;
}
} else {
var temp__5735__auto___33476__$1 = cljs.core.seq(seq__32900_33460);
if(temp__5735__auto___33476__$1){
var seq__32900_33477__$1 = temp__5735__auto___33476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32900_33477__$1)){
var c__4556__auto___33478 = cljs.core.chunk_first(seq__32900_33477__$1);
var G__33479 = cljs.core.chunk_rest(seq__32900_33477__$1);
var G__33480 = c__4556__auto___33478;
var G__33481 = cljs.core.count(c__4556__auto___33478);
var G__33482 = (0);
seq__32900_33460 = G__33479;
chunk__32902_33461 = G__33480;
count__32903_33462 = G__33481;
i__32904_33463 = G__33482;
continue;
} else {
var child_33483 = cljs.core.first(seq__32900_33477__$1);
if(cljs.core.truth_(child_33483)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33483);


var G__33484 = cljs.core.next(seq__32900_33477__$1);
var G__33485 = null;
var G__33486 = (0);
var G__33487 = (0);
seq__32900_33460 = G__33484;
chunk__32902_33461 = G__33485;
count__32903_33462 = G__33486;
i__32904_33463 = G__33487;
continue;
} else {
var G__33488 = cljs.core.next(seq__32900_33477__$1);
var G__33489 = null;
var G__33490 = (0);
var G__33491 = (0);
seq__32900_33460 = G__33488;
chunk__32902_33461 = G__33489;
count__32903_33462 = G__33490;
i__32904_33463 = G__33491;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33459);
}


var G__33492 = cljs.core.next(seq__32857_33452__$1);
var G__33493 = null;
var G__33494 = (0);
var G__33495 = (0);
seq__32857_33411 = G__33492;
chunk__32858_33412 = G__33493;
count__32859_33413 = G__33494;
i__32860_33414 = G__33495;
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
var seq__32926 = cljs.core.seq(node);
var chunk__32927 = null;
var count__32928 = (0);
var i__32929 = (0);
while(true){
if((i__32929 < count__32928)){
var n = chunk__32927.cljs$core$IIndexed$_nth$arity$2(null,i__32929);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33500 = seq__32926;
var G__33501 = chunk__32927;
var G__33502 = count__32928;
var G__33503 = (i__32929 + (1));
seq__32926 = G__33500;
chunk__32927 = G__33501;
count__32928 = G__33502;
i__32929 = G__33503;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32926);
if(temp__5735__auto__){
var seq__32926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32926__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32926__$1);
var G__33504 = cljs.core.chunk_rest(seq__32926__$1);
var G__33505 = c__4556__auto__;
var G__33506 = cljs.core.count(c__4556__auto__);
var G__33507 = (0);
seq__32926 = G__33504;
chunk__32927 = G__33505;
count__32928 = G__33506;
i__32929 = G__33507;
continue;
} else {
var n = cljs.core.first(seq__32926__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33508 = cljs.core.next(seq__32926__$1);
var G__33509 = null;
var G__33510 = (0);
var G__33511 = (0);
seq__32926 = G__33508;
chunk__32927 = G__33509;
count__32928 = G__33510;
i__32929 = G__33511;
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
var G__32931 = arguments.length;
switch (G__32931) {
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
var G__32933 = arguments.length;
switch (G__32933) {
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
var G__32935 = arguments.length;
switch (G__32935) {
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
var len__4736__auto___33515 = arguments.length;
var i__4737__auto___33516 = (0);
while(true){
if((i__4737__auto___33516 < len__4736__auto___33515)){
args__4742__auto__.push((arguments[i__4737__auto___33516]));

var G__33517 = (i__4737__auto___33516 + (1));
i__4737__auto___33516 = G__33517;
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
var seq__32937_33518 = cljs.core.seq(nodes);
var chunk__32938_33519 = null;
var count__32939_33520 = (0);
var i__32940_33521 = (0);
while(true){
if((i__32940_33521 < count__32939_33520)){
var node_33522 = chunk__32938_33519.cljs$core$IIndexed$_nth$arity$2(null,i__32940_33521);
fragment.appendChild(shadow.dom._to_dom(node_33522));


var G__33523 = seq__32937_33518;
var G__33524 = chunk__32938_33519;
var G__33525 = count__32939_33520;
var G__33526 = (i__32940_33521 + (1));
seq__32937_33518 = G__33523;
chunk__32938_33519 = G__33524;
count__32939_33520 = G__33525;
i__32940_33521 = G__33526;
continue;
} else {
var temp__5735__auto___33527 = cljs.core.seq(seq__32937_33518);
if(temp__5735__auto___33527){
var seq__32937_33528__$1 = temp__5735__auto___33527;
if(cljs.core.chunked_seq_QMARK_(seq__32937_33528__$1)){
var c__4556__auto___33529 = cljs.core.chunk_first(seq__32937_33528__$1);
var G__33530 = cljs.core.chunk_rest(seq__32937_33528__$1);
var G__33531 = c__4556__auto___33529;
var G__33532 = cljs.core.count(c__4556__auto___33529);
var G__33533 = (0);
seq__32937_33518 = G__33530;
chunk__32938_33519 = G__33531;
count__32939_33520 = G__33532;
i__32940_33521 = G__33533;
continue;
} else {
var node_33534 = cljs.core.first(seq__32937_33528__$1);
fragment.appendChild(shadow.dom._to_dom(node_33534));


var G__33535 = cljs.core.next(seq__32937_33528__$1);
var G__33536 = null;
var G__33537 = (0);
var G__33538 = (0);
seq__32937_33518 = G__33535;
chunk__32938_33519 = G__33536;
count__32939_33520 = G__33537;
i__32940_33521 = G__33538;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32936){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32936));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32983_33539 = cljs.core.seq(scripts);
var chunk__32984_33540 = null;
var count__32985_33541 = (0);
var i__32986_33542 = (0);
while(true){
if((i__32986_33542 < count__32985_33541)){
var vec__32993_33543 = chunk__32984_33540.cljs$core$IIndexed$_nth$arity$2(null,i__32986_33542);
var script_tag_33544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32993_33543,(0),null);
var script_body_33545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32993_33543,(1),null);
eval(script_body_33545);


var G__33546 = seq__32983_33539;
var G__33547 = chunk__32984_33540;
var G__33548 = count__32985_33541;
var G__33549 = (i__32986_33542 + (1));
seq__32983_33539 = G__33546;
chunk__32984_33540 = G__33547;
count__32985_33541 = G__33548;
i__32986_33542 = G__33549;
continue;
} else {
var temp__5735__auto___33550 = cljs.core.seq(seq__32983_33539);
if(temp__5735__auto___33550){
var seq__32983_33564__$1 = temp__5735__auto___33550;
if(cljs.core.chunked_seq_QMARK_(seq__32983_33564__$1)){
var c__4556__auto___33565 = cljs.core.chunk_first(seq__32983_33564__$1);
var G__33566 = cljs.core.chunk_rest(seq__32983_33564__$1);
var G__33567 = c__4556__auto___33565;
var G__33568 = cljs.core.count(c__4556__auto___33565);
var G__33569 = (0);
seq__32983_33539 = G__33566;
chunk__32984_33540 = G__33567;
count__32985_33541 = G__33568;
i__32986_33542 = G__33569;
continue;
} else {
var vec__32996_33570 = cljs.core.first(seq__32983_33564__$1);
var script_tag_33571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32996_33570,(0),null);
var script_body_33572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32996_33570,(1),null);
eval(script_body_33572);


var G__33573 = cljs.core.next(seq__32983_33564__$1);
var G__33574 = null;
var G__33575 = (0);
var G__33576 = (0);
seq__32983_33539 = G__33573;
chunk__32984_33540 = G__33574;
count__32985_33541 = G__33575;
i__32986_33542 = G__33576;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33001){
var vec__33002 = p__33001;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33002,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33002,(1),null);
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
var G__33014 = arguments.length;
switch (G__33014) {
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
var seq__33036 = cljs.core.seq(style_keys);
var chunk__33037 = null;
var count__33038 = (0);
var i__33039 = (0);
while(true){
if((i__33039 < count__33038)){
var it = chunk__33037.cljs$core$IIndexed$_nth$arity$2(null,i__33039);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33580 = seq__33036;
var G__33581 = chunk__33037;
var G__33582 = count__33038;
var G__33583 = (i__33039 + (1));
seq__33036 = G__33580;
chunk__33037 = G__33581;
count__33038 = G__33582;
i__33039 = G__33583;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33036);
if(temp__5735__auto__){
var seq__33036__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33036__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33036__$1);
var G__33585 = cljs.core.chunk_rest(seq__33036__$1);
var G__33586 = c__4556__auto__;
var G__33587 = cljs.core.count(c__4556__auto__);
var G__33588 = (0);
seq__33036 = G__33585;
chunk__33037 = G__33586;
count__33038 = G__33587;
i__33039 = G__33588;
continue;
} else {
var it = cljs.core.first(seq__33036__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33590 = cljs.core.next(seq__33036__$1);
var G__33591 = null;
var G__33592 = (0);
var G__33593 = (0);
seq__33036 = G__33590;
chunk__33037 = G__33591;
count__33038 = G__33592;
i__33039 = G__33593;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33045,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33052 = k33045;
var G__33052__$1 = (((G__33052 instanceof cljs.core.Keyword))?G__33052.fqn:null);
switch (G__33052__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33045,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33054){
var vec__33055 = p__33054;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33055,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33055,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33044){
var self__ = this;
var G__33044__$1 = this;
return (new cljs.core.RecordIter((0),G__33044__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33046,other33047){
var self__ = this;
var this33046__$1 = this;
return (((!((other33047 == null)))) && ((this33046__$1.constructor === other33047.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33046__$1.x,other33047.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33046__$1.y,other33047.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33046__$1.__extmap,other33047.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33044){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33064 = cljs.core.keyword_identical_QMARK_;
var expr__33065 = k__4388__auto__;
if(cljs.core.truth_((pred__33064.cljs$core$IFn$_invoke$arity$2 ? pred__33064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33065) : pred__33064.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33065)))){
return (new shadow.dom.Coordinate(G__33044,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33064.cljs$core$IFn$_invoke$arity$2 ? pred__33064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33065) : pred__33064.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33065)))){
return (new shadow.dom.Coordinate(self__.x,G__33044,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33044),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33044){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33044,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33050){
var extmap__4419__auto__ = (function (){var G__33067 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33050,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33067);
} else {
return G__33067;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33050),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33069,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33073 = k33069;
var G__33073__$1 = (((G__33073 instanceof cljs.core.Keyword))?G__33073.fqn:null);
switch (G__33073__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33069,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33074){
var vec__33075 = p__33074;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33068){
var self__ = this;
var G__33068__$1 = this;
return (new cljs.core.RecordIter((0),G__33068__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33070,other33071){
var self__ = this;
var this33070__$1 = this;
return (((!((other33071 == null)))) && ((this33070__$1.constructor === other33071.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33070__$1.w,other33071.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33070__$1.h,other33071.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33070__$1.__extmap,other33071.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33068){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33082 = cljs.core.keyword_identical_QMARK_;
var expr__33083 = k__4388__auto__;
if(cljs.core.truth_((pred__33082.cljs$core$IFn$_invoke$arity$2 ? pred__33082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33083) : pred__33082.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33083)))){
return (new shadow.dom.Size(G__33068,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33082.cljs$core$IFn$_invoke$arity$2 ? pred__33082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33083) : pred__33082.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33083)))){
return (new shadow.dom.Size(self__.w,G__33068,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33068),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33068){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33068,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33072){
var extmap__4419__auto__ = (function (){var G__33098 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33072,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33072)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33098);
} else {
return G__33098;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33072),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33072),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__33609 = (i + (1));
var G__33610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33609;
ret = G__33610;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33138){
var vec__33139 = p__33138;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33144 = arguments.length;
switch (G__33144) {
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
var G__33624 = ps;
var G__33625 = (i + (1));
el__$1 = G__33624;
i = G__33625;
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
var vec__33166 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33166,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33166,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33166,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33170_33627 = cljs.core.seq(props);
var chunk__33171_33628 = null;
var count__33172_33629 = (0);
var i__33173_33630 = (0);
while(true){
if((i__33173_33630 < count__33172_33629)){
var vec__33187_33631 = chunk__33171_33628.cljs$core$IIndexed$_nth$arity$2(null,i__33173_33630);
var k_33632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187_33631,(0),null);
var v_33633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187_33631,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33632);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33632),v_33633);


var G__33639 = seq__33170_33627;
var G__33640 = chunk__33171_33628;
var G__33641 = count__33172_33629;
var G__33642 = (i__33173_33630 + (1));
seq__33170_33627 = G__33639;
chunk__33171_33628 = G__33640;
count__33172_33629 = G__33641;
i__33173_33630 = G__33642;
continue;
} else {
var temp__5735__auto___33643 = cljs.core.seq(seq__33170_33627);
if(temp__5735__auto___33643){
var seq__33170_33644__$1 = temp__5735__auto___33643;
if(cljs.core.chunked_seq_QMARK_(seq__33170_33644__$1)){
var c__4556__auto___33645 = cljs.core.chunk_first(seq__33170_33644__$1);
var G__33646 = cljs.core.chunk_rest(seq__33170_33644__$1);
var G__33647 = c__4556__auto___33645;
var G__33648 = cljs.core.count(c__4556__auto___33645);
var G__33649 = (0);
seq__33170_33627 = G__33646;
chunk__33171_33628 = G__33647;
count__33172_33629 = G__33648;
i__33173_33630 = G__33649;
continue;
} else {
var vec__33192_33650 = cljs.core.first(seq__33170_33644__$1);
var k_33651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192_33650,(0),null);
var v_33652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192_33650,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33651);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33651),v_33652);


var G__33653 = cljs.core.next(seq__33170_33644__$1);
var G__33654 = null;
var G__33655 = (0);
var G__33656 = (0);
seq__33170_33627 = G__33653;
chunk__33171_33628 = G__33654;
count__33172_33629 = G__33655;
i__33173_33630 = G__33656;
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
var vec__33197 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33197,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33197,(1),null);
var seq__33200_33658 = cljs.core.seq(node_children);
var chunk__33202_33659 = null;
var count__33203_33660 = (0);
var i__33204_33661 = (0);
while(true){
if((i__33204_33661 < count__33203_33660)){
var child_struct_33663 = chunk__33202_33659.cljs$core$IIndexed$_nth$arity$2(null,i__33204_33661);
if((!((child_struct_33663 == null)))){
if(typeof child_struct_33663 === 'string'){
var text_33667 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33667),child_struct_33663].join(''));
} else {
var children_33668 = shadow.dom.svg_node(child_struct_33663);
if(cljs.core.seq_QMARK_(children_33668)){
var seq__33218_33669 = cljs.core.seq(children_33668);
var chunk__33220_33670 = null;
var count__33221_33671 = (0);
var i__33222_33672 = (0);
while(true){
if((i__33222_33672 < count__33221_33671)){
var child_33673 = chunk__33220_33670.cljs$core$IIndexed$_nth$arity$2(null,i__33222_33672);
if(cljs.core.truth_(child_33673)){
node.appendChild(child_33673);


var G__33674 = seq__33218_33669;
var G__33675 = chunk__33220_33670;
var G__33676 = count__33221_33671;
var G__33677 = (i__33222_33672 + (1));
seq__33218_33669 = G__33674;
chunk__33220_33670 = G__33675;
count__33221_33671 = G__33676;
i__33222_33672 = G__33677;
continue;
} else {
var G__33678 = seq__33218_33669;
var G__33679 = chunk__33220_33670;
var G__33680 = count__33221_33671;
var G__33681 = (i__33222_33672 + (1));
seq__33218_33669 = G__33678;
chunk__33220_33670 = G__33679;
count__33221_33671 = G__33680;
i__33222_33672 = G__33681;
continue;
}
} else {
var temp__5735__auto___33682 = cljs.core.seq(seq__33218_33669);
if(temp__5735__auto___33682){
var seq__33218_33683__$1 = temp__5735__auto___33682;
if(cljs.core.chunked_seq_QMARK_(seq__33218_33683__$1)){
var c__4556__auto___33684 = cljs.core.chunk_first(seq__33218_33683__$1);
var G__33685 = cljs.core.chunk_rest(seq__33218_33683__$1);
var G__33686 = c__4556__auto___33684;
var G__33687 = cljs.core.count(c__4556__auto___33684);
var G__33688 = (0);
seq__33218_33669 = G__33685;
chunk__33220_33670 = G__33686;
count__33221_33671 = G__33687;
i__33222_33672 = G__33688;
continue;
} else {
var child_33689 = cljs.core.first(seq__33218_33683__$1);
if(cljs.core.truth_(child_33689)){
node.appendChild(child_33689);


var G__33690 = cljs.core.next(seq__33218_33683__$1);
var G__33691 = null;
var G__33692 = (0);
var G__33693 = (0);
seq__33218_33669 = G__33690;
chunk__33220_33670 = G__33691;
count__33221_33671 = G__33692;
i__33222_33672 = G__33693;
continue;
} else {
var G__33694 = cljs.core.next(seq__33218_33683__$1);
var G__33695 = null;
var G__33696 = (0);
var G__33697 = (0);
seq__33218_33669 = G__33694;
chunk__33220_33670 = G__33695;
count__33221_33671 = G__33696;
i__33222_33672 = G__33697;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33668);
}
}


var G__33698 = seq__33200_33658;
var G__33699 = chunk__33202_33659;
var G__33700 = count__33203_33660;
var G__33701 = (i__33204_33661 + (1));
seq__33200_33658 = G__33698;
chunk__33202_33659 = G__33699;
count__33203_33660 = G__33700;
i__33204_33661 = G__33701;
continue;
} else {
var G__33702 = seq__33200_33658;
var G__33703 = chunk__33202_33659;
var G__33704 = count__33203_33660;
var G__33705 = (i__33204_33661 + (1));
seq__33200_33658 = G__33702;
chunk__33202_33659 = G__33703;
count__33203_33660 = G__33704;
i__33204_33661 = G__33705;
continue;
}
} else {
var temp__5735__auto___33706 = cljs.core.seq(seq__33200_33658);
if(temp__5735__auto___33706){
var seq__33200_33707__$1 = temp__5735__auto___33706;
if(cljs.core.chunked_seq_QMARK_(seq__33200_33707__$1)){
var c__4556__auto___33708 = cljs.core.chunk_first(seq__33200_33707__$1);
var G__33709 = cljs.core.chunk_rest(seq__33200_33707__$1);
var G__33710 = c__4556__auto___33708;
var G__33711 = cljs.core.count(c__4556__auto___33708);
var G__33712 = (0);
seq__33200_33658 = G__33709;
chunk__33202_33659 = G__33710;
count__33203_33660 = G__33711;
i__33204_33661 = G__33712;
continue;
} else {
var child_struct_33713 = cljs.core.first(seq__33200_33707__$1);
if((!((child_struct_33713 == null)))){
if(typeof child_struct_33713 === 'string'){
var text_33714 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33714),child_struct_33713].join(''));
} else {
var children_33715 = shadow.dom.svg_node(child_struct_33713);
if(cljs.core.seq_QMARK_(children_33715)){
var seq__33240_33716 = cljs.core.seq(children_33715);
var chunk__33242_33717 = null;
var count__33243_33718 = (0);
var i__33244_33719 = (0);
while(true){
if((i__33244_33719 < count__33243_33718)){
var child_33720 = chunk__33242_33717.cljs$core$IIndexed$_nth$arity$2(null,i__33244_33719);
if(cljs.core.truth_(child_33720)){
node.appendChild(child_33720);


var G__33721 = seq__33240_33716;
var G__33722 = chunk__33242_33717;
var G__33723 = count__33243_33718;
var G__33724 = (i__33244_33719 + (1));
seq__33240_33716 = G__33721;
chunk__33242_33717 = G__33722;
count__33243_33718 = G__33723;
i__33244_33719 = G__33724;
continue;
} else {
var G__33725 = seq__33240_33716;
var G__33726 = chunk__33242_33717;
var G__33727 = count__33243_33718;
var G__33728 = (i__33244_33719 + (1));
seq__33240_33716 = G__33725;
chunk__33242_33717 = G__33726;
count__33243_33718 = G__33727;
i__33244_33719 = G__33728;
continue;
}
} else {
var temp__5735__auto___33729__$1 = cljs.core.seq(seq__33240_33716);
if(temp__5735__auto___33729__$1){
var seq__33240_33730__$1 = temp__5735__auto___33729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33240_33730__$1)){
var c__4556__auto___33731 = cljs.core.chunk_first(seq__33240_33730__$1);
var G__33732 = cljs.core.chunk_rest(seq__33240_33730__$1);
var G__33733 = c__4556__auto___33731;
var G__33734 = cljs.core.count(c__4556__auto___33731);
var G__33735 = (0);
seq__33240_33716 = G__33732;
chunk__33242_33717 = G__33733;
count__33243_33718 = G__33734;
i__33244_33719 = G__33735;
continue;
} else {
var child_33736 = cljs.core.first(seq__33240_33730__$1);
if(cljs.core.truth_(child_33736)){
node.appendChild(child_33736);


var G__33737 = cljs.core.next(seq__33240_33730__$1);
var G__33738 = null;
var G__33739 = (0);
var G__33740 = (0);
seq__33240_33716 = G__33737;
chunk__33242_33717 = G__33738;
count__33243_33718 = G__33739;
i__33244_33719 = G__33740;
continue;
} else {
var G__33741 = cljs.core.next(seq__33240_33730__$1);
var G__33742 = null;
var G__33743 = (0);
var G__33744 = (0);
seq__33240_33716 = G__33741;
chunk__33242_33717 = G__33742;
count__33243_33718 = G__33743;
i__33244_33719 = G__33744;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33715);
}
}


var G__33745 = cljs.core.next(seq__33200_33707__$1);
var G__33746 = null;
var G__33747 = (0);
var G__33748 = (0);
seq__33200_33658 = G__33745;
chunk__33202_33659 = G__33746;
count__33203_33660 = G__33747;
i__33204_33661 = G__33748;
continue;
} else {
var G__33749 = cljs.core.next(seq__33200_33707__$1);
var G__33750 = null;
var G__33751 = (0);
var G__33752 = (0);
seq__33200_33658 = G__33749;
chunk__33202_33659 = G__33750;
count__33203_33660 = G__33751;
i__33204_33661 = G__33752;
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
var len__4736__auto___33757 = arguments.length;
var i__4737__auto___33758 = (0);
while(true){
if((i__4737__auto___33758 < len__4736__auto___33757)){
args__4742__auto__.push((arguments[i__4737__auto___33758]));

var G__33759 = (i__4737__auto___33758 + (1));
i__4737__auto___33758 = G__33759;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33255){
var G__33256 = cljs.core.first(seq33255);
var seq33255__$1 = cljs.core.next(seq33255);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33256,seq33255__$1);
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
var G__33274 = arguments.length;
switch (G__33274) {
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
var c__30787__auto___33762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30788__auto__ = (function (){var switch__30253__auto__ = (function (state_33282){
var state_val_33283 = (state_33282[(1)]);
if((state_val_33283 === (1))){
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33282__$1,(2),once_or_cleanup);
} else {
if((state_val_33283 === (2))){
var inst_33279 = (state_33282[(2)]);
var inst_33280 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33282__$1 = (function (){var statearr_33284 = state_33282;
(statearr_33284[(7)] = inst_33279);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33282__$1,inst_33280);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30254__auto__ = null;
var shadow$dom$state_machine__30254__auto____0 = (function (){
var statearr_33285 = [null,null,null,null,null,null,null,null];
(statearr_33285[(0)] = shadow$dom$state_machine__30254__auto__);

(statearr_33285[(1)] = (1));

return statearr_33285;
});
var shadow$dom$state_machine__30254__auto____1 = (function (state_33282){
while(true){
var ret_value__30255__auto__ = (function (){try{while(true){
var result__30256__auto__ = switch__30253__auto__(state_33282);
if(cljs.core.keyword_identical_QMARK_(result__30256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30256__auto__;
}
break;
}
}catch (e33286){var ex__30257__auto__ = e33286;
var statearr_33287_33763 = state_33282;
(statearr_33287_33763[(2)] = ex__30257__auto__);


if(cljs.core.seq((state_33282[(4)]))){
var statearr_33288_33764 = state_33282;
(statearr_33288_33764[(1)] = cljs.core.first((state_33282[(4)])));

} else {
throw ex__30257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33765 = state_33282;
state_33282 = G__33765;
continue;
} else {
return ret_value__30255__auto__;
}
break;
}
});
shadow$dom$state_machine__30254__auto__ = function(state_33282){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30254__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30254__auto____1.call(this,state_33282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30254__auto____0;
shadow$dom$state_machine__30254__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30254__auto____1;
return shadow$dom$state_machine__30254__auto__;
})()
})();
var state__30789__auto__ = (function (){var statearr_33289 = f__30788__auto__();
(statearr_33289[(6)] = c__30787__auto___33762);

return statearr_33289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30789__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
