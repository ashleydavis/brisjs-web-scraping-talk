
const Nightmare = require('nightmare');
const cheerio = require('cheerio');

//
// Request HTML from a dynamically generated web site.
//
async function requestHtml(url, waitSelector) {
    const nightmare = new Nightmare();

    const retrievedHtml = await nightmare.goto(url)
        .wait(waitSelector)
        .evaluate(() => {
            return document.documentElement.outerHTML;
        });

    await nightmare.end();

    return retrievedHtml;
}

async function main() {

    const urlToScrape = "https://www.asx.com.au/asx/share-price-research/company/CBA";
    const targetElement = ".overview-price"; // Wait until this element is on screen before extracting HTML.

    const retreivedHtml = await requestHtml(urlToScrape, targetElement);
    //console.log(retreivedHtml);

    const $ = cheerio.load(retreivedHtml);

    const textValue = $(targetElement).text();
    const numberValue = parseFloat(textValue);
    console.log(numberValue);
}

main()
    .then(() => console.log("Done"))
    .catch(err => {
        console.error("An error occurred.");
        console.error(err && err.stack || err);
    });



    



