const express = require('express');

const pageRouter = express.Router();

// page.set('views', path.join(__dirname, '/view'));

pageRouter.get('/', (req, res) => {
  res.render('index');
});

pageRouter.get('/checkout.html', (req, res) => {
  res.render('checkout');
});

module.exports = pageRouter;
