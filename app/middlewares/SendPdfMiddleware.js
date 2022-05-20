const { PdfService } = require('../../services/PdfService');

const SendPdfMiddleware = (req, res, next) => {
  res.sendPdf = async (template, data = {}) => {
    try {
      const html = await res.view.render(template, data);

      const pdf = await PdfService.getFromContent(html);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Length': pdf.length,
      });

      return res.send(pdf);
    } catch (error) {
      console.error(error);
      res.status(500);
      return res.send('Server error');
    }
  };

  next();
};

module.exports = {
  SendPdfMiddleware,
};
