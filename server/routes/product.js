const { json } = require("body-parser");
const { Router } = require("express");
const express = require("express");

const router = express.Router();
const Client = require("pg").Pool;

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

router.post("/", async (req, res) => {
  const {
    productid,
    title,
    imageurl,
    description,
    size,
    color,
    available,
    catid,
    price,
    quantity,
  } = req.body;
  try {
    const data = await client.query(`SELECT * FROM category WHERE catid= $1;`, [
      catid,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      const Productdata = await client.query(
        `SELECT * FROM product WHERE productid= $1;`,
        [productid]
      );
      const productarr = Productdata.rows;
      if (productarr.length === 0) {
        const product = {
          productid,
          title,
          imageurl,
          description,
          size,
          color,
          available,
          catid,
          price,
          quantity,
        };
        client.query(
          `INSERT INTO product (productid,title,imageurl,description,size,color,available,catid,price,quantity) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`,
          [
            product.productid,
            product.title,
            product.imageurl,
            product.description,
            product.size,
            product.color,
            product.available,
            product.catid,
            product.price,
            product.quantity,
          ],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(400).json({
                error: "Database error",
              });
            } else {
              res.status(200).send({ message: "product added to database" });
            }
          }
        );
      }
    } else {
      return res.status(404).json({
        error: "category  not found",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await client.query(`SELECT * FROM product;`);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "Products are empty.",
      });
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:productcode", async (req, res) => {
  id = parseInt(req.params.productcode);
  try {
    const data = await client.query(
      `SELECT * FROM product WHERE productcode =$1;`,
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

router.put("/:productid", async (req, res) => {
  id = parseInt(req.params.productcode);
  try {
    const data = await client.query(
      `SELECT * FROM product WHERE productid =$1;`,
      [id]
    );
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      const { imagepath } = req.body;
      client.query(
        "UPDATE product SET imagepath=$1 WHERE productid = $2",
        [imagepath, id],
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

router.delete("/:productcode", async (req, res) => {
  id = parseInt(req.params.productcode);
  try {
    const data = await client.query(
      `SELECT * FROM product WHERE productcode =$1;`,
      [id]
    );
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      client.query(
        "DELETE FROM product WHERE productcode = $1",
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

router.get("/category/:catid", async (req, res) => {
  id = req.params.catid;
  try {
    const data = await client.query(`SELECT * FROM product WHERE catid = $1;`, [
      id,
    ]);
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
