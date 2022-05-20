const { Router } = require('express');

const { PdfController } = require('../app/controllers/PdfController');

const router = Router();

router.get('/pdf', PdfController.test);

module.exports = {
  router,
};
