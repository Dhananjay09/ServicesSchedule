const mongoose =require("mongoose");
const crypto=require("crypto");
const { timeStamp } = require("console");
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        umax: 50
        },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    hashed_passwrd:{
        type: String,
        required: true
    },
    salt:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Suscriber"
    },
    resetPasswordLink: {
        data: String,
        default: '',    
    },
}, {timeStamp: true});

UserSchema.methods={
    makeSalt: function(){
        return Math.round(new Date().valueOf()*Math.random()+"");
    },
    encryptPassword : function(password){
        if(!password){
            return "";
        }
        try{
            return crypto.createHmac("sha1",this.salt).update(password).digest("hes");
        }catch(err){
            return err;
        }
    },
    authenticate: function(password){
        return this.encryptPassword(password)===this.hashed_passwrd;
    }
}
UserSchema.virtual("password").set(function (password){
this._password=password;
this.salt=this.makeSalt();
this.hashed_passwrd=this.encryptPassword(password);
}).get(function(){
    return this,_password;
})

module.exports=mongoose("User",UserSchema);