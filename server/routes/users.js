const express = require("express");
const router = express.Router();
const { listUsers, listPosts ,likePost, addPost,deletEvent, updateEvent} = require("../controllers/users");
router.get("/list-users", listUsers);
router.get("/all-products", listPosts);
router.post("/update-like", likePost);
router.post("/add-post", addPost);
router.post("/delete-event",deletEvent)
router.post("/update-event", updateEvent)
module.exports = router;
