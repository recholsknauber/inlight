goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40326){
var map__40327 = p__40326;
var map__40327__$1 = (((((!((map__40327 == null))))?(((((map__40327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40327):map__40327);
var m = map__40327__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40327__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40329_40536 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40330_40537 = null;
var count__40331_40538 = (0);
var i__40332_40539 = (0);
while(true){
if((i__40332_40539 < count__40331_40538)){
var f_40540 = chunk__40330_40537.cljs$core$IIndexed$_nth$arity$2(null,i__40332_40539);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40540], 0));


var G__40541 = seq__40329_40536;
var G__40542 = chunk__40330_40537;
var G__40543 = count__40331_40538;
var G__40544 = (i__40332_40539 + (1));
seq__40329_40536 = G__40541;
chunk__40330_40537 = G__40542;
count__40331_40538 = G__40543;
i__40332_40539 = G__40544;
continue;
} else {
var temp__5735__auto___40545 = cljs.core.seq(seq__40329_40536);
if(temp__5735__auto___40545){
var seq__40329_40546__$1 = temp__5735__auto___40545;
if(cljs.core.chunked_seq_QMARK_(seq__40329_40546__$1)){
var c__4556__auto___40547 = cljs.core.chunk_first(seq__40329_40546__$1);
var G__40548 = cljs.core.chunk_rest(seq__40329_40546__$1);
var G__40549 = c__4556__auto___40547;
var G__40550 = cljs.core.count(c__4556__auto___40547);
var G__40551 = (0);
seq__40329_40536 = G__40548;
chunk__40330_40537 = G__40549;
count__40331_40538 = G__40550;
i__40332_40539 = G__40551;
continue;
} else {
var f_40552 = cljs.core.first(seq__40329_40546__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40552], 0));


var G__40553 = cljs.core.next(seq__40329_40546__$1);
var G__40554 = null;
var G__40555 = (0);
var G__40556 = (0);
seq__40329_40536 = G__40553;
chunk__40330_40537 = G__40554;
count__40331_40538 = G__40555;
i__40332_40539 = G__40556;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40557], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40557)))?cljs.core.second(arglists_40557):arglists_40557)], 0));
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
var seq__40335_40562 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40336_40563 = null;
var count__40337_40564 = (0);
var i__40338_40565 = (0);
while(true){
if((i__40338_40565 < count__40337_40564)){
var vec__40351_40570 = chunk__40336_40563.cljs$core$IIndexed$_nth$arity$2(null,i__40338_40565);
var name_40571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40351_40570,(0),null);
var map__40354_40572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40351_40570,(1),null);
var map__40354_40573__$1 = (((((!((map__40354_40572 == null))))?(((((map__40354_40572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40354_40572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40354_40572):map__40354_40572);
var doc_40574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40354_40573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40354_40573__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40571], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40575], 0));

if(cljs.core.truth_(doc_40574)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40574], 0));
} else {
}


var G__40576 = seq__40335_40562;
var G__40577 = chunk__40336_40563;
var G__40578 = count__40337_40564;
var G__40579 = (i__40338_40565 + (1));
seq__40335_40562 = G__40576;
chunk__40336_40563 = G__40577;
count__40337_40564 = G__40578;
i__40338_40565 = G__40579;
continue;
} else {
var temp__5735__auto___40580 = cljs.core.seq(seq__40335_40562);
if(temp__5735__auto___40580){
var seq__40335_40581__$1 = temp__5735__auto___40580;
if(cljs.core.chunked_seq_QMARK_(seq__40335_40581__$1)){
var c__4556__auto___40582 = cljs.core.chunk_first(seq__40335_40581__$1);
var G__40583 = cljs.core.chunk_rest(seq__40335_40581__$1);
var G__40584 = c__4556__auto___40582;
var G__40585 = cljs.core.count(c__4556__auto___40582);
var G__40586 = (0);
seq__40335_40562 = G__40583;
chunk__40336_40563 = G__40584;
count__40337_40564 = G__40585;
i__40338_40565 = G__40586;
continue;
} else {
var vec__40357_40587 = cljs.core.first(seq__40335_40581__$1);
var name_40588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40357_40587,(0),null);
var map__40360_40589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40357_40587,(1),null);
var map__40360_40590__$1 = (((((!((map__40360_40589 == null))))?(((((map__40360_40589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40360_40589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40360_40589):map__40360_40589);
var doc_40591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360_40590__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360_40590__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40588], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40592], 0));

if(cljs.core.truth_(doc_40591)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40591], 0));
} else {
}


var G__40593 = cljs.core.next(seq__40335_40581__$1);
var G__40594 = null;
var G__40595 = (0);
var G__40596 = (0);
seq__40335_40562 = G__40593;
chunk__40336_40563 = G__40594;
count__40337_40564 = G__40595;
i__40338_40565 = G__40596;
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

var seq__40362 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40363 = null;
var count__40364 = (0);
var i__40365 = (0);
while(true){
if((i__40365 < count__40364)){
var role = chunk__40363.cljs$core$IIndexed$_nth$arity$2(null,i__40365);
var temp__5735__auto___40597__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40597__$1)){
var spec_40598 = temp__5735__auto___40597__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40598)], 0));
} else {
}


