const express = require('express');
const app = express();
const accountLoginApp = require('account-login-app');

// 设置 ejs 为视图引擎
app.set('view engine', 'ejs');

// 登录逻辑
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const isAuthenticated = accountLoginApp.login(username, password);

  if (isAuthenticated) {
    // 如果登录成功，渲染 home 视图
    res.render('home');
  } else {
    // 如果登录失败，返回错误信息
    res.status(401).send('Login failed');
  }
});

// 监听 3000 端口
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});