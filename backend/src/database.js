import mongoose from "mongoose";
import {MONGO_URI} from './config.js'

(async () => {
  const db = await mongoose.connect(MONGO_URI)
  console.log('db connect to', db.connection.name);
})();
