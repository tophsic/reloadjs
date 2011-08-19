/**
 * Reload JS   Dynamicaly reload scripts in dev time
 * Copyright   Christophe Sicard (tophsic)
 * License     not yet
 * Version     0.1
 */

(function(doc) {
   var reload_var = "reload";
   var api = window[reload_var] = function() {
      console.info('Reload JS');
   };
})(document);
