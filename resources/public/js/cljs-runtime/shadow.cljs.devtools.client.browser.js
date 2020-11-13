goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35316 = arguments.length;
var i__4737__auto___35317 = (0);
while(true){
if((i__4737__auto___35317 < len__4736__auto___35316)){
args__4742__auto__.push((arguments[i__4737__auto___35317]));

var G__35318 = (i__4737__auto___35317 + (1));
i__4737__auto___35317 = G__35318;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35161){
var G__35162 = cljs.core.first(seq35161);
var seq35161__$1 = cljs.core.next(seq35161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35162,seq35161__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35171 = cljs.core.seq(sources);
var chunk__35172 = null;
var count__35173 = (0);
var i__35174 = (0);
while(true){
if((i__35174 < count__35173)){
var map__35182 = chunk__35172.cljs$core$IIndexed$_nth$arity$2(null,i__35174);
var map__35182__$1 = (((((!((map__35182 == null))))?(((((map__35182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35182):map__35182);
var src = map__35182__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35184){var e_35319 = e35184;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35319);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35319.message)].join('')));
}

var G__35320 = seq__35171;
var G__35321 = chunk__35172;
var G__35322 = count__35173;
var G__35323 = (i__35174 + (1));
seq__35171 = G__35320;
chunk__35172 = G__35321;
count__35173 = G__35322;
i__35174 = G__35323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35171);
if(temp__5735__auto__){
var seq__35171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35171__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35171__$1);
var G__35324 = cljs.core.chunk_rest(seq__35171__$1);
var G__35325 = c__4556__auto__;
var G__35326 = cljs.core.count(c__4556__auto__);
var G__35327 = (0);
seq__35171 = G__35324;
chunk__35172 = G__35325;
count__35173 = G__35326;
i__35174 = G__35327;
continue;
} else {
var map__35185 = cljs.core.first(seq__35171__$1);
var map__35185__$1 = (((((!((map__35185 == null))))?(((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35185):map__35185);
var src = map__35185__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35187){var e_35328 = e35187;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35328);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35328.message)].join('')));
}

var G__35329 = cljs.core.next(seq__35171__$1);
var G__35330 = null;
var G__35331 = (0);
var G__35332 = (0);
seq__35171 = G__35329;
chunk__35172 = G__35330;
count__35173 = G__35331;
i__35174 = G__35332;
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
var seq__35189 = cljs.core.seq(js_requires);
var chunk__35190 = null;
var count__35191 = (0);
var i__35192 = (0);
while(true){
if((i__35192 < count__35191)){
var js_ns = chunk__35190.cljs$core$IIndexed$_nth$arity$2(null,i__35192);
var require_str_35333 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35333);


var G__35334 = seq__35189;
var G__35335 = chunk__35190;
var G__35336 = count__35191;
var G__35337 = (i__35192 + (1));
seq__35189 = G__35334;
chunk__35190 = G__35335;
count__35191 = G__35336;
i__35192 = G__35337;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35189);
if(temp__5735__auto__){
var seq__35189__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35189__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35189__$1);
var G__35338 = cljs.core.chunk_rest(seq__35189__$1);
var G__35339 = c__4556__auto__;
var G__35340 = cljs.core.count(c__4556__auto__);
var G__35341 = (0);
seq__35189 = G__35338;
chunk__35190 = G__35339;
count__35191 = G__35340;
i__35192 = G__35341;
continue;
} else {
var js_ns = cljs.core.first(seq__35189__$1);
var require_str_35342 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35342);


var G__35343 = cljs.core.next(seq__35189__$1);
var G__35344 = null;
var G__35345 = (0);
var G__35346 = (0);
seq__35189 = G__35343;
chunk__35190 = G__35344;
count__35191 = G__35345;
i__35192 = G__35346;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35194){
var map__35195 = p__35194;
var map__35195__$1 = (((((!((map__35195 == null))))?(((((map__35195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35195):map__35195);
var msg = map__35195__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35197(s__35198){
return (new cljs.core.LazySeq(null,(function (){
var s__35198__$1 = s__35198;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35198__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35203 = cljs.core.first(xs__6292__auto__);
var map__35203__$1 = (((((!((map__35203 == null))))?(((((map__35203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35203):map__35203);
var src = map__35203__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35198__$1,map__35203,map__35203__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35195,map__35195__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35197_$_iter__35199(s__35200){
return (new cljs.core.LazySeq(null,((function (s__35198__$1,map__35203,map__35203__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35195,map__35195__$1,msg,info,reload_info){
return (function (){
var s__35200__$1 = s__35200;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35200__$1);
if(temp__5735__auto____$1){
var s__35200__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35200__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35200__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35202 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35201 = (0);
while(true){
if((i__35201 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35201);
cljs.core.chunk_append(b__35202,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35347 = (i__35201 + (1));
i__35201 = G__35347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35202),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35197_$_iter__35199(cljs.core.chunk_rest(s__35200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35202),null);
}
} else {
var warning = cljs.core.first(s__35200__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35197_$_iter__35199(cljs.core.rest(s__35200__$2)));
}
} else {
return null;
}
break;
}
});})(s__35198__$1,map__35203,map__35203__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35195,map__35195__$1,msg,info,reload_info))
,null,null));
});})(s__35198__$1,map__35203,map__35203__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35195,map__35195__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35197(cljs.core.rest(s__35198__$1)));
} else {
var G__35348 = cljs.core.rest(s__35198__$1);
s__35198__$1 = G__35348;
continue;
}
} else {
var G__35349 = cljs.core.rest(s__35198__$1);
s__35198__$1 = G__35349;
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
var seq__35205_35350 = cljs.core.seq(warnings);
var chunk__35206_35351 = null;
var count__35207_35352 = (0);
var i__35208_35353 = (0);
while(true){
if((i__35208_35353 < count__35207_35352)){
var map__35213_35354 = chunk__35206_35351.cljs$core$IIndexed$_nth$arity$2(null,i__35208_35353);
var map__35213_35355__$1 = (((((!((map__35213_35354 == null))))?(((((map__35213_35354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35213_35354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35213_35354):map__35213_35354);
var w_35356 = map__35213_35355__$1;
var msg_35357__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213_35355__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213_35355__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213_35355__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213_35355__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35360)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35358),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35359),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35357__$1)].join(''));


var G__35361 = seq__35205_35350;
var G__35362 = chunk__35206_35351;
var G__35363 = count__35207_35352;
var G__35364 = (i__35208_35353 + (1));
seq__35205_35350 = G__35361;
chunk__35206_35351 = G__35362;
count__35207_35352 = G__35363;
i__35208_35353 = G__35364;
continue;
} else {
var temp__5735__auto___35365 = cljs.core.seq(seq__35205_35350);
if(temp__5735__auto___35365){
var seq__35205_35366__$1 = temp__5735__auto___35365;
if(cljs.core.chunked_seq_QMARK_(seq__35205_35366__$1)){
var c__4556__auto___35367 = cljs.core.chunk_first(seq__35205_35366__$1);
var G__35368 = cljs.core.chunk_rest(seq__35205_35366__$1);
var G__35369 = c__4556__auto___35367;
var G__35370 = cljs.core.count(c__4556__auto___35367);
var G__35371 = (0);
seq__35205_35350 = G__35368;
chunk__35206_35351 = G__35369;
count__35207_35352 = G__35370;
i__35208_35353 = G__35371;
continue;
} else {
var map__35215_35372 = cljs.core.first(seq__35205_35366__$1);
var map__35215_35373__$1 = (((((!((map__35215_35372 == null))))?(((((map__35215_35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215_35372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35215_35372):map__35215_35372);
var w_35374 = map__35215_35373__$1;
var msg_35375__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215_35373__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215_35373__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215_35373__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215_35373__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35378)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35376),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35377),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35375__$1)].join(''));


var G__35379 = cljs.core.next(seq__35205_35366__$1);
var G__35380 = null;
var G__35381 = (0);
var G__35382 = (0);
seq__35205_35350 = G__35379;
chunk__35206_35351 = G__35380;
count__35207_35352 = G__35381;
i__35208_35353 = G__35382;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35193_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35193_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35217){
var map__35218 = p__35217;
var map__35218__$1 = (((((!((map__35218 == null))))?(((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35218):map__35218);
var msg = map__35218__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35218__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35220 = cljs.core.seq(updates);
var chunk__35222 = null;
var count__35223 = (0);
var i__35224 = (0);
while(true){
if((i__35224 < count__35223)){
var path = chunk__35222.cljs$core$IIndexed$_nth$arity$2(null,i__35224);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35256_35383 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35260_35384 = null;
var count__35261_35385 = (0);
var i__35262_35386 = (0);
while(true){
if((i__35262_35386 < count__35261_35385)){
var node_35387 = chunk__35260_35384.cljs$core$IIndexed$_nth$arity$2(null,i__35262_35386);
if(cljs.core.not(node_35387.shadow$old)){
var path_match_35388 = shadow.cljs.devtools.client.browser.match_paths(node_35387.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35388)){
var new_link_35389 = (function (){var G__35268 = node_35387.cloneNode(true);
G__35268.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35388),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35268;
})();
(node_35387.shadow$old = true);

(new_link_35389.onload = ((function (seq__35256_35383,chunk__35260_35384,count__35261_35385,i__35262_35386,seq__35220,chunk__35222,count__35223,i__35224,new_link_35389,path_match_35388,node_35387,path,map__35218,map__35218__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35387);
});})(seq__35256_35383,chunk__35260_35384,count__35261_35385,i__35262_35386,seq__35220,chunk__35222,count__35223,i__35224,new_link_35389,path_match_35388,node_35387,path,map__35218,map__35218__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35388], 0));

goog.dom.insertSiblingAfter(new_link_35389,node_35387);


var G__35390 = seq__35256_35383;
var G__35391 = chunk__35260_35384;
var G__35392 = count__35261_35385;
var G__35393 = (i__35262_35386 + (1));
seq__35256_35383 = G__35390;
chunk__35260_35384 = G__35391;
count__35261_35385 = G__35392;
i__35262_35386 = G__35393;
continue;
} else {
var G__35394 = seq__35256_35383;
var G__35395 = chunk__35260_35384;
var G__35396 = count__35261_35385;
var G__35397 = (i__35262_35386 + (1));
seq__35256_35383 = G__35394;
chunk__35260_35384 = G__35395;
count__35261_35385 = G__35396;
i__35262_35386 = G__35397;
continue;
}
} else {
var G__35398 = seq__35256_35383;
var G__35399 = chunk__35260_35384;
var G__35400 = count__35261_35385;
var G__35401 = (i__35262_35386 + (1));
seq__35256_35383 = G__35398;
chunk__35260_35384 = G__35399;
count__35261_35385 = G__35400;
i__35262_35386 = G__35401;
continue;
}
} else {
var temp__5735__auto___35402 = cljs.core.seq(seq__35256_35383);
if(temp__5735__auto___35402){
var seq__35256_35403__$1 = temp__5735__auto___35402;
if(cljs.core.chunked_seq_QMARK_(seq__35256_35403__$1)){
var c__4556__auto___35404 = cljs.core.chunk_first(seq__35256_35403__$1);
var G__35405 = cljs.core.chunk_rest(seq__35256_35403__$1);
var G__35406 = c__4556__auto___35404;
var G__35407 = cljs.core.count(c__4556__auto___35404);
var G__35408 = (0);
seq__35256_35383 = G__35405;
chunk__35260_35384 = G__35406;
count__35261_35385 = G__35407;
i__35262_35386 = G__35408;
continue;
} else {
var node_35409 = cljs.core.first(seq__35256_35403__$1);
if(cljs.core.not(node_35409.shadow$old)){
var path_match_35410 = shadow.cljs.devtools.client.browser.match_paths(node_35409.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35410)){
var new_link_35411 = (function (){var G__35269 = node_35409.cloneNode(true);
G__35269.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35410),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35269;
})();
(node_35409.shadow$old = true);

(new_link_35411.onload = ((function (seq__35256_35383,chunk__35260_35384,count__35261_35385,i__35262_35386,seq__35220,chunk__35222,count__35223,i__35224,new_link_35411,path_match_35410,node_35409,seq__35256_35403__$1,temp__5735__auto___35402,path,map__35218,map__35218__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35409);
});})(seq__35256_35383,chunk__35260_35384,count__35261_35385,i__35262_35386,seq__35220,chunk__35222,count__35223,i__35224,new_link_35411,path_match_35410,node_35409,seq__35256_35403__$1,temp__5735__auto___35402,path,map__35218,map__35218__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35410], 0));

goog.dom.insertSiblingAfter(new_link_35411,node_35409);


var G__35412 = cljs.core.next(seq__35256_35403__$1);
var G__35413 = null;
var G__35414 = (0);
var G__35415 = (0);
seq__35256_35383 = G__35412;
chunk__35260_35384 = G__35413;
count__35261_35385 = G__35414;
i__35262_35386 = G__35415;
continue;
} else {
var G__35416 = cljs.core.next(seq__35256_35403__$1);
var G__35417 = null;
var G__35418 = (0);
var G__35419 = (0);
seq__35256_35383 = G__35416;
chunk__35260_35384 = G__35417;
count__35261_35385 = G__35418;
i__35262_35386 = G__35419;
continue;
}
} else {
var G__35420 = cljs.core.next(seq__35256_35403__$1);
var G__35421 = null;
var G__35422 = (0);
var G__35423 = (0);
seq__35256_35383 = G__35420;
chunk__35260_35384 = G__35421;
count__35261_35385 = G__35422;
i__35262_35386 = G__35423;
continue;
}
}
} else {
}
}
break;
}


var G__35424 = seq__35220;
var G__35425 = chunk__35222;
var G__35426 = count__35223;
var G__35427 = (i__35224 + (1));
seq__35220 = G__35424;
chunk__35222 = G__35425;
count__35223 = G__35426;
i__35224 = G__35427;
continue;
} else {
var G__35428 = seq__35220;
var G__35429 = chunk__35222;
var G__35430 = count__35223;
var G__35431 = (i__35224 + (1));
seq__35220 = G__35428;
chunk__35222 = G__35429;
count__35223 = G__35430;
i__35224 = G__35431;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35220);
if(temp__5735__auto__){
var seq__35220__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35220__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35220__$1);
var G__35432 = cljs.core.chunk_rest(seq__35220__$1);
var G__35433 = c__4556__auto__;
var G__35434 = cljs.core.count(c__4556__auto__);
var G__35435 = (0);
seq__35220 = G__35432;
chunk__35222 = G__35433;
count__35223 = G__35434;
i__35224 = G__35435;
continue;
} else {
var path = cljs.core.first(seq__35220__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35270_35436 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35274_35437 = null;
var count__35275_35438 = (0);
var i__35276_35439 = (0);
while(true){
if((i__35276_35439 < count__35275_35438)){
var node_35440 = chunk__35274_35437.cljs$core$IIndexed$_nth$arity$2(null,i__35276_35439);
if(cljs.core.not(node_35440.shadow$old)){
var path_match_35441 = shadow.cljs.devtools.client.browser.match_paths(node_35440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35441)){
var new_link_35442 = (function (){var G__35282 = node_35440.cloneNode(true);
G__35282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35282;
})();
(node_35440.shadow$old = true);

(new_link_35442.onload = ((function (seq__35270_35436,chunk__35274_35437,count__35275_35438,i__35276_35439,seq__35220,chunk__35222,count__35223,i__35224,new_link_35442,path_match_35441,node_35440,path,seq__35220__$1,temp__5735__auto__,map__35218,map__35218__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35440);
});})(seq__35270_35436,chunk__35274_35437,count__35275_35438,i__35276_35439,seq__35220,chunk__35222,count__35223,i__35224,new_link_35442,path_match_35441,node_35440,path,seq__35220__$1,temp__5735__auto__,map__35218,map__35218__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35441], 0));

goog.dom.insertSiblingAfter(new_link_35442,node_35440);


var G__35443 = seq__35270_35436;
var G__35444 = chunk__35274_35437;
var G__35445 = count__35275_35438;
var G__35446 = (i__35276_35439 + (1));
seq__35270_35436 = G__35443;
chunk__35274_35437 = G__35444;
count__35275_35438 = G__35445;
i__35276_35439 = G__35446;
continue;
} else {
var G__35447 = seq__35270_35436;
var G__35448 = chunk__35274_35437;
var G__35449 = count__35275_35438;
var G__35450 = (i__35276_35439 + (1));
seq__35270_35436 = G__35447;
chunk__35274_35437 = G__35448;
count__35275_35438 = G__35449;
i__35276_35439 = G__35450;
continue;
}
} else {
var G__35451 = seq__35270_35436;
var G__35452 = chunk__35274_35437;
var G__35453 = count__35275_35438;
var G__35454 = (i__35276_35439 + (1));
seq__35270_35436 = G__35451;
chunk__35274_35437 = G__35452;
count__35275_35438 = G__35453;
i__35276_35439 = G__35454;
continue;
}
} else {
var temp__5735__auto___35455__$1 = cljs.core.seq(seq__35270_35436);
if(temp__5735__auto___35455__$1){
var seq__35270_35456__$1 = temp__5735__auto___35455__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35270_35456__$1)){
var c__4556__auto___35457 = cljs.core.chunk_first(seq__35270_35456__$1);
var G__35458 = cljs.core.chunk_rest(seq__35270_35456__$1);
var G__35459 = c__4556__auto___35457;
var G__35460 = cljs.core.count(c__4556__auto___35457);
var G__35461 = (0);
seq__35270_35436 = G__35458;
chunk__35274_35437 = G__35459;
count__35275_35438 = G__35460;
i__35276_35439 = G__35461;
continue;
} else {
var node_35462 = cljs.core.first(seq__35270_35456__$1);
if(cljs.core.not(node_35462.shadow$old)){
var path_match_35463 = shadow.cljs.devtools.client.browser.match_paths(node_35462.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35463)){
var new_link_35464 = (function (){var G__35283 = node_35462.cloneNode(true);
G__35283.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35463),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35283;
})();
(node_35462.shadow$old = true);

(new_link_35464.onload = ((function (seq__35270_35436,chunk__35274_35437,count__35275_35438,i__35276_35439,seq__35220,chunk__35222,count__35223,i__35224,new_link_35464,path_match_35463,node_35462,seq__35270_35456__$1,temp__5735__auto___35455__$1,path,seq__35220__$1,temp__5735__auto__,map__35218,map__35218__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35462);
});})(seq__35270_35436,chunk__35274_35437,count__35275_35438,i__35276_35439,seq__35220,chunk__35222,count__35223,i__35224,new_link_35464,path_match_35463,node_35462,seq__35270_35456__$1,temp__5735__auto___35455__$1,path,seq__35220__$1,temp__5735__auto__,map__35218,map__35218__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35463], 0));

goog.dom.insertSiblingAfter(new_link_35464,node_35462);


var G__35465 = cljs.core.next(seq__35270_35456__$1);
var G__35466 = null;
var G__35467 = (0);
var G__35468 = (0);
seq__35270_35436 = G__35465;
chunk__35274_35437 = G__35466;
count__35275_35438 = G__35467;
i__35276_35439 = G__35468;
continue;
} else {
var G__35469 = cljs.core.next(seq__35270_35456__$1);
var G__35470 = null;
var G__35471 = (0);
var G__35472 = (0);
seq__35270_35436 = G__35469;
chunk__35274_35437 = G__35470;
count__35275_35438 = G__35471;
i__35276_35439 = G__35472;
continue;
}
} else {
var G__35473 = cljs.core.next(seq__35270_35456__$1);
var G__35474 = null;
var G__35475 = (0);
var G__35476 = (0);
seq__35270_35436 = G__35473;
chunk__35274_35437 = G__35474;
count__35275_35438 = G__35475;
i__35276_35439 = G__35476;
continue;
}
}
} else {
}
}
break;
}


var G__35477 = cljs.core.next(seq__35220__$1);
var G__35478 = null;
var G__35479 = (0);
var G__35480 = (0);
seq__35220 = G__35477;
chunk__35222 = G__35478;
count__35223 = G__35479;
i__35224 = G__35480;
continue;
} else {
var G__35481 = cljs.core.next(seq__35220__$1);
var G__35482 = null;
var G__35483 = (0);
var G__35484 = (0);
seq__35220 = G__35481;
chunk__35222 = G__35482;
count__35223 = G__35483;
i__35224 = G__35484;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35284){
var map__35285 = p__35284;
var map__35285__$1 = (((((!((map__35285 == null))))?(((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35285):map__35285);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35287){
var map__35288 = p__35287;
var map__35288__$1 = (((((!((map__35288 == null))))?(((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35288):map__35288);
var _ = map__35288__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35288__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35290,done,error){
var map__35291 = p__35290;
var map__35291__$1 = (((((!((map__35291 == null))))?(((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35291):map__35291);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35293,done,error){
var map__35294 = p__35293;
var map__35294__$1 = (((((!((map__35294 == null))))?(((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35294):map__35294);
var msg = map__35294__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35294__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35294__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35294__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35296){
var map__35297 = p__35296;
var map__35297__$1 = (((((!((map__35297 == null))))?(((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35297):map__35297);
var src = map__35297__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35299 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35299) : done.call(null,G__35299));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35300){
var map__35301 = p__35300;
var map__35301__$1 = (((((!((map__35301 == null))))?(((((map__35301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35301):map__35301);
var msg__$1 = map__35301__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35301__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35303){var ex = e35303;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35304){
var map__35305 = p__35304;
var map__35305__$1 = (((((!((map__35305 == null))))?(((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35305):map__35305);
var env = map__35305__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35307){
var map__35308 = p__35307;
var map__35308__$1 = (((((!((map__35308 == null))))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35308):map__35308);
var msg = map__35308__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35308__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35310){
var map__35311 = p__35310;
var map__35311__$1 = (((((!((map__35311 == null))))?(((((map__35311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35311):map__35311);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35313){
var map__35314 = p__35313;
var map__35314__$1 = (((((!((map__35314 == null))))?(((((map__35314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35314):map__35314);
var svc = map__35314__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
