import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";
import notificationRouter from "./routes/notification.route.js";
import http from "http";
import initializeSocket from "./socket.js";

// app config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

// create HTTP server
const server = http.createServer(app);
initializeSocket(server); // initialize socket.io

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

// api endpoints
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/chats", chatRouter);
app.use("/api/messages", messageRouter);
app.use("/api/notifications", notificationRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
