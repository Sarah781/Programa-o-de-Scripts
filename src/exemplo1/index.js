const matematica=require("./a");
const pow=require("./b");
const express=require("express");
const router=express.Router();
router.get("/pow",)
const{somar, subtrair}= new matematica();
router.get("/sum", somar);
router.get("/diff", subtrair);


module.exports=router;