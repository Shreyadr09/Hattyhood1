const bcrypt = require("bcrypt");
const express = require("express");
const app=express();
const router = express.Router();
const Client = require("pg").Pool;
const bodyParser=require("body-parser");

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

const jwt = require("jsonwebtoken");

//Registration Function
router.post("/subscribe", async (req, res) => {
    const { email} = req.body;
    try {
      const data = await client.query(`SELECT * FROM newsletter WHERE email= $1;`, [
        email,
      ]); //Checking if user already exists
      const arr = data.rows;
      if (arr.length != 0) {
        return res.status(200).json({
          error: "Email already there, No need to subscribe again.",
        });
      } else {
          const user = {
            email,
          };
          var flag = 1;
          //Inserting data into the database
          client.query(
            `INSERT INTO newsletter (email) VALUES ($1);`,
            [user.email],
            (err) => {
              if (err) {
                flag = 0; //If user is not inserted to database assigning flag as 0/false.
                console.error(err);
                return res.status(400).json({
                  error: "Database error",
                });
              } else {
                flag = 1;
                res
                  .status(200)
                  .send({ message: "User added to database" });
              }
            }
          );
      }
    } catch (err) {
      res.status(400).json({
        error: "Database error while subscribing user!", //Database connection error
      });
    }
  });

module.exports=router;