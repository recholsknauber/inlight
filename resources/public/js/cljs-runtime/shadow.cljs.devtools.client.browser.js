goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39351 = arguments.length;
var i__4737__auto___39352 = (0);
while(true){
if((i__4737__auto___39352 < len__4736__auto___39351)){
args__4742__auto__.push((arguments[i__4737__auto___39352]));

var G__39353 = (i__4737__auto___39352 + (1));
i__4737__auto___39352 = G__39353;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39206){
var G__39207 = cljs.core.first(seq39206);
var seq39206__$1 = cljs.core.next(seq39206);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39207,seq39206__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39208 = cljs.core.seq(sources);
var chunk__39209 = null;
var count__39210 = (0);
var i__39211 = (0);
while(true){
if((i__39211 < count__39210)){
var map__39218 = chunk__39209.cljs$core$IIndexed$_nth$arity$2(null,i__39211);
var map__39218__$1 = (((((!((map__39218 == null))))?(((((map__39218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39218):map__39218);
var src = map__39218__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39222){var e_39354 = e39222;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39354);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39354.message)].join('')));
}

var G__39355 = seq__39208;
var G__39356 = chunk__39209;
var G__39357 = count__39210;
var G__39358 = (i__39211 + (1));
seq__39208 = G__39355;
chunk__39209 = G__39356;
count__39210 = G__39357;
i__39211 = G__39358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39208);
if(temp__5735__auto__){
var seq__39208__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39208__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39208__$1);
var G__39359 = cljs.core.chunk_rest(seq__39208__$1);
var G__39360 = c__4556__auto__;
var G__39361 = cljs.core.count(c__4556__auto__);
var G__39362 = (0);
seq__39208 = G__39359;
chunk__39209 = G__39360;
count__39210 = G__39361;
i__39211 = G__39362;
continue;
} else {
var map__39223 = cljs.core.first(seq__39208__$1);
var map__39223__$1 = (((((!((map__39223 == null))))?(((((map__39223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39223):map__39223);
var src = map__39223__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39225){var e_39363 = e39225;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39363);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39363.message)].join('')));
}

var G__39364 = cljs.core.next(seq__39208__$1);
var G__39365 = null;
var G__39366 = (0);
var G__39367 = (0);
seq__39208 = G__39364;
chunk__39209 = G__39365;
count__39210 = G__39366;
i__39211 = G__39367;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39226 = cljs.core.seq(js_requires);
var chunk__39227 = null;
var count__39228 = (0);
var i__39229 = (0);
while(true){
if((i__39229 < count__39228)){
var js_ns = chunk__39227.cljs$core$IIndexed$_nth$arity$2(null,i__39229);
var require_str_39368 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39368);


var G__39369 = seq__39226;
var G__39370 = chunk__39227;
var G__39371 = count__39228;
var G__39372 = (i__39229 + (1));
seq__39226 = G__39369;
chunk__39227 = G__39370;
count__39228 = G__39371;
i__39229 = G__39372;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39226);
if(temp__5735__auto__){
var seq__39226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39226__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39226__$1);
var G__39373 = cljs.core.chunk_rest(seq__39226__$1);
var G__39374 = c__4556__auto__;
var G__39375 = cljs.core.count(c__4556__auto__);
var G__39376 = (0);
seq__39226 = G__39373;
chunk__39227 = G__39374;
count__39228 = G__39375;
i__39229 = G__39376;
continue;
} else {
var js_ns = cljs.core.first(seq__39226__$1);
var require_str_39377 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39377);


var G__39378 = cljs.core.next(seq__39226__$1);
var G__39379 = null;
var G__39380 = (0);
var G__39381 = (0);
seq__39226 = G__39378;
chunk__39227 = G__39379;
count__39228 = G__39380;
i__39229 = G__39381;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39231){
var map__39232 = p__39231;
var map__39232__$1 = (((((!((map__39232 == null))))?(((((map__39232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39232):map__39232);
var msg = map__39232__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39232__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39232__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39234(s__39235){
return (new cljs.core.LazySeq(null,(function (){
var s__39235__$1 = s__39235;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39235__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39240 = cljs.core.first(xs__6292__auto__);
var map__39240__$1 = (((((!((map__39240 == null))))?(((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39240):map__39240);
var src = map__39240__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39235__$1,map__39240,map__39240__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39232,map__39232__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39234_$_iter__39236(s__39237){
return (new cljs.core.LazySeq(null,((function (s__39235__$1,map__39240,map__39240__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39232,map__39232__$1,msg,info,reload_info){
return (function (){
var s__39237__$1 = s__39237;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39237__$1);
if(temp__5735__auto____$1){
var s__39237__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39237__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39237__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39239 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39238 = (0);
while(true){
if((i__39238 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39238);
cljs.core.chunk_append(b__39239,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39382 = (i__39238 + (1));
i__39238 = G__39382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39239),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39234_$_iter__39236(cljs.core.chunk_rest(s__39237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39239),null);
}
} else {
var warning = cljs.core.first(s__39237__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39234_$_iter__39236(cljs.core.rest(s__39237__$2)));
}
} else {
return null;
}
break;
}
});})(s__39235__$1,map__39240,map__39240__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39232,map__39232__$1,msg,info,reload_info))
,null,null));
});})(s__39235__$1,map__39240,map__39240__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39232,map__39232__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39234(cljs.core.rest(s__39235__$1)));
} else {
var G__39383 = cljs.core.rest(s__39235__$1);
s__39235__$1 = G__39383;
continue;
}
} else {
var G__39384 = cljs.core.rest(s__39235__$1);
s__39235__$1 = G__39384;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39242_39385 = cljs.core.seq(warnings);
var chunk__39243_39386 = null;
var count__39244_39387 = (0);
var i__39245_39388 = (0);
while(true){
if((i__39245_39388 < count__39244_39387)){
var map__39250_39389 = chunk__39243_39386.cljs$core$IIndexed$_nth$arity$2(null,i__39245_39388);
var map__39250_39390__$1 = (((((!((map__39250_39389 == null))))?(((((map__39250_39389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39250_39389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39250_39389):map__39250_39389);
var w_39391 = map__39250_39390__$1;
var msg_39392__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250_39390__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250_39390__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250_39390__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250_39390__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39395)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39393),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39394),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39392__$1)].join(''));


var G__39396 = seq__39242_39385;
var G__39397 = chunk__39243_39386;
var G__39398 = count__39244_39387;
var G__39399 = (i__39245_39388 + (1));
seq__39242_39385 = G__39396;
chunk__39243_39386 = G__39397;
count__39244_39387 = G__39398;
i__39245_39388 = G__39399;
continue;
} else {
var temp__5735__auto___39400 = cljs.core.seq(seq__39242_39385);
if(temp__5735__auto___39400){
var seq__39242_39401__$1 = temp__5735__auto___39400;
if(cljs.core.chunked_seq_QMARK_(seq__39242_39401__$1)){
var c__4556__auto___39402 = cljs.core.chunk_first(seq__39242_39401__$1);
var G__39403 = cljs.core.chunk_rest(seq__39242_39401__$1);
var G__39404 = c__4556__auto___39402;
var G__39405 = cljs.core.count(c__4556__auto___39402);
var G__39406 = (0);
seq__39242_39385 = G__39403;
chunk__39243_39386 = G__39404;
count__39244_39387 = G__39405;
i__39245_39388 = G__39406;
continue;
} else {
var map__39252_39407 = cljs.core.first(seq__39242_39401__$1);
var map__39252_39408__$1 = (((((!((map__39252_39407 == null))))?(((((map__39252_39407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39252_39407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39252_39407):map__39252_39407);
var w_39409 = map__39252_39408__$1;
var msg_39410__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252_39408__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252_39408__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252_39408__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252_39408__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39413)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39411),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39412),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39410__$1)].join(''));


var G__39414 = cljs.core.next(seq__39242_39401__$1);
var G__39415 = null;
var G__39416 = (0);
var G__39417 = (0);
seq__39242_39385 = G__39414;
chunk__39243_39386 = G__39415;
count__39244_39387 = G__39416;
i__39245_39388 = G__39417;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39230_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39230_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39254){
var map__39255 = p__39254;
var map__39255__$1 = (((((!((map__39255 == null))))?(((((map__39255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39255):map__39255);
var msg = map__39255__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39255__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39257 = cljs.core.seq(updates);
var chunk__39259 = null;
var count__39260 = (0);
var i__39261 = (0);
while(true){
if((i__39261 < count__39260)){
var path = chunk__39259.cljs$core$IIndexed$_nth$arity$2(null,i__39261);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39291_39418 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39295_39419 = null;
var count__39296_39420 = (0);
var i__39297_39421 = (0);
while(true){
if((i__39297_39421 < count__39296_39420)){
var node_39422 = chunk__39295_39419.cljs$core$IIndexed$_nth$arity$2(null,i__39297_39421);
if(cljs.core.not(node_39422.shadow$old)){
var path_match_39423 = shadow.cljs.devtools.client.browser.match_paths(node_39422.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39423)){
var new_link_39424 = (function (){var G__39303 = node_39422.cloneNode(true);
G__39303.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39423),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39303;
})();
(node_39422.shadow$old = true);

(new_link_39424.onload = ((function (seq__39291_39418,chunk__39295_39419,count__39296_39420,i__39297_39421,seq__39257,chunk__39259,count__39260,i__39261,new_link_39424,path_match_39423,node_39422,path,map__39255,map__39255__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39422);
});})(seq__39291_39418,chunk__39295_39419,count__39296_39420,i__39297_39421,seq__39257,chunk__39259,count__39260,i__39261,new_link_39424,path_match_39423,node_39422,path,map__39255,map__39255__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39423], 0));

goog.dom.insertSiblingAfter(new_link_39424,node_39422);


var G__39425 = seq__39291_39418;
var G__39426 = chunk__39295_39419;
var G__39427 = count__39296_39420;
var G__39428 = (i__39297_39421 + (1));
seq__39291_39418 = G__39425;
chunk__39295_39419 = G__39426;
count__39296_39420 = G__39427;
i__39297_39421 = G__39428;
continue;
} else {
var G__39429 = seq__39291_39418;
var G__39430 = chunk__39295_39419;
var G__39431 = count__39296_39420;
var G__39432 = (i__39297_39421 + (1));
seq__39291_39418 = G__39429;
chunk__39295_39419 = G__39430;
count__39296_39420 = G__39431;
i__39297_39421 = G__39432;
continue;
}
} else {
var G__39433 = seq__39291_39418;
var G__39434 = chunk__39295_39419;
var G__39435 = count__39296_39420;
var G__39436 = (i__39297_39421 + (1));
seq__39291_39418 = G__39433;
chunk__39295_39419 = G__39434;
count__39296_39420 = G__39435;
i__39297_39421 = G__39436;
continue;
}
} else {
var temp__5735__auto___39437 = cljs.core.seq(seq__39291_39418);
if(temp__5735__auto___39437){
var seq__39291_39438__$1 = temp__5735__auto___39437;
if(cljs.core.chunked_seq_QMARK_(seq__39291_39438__$1)){
var c__4556__auto___39439 = cljs.core.chunk_first(seq__39291_39438__$1);
var G__39440 = cljs.core.chunk_rest(seq__39291_39438__$1);
var G__39441 = c__4556__auto___39439;
var G__39442 = cljs.core.count(c__4556__auto___39439);
var G__39443 = (0);
seq__39291_39418 = G__39440;
chunk__39295_39419 = G__39441;
count__39296_39420 = G__39442;
i__39297_39421 = G__39443;
continue;
} else {
var node_39444 = cljs.core.first(seq__39291_39438__$1);
if(cljs.core.not(node_39444.shadow$old)){
var path_match_39445 = shadow.cljs.devtools.client.browser.match_paths(node_39444.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39445)){
var new_link_39446 = (function (){var G__39304 = node_39444.cloneNode(true);
G__39304.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39445),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39304;
})();
(node_39444.shadow$old = true);

(new_link_39446.onload = ((function (seq__39291_39418,chunk__39295_39419,count__39296_39420,i__39297_39421,seq__39257,chunk__39259,count__39260,i__39261,new_link_39446,path_match_39445,node_39444,seq__39291_39438__$1,temp__5735__auto___39437,path,map__39255,map__39255__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39444);
});})(seq__39291_39418,chunk__39295_39419,count__39296_39420,i__39297_39421,seq__39257,chunk__39259,count__39260,i__39261,new_link_39446,path_match_39445,node_39444,seq__39291_39438__$1,temp__5735__auto___39437,path,map__39255,map__39255__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39445], 0));

goog.dom.insertSiblingAfter(new_link_39446,node_39444);


var G__39447 = cljs.core.next(seq__39291_39438__$1);
var G__39448 = null;
var G__39449 = (0);
var G__39450 = (0);
seq__39291_39418 = G__39447;
chunk__39295_39419 = G__39448;
count__39296_39420 = G__39449;
i__39297_39421 = G__39450;
continue;
} else {
var G__39451 = cljs.core.next(seq__39291_39438__$1);
var G__39452 = null;
var G__39453 = (0);
var G__39454 = (0);
seq__39291_39418 = G__39451;
chunk__39295_39419 = G__39452;
count__39296_39420 = G__39453;
i__39297_39421 = G__39454;
continue;
}
} else {
var G__39455 = cljs.core.next(seq__39291_39438__$1);
var G__39456 = null;
var G__39457 = (0);
var G__39458 = (0);
seq__39291_39418 = G__39455;
chunk__39295_39419 = G__39456;
count__39296_39420 = G__39457;
i__39297_39421 = G__39458;
continue;
}
}
} else {
}
}
break;
}


var G__39459 = seq__39257;
var G__39460 = chunk__39259;
var G__39461 = count__39260;
var G__39462 = (i__39261 + (1));
seq__39257 = G__39459;
chunk__39259 = G__39460;
count__39260 = G__39461;
i__39261 = G__39462;
continue;
} else {
var G__39463 = seq__39257;
var G__39464 = chunk__39259;
var G__39465 = count__39260;
var G__39466 = (i__39261 + (1));
seq__39257 = G__39463;
chunk__39259 = G__39464;
count__39260 = G__39465;
i__39261 = G__39466;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39257);
if(temp__5735__auto__){
var seq__39257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39257__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39257__$1);
var G__39467 = cljs.core.chunk_rest(seq__39257__$1);
var G__39468 = c__4556__auto__;
var G__39469 = cljs.core.count(c__4556__auto__);
var G__39470 = (0);
seq__39257 = G__39467;
chunk__39259 = G__39468;
count__39260 = G__39469;
i__39261 = G__39470;
continue;
} else {
var path = cljs.core.first(seq__39257__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39305_39471 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39309_39472 = null;
var count__39310_39473 = (0);
var i__39311_39474 = (0);
while(true){
if((i__39311_39474 < count__39310_39473)){
var node_39475 = chunk__39309_39472.cljs$core$IIndexed$_nth$arity$2(null,i__39311_39474);
if(cljs.core.not(node_39475.shadow$old)){
var path_match_39476 = shadow.cljs.devtools.client.browser.match_paths(node_39475.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39476)){
var new_link_39477 = (function (){var G__39317 = node_39475.cloneNode(true);
G__39317.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39476),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39317;
})();
(node_39475.shadow$old = true);

(new_link_39477.onload = ((function (seq__39305_39471,chunk__39309_39472,count__39310_39473,i__39311_39474,seq__39257,chunk__39259,count__39260,i__39261,new_link_39477,path_match_39476,node_39475,path,seq__39257__$1,temp__5735__auto__,map__39255,map__39255__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39475);
});})(seq__39305_39471,chunk__39309_39472,count__39310_39473,i__39311_39474,seq__39257,chunk__39259,count__39260,i__39261,new_link_39477,path_match_39476,node_39475,path,seq__39257__$1,temp__5735__auto__,map__39255,map__39255__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39476], 0));

goog.dom.insertSiblingAfter(new_link_39477,node_39475);


var G__39478 = seq__39305_39471;
var G__39479 = chunk__39309_39472;
var G__39480 = count__39310_39473;
var G__39481 = (i__39311_39474 + (1));
seq__39305_39471 = G__39478;
chunk__39309_39472 = G__39479;
count__39310_39473 = G__39480;
i__39311_39474 = G__39481;
continue;
} else {
var G__39482 = seq__39305_39471;
var G__39483 = chunk__39309_39472;
var G__39484 = count__39310_39473;
var G__39485 = (i__39311_39474 + (1));
seq__39305_39471 = G__39482;
chunk__39309_39472 = G__39483;
count__39310_39473 = G__39484;
i__39311_39474 = G__39485;
continue;
}
} else {
var G__39486 = seq__39305_39471;
var G__39487 = chunk__39309_39472;
var G__39488 = count__39310_39473;
var G__39489 = (i__39311_39474 + (1));
seq__39305_39471 = G__39486;
chunk__39309_39472 = G__39487;
count__39310_39473 = G__39488;
i__39311_39474 = G__39489;
continue;
}
} else {
var temp__5735__auto___39490__$1 = cljs.core.seq(seq__39305_39471);
if(temp__5735__auto___39490__$1){
var seq__39305_39491__$1 = temp__5735__auto___39490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39305_39491__$1)){
var c__4556__auto___39492 = cljs.core.chunk_first(seq__39305_39491__$1);
var G__39493 = cljs.core.chunk_rest(seq__39305_39491__$1);
var G__39494 = c__4556__auto___39492;
var G__39495 = cljs.core.count(c__4556__auto___39492);
var G__39496 = (0);
seq__39305_39471 = G__39493;
chunk__39309_39472 = G__39494;
count__39310_39473 = G__39495;
i__39311_39474 = G__39496;
continue;
} else {
var node_39497 = cljs.core.first(seq__39305_39491__$1);
if(cljs.core.not(node_39497.shadow$old)){
var path_match_39498 = shadow.cljs.devtools.client.browser.match_paths(node_39497.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39498)){
var new_link_39499 = (function (){var G__39318 = node_39497.cloneNode(true);
G__39318.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39498),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39318;
})();
(node_39497.shadow$old = true);

(new_link_39499.onload = ((function (seq__39305_39471,chunk__39309_39472,count__39310_39473,i__39311_39474,seq__39257,chunk__39259,count__39260,i__39261,new_link_39499,path_match_39498,node_39497,seq__39305_39491__$1,temp__5735__auto___39490__$1,path,seq__39257__$1,temp__5735__auto__,map__39255,map__39255__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39497);
});})(seq__39305_39471,chunk__39309_39472,count__39310_39473,i__39311_39474,seq__39257,chunk__39259,count__39260,i__39261,new_link_39499,path_match_39498,node_39497,seq__39305_39491__$1,temp__5735__auto___39490__$1,path,seq__39257__$1,temp__5735__auto__,map__39255,map__39255__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39498], 0));

goog.dom.insertSiblingAfter(new_link_39499,node_39497);


var G__39500 = cljs.core.next(seq__39305_39491__$1);
var G__39501 = null;
var G__39502 = (0);
var G__39503 = (0);
seq__39305_39471 = G__39500;
chunk__39309_39472 = G__39501;
count__39310_39473 = G__39502;
i__39311_39474 = G__39503;
continue;
} else {
var G__39504 = cljs.core.next(seq__39305_39491__$1);
var G__39505 = null;
var G__39506 = (0);
var G__39507 = (0);
seq__39305_39471 = G__39504;
chunk__39309_39472 = G__39505;
count__39310_39473 = G__39506;
i__39311_39474 = G__39507;
continue;
}
} else {
var G__39508 = cljs.core.next(seq__39305_39491__$1);
var G__39509 = null;
var G__39510 = (0);
var G__39511 = (0);
seq__39305_39471 = G__39508;
chunk__39309_39472 = G__39509;
count__39310_39473 = G__39510;
i__39311_39474 = G__39511;
continue;
}
}
} else {
}
}
break;
}


var G__39512 = cljs.core.next(seq__39257__$1);
var G__39513 = null;
var G__39514 = (0);
var G__39515 = (0);
seq__39257 = G__39512;
chunk__39259 = G__39513;
count__39260 = G__39514;
i__39261 = G__39515;
continue;
} else {
var G__39516 = cljs.core.next(seq__39257__$1);
var G__39517 = null;
var G__39518 = (0);
var G__39519 = (0);
seq__39257 = G__39516;
chunk__39259 = G__39517;
count__39260 = G__39518;
i__39261 = G__39519;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39319){
var map__39320 = p__39319;
var map__39320__$1 = (((((!((map__39320 == null))))?(((((map__39320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39320):map__39320);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39320__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39322){
var map__39323 = p__39322;
var map__39323__$1 = (((((!((map__39323 == null))))?(((((map__39323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39323):map__39323);
var _ = map__39323__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39323__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39325,done,error){
var map__39326 = p__39325;
var map__39326__$1 = (((((!((map__39326 == null))))?(((((map__39326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39326):map__39326);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39326__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39328,done,error){
var map__39329 = p__39328;
var map__39329__$1 = (((((!((map__39329 == null))))?(((((map__39329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39329):map__39329);
var msg = map__39329__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39329__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39329__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39329__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39331){
var map__39332 = p__39331;
var map__39332__$1 = (((((!((map__39332 == null))))?(((((map__39332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39332):map__39332);
var src = map__39332__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39334 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39334) : done.call(null,G__39334));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39335){
var map__39336 = p__39335;
var map__39336__$1 = (((((!((map__39336 == null))))?(((((map__39336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39336):map__39336);
var msg__$1 = map__39336__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39338){var ex = e39338;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39339){
var map__39340 = p__39339;
var map__39340__$1 = (((((!((map__39340 == null))))?(((((map__39340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39340):map__39340);
var env = map__39340__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39340__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39342){
var map__39343 = p__39342;
var map__39343__$1 = (((((!((map__39343 == null))))?(((((map__39343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39343):map__39343);
var msg = map__39343__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39343__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39345){
var map__39346 = p__39345;
var map__39346__$1 = (((((!((map__39346 == null))))?(((((map__39346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39346):map__39346);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39348){
var map__39349 = p__39348;
var map__39349__$1 = (((((!((map__39349 == null))))?(((((map__39349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39349):map__39349);
var svc = map__39349__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
