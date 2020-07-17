const express=require("express");
const router=express.Router();
router.post('/signup',(__,res) => res.json("Welcome"));
router.post('/account-activation',(__,res) => res.json("Account Activatiom"));

router.post('/signin',(__,res) => res.json("signin"));

router.post('/forgot-password',(__,res) => res.json("Forgot Password"));

router.post('/reset-password',(__,res) => res.json("Reset Password"));

router.post('/signup',(__,res) => res.json("Welcome"));

module.exports=router;