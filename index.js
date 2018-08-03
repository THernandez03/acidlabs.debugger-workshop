const path = require('path')
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.get('/client/1', (req, res) => {
  res.render('index', { script: 1 });
});
app.get('/client/2', (req, res) => {
  res.render('index', { script: 2 });
});
app.get('/client/3', (req, res) => {
  res.render('index', { script: 3 });
});

app.get('/server/1', (req, res) => {
  require('./public/1.js');
  res.send('Waiting for breakpoint...');
});
app.get('/server/2', (req, res) => {
  require('./public/2.js');
  res.send('Waiting for breakpoint...');
});
app.get('/server/3', (req, res) => {
  require('./public/3.js');
  res.send('Waiting for breakpoint...');
});

app.listen(3000, () => {
  console.log('Listoko el servah');
})