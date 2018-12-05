const express = require('express');
const puppeteer = require('puppeteer');

app = express();

app.get('/pdfify/:url/:options', async(req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = Buffer.from(req.params.url, 'base64').toString();
    const options = JSON.parse(Buffer.from(req.params.options, 'base64').toString());
    
    await page.goto(url, {waitUntil: 'networkidle2'});
    
    const pdf = await page.pdf(options);

    await res.setHeader('Content-Length', pdf.byteLength);
    await res.setHeader('Content-Type', 'application/pdf');
    await res.write(pdf)
    await res.end();
    await browser.close();
})

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`))