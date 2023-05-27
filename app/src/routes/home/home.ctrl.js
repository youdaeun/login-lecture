"use strict";

const User = require("../../models/User");

const output ={
    hello:(req,res)=>{//브라우저에서 루트 경로가 들어오면 아래의 기능을 하겠다라는 의미
        res.render("home/index");
    },
    login : (req,res)=>{
        res.render("home/login");
    },
    register : (req,res)=>{
    res.render("home/register");
    }
};

const process= {
    login : (req,res)=>{//프론트에서 데이터를 받아두는 저장 공간이다.
       const user = new User(req.body);
       const response = user.login();
       console.log(response);
       return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
