const { json } = require("body-parser");
const { Router } = require("express");
const express = require("express");
const bodyParser=require("body-parser");
const router = express.Router();
const Client = require("pg").Pool;
const middleware=require("../middleware/middleware");
const app=express();
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



router.post("/",middleware,async (req, res) => {
  const billid = id_generator()
  const {
    Firstname,
    Lastname,
    Companyname,
    Streetaddress1,
    Streetaddress2,
    city,
    state,
    zip,
    phone,
    email,
    additionalInformation,
    total,
    orderid,
    paymentid,
  } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      const billing = {
        Firstname,
        Lastname,
        Companyname,
        Streetaddress1,
        Streetaddress2,
        city,
        state,
        zip,
        phone,
        additionalInformation,
        email,
        orderid,
        paymentid,
        total
      };
      client.query(
        `INSERT INTO billing ( 
            firstname,
            lastname,
            companyname,
            adress1,
            adress2,
            city,
            states,
            pincode,
            phone,
            additionalinfo,
            email,
            orderid,
            paymentid,uuid,total) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15);`,
        [
          billing.Firstname,
          billing.Lastname,
          billing.Companyname,
          billing.Streetaddress1,
          billing.Streetaddress2,
          billing.city,
          billing.state,
          billing.zip,
          billing.phone,
          billing.additionalInformation,
          billing.email,
          billing.orderid,
          billing.paymentid,
          billid,
          billing.total
        ],
        (err) => {
          if (err) {
            console.error(err);
            return res.status(400).json({
              error: "Database error",
            });
          } else {
            res.status(200).send({billid: billid,message: "bill added to database" });
          }
        }
      );
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
    const data = await client.query(`SELECT * FROM billing;`);
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

router.delete("/:uuid",middleware,async (req, res) => {
  id = req.params.uuid;
  try {
    const data = await client.query(`SELECT * FROM billing WHERE uuid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "bill not found.",
      });
    } else {
      client.query(
        "DELETE FROM billing WHERE uuid = $1",
        [id],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`bill deleted with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.put("/:id", middleware,async (req, res) => {
  id = req.params.id;
  try {
    const data = await client.query(`SELECT * FROM billing WHERE uuid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      oid = req.body.oid
      pid = req.body.pid
      client.query(
        "UPDATE billing SET orderid=$1,paymentid=$2 WHERE uuid = $3",
        [
          oid,
          pid,
          id,
        ],
        (error, results) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send(`bill item modified with ID: ${id}`);
        }
      );
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;