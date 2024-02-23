const { json } = require("body-parser");
const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Client = require("pg").Pool;
const middleware = require("../middleware/middleware");
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

function id_generator() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

router.post("/", middleware, async (req, res) => {
  const { email, productid, quantity } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      const productdata = await client.query(
        `SELECT * FROM product WHERE productid= $1;`,
        [productid]
      );
      const productarr = productdata.rows;
      if (productarr.length != 0) {
        const cart = {
          email,
          productid,
          quantity,
        };
        client.query(
          `INSERT INTO cart(
                cartid,email,productid,quantity
                ) VALUES ($1,$2,$3,$4);`,
          [id_generator(), cart.email, cart.productid, cart.quantity],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(400).json({
                error: "Database error",
              });
            } else {
              res.status(200).send({ message: "cart added to database" });
            }
          }
        );
      } else {
        return res.status(404).json({
          error: "productid does not exists",
        });
      }
    } else {
      return res.status(404).json({
        error: "user does not exists",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await client.query(`SELECT * FROM cart;`);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(200).json([]);
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  id = req.params.id;
  try {
    const data = await client.query(`SELECT * FROM cart WHERE cartid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      const { quantity } = req.body;
      client.query(
        "UPDATE cart SET quantity=$1 WHERE cartid = $2",
        [quantity, id],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`cart item modified with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/", middleware, async (req, res) => {
  const { id, email } = req.body;
  if (id === "all") {
    try {
      const userdata = await client.query(
        `select * from users where email = $1;`,
        [email]
      );
      const userarr = userdata.rows;
      if (userarr.length != 0) {
        const data = await client.query(
          `select * from cart where email = (select email from users where email=$1);`,
          [email]
        );
        const arr = data.rows;
        if (arr.length === 0) {
          return res.status(200).json({
            message: "cart is empty.",
            arr: [],
          });
        } else {
          client.query(
            "DELETE FROM cart WHERE email =(SELECT email from users where email=$1)",
            [email],
            (error, results) => {
              if (error) {
                return res.status(400).send(error);
              }
              res.status(200).send(`cart item deleted with ID: ${email}`);
            }
          );
        }
      } else {
        return res.status(400).json({
          message: "no user found.",
        });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    try {
      const data = await client.query(`SELECT * FROM cart WHERE cartid =$1;`, [
        id,
      ]);
      const arr = data.rows;
      if (arr.length === 0) {
        return res.status(404).json({
          error: "product not found.",
        });
      } else {
        client.query(
          "DELETE FROM cart WHERE cartid = $1",
          [id],
          (error, results) => {
            if (error) {
              return res.status(400).send(error);
            }
            res.status(200).send(`cart item deleted with ID: ${id}`);
          }
        );
      }
    } catch (err) {
      return res.status(400).json(err);
    }
  }
});

router.get("/:email", async (req, res) => {
  id = req.params.email;
  try {
    const userdata = await client.query(
      `select * from users where email = $1;`,
      [id]
    );
    const userarr = userdata.rows;
    if (userarr != 0) {
      const data = await client.query(
        `select * from cart where email = (select email from users where email=$1);`,
        [id]
      );
      const arr = data.rows;
      if (arr.length === 0) {
        return res.status(200).json({
          message: "no cart found.",
        });
      } else {
        return res.status(200).json({ arr });
      }
    } else {
      return res.status(400).json({
        message: "no user found.",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
