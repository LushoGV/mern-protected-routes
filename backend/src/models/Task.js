import jpk from "mongoose";

const { Schema, model } = jpk;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default model('Task', taskSchema)