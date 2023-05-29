const mysql = require("mysql");

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PSWORD,
    database : process.env.DB_DATABASE,
});

db.connect();

module.exports = db;

//createConnection()함수 안에 {}오브젝트로 key:value의 데이터를 알맞게 입력해야함.