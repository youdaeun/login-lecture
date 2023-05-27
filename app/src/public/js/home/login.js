"use strict";

//만약 console.log("hello");한다면 
//이것의 의미는 login.js와 login.ejs가 연결되었는지 확인하는 코드, 프론트 단에서 동작하는 자바스크립트이다.

const id = document.querySelector("#id"),//()안에는 선택자를 입력=public/ejs파일에 있는 정보
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");//tag 그대로 불러오는 코드

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };

    fetch("/login", {
        method :"POST",
        headers :{
            "Contet-Type": "application/json",
        },
        body : JSON.stringify(req),
    }).then((res)=>res.json())
    .then((res)=>console.log(res));//파라미터 값을 넘기기
}