
shadow.cljs.devtools.client.env.module_loaded('main');

try { inlight.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (inlight.frontend.app/init)"); throw(e); }