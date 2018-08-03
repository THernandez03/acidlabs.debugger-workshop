const path = require('path')
const express = require('express');

const app = express();

if(Math.random() < .3) throw Error('Custom Error...');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.get('/client', (req, res) => {
  res.render('index', { script: true });
});
app.get('/server', (req, res) => {
  require('./public/script.js');
  res.send('All code was executed in the server');
});

app.listen(3000, () => {
  console.log('Listoko el servah');
})
