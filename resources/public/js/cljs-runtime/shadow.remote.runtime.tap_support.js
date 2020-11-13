goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34975,p__34976){
var map__34977 = p__34975;
var map__34977__$1 = (((((!((map__34977 == null))))?(((((map__34977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34977):map__34977);
var svc = map__34977__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34978 = p__34976;
var map__34978__$1 = (((((!((map__34978 == null))))?(((((map__34978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34978):map__34978);
var msg = map__34978__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34978__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34985,p__34986){
var map__34987 = p__34985;
var map__34987__$1 = (((((!((map__34987 == null))))?(((((map__34987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34987):map__34987);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34987__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34988 = p__34986;
var map__34988__$1 = (((((!((map__34988 == null))))?(((((map__34988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34988):map__34988);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34988__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34997,p__34998){
var map__35000 = p__34997;
var map__35000__$1 = (((((!((map__35000 == null))))?(((((map__35000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35000):map__35000);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35000__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35000__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35001 = p__34998;
var map__35001__$1 = (((((!((map__35001 == null))))?(((((map__35001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35001):map__35001);
var msg = map__35001__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35001__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35009,tid){
var map__35010 = p__35009;
var map__35010__$1 = (((((!((map__35010 == null))))?(((((map__35010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35010):map__35010);
var svc = map__35010__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35010__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35016 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35017 = null;
var count__35018 = (0);
var i__35019 = (0);
while(true){
if((i__35019 < count__35018)){
var vec__35027 = chunk__35017.cljs$core$IIndexed$_nth$arity$2(null,i__35019);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35027,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35027,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35039 = seq__35016;
var G__35040 = chunk__35017;
var G__35041 = count__35018;
var G__35042 = (i__35019 + (1));
seq__35016 = G__35039;
chunk__35017 = G__35040;
count__35018 = G__35041;
i__35019 = G__35042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35016);
if(temp__5735__auto__){
var seq__35016__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35016__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35016__$1);
var G__35043 = cljs.core.chunk_rest(seq__35016__$1);
var G__35044 = c__4556__auto__;
var G__35045 = cljs.core.count(c__4556__auto__);
var G__35046 = (0);
seq__35016 = G__35043;
chunk__35017 = G__35044;
count__35018 = G__35045;
i__35019 = G__35046;
continue;
} else {
var vec__35030 = cljs.core.first(seq__35016__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35030,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35030,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35047 = cljs.core.next(seq__35016__$1);
var G__35048 = null;
var G__35049 = (0);
var G__35050 = (0);
seq__35016 = G__35047;
chunk__35017 = G__35048;
count__35018 = G__35049;
i__35019 = G__35050;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35012_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35012_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35013_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35013_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35014_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35014_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35015_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35015_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35033){
var map__35034 = p__35033;
var map__35034__$1 = (((((!((map__35034 == null))))?(((((map__35034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35034):map__35034);
var svc = map__35034__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35034__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35034__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
