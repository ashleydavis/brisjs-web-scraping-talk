# brisjs-web-scraping-talk

Code to accompany my talk on web scraping for the Brisbane JavaScript meeting in September 2018

## Contents

The simple/ sub-directory contains a simple example of extracting data from a static web page (the HTML that is served contains the target data). The simple example uses npm modules [request-promise](https://npmjs.com/package/request-promise) and [cheerio](https://npmjs.com/package/cheerio).

The advanced/ sub-directory cnotains an advanced example of extracting data from a more dynamic web page (it must run JavaScript before the target data is retreived and rendered to the web page). The advanced example uses npm modules [nightmare](https://npmjs.com/package/nightmare) and [cheerio](https://npmjs.com/package/cheerio).

## Running the code

Clone or download this repo.

Changed to the simple or advanced sub-directory, then install dependencies

    npm install

Then run the script

    npm start

or

    node index.js


## Production issues

If you try to use the advanced technique in production, here's somethings you need to investigate:

- Performance
-- Cache and reuse the Nightmare object
-- Disable image download	
-- Batch your requests

- Debugging
-- Show the Electron window
-- Enable devtools in the Electron window
-- Handle errors from Nightmare
-- Display logging from target web page running in the headless browser

