import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName:"MERN_STACK_EVENT_PLANNING" })
    .then(() => {
      console.log("Connect to database");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};