var G__40599 = seq__40362;
var G__40600 = chunk__40363;
var G__40601 = count__40364;
var G__40602 = (i__40365 + (1));
seq__40362 = G__40599;
chunk__40363 = G__40600;
count__40364 = G__40601;
i__40365 = G__40602;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40362);
if(temp__5735__auto____$1){
var seq__40362__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40362__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40362__$1);
var G__40603 = cljs.core.chunk_rest(seq__40362__$1);
var G__40604 = c__4556__auto__;
var G__40605 = cljs.core.count(c__4556__auto__);
var G__40606 = (0);
seq__40362 = G__40603;
chunk__40363 = G__40604;
count__40364 = G__40605;
i__40365 = G__40606;
continue;
} else {
var role = cljs.core.first(seq__40362__$1);
var temp__5735__auto___40607__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40607__$2)){
var spec_40608 = temp__5735__auto___40607__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40608)], 0));
} else {
}


var G__40609 = cljs.core.next(seq__40362__$1);
var G__40610 = null;
var G__40611 = (0);
var G__40612 = (0);
seq__40362 = G__40609;
chunk__40363 = G__40610;
count__40364 = G__40611;
i__40365 = G__40612;
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
var G__40614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40615 = cljs.core.ex_cause(t);
via = G__40614;
t = G__40615;
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
var map__40430 = datafied_throwable;
var map__40430__$1 = (((((!((map__40430 == null))))?(((((map__40430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40430):map__40430);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40430__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40431 = cljs.core.last(via);
var map__40431__$1 = (((((!((map__40431 == null))))?(((((map__40431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40431):map__40431);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40432 = data;
var map__40432__$1 = (((((!((map__40432 == null))))?(((((map__40432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40432):map__40432);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40432__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40432__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40432__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40433 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40433__$1 = (((((!((map__40433 == null))))?(((((map__40433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40433):map__40433);
var top_data = map__40433__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40456 = phase;
var G__40456__$1 = (((G__40456 instanceof cljs.core.Keyword))?G__40456.fqn:null);
switch (G__40456__$1) {
case "read-source":
var map__40460 = data;
var map__40460__$1 = (((((!((map__40460 == null))))?(((((map__40460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40460):map__40460);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40460__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40460__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40466 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40466__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40466,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40466);
var G__40466__$2 = (cljs.core.truth_((function (){var fexpr__40471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40471.cljs$core$IFn$_invoke$arity$1 ? fexpr__40471.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40471.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40466__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40466__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40466__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40472 = top_data;
var G__40472__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40472,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40472);
var G__40472__$2 = (cljs.core.truth_((function (){var fexpr__40477 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40477.cljs$core$IFn$_invoke$arity$1 ? fexpr__40477.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40477.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40472__$1);
var G__40472__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40472__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40472__$2);
var G__40472__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40472__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40472__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40472__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40472__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40478 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(3),null);
var G__40481 = top_data;
var G__40481__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40481,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40481);
var G__40481__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40481__$1);
var G__40481__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40481__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40481__$2);
var G__40481__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40481__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40481__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40481__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40481__$4;
}

break;
case "execution":
var vec__40483 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40429_SHARP_){
var or__4126__auto__ = (p1__40429_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__40487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40487.cljs$core$IFn$_invoke$arity$1 ? fexpr__40487.cljs$core$IFn$_invoke$arity$1(p1__40429_SHARP_) : fexpr__40487.call(null,p1__40429_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__40489 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40489__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40489,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40489);
var G__40489__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40489__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40489__$1);
var G__40489__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40489__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40489__$2);
var G__40489__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40489__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40489__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40489__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40489__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40456__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40493){
var map__40494 = p__40493;
var map__40494__$1 = (((((!((map__40494 == null))))?(((((map__40494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40494):map__40494);
var triage_data = map__40494__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__40497 = phase;
var G__40497__$1 = (((G__40497 instanceof cljs.core.Keyword))?G__40497.fqn:null);
switch (G__40497__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40499 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40500 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40501 = loc;
var G__40502 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40503_40626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40504_40627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40505_40628 = true;
var _STAR_print_fn_STAR__temp_val__40506_40629 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40505_40628);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40506_40629);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40490_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40490_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40504_40627);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40503_40626);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40499,G__40500,G__40501,G__40502) : format.call(null,G__40499,G__40500,G__40501,G__40502));

break;
case "macroexpansion":
var G__40507 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40508 = cause_type;
var G__40509 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40510 = loc;
var G__40511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40507,G__40508,G__40509,G__40510,G__40511) : format.call(null,G__40507,G__40508,G__40509,G__40510,G__40511));

break;
case "compile-syntax-check":
var G__40512 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40513 = cause_type;
var G__40514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40515 = loc;
var G__40516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40512,G__40513,G__40514,G__40515,G__40516) : format.call(null,G__40512,G__40513,G__40514,G__40515,G__40516));

break;
case "compilation":
var G__40518 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40519 = cause_type;
var G__40520 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40521 = loc;
var G__40522 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40518,G__40519,G__40520,G__40521,G__40522) : format.call(null,G__40518,G__40519,G__40520,G__40521,G__40522));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40523 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40524 = symbol;
var G__40525 = loc;
var G__40526 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40527_40630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40528_40631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40529_40632 = true;
var _STAR_print_fn_STAR__temp_val__40530_40633 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40529_40632);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40530_40633);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40491_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40491_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40528_40631);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40527_40630);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40523,G__40524,G__40525,G__40526) : format.call(null,G__40523,G__40524,G__40525,G__40526));
} else {
var G__40531 = "Execution error%s at %s(%s).\n%s\n";
var G__40532 = cause_type;
var G__40533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40534 = loc;
var G__40535 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40531,G__40532,G__40533,G__40534,G__40535) : format.call(null,G__40531,G__40532,G__40533,G__40534,G__40535));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40497__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
