/**
 * Reload JS   Dynamicaly reload scripts in dev time
 * Copyright   Christophe Sicard (tophsic)
 * License     not yet
 * Version     0.1
 */

(function(doc) {
   var reload_var = "reload",
      scripts = {};
   var api = window[reload_var] = function() {
      var args = arguments,
         fn = args[args.length - 1],
         els = {};

         if (!isFunction(fn))
            fn = null;
         var el = args[0];
         if (el != fn) {
            scriptTag(el, fn);
         }
   };

   function scriptTag(src, callback) {
      if (scripts[src] !== undefined) {
         doc.body.removeChild(scripts[src]); 
         delete scripts[src];
      }
      var s = doc.createElement('script');
      s.type = 'text/javascript';
      s.src = src;
      s.onreadystatechange = s.onload = function () {
         scripts[src] = s;
         if (isFunction(callback))
            callback();
      }
      doc.body.appendChild(s);
   }

   function isFunction(el) {
      return Object.prototype.toString.call(el) == '[object Function]';
   }
})(document);
