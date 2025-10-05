import express from "express";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
