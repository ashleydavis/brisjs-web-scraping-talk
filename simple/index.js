
const request = require('request-promise');
const cheerio = require('cheerio');

async function main() {
    const urlToScrape = "https://quotes.wsj.com/AU/XASX/CBA";
    const retreivedHtml = await request(urlToScrape);
    //console.log(retreivedHtml);

    const $ = cheerio.load(retreivedHtml); // Pretend we are using jQuery. We all love jQuery right?

    const textValue = $("#quote_val").text();
    const numberValue = parseFloat(textValue);
    console.log(numberValue);
}

main()
    .then(() => console.log("Done"))
    .catch(err => {
        console.error("An error occurred.");
        console.error(err && err.stack || err);
    });



    



