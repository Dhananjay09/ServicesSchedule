const User = require("../models/auth");
const _ = require("lodash");
const Post = require("../models/post_auth");
const { default: Axios } = require("axios");
exports.listUsers = (__, res) => {
  User.find({}, { hashed_password: 0, salt: 0, resetPasswordLink: 0 }).exec(
    (err, users) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong. Please try again.",
        });
      }
      return res.json({
        result: users,
      });
    }
  );
};
exports.listPosts =(req, res)=>{
  Post.find({}).exec((err, posts)=>{
    if(err){
      return res.status(400).json({
        error : "Something Went Wrong"
      });
    }
    return res.json({
      result: posts 
    });
  });
}
exports.likePost = (req, res) => {
  console.log("Reached the server");
  const { id } = req.body;
  console.log(id);
   Post.findOneAndUpdate({ _id : id }, { $inc : { "likes" : 1}}).exec((err, user)=>{
     if(err){
       return res.status(400).json({
         error : err
       })
     }
    console.log("Updated Succesfully");
})
}
exports.addPost = (req, res) => {
  const {email, date, title, detail}= req.body;
  const newPost=new Post({email, date, title, detail });
  newPost.save((err,userData)=>{
    if(err){
      console.log("Error Occured");
    }
    else{
      console.log("Succesfully created");
    }
  })
}
exports.deletEvent=(req, res) =>{
  const {_id} =req.body;
  Post.findByIdAndDelete({_id : _id}).exec((err, user)=>{
    if(err){
      return res.json({
        result: "Error Occured"
      })
    }
    return res.json({
      result: user
    })
  })
}
exports.updateEvent=(req, res)=>{
  const {_id, date, title, detail}=req.body;
  console.log("Id recived IS "+ _id);
  Post.findByIdAndUpdate({_id: _id}, { date : date, title: title, detail: detail}).exec((err, user)=>{
    if(err){
      return res.status(400).json({
        "error": "Error Occured"
      }
      )
    }
    return res.json({
      "detail": user
    })
  })
}