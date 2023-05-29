"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);//reject 실패
        else resolve(data[0]);//resolvd 성공
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword, email, tel, address) VALUES(?, ?, ?, ?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword, userInfo.email, userInfo.tel, userInfo.address], 
        (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}


//promise를 반환하기 때문에 .then()으로도 접근하여 데이터를 가져올 수 있다.
//await을 사용해준 이유는 "가독성"이다. fs(파일 시스템)에서도 await으로 가져올 수 있다.
//DB를 CRUD(생성, 읽기, 수정, 삭제)하는 역할만 수행
//WAS(Web APPLICATION Sever)는 요청을 받아서 데이터를 가공하고 그거에 대한 로직이 처리,응답함.
//web server는 정적 데이터만 전달만함
//WAS를 이용하는 로직이다.