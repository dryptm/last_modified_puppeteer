const express = require("express")
const app = express()
app.use(express.static("public"))


const puppeteer = require('puppeteer');
var a = "";
(async () => {
    
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized']
    });
    const page = await browser.newPage();
    console.log("------------")
    await page.goto('https://www.google.com');
    // other actions...

    a = await page.evaluate(() => {
        return document.lastModified;
    })
    console.log(a)
    await browser.close();
})();
app.get("/", function (req, res) {
    res.send(a)
})


app.listen(process.env.PORT || 3000, function () {
    console.log("server started at 3000");
});