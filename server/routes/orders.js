const { json } = require("body-parser");
const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Client = require("pg").Pool;
const middleware=require("../middleware/middleware")
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

function id_generator() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
router.post("/",middleware,async (req, res) => {
  const oid = id_generator();
  const { orderid, email, total, productid } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      const orderdata = await client.query(
        `SELECT * FROM product WHERE productid= $1;`,
        [productid]
      );
      const orderarr = orderdata.rows;
      if (orderarr.length != 0) {
        const order = {
          orderid,
          email,
          total,
          productid,
        };
        client.query(
          `INSERT INTO orders (  
                    uuid,
                    orderid,
                    email,
                    total,
                    productid
                    ) VALUES ($1,$2,$3,$4,$5);`,
          [oid, order.orderid, order.email, order.total, order.productid],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(400).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send({ oid: oid, message: "order added to database" });
            }
          }
        );
      } else {
        return res.status(404).json({
          error: "product does not exists",
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
    const data = await client.query(`SELECT * FROM orders;`);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(200).json({
        error: "Products are empty.",
      });
    } else {
      return res.status(200).json({ arr });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id",middleware,async (req, res) => {
  id = req.params.id;
  try {
    const data = await client.query(`SELECT * FROM orders WHERE uuid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "order not found.",
      });
    } else {
      oid = req.body.oid;
      client.query(
        "UPDATE orders SET orderid=$1 WHERE uuid = $2",
        [oid, id],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`order item modified with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/:orderid",middleware,async (req, res) => {
  id = req.params.orderid;
  try {
    const data = await client.query(`SELECT * FROM orders WHERE uuid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      client.query(
        "DELETE FROM orders WHERE uuid = $1",
        [id],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`order deleted with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get("/user/:email", async (req, res) => {
  id = req.params.email;
  try {
    const userdata = await client.query(
      `select * from users where email = $1;`,
      [id]
    );
    const userarr = userdata.rows;
    if (userarr != 0) {
      const data = await client.query(
        `select * from orders where email = (select email from users where email=$1);`,
        [id]
      );
      const arr = data.rows;
      if (arr.length === 0) {
        return res.status(200).json({
          message: "no orders found.",
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
