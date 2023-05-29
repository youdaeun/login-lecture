"use strict";

//만약 console.log("hello");한다면 
//이것의 의미는 register.js와 register.ejs가 연결되었는지 확인하는 코드, 프론트 단에서 동작하는 자바스크립트이다.
//위 주석문은 register.js과 연동이 되는지 test해본 것에 대한 설명입니다.

const id = document.querySelector("#id"),//()안에는 선택자를 입력=public/ejs파일에 있는 정보
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmpsword = document.querySelector("#confirm-psword"),
    email = document.querySelector("#email"),
    tel = document.querySelector("#tel"),
    address = document.querySelector("#address"),
registerBtn = document.querySelector("#button");//tag 그대로 불러오는 코드

registerBtn.addEventListener("click",register);

function register(){
    if(!id.value)return alert("아이디를 입력해주십시오.");
    if(psword.value!==confirmpsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        email : email.value,
        tel : tel.value,
        address : address.value,
    };

    fetch("/register", {
        method :"POST",
        headers :{
            "Contet-Type": "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        } else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error("회원가입 중 에러발생");
    });//파라미터 값을 넘기기
}

//res.json() 반환값은 Promise이며 기본 res의 반환값은 Response 스트림
//.json()메서드를 통해 Response 스트림을 읽을 수 있다.