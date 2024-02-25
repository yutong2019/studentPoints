const express = require('express');
const app = express();
const accountLoginApp = require('account-login-app');
const btcToday = require('founction-btc-today');

app.use(express.json());

app.set('view engine', 'ejs');

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const isAuthenticated = accountLoginApp.login(username, password);

  if (isAuthenticated) {
    res.render('home');
  } else {
    res.status(401).send('Login failed');
  }
});

app.get('/getprice', async (req, res) => {
  try {
    let price = await btcToday();
    res.json({price: price});
  } catch (error) {
    res.json({error:'获取价格失败.'});
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});