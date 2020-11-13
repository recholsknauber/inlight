goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36285){
var map__36286 = p__36285;
var map__36286__$1 = (((((!((map__36286 == null))))?(((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36286):map__36286);
var m = map__36286__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36290_36499 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36291_36500 = null;
var count__36292_36501 = (0);
var i__36293_36502 = (0);
while(true){
if((i__36293_36502 < count__36292_36501)){
var f_36503 = chunk__36291_36500.cljs$core$IIndexed$_nth$arity$2(null,i__36293_36502);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36503], 0));


var G__36504 = seq__36290_36499;
var G__36505 = chunk__36291_36500;
var G__36506 = count__36292_36501;
var G__36507 = (i__36293_36502 + (1));
seq__36290_36499 = G__36504;
chunk__36291_36500 = G__36505;
count__36292_36501 = G__36506;
i__36293_36502 = G__36507;
continue;
} else {
var temp__5735__auto___36509 = cljs.core.seq(seq__36290_36499);
if(temp__5735__auto___36509){
var seq__36290_36510__$1 = temp__5735__auto___36509;
if(cljs.core.chunked_seq_QMARK_(seq__36290_36510__$1)){
var c__4556__auto___36511 = cljs.core.chunk_first(seq__36290_36510__$1);
var G__36512 = cljs.core.chunk_rest(seq__36290_36510__$1);
var G__36513 = c__4556__auto___36511;
var G__36514 = cljs.core.count(c__4556__auto___36511);
var G__36515 = (0);
seq__36290_36499 = G__36512;
chunk__36291_36500 = G__36513;
count__36292_36501 = G__36514;
i__36293_36502 = G__36515;
continue;
} else {
var f_36516 = cljs.core.first(seq__36290_36510__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36516], 0));


var G__36517 = cljs.core.next(seq__36290_36510__$1);
var G__36518 = null;
var G__36519 = (0);
var G__36520 = (0);
seq__36290_36499 = G__36517;
chunk__36291_36500 = G__36518;
count__36292_36501 = G__36519;
i__36293_36502 = G__36520;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36521 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36521], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36521)))?cljs.core.second(arglists_36521):arglists_36521)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36297_36522 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36298_36523 = null;
var count__36299_36524 = (0);
var i__36300_36525 = (0);
while(true){
if((i__36300_36525 < count__36299_36524)){
var vec__36312_36526 = chunk__36298_36523.cljs$core$IIndexed$_nth$arity$2(null,i__36300_36525);
var name_36527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36312_36526,(0),null);
var map__36315_36528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36312_36526,(1),null);
var map__36315_36529__$1 = (((((!((map__36315_36528 == null))))?(((((map__36315_36528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36315_36528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36315_36528):map__36315_36528);
var doc_36530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36315_36529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36315_36529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36527], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36531], 0));

if(cljs.core.truth_(doc_36530)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36530], 0));
} else {
}


var G__36533 = seq__36297_36522;
var G__36534 = chunk__36298_36523;
var G__36535 = count__36299_36524;
var G__36536 = (i__36300_36525 + (1));
seq__36297_36522 = G__36533;
chunk__36298_36523 = G__36534;
count__36299_36524 = G__36535;
i__36300_36525 = G__36536;
continue;
} else {
var temp__5735__auto___36537 = cljs.core.seq(seq__36297_36522);
if(temp__5735__auto___36537){
var seq__36297_36538__$1 = temp__5735__auto___36537;
if(cljs.core.chunked_seq_QMARK_(seq__36297_36538__$1)){
var c__4556__auto___36539 = cljs.core.chunk_first(seq__36297_36538__$1);
var G__36540 = cljs.core.chunk_rest(seq__36297_36538__$1);
var G__36541 = c__4556__auto___36539;
var G__36542 = cljs.core.count(c__4556__auto___36539);
var G__36543 = (0);
seq__36297_36522 = G__36540;
chunk__36298_36523 = G__36541;
count__36299_36524 = G__36542;
i__36300_36525 = G__36543;
continue;
} else {
var vec__36317_36544 = cljs.core.first(seq__36297_36538__$1);
var name_36545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36317_36544,(0),null);
var map__36320_36546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36317_36544,(1),null);
var map__36320_36547__$1 = (((((!((map__36320_36546 == null))))?(((((map__36320_36546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36320_36546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36320_36546):map__36320_36546);
var doc_36548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320_36547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320_36547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36545], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36549], 0));

if(cljs.core.truth_(doc_36548)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36548], 0));
} else {
}


var G__36550 = cljs.core.next(seq__36297_36538__$1);
var G__36551 = null;
var G__36552 = (0);
var G__36553 = (0);
seq__36297_36522 = G__36550;
chunk__36298_36523 = G__36551;
count__36299_36524 = G__36552;
i__36300_36525 = G__36553;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36324 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36325 = null;
var count__36326 = (0);
var i__36327 = (0);
while(true){
if((i__36327 < count__36326)){
var role = chunk__36325.cljs$core$IIndexed$_nth$arity$2(null,i__36327);
var temp__5735__auto___36554__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36554__$1)){
var spec_36555 = temp__5735__auto___36554__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36555)], 0));
} else {
}


