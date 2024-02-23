const bodyParser = require("body-parser");
const { Router } = require("express");
const express = require("express");
const app=express();
const router = express.Router();
const Client = require("pg").Pool;
app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
const client = new Client({
    // user: process.env.REACT_APP_MAIL_CLIENT_USER,
    // host: process.env.REACT_APP_MAIL_CLIENT_HOST,
    // database: process.env.REACT_APP_MAIL_CLIENT_DATABASE,
    // password: process.env.REACT_APP_MAIL_CLIENT_PASS,
    // port:5432,
  user: "ubuntu",
  host: "ec2-3-109-148-73.ap-south-1.compute.amazonaws.com",
  database: "hattyhood-main",
  password: "Teamhattyhood@database1",
  port: 5432,
    // ssl: true,
});

function id_generator() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}


router.post("/", async (req, res) => {
  const {catname} = req.body;
  const catid=id_generator();
  try {
    const category = {
      catname,
    };
    client.query(
      `INSERT INTO category(catid,catname) VALUES ($1,$2);`,
      [catid, category.catname],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(400).json({
            error: "Database error",
          });
        } else {
          res.status(200).send({ message: "category added to database" });
        }
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await client.query(`SELECT * FROM category;`); //Checking if user already exists
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(400).json({
        error: "categories are empty.",
      });
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:catid", async (req, res) => {
  id =req.params.catid;
  try {
    const data = await client.query(`SELECT * FROM category WHERE catid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "category not found.",
      });
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:catid", async (req, res) => {
  id = parseInt(req.params.catid);
  try {
    const data = await client.query(`SELECT * FROM category WHERE catid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "category not found.",
      });
    } else {
      const { title, slug } = req.body;
      client.query(
        "UPDATE category SET title = $1, slug = $2 WHERE catid = $3",
        [title, slug, id],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`category modified with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/find/:catid", async (req, res) => {
  id = parseInt(req.params.catid);
  try {
    const data = await client.query(`SELECT * FROM category WHERE catid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "category not found.",
      });
    } else {
      client.query(
        "DELETE FROM category WHERE catid = $1",
        [id],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`category deleted with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;