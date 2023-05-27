"use strict";

const hello = (req,res)=>{//브라우저에서 루트 경로가 들어오면 아래의 기능을 하겠다라는 의미
    res.render("home/index");
};
const login = (req,res)=>{
    res.render("home/login");
};
module.exports = {
    hello,
    login,
};
