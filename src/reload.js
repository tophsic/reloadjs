/**
 * Reload JS   Dynamicaly reload scripts in dev time
 * Copyright   Christophe Sicard (tophsic)
 * License     not yet
 * Version     0.1
 */

(function(doc) {
   var reload_var = "reload";
   var api = window[reload_var] = function() {
      var args = arguments,
         fn = args[args.length - 1],
         els = {};

         if (Object.prototype.toString.call(fn) != '[object Function]')
            fn = null;

         var el = args[0];
         if (el != fn) {
            scriptTag(el, fn);

         }
   };

   function scriptTag(src, callback) {
      var s = doc.createElement('script');
      s.type = 'text/javascript';
      s.src = src;
      s.onreadystatechange = s.onload = function () {
         console.info('onreadystatechange|onload');
         var state = s.readystate;
         callback();
         console.info(state);
      }
      doc.body.appendChild(s);
   }
})(document);
