const { json } = require("body-parser");
const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Client = require("pg").Pool;
const middleware = require("../middleware/middleware");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const client = new Client({
  // user: process.env.REACT_APP_MAIL_CLIENT_USER,
  // host: process.env.REACT_APP_MAIL_CLIENT_HOST,
  // database: process.env.REACT_APP_MAIL_CLIENT_DATABASE,
  // password: process.env.REACT_APP_MAIL_CLIENT_PASS,
  // port: 5432,
  user: "ubuntu",
  host: "ec2-3-109-148-73.ap-south-1.compute.amazonaws.com",
  database: "hattyhood-main",
  password: "Teamhattyhood@database1",
  port: 5432,
  // ssl: true,
});

router.get("/", async (req, res) => {
  try {
    const data = await client.query(`SELECT * FROM canvasimage;`);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(200).json({
        error: "no orders are empty.",
      });
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:productid", async (req, res) => {
  id = req.params.productid;
  try {
    const data = await client.query(
      `SELECT * FROM canvasimage WHERE productid =$1;`,
      [id]
    );
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
