import mongoose from "mongoose";

const url = process.env.MONGODB_URI

// console.log(url)

let connection;

const startDb = async () => {
  if (!connection) connection = await mongoose.connect(url);
  // console.log("DATABASE CONNECTED")
  return connection;
};

export default startDb;
