# Google Analytics `localStorage`

A JavaScript Google Universal Analytics snippet that uses `localStorage`, when available, instead of HTML cookies.

## Important Caveats

This is not an offically supported tracking method. Not everything will work.

You cannot do cross-domain tracking of a user (www.example.com and blog.example.com).

You cannot do cross-scheme tracking of a user (https://www.example.com and http://www.example.com).

You might not be able to utilize some of the advanced Google Analytics features.

## Documentation

### npm

First, install the ga-localstorage package (optinally saving it to your package.json):

`npm install ga-localstorage --save`

Then create your analytics JavScript snippet:

`var analyticsSnippet = require("ga-localstorage")("UA-8675309-1");`

Then do whatever you want with it (you should probably output it between <script> and </script> at the bottom of your HTML.

TADA!

### vanilla

Copy the code in ga-localstorage.js into your project's template file.

Replace UA-XXXXXXXX-X with your TrackingID.

TADA!
