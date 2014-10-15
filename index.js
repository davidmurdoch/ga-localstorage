/**
 * @license
 * GA-LocalStorage 1.0.0 <https://davidmurdoch.com/2014/09/22/google-async-analytics-using-localstorage/>
 * Copyright 2014 David Murdoch <https://davidmurdoch.com/>
 * Based on the Google Universal Analytics snippet in H5BP <http://html5boilerplate.com/>
 * Available under MIT license <https://github.com/davidmurdoch/ga-localstorage/license.txt>
 */

// read in the snippet, then split it into two pieces so we can join it together later
var gaSnippet = require( "fs" ).readFileSync( "./ga-localstorage.js", { "encoding": "utf8" } ).split( "UA-XXXXXXXX-X", 2 );

/**
 * Creates the DEFLATE compression optimized asyncronous Google Universal Analytics snippet 
 * using the provided trackingID
 * 
 * @static
 * @param {String} trackingId The Tracking ID given to you by Google Analytics (UA-XXXXXXXX-X)
 * @returns The Google Universal Analytics snippet including the specified trackingId string
 * @example
 * 
 * var analyticsSnippet = require( "ga-localstorage" )( "UA-8675309-1" );
 * // => +function(l,e){(ct=this[Goog...
 */
module.exports = function getLocalStorageSnippet ( trackingId ) {
	return gaSnippet.join( trackingId );
};