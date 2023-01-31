import { Router } from "express";
import { pool } from "../utils/db.js";
import multer from "multer";
import { cloudinaryUpload } from "../utils/upload.js";

const newsRouter = Router();

const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([{ name: "img", maxCount: 2 }]);

newsRouter.post("/", avatarUpload, async (req, res) => {
  try {
    const newActivity = {
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
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

newsRouter.put("/:id", avatarUpload, async (req, res) => {
  try {
    const newActivity = {
      topic: req.body.topic,
      content: req.body.content,
    };
    const id = req.params.id;
    console.log("Activity id", id);

    console.log(req.body);

    console.log(req.files.img);
    const Url = await cloudinaryUpload(req.files);
    newActivity["image"] = Url[0].url;
    console.log(Url[0].url);

    await pool.query(
      `update news
      set title = $1, content = $2 , image = $3
      WHERE id = $4`,
      [newActivity.topic, newActivity.content, newActivity.image, id]
    );

    return res.status(200).json({
      message: "Activity has been edit successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
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
    res.status(400).send(error);
  }
});

newsRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Activity id", id);
    const result = await pool.query("select * from news where id=$1", [id]);

    // console.log(result.rows[0]);

    if (result.rows[0]) {
      return res.status(200).json({
        data: result.rows[0],
      });
    } else {
      res.status(400).send("Activity Not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

newsRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Activity id", id);
    const result = await pool.query(
      "DELETE FROM news WHERE id=$1 RETURNING *",
      [id]
    );

    console.log(result.rows[0]);

    if (result.rows[0]) {
      return res.status(200).json({
        data: result.rows[0],
      });
    } else {
      res.status(400).send("Activity Not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default newsRouter;
