import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import newsRouter from "./apps/news.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

async function init() {
  dotenv.config();

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });


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
