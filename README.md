# brisjs-web-scraping-talk

Code to accompany my talk on web scraping for the Brisbane JavaScript meeting in September 2018

Why not do your data wrangling, analysis and visualization entirely in JavaScript? To support my effort please buy or help promote my book 
[Data Wrangling with JavaScript](http://bit.ly/2t2cJu2).

Do your prototyping and exploratory data analysis in JavaScript with [Data-Forge Notebook](http://www.data-forge-notebook.com/).

## Slides / Video

The slides for the talk are available here: [https://www.slideshare.net/AshleyDavis33/web-scraping-112846350](https://www.slideshare.net/AshleyDavis33/web-scraping-112846350)

A video will be posted here as soon it is made available by BrisJS.

## Contents

The *simple* sub-directory contains a simple example of extracting data from a static web page (the HTML that is served contains the target data). The simple example uses npm modules [request-promise](https://npmjs.com/package/request-promise) and [cheerio](https://npmjs.com/package/cheerio).

The *advanced* sub-directory contains an advanced example of extracting data from a more dynamic web page (it must run JavaScript before the target data is retreived and rendered to the web page). The advanced example uses npm modules [nightmare](https://npmjs.com/package/nightmare) and [cheerio](https://npmjs.com/package/cheerio).

## Running the code

Clone or download this repo.

Open a command line, change directory to either the simple or advanced sub-directory, then install dependencies:

    npm install

Then run the script:

    npm start

or:

    node index.js


## Production issues

If you try to use the advanced technique in production, here's some production issues you'll want to investigate:

- Performance
-- Cache and reuse the Nightmare object
-- Disable image download	
-- Batch your requests

- Debugging
-- Show the Electron window
-- Enable devtools in the Electron window
-- Handle errors from Nightmare
-- Display logging from target web page running in the headless browser

