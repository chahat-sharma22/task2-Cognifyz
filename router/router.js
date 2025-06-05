const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("form")
})
router.get("/signup",(req,res)=>{
    res.render("form");
})
router.post("/submit",(req,res)=>{
    const{name,email,age}=req.body;
    if(!name||!email||!age){
         return res.send("all fields are required");
    }
    if(age<18){
        return res.send("age must be greator than 18")
    }
    res.send(`<u>form submitted</u><br>
         name:${name}<br>
        age:${age}<br>
        email:${email}`);

})

module.exports=router;