/**
 * Unittests: javascript reloader for dev time
 */

module('Reload');
asyncTest('Without head async', 4, function() {
   ok(reload !== undefined, "reload");
   equal(typeof window.testVar, 'undefined', 'script not yet loaded');
   reload('resources/scripttoreload.js', function() {
      equal(typeof window.testVar, 'string', 'script loaded');
      strictEqual(window.testVar, 'Hello World!', 'test var');
      start();
   });
});
