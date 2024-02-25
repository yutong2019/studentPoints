# Student Points

Student Points 是一个基于Node.js的应用，它主要实现了一个登录场景以及登录成功后的成功提示。

## 特性

1. 用户可以使用他们的用户名和密码进行登录。
2. 登录成功后，用户将看到一个提示他们登录成功的提示。

## 如何开始

在本地运行此项目，你需要安装Node.js和npm。然后参照以下步骤：

1. 在本地克隆此仓库
```bash
git clone https://github.com/yutong2019/studentPoints.git


2. 进入项目目录，并安装所有依赖项

cd studentPointsnpm 
install

3. 启动项目

npm start

用浏览器打开 <http://localhost:3000>，你将看到登录页面。

## 项目的依赖

此项目依赖于以下npm包:

- `account-login-app`: 此包为登录组件提供了核心功能。你可以在此查看源代码 [account-login-app](https://www.npmjs.com/package/account-login-app)

## 发布

在发布新的npm版本之前，请确保你完成了以下步骤：

1. 在本地确认所有的更改都被提交到git仓库，包括你更改的`package.json`的版本信息。
2. 登录到npm（你可以通过运行`npm login`来做到这一点）。
3. 运行`npm publish`来发布你的npm包。

如果你有任何问题，欢迎提出Issue。