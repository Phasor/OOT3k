const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  address: { type: String, required: true, default: "default" },
});

// check the model has not already been defined before recreating it, otherwise next.js tries to overwrite the model and ann error throws
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);