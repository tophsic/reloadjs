/**
 * Unittests: javascript reloader for dev time
 */

module('Reload');

asyncTest('Without head once', 4, function() {
   ok(reload !== undefined, "reload");
   equal(typeof window.testVar, 'undefined', 'script not yet loaded');
   reload('resources/scripttoreload.js', function() {
      equal(typeof window.testVar, 'string', 'script loaded');
      strictEqual(window.testVar, 'Hello World!', 'test var');
      start();
   });
});

asyncTest('Without head twice', 1, function() {
   reload('resources/scripttoreload.js', function() {
      reload('resources/scripttoreload.js', function() {
         equal(window.document.body.getElementsByTagName('script').length, 1, 'script loaded');
         start();
      });
   });
});

