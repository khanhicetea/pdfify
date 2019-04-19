const express = require('express');
const puppeteer = require('puppeteer');
const bs58 = require('bs58');

app = express();

app.get('/pdfify/:url/:options', async(req, res) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--disable-translate',
            '--disable-extensions',
            '--disable-sync'
        ],
    });

    const page = await browser.newPage();
    const url = bs58.decode(req.params.url).toString();
    const options = JSON.parse(bs58.decode(req.params.url).toString());
    
    await page.goto(url, {waitUntil: 'networkidle2'});
    
    const pdf = await page.pdf(options);

    await res.setHeader('Content-Disposition', 'inline; filename=print.pdf');
    await res.setHeader('Content-Length', pdf.byteLength);
    await res.setHeader('Content-Type', 'application/pdf');
    
    await res.write(pdf)
    await res.end();
    await browser.close();
})

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`))