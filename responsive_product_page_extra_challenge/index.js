const express = require('express');
const path = require('path');
const chalk = require('chalk');
// const ejs = require('ejs');
const pageRouter = require('./routes/page');

const port = process.env.PORT || 3000;
const page = express();

page.use(express.static(path.join(__dirname, '/public')));
page.set('views', path.join(__dirname, '/views'));
page.set('view engine', 'ejs');

page.use('/', pageRouter);
page.use('/checkout.html', pageRouter);

page.listen(port, () => {
  console.log(chalk.green(`Page running on port ${port}.`));
});
