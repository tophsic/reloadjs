/**
 * Reload JS   Dynamicaly reload scripts in dev time
 * Copyright   Christophe Sicard (tophsic)
 * License     not yet
 * Version     0.1
 */

(function(doc) {
   var reload_var = "reload";
   var api = window[reload_var] = function() {
//      console.info('Reload JS');
      var args = arguments,
         fn = args[args.length - 1],
         els = {};

         if (Object.prototype.toString.call(el) != '[object Function]')
            fn = null;

         var el = args[0];
//         console.info(fn);
//         console.info(el);
         if (el != fn) {
//            el = getScript(el);
//            els[el.name] = el;
            scriptTag(el);

         }
   };

   function scriptTag(src, callback) {
//      console.info('scriptTag');
      var s = doc.createElement('script');
      s.type = 'text/javascript';
      s.src = src;
 
//      console.info(s.state);

//      s.onreadystatechange = s.onload = function () {
//         console.info('onreadystatechange|onload');
//         var state = s.readystate;
//         console.info(state);
//      }
      doc.body.appendChild(s);
   }
})(document);
