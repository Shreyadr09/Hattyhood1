const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const router = express.Router();
const Client = require("pg").Pool;
const bodyParser = require("body-parser");

const client = new Client({
  user: "ubuntu",
  host: "ec2-3-109-148-73.ap-south-1.compute.amazonaws.com",
  database: "hattyhood-main",
  password: "Teamhattyhood@database1",
  port: 5432,
  // ssl: true,
});

// const client = new Client({
//   user: 'venkatesh21np',
//   host: 'db.bit.io',
//   database: 'venkatesh21np/hattyhood',
//   password: 'v2_3tKFE_cQEXc9mS2qBAHsn3QVD34yK',
//   port:5432,
//   ssl: true,
// });

client.connect();
const jwt = require("jsonwebtoken");

//Registration Function
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]); //Checking if user already exists
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(200).json({
        error: "Email already there, No need to register again.",
      });
      // return res.send("done")
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(err).json({
            error: "Server error",
          });
        const user = {
          email,
          username,
          password: hash,
        };
        console.log(user.password);
        var flag = 1;

        //Inserting data into the database

        client.query(
          `INSERT INTO users (email,username,password) VALUES ($1,$2,$3);`,
          [user.email, user.username, user.password],
          (err) => {
            if (err) {
              flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
              console.error(err);
              return res.status(400).json({
                error: "Database error",
              });
            } else {
              flag = 1;
              res
                .status(200)
                .send({ message: "User added to database, not verified" });
            }
          }
        );
        if (flag) {
          const token = jwt.sign(
            //Signing a jwt token
            {
              email: user.email,
            },
            "hey this is test"
          );
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      error: "Database error while registring user!", //Database connection error
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, passwords } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]); //Verifying if the user exists in the database
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not registered, Sign Up first",
      });
    } else {
      bcrypt.compare(passwords, user[0].password, (err, result) => {
        console.log(user[0].password);
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) {
          const token = jwt.sign(
            {
              email: email,
              password: passwords,
            },
            "hey this is test"
          );
          res.status(200).json({
            message: "User signed in!",
            token: token,
          });
        } else {
          if (result != true)
            res.status(400).json({
              error: "Enter correct password!",
            });
        }
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "Database error occurred while signing in!",
    });
  }
});

module.exports = router;

// const bcrypt = require("bcrypt");
// const express = require("express");
// const app = express();
// const router = express.Router();
// const { Pool } = require("pg");
// const bodyParser = require("body-parser");

// const pool = new Pool({
//   user: "ubuntu",
//   host: "localhost",
//   database: "hattyhood",
//   password: "ubuntu",
//   port: 5432,
//   ssl: true, // Set it to false if SSL is not enabled
// });
// pool.connect();

// const jwt = require("jsonwebtoken");

// // Registration Function
// router.post("/register", async (req, res) => {
//   const { email, username, password } = req.body;
//   try {
//     console.log('dhawan is error');
//     const data =await pool.query('SELECT * FROM users WHERE email = $1;', [
//       email,
//     ]);

//     const arr = data.rows;
//     console.log(arr);
//     if (arr.length !== 0) {
//       return res.status(200).json({
//         error: "Email already exists, no need to register again.",
//       });
//     } else {
//       bcrypt.hash(password, 10, async (err, hash) => {
//         if (err) {
//           return res.status(500).json({
//             error: "Server error",
//           });
//         }

//         const user = {
//           email,
//           username,
//           password: hash,
//         };

//         try {
//           await pool.query(
//             "INSERT INTO users (email, username, password) VALUES ($1, $2, $3);",
//             [user.email, user.username, user.password]
//           );

//           const token = jwt.sign({ email: user.email }, "hey this is test");

//           res.status(200).send({
//             message: "User added to the database, not verified",
//             token: token,
//           });
//         } catch (error) {
//           console.error(error);
//           return res.status(400).json({
//             error: "Database error",
//           });
//         }
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(400).json({
//       error: "Database error while registering user!",
//     });
//   }
// });

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const data = await pool.query("SELECT * FROM users WHERE email = $1;", [
//       email,
//     ]);

//     const user = data.rows[0];
//     if (!user) {
//       return res.status(400).json({
//         error: "User is not registered. Sign up first.",
//       });
//     }

//     bcrypt.compare(password, user.password, (err, result) => {
//       if (err) {
//         return res.status(500).json({
//           error: "Server error",
//         });
//       } else if (result === true) {
//         const token = jwt.sign(
//           {
//             email: email,
//             password: password,
//           },
//           "hey this is test"
//         );

//         return res.status(200).json({
//           message: "User signed in!",
//           token: token,
//         });
//       } else {
//         return res.status(400).json({
//           error: "Enter correct password!",
//         });
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       error: "Database error occurred while signing in!",
//     });
//   }
// });

// module.exports = router;
