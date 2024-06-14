import express from "express";
import cors from "cors";
import postRoute from "../api/routes/post.route.js";
import authRoute from "../api/routes/auth.route.js";
import testRoute from "../api/routes/test.route.js";
import userRoute from "../api/routes/user.route.js";
import chatRoute from "../api/routes/chat.route.js";
import messageRoute from "../api/routes/message.route.js";

import cookieParser from "cookie-parser";
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
