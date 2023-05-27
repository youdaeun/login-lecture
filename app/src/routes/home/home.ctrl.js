"use strict";

const output ={
    hello:(req,res)=>{//브라우저에서 루트 경로가 들어오면 아래의 기능을 하겠다라는 의미
        res.render("home/index");
    },
    login : (req,res)=>{
        res.render("home/login");
    },
};

const users ={
    id : ["dbekdms586","유다은","웹서버"],
    psword:["1234","1236","1256"],
};

const process= {
    login:(req,res)=>{//프론트에서 데이터를 받아두는 저장 공간이다.
        const id = req.body.id,
        psword = req.body.psword;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
            return res.json({
            success : true,
                });
            }
        }

        return res.json({
            success:false,
            msg:"로그인 실패하셨습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};
