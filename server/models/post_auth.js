const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true
    },
    status:{
      type: Boolean,
      default: 1
    },
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    detail : {
        type: String,
        required: true,
        trim : true,
    },
  },
  { timestamps: true }
);


module.exports = model("events", UserSchema);
