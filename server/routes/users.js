const express = require("express");
const router = express.Router();
const { listUsers, listPosts ,likePost, addPost,deletEvent} = require("../controllers/users");
router.get("/list-users", listUsers);
router.get("/all-products", listPosts);
router.post("/update-like", likePost);
router.post("/add-post", addPost);
router.post("/delete-event",deletEvent)
module.exports = router;
