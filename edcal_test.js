jQuery(document).ready(function(){
	// JS file check
	jQuery('#qunit-file-check').append('edcal_test.js is loaded');

});

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});