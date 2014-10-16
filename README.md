# Google Analytics LocalStorage

A JavaScript Google Universal Analytics snippet that uses `localStorage`, when available, instead of HTML cookies.

Do it for the bytes.

## Important Caveats. Read these.

 * This is not an offically supported tracking method.
 * You cannot do cross-domain tracking of a user. You will not be able to track the same user on both http﻿://www.example.com and http﻿://example.com. A single user visiting both of these will result in two unique users.
 * You cannot do cross-scheme tracking of a user. You will not be able to track the same user on both http**s**://www.example.com and http﻿://www.example.com. A single user visiting both of these will result in two unique users.
 * You might not be able to utilize some of the advanced Google Analytics features.

You should only use this script if all of the following are true:

 * the site you are tracking doesn't track users on other subdomains.
 * the site you are tracking is always served over https or always over http, never both/either.
 * you pretty much just track page views, users, and/or events (since that is all I've tested myself).
 
 
**Another thing to note: this script changes the global `ga` function to `ct`. If you call `ga` in your scripts to track events, make sure you update all your `ga()` calls to `ct()` calls!**

## Documentation

Did you read the [Important Caveats](#user-content-important-caveats-read-these)? Make sure you do that before you read any more.

### Copy+Paste

 1. Copy the code in [ga-localstorage.js](https://raw.githubusercontent.com/davidmurdoch/ga-localstorage/ga-localstorage.js) into your project's template file.
 2. Replace UA-XXXXXXXX-X with your TrackingID.

### npm

  0. Install node and npm (if you don't know what these are, or don't have these installed already, you should probably follow the [Copy+Paste](#user-content-copypaste) section above).
  1. Install the ga-localstorage package (optionally saving it to your package.json):
    - `npm install ga-localstorage --save`
  3. Build your Google Analytics JavaScript snippet:
    - `var analyticsSnippet = require("ga-localstorage")("UA-8675309-1");`
  4. Do whatever you want with it.
    - you should probably output it between a `<script>` and a `</script>` right before `</body>`.

## Disclaimer

This isn't being merged into HTML5 Boilerplate for good reason: the Google Analytics team thought it was a risky idea. Read the [History](#user-content-history) section below for more info. 

## History ##

Read [Google Async Analytics using LocalStorage](https://davidmurdoch.com/2014/09/22/google-async-analytics-using-localstorage/) for the back story.

Read [Use localStorage for Google Analytics tracking when available #1444](https://github.com/h5bp/html5-boilerplate/issues/1444) for why this isn't going to land in [HTML5 Boilerplate](http://html5boilerplate.com/).

## Feedback ##

Give it to me [here](https://github.com/davidmurdoch/ga-localstorage/issues) and at [@pxcoach](https://twitter.com/pxcoach).
