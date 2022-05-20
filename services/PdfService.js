const puppeteer = require('puppeteer');

class PdfService {
  static defaultPdfConfig = {
    format: 'A4',
    printBackground: true,
  };

  static async setup() {
    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    return {
      browser,
      page,
    };
  }

  static async getFromContent(html) {
    const { browser, page } = await PdfService.setup();
    await page.setContent(html);
    const pdf = await page.pdf(PdfService.defaultPdfConfig);
    await browser.close();

    return pdf;
  }

  static async getFromUrl(url) {
    const { browser, page } = await PdfService.setup();
    await page.goto(url);
    const pdf = await page.pdf(PdfService.defaultPdfConfig);
    await browser.close();

    return pdf;
  }
}

module.exports = {
  PdfService,
};
