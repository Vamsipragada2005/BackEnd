import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import firstRoute from "./routers/ToDoRouter.js";
import cron from 'node-cron';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/",firstRoute);

cron.schedule(" */2 * * * * * ",()=>{
  console.log("hai this is vamsi");
});

// app.use("/api/tasks", TaskRouter);

// mongoose
//   .connect("mongodb+srv://vamsipragada1750_db_user:NNaidu1750@cluster0.3rj6qbc.mongodb.net/mydb1")
//   .then(() => console.log("db connected"))
//   .catch((error) => console.log(error));

app.listen(1234, () => {
  console.log("server running at port 1234");
});
