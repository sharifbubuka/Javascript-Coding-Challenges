const express = require('express');
const path = require('path');
const chalk = require('chalk');

const page = express();
const port = process.env.PORT || 3000;

page.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

page.use(express.static(path.join(__dirname, '/public'))); // don't use public in your html css fle call
page.listen(port, () => {
  console.log(chalk.green(`Page running on port ${port}.`));
  console.log(chalk.blue('Youtube video: 32/46 mins'));
  console.log(
    chalk.blue(
      'Youtube video url: https://www.youtube.com/watch?v=r7BOeucua7o&list=PL5o285ahn_HWn80VzKOyq5IPu9K8F8EYi&index=5&t=1820s'
    )
  );
  console.log(chalk.blue('End-point-file: style.css'));
});
