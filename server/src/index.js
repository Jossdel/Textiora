import express from "express";
import cors from "cors";
import router from "./router/user.router.js";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(3000 || process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
