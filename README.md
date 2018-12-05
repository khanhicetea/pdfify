## PDFIFY

Transform webpage into PDF with advanced options

## Install

If you use Ubuntu server, install these packages first

```bash
sudo apt install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

```bash
$ git clone https://github.com/khanhicetea/pdfify.git
$ cd pdfify
$ yarn
```

## Usage

```bash
$ node main.js
```

## URL

Enter your browser this URL

> http://localhost:3000/pdfify/[url]/[options]

With:

- **url** is base64 of url you want to transform into PDF
- **options** is base64 json string of options, which in **puppeteer** `page.pdf` method

## Example :

> http://localhost:3000/pdfify/aHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9zY3JlZW4vbWFudWFsL2h0bWxfbm9kZS9Db21tYW5kLVN1bW1hcnkuaHRtbA==/eyJkaXNwbGF5SGVhZGVyRm9vdGVyIjp0cnVlLCJoZWFkZXJUZW1wbGF0ZSI6IjxzcGFuPjxcL3NwYW4+IiwiZm9vdGVyVGVtcGxhdGUiOiI8cCBzdHlsZT1cImZvbnQtc2l6ZTogOXB4OyBjb2xvcjogI2FhYTsgd2lkdGg6IDEwMDBweDsgbWFyZ2luLWxlZnQ6IDEwJTsgbWFyZ2luLXJpZ2h0OiAxMCU7IHBhZGRpbmctdG9wOiAxbW07IG1hcmdpbi1ib3R0b206IC0xbW07IHRleHQtYWxpZ246IHJpZ2h0O1wiPlBhZ2UgPHNwYW4gY2xhc3M9XCJwYWdlTnVtYmVyXCI+PFwvc3Bhbj4gXC8gPHNwYW4gY2xhc3M9XCJ0b3RhbFBhZ2VzXCI+PFwvc3Bhbj48XC9wPiIsImZvcm1hdCI6IkE0IiwibWFyZ2luIjp7InRvcCI6MzAsImJvdHRvbSI6MzAsImxlZnQiOjIwLCJyaWdodCI6MjB9fQ==

will print the page

https://www.gnu.org/software/screen/manual/html_node/Command-Summary.html

with options

```json
{
  "displayHeaderFooter": true,
  "headerTemplate": "<span></span>",
  "footerTemplate": "<p style=\"font-size: 9px; color: #aaa; width: 1000px; margin-left: 10%; margin-right: 10%; padding-top: 1mm; margin-bottom: -1mm; text-align: right;\">Page <span class=\"pageNumber\"></span> / <span class=\"totalPages\"></span></p>",
  "format": "A4",
  "margin": {
    "top": 30,
    "bottom": 30,
    "left": 20,
    "right": 20
  }
}
```
