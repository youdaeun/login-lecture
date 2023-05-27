"use strict";

//모듈
const express = require("express");
const app = express();
const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/",home);//user-> 미들 웨어 등록해주는 메서드.

module.exports=app;
