import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import newsRouter from "./apps/news.js";

async function init() {
  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/news", newsRouter);

  app.get("/", (req, res) => {
    res.send("http://localhost:4000/");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not found");
  });

  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}

init();