var G__36556 = seq__36324;
var G__36557 = chunk__36325;
var G__36558 = count__36326;
var G__36559 = (i__36327 + (1));
seq__36324 = G__36556;
chunk__36325 = G__36557;
count__36326 = G__36558;
i__36327 = G__36559;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36324);
if(temp__5735__auto____$1){
var seq__36324__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36324__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36324__$1);
var G__36560 = cljs.core.chunk_rest(seq__36324__$1);
var G__36561 = c__4556__auto__;
var G__36562 = cljs.core.count(c__4556__auto__);
var G__36563 = (0);
seq__36324 = G__36560;
chunk__36325 = G__36561;
count__36326 = G__36562;
i__36327 = G__36563;
continue;
} else {
var role = cljs.core.first(seq__36324__$1);
var temp__5735__auto___36564__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36564__$2)){
var spec_36565 = temp__5735__auto___36564__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36565)], 0));
} else {
}


var G__36566 = cljs.core.next(seq__36324__$1);
var G__36567 = null;
var G__36568 = (0);
var G__36569 = (0);
seq__36324 = G__36566;
chunk__36325 = G__36567;
count__36326 = G__36568;
i__36327 = G__36569;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36570 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36571 = cljs.core.ex_cause(t);
via = G__36570;
t = G__36571;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36337 = datafied_throwable;
var map__36337__$1 = (((((!((map__36337 == null))))?(((((map__36337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36337):map__36337);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36337__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36338 = cljs.core.last(via);
var map__36338__$1 = (((((!((map__36338 == null))))?(((((map__36338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36338):map__36338);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36339 = data;
var map__36339__$1 = (((((!((map__36339 == null))))?(((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36339):map__36339);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36340 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36340__$1 = (((((!((map__36340 == null))))?(((((map__36340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36340):map__36340);
var top_data = map__36340__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36365 = phase;
var G__36365__$1 = (((G__36365 instanceof cljs.core.Keyword))?G__36365.fqn:null);
switch (G__36365__$1) {
case "read-source":
var map__36366 = data;
var map__36366__$1 = (((((!((map__36366 == null))))?(((((map__36366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36366):map__36366);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36366__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36366__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36374 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36374__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36374,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36374);
var G__36374__$2 = (cljs.core.truth_((function (){var fexpr__36383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36383.cljs$core$IFn$_invoke$arity$1 ? fexpr__36383.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36383.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36374__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36374__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36374__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36384 = top_data;
var G__36384__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36384,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36384);
var G__36384__$2 = (cljs.core.truth_((function (){var fexpr__36385 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36385.cljs$core$IFn$_invoke$arity$1 ? fexpr__36385.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36385.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36384__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36384__$1);
var G__36384__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36384__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36384__$2);
var G__36384__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36384__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36384__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36384__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36384__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36401 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(3),null);
var G__36413 = top_data;
var G__36413__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36413);
var G__36413__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36413__$1);
var G__36413__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36413__$2);
var G__36413__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36413__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36413__$4;
}

break;
case "execution":
var vec__36414 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36414,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36414,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36414,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36414,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36332_SHARP_){
var or__4126__auto__ = (p1__36332_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36425 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36425.cljs$core$IFn$_invoke$arity$1 ? fexpr__36425.cljs$core$IFn$_invoke$arity$1(p1__36332_SHARP_) : fexpr__36425.call(null,p1__36332_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36426 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36426__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36426,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36426);
var G__36426__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36426__$1);
var G__36426__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36426__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36426__$2);
var G__36426__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36426__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36426__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36426__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36426__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36365__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36451){
var map__36452 = p__36451;
var map__36452__$1 = (((((!((map__36452 == null))))?(((((map__36452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36452):map__36452);
var triage_data = map__36452__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36452__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36458 = phase;
var G__36458__$1 = (((G__36458 instanceof cljs.core.Keyword))?G__36458.fqn:null);
switch (G__36458__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36460 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36461 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36462 = loc;
var G__36463 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36464_36583 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36465_36584 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36466_36585 = true;
var _STAR_print_fn_STAR__temp_val__36467_36586 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36466_36585);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36467_36586);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36465_36584);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36464_36583);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36460,G__36461,G__36462,G__36463) : format.call(null,G__36460,G__36461,G__36462,G__36463));

break;
case "macroexpansion":
var G__36469 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36470 = cause_type;
var G__36471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36472 = loc;
var G__36473 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36469,G__36470,G__36471,G__36472,G__36473) : format.call(null,G__36469,G__36470,G__36471,G__36472,G__36473));

break;
case "compile-syntax-check":
var G__36474 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36475 = cause_type;
var G__36476 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36477 = loc;
var G__36478 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36474,G__36475,G__36476,G__36477,G__36478) : format.call(null,G__36474,G__36475,G__36476,G__36477,G__36478));

break;
case "compilation":
var G__36479 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36480 = cause_type;
var G__36481 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36482 = loc;
var G__36483 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36479,G__36480,G__36481,G__36482,G__36483) : format.call(null,G__36479,G__36480,G__36481,G__36482,G__36483));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36484 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36485 = symbol;
var G__36486 = loc;
var G__36487 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36488_36587 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36489_36588 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36490_36589 = true;
var _STAR_print_fn_STAR__temp_val__36491_36590 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36490_36589);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36491_36590);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36450_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36450_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36489_36588);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36488_36587);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36484,G__36485,G__36486,G__36487) : format.call(null,G__36484,G__36485,G__36486,G__36487));
} else {
var G__36493 = "Execution error%s at %s(%s).\n%s\n";
var G__36494 = cause_type;
var G__36495 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36496 = loc;
var G__36497 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36493,G__36494,G__36495,G__36496,G__36497) : format.call(null,G__36493,G__36494,G__36495,G__36496,G__36497));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36458__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
