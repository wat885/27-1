import { Router } from "express";
import { pool } from "../utils/db.js";
import multer from "multer";
import { cloudinaryUpload } from "../utils/upload.js";

const newsRouter = Router();

const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([{ name: "img", maxCount: 2 }]);

newsRouter.post("/", avatarUpload, async (req, res) => {
  const newActivity = {
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    topic: req.body.topic,
    content: req.body.content,
  };

  console.log(req.body);

  console.log(req.files.img);
  const Url = await cloudinaryUpload(req.files);
  newActivity["image"] = Url[0].url;
  console.log(Url[0].url);

  await pool.query(
    `insert into news (title, content, image)
    values ($1, $2, $3)`,
    [newActivity.topic, newActivity.content, newActivity.image]
  );

  return res.status(200).json({
    message: "Activity has been created successfully",
  });
});

newsRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM news
    ORDER BY id DESC `);

    // console.log(result.rows);

    return res.status(200).json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

newsRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await pool.query("select * from news where id=$1", [id]);

    console.log(result.rows[0]);

    if (result.rows[0]) {
      return res.status(200).json({
        data: result.rows[0],
      });
    } else {
      res.status(404).send("User Not found");
    }
  } catch (error) {
    console.log(error);
  }
});

newsRouter.post("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await pool.query("select * from news where id=$1", [id]);

    console.log(result.rows[0]);

    return res.json({
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

export default newsRouter;
