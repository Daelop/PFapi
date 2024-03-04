// Purpose: Model for application
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const appSchema = new Schema(
  {
    userId: { type: ObjectId, required: true },
    event: { type: ObjectId, required: true },
    username: { type: String, required: true },
    ign: { type: String, required: false },
    server: { type: String, required: false },
    tos: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);
const Application = mongoose.model("user", appSchema);
module.exports = Application;
