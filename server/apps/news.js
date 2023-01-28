import { Router } from "express";
import { pool } from "../utils/db.js";

const newsRouter = Router();

newsRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query("select * from news");

    console.log(result.rows);

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
      return res.json({
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
