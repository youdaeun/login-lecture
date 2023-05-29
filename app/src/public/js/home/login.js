"use strict";

//만약 console.log("hello");한다면 
//이것의 의미는 login.js와 login.ejs가 연결되었는지 확인하는 코드, 프론트 단에서 동작하는 자바스크립트이다.

const id = document.querySelector("#id"),//()안에는 선택자를 입력=public/ejs파일에 있는 정보
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("#button");//tag 그대로 불러오는 코드

loginBtn.addEventListener("click",login);

function login(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(!psword.value) return alert("비밀번호를 입력해주십시오.");
    
    const req ={
        id:id.value,
        psword:psword.value,
    };

    fetch("/login", {
        method :"POST",
        headers :{
            "Contet-Type": "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        } else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error("로그인 중 에러");
    });//파라미터 값을 넘기기
}

//res.json() 반환값은 Promise이며 기본 res의 반환값은 Response 스트림
//.json()메서드를 통해 Response 스트림을 읽을 수 있다.