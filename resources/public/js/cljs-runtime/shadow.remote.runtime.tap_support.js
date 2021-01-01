goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38986,p__38987){
var map__38989 = p__38986;
var map__38989__$1 = (((((!((map__38989 == null))))?(((((map__38989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38989):map__38989);
var svc = map__38989__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38989__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38989__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38989__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38990 = p__38987;
var map__38990__$1 = (((((!((map__38990 == null))))?(((((map__38990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38990):map__38990);
var msg = map__38990__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38990__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38995,p__38996){
var map__38997 = p__38995;
var map__38997__$1 = (((((!((map__38997 == null))))?(((((map__38997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38997):map__38997);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38998 = p__38996;
var map__38998__$1 = (((((!((map__38998 == null))))?(((((map__38998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38998):map__38998);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39001,p__39002){
var map__39003 = p__39001;
var map__39003__$1 = (((((!((map__39003 == null))))?(((((map__39003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39003):map__39003);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39003__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39003__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39004 = p__39002;
var map__39004__$1 = (((((!((map__39004 == null))))?(((((map__39004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39004):map__39004);
var msg = map__39004__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39004__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39007,tid){
var map__39008 = p__39007;
var map__39008__$1 = (((((!((map__39008 == null))))?(((((map__39008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39008):map__39008);
var svc = map__39008__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39008__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39017 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39018 = null;
var count__39019 = (0);
var i__39020 = (0);
while(true){
if((i__39020 < count__39019)){
var vec__39033 = chunk__39018.cljs$core$IIndexed$_nth$arity$2(null,i__39020);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39033,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39033,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39057 = seq__39017;
var G__39058 = chunk__39018;
var G__39059 = count__39019;
var G__39060 = (i__39020 + (1));
seq__39017 = G__39057;
chunk__39018 = G__39058;
count__39019 = G__39059;
i__39020 = G__39060;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39017);
if(temp__5735__auto__){
var seq__39017__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39017__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39017__$1);
var G__39061 = cljs.core.chunk_rest(seq__39017__$1);
var G__39062 = c__4556__auto__;
var G__39063 = cljs.core.count(c__4556__auto__);
var G__39064 = (0);
seq__39017 = G__39061;
chunk__39018 = G__39062;
count__39019 = G__39063;
i__39020 = G__39064;
continue;
} else {
var vec__39041 = cljs.core.first(seq__39017__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39065 = cljs.core.next(seq__39017__$1);
var G__39066 = null;
var G__39067 = (0);
var G__39068 = (0);
seq__39017 = G__39065;
chunk__39018 = G__39066;
count__39019 = G__39067;
i__39020 = G__39068;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39011_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39011_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39012_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39012_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39013_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39013_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39015_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39015_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39050){
var map__39051 = p__39050;
var map__39051__$1 = (((((!((map__39051 == null))))?(((((map__39051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39051):map__39051);
var svc = map__39051__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39051__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39051__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
