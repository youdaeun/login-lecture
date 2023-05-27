"use strict";

class UserStorage{
    static #users ={
        id : ["dbekdms586","유다은","웹서버"],
        psword:["1234","1234","123456"],
        name : ["우리밋","내개발","나팀장"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[Info] = users[info][idx];
            return newUser;
        },{});
        return usersInfo;
    }
}

module.exports = UserStorage;