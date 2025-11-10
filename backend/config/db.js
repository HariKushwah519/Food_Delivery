import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://harikushwah519:dKJ653fvjjChiNPY@cluster0.kiovfe6.mongodb.net/Food-Delivery"
    )
    .then(() => console.log("MongooseDB Connected"))
    .catch(() => console.log("MongooseDB Connection Failed"));
};
