import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect("mongodb://localhost:27017/protectedRoutes")
  console.log('db connect to', db.connection.name);
})();
