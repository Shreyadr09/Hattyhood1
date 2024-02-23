const { json } = require("body-parser");
const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Client = require("pg").Pool;
const middleware = require("../middleware/middleware");
const app = express();
const axios = require("axios");

const nodemailer = require("nodemailer");
const { log } = require("console");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const client = new Client({
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
  const oid = id_generator();
  const {
    bulkid,
    orderid,
    email,
    color,
    printLocation,
    quantity,
    xs,
    s,
    m,
    l,
    xl,
    xxl,
    imageUrl,
    total,
    product,
  } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      const order = {
        bulkid,
        orderid,
        color,
        printLocation,
        email,
        quantity,
        xs,
        s,
        m,
        l,
        xl,
        xxl,
        imageUrl,
        total,
        product,
      };
      client.query(
        `INSERT INTO Bulkorders (  
            bulkid,
            orderid,
            color,
            printLocation,
            email,
            quantity,
            xs,
            s,
            m,
            l,
            xl,
            xxl,
            imageUrl,
            total,
            product
                    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15);`,
        [
          oid,
          order.orderid,
          order.color,
          order.printLocation,
          order.email,
          order.quantity,
          order.xs,
          order.s,
          order.m,
          order.l,
          order.xl,
          order.xxl,
          order.imageUrl,
          order.total,
          order.product,
        ],
        (err) => {
          if (err) {
            console.error(err);
            return res.status(400).json({
              error: "Database error",
            });
          } else {
            const response = {
              oid: oid,
              message: "order added to database",
              product: order.product, // Include the 'product' in the response
            };
            res.status(200).json(response);
            console.log("into post request");

            // Send the email
            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.REACT_APP_MAIL_USER1,
                pass: process.env.REACT_APP_MAIL_USER1_PASS,
              },
            });

            // Get the PDF data from the S3 link
            const pdfUrl =
              order.product;
            axios.get(pdfUrl, { responseType: "arraybuffer" })
              .then((pdfResponse) => {
                const pdfData = pdfResponse.data;

                // Send the email with the PDF attachment
                transporter.sendMail(
                  {
                    from: "teamhattyhood@gmail.com",
                    to: order.email,
                    subject: "Order Confirmation",
                    text: `Dear Customer,

Thank you for placing an order with us at Hattyhood. We appreciate your business and are committed to providing you with excellent service.

We would like to inform you that our team is currently working on preparing a quotation for your order. We understand the importance of providing accurate and competitive pricing, and we want to ensure that we give your request the attention it deserves.

Our dedicated team is diligently reviewing your order details and considering all relevant factors to provide you with the best possible quotation. We strive to deliver exceptional quality while maintaining competitive pricing for our valued customers like you.

We would like to assure you that we are making every effort to expedite the quotation process. Our team is focused on delivering accurate and comprehensive information to help you make an informed decision.

We anticipate that we will be able to provide you with the quotation within 2 business working days. Rest assured that we are working diligently to finalize the details and will communicate with you promptly.

If you have any questions or require any further assistance, please feel free to reach out to our customer support team at +91 9091013207 or aayushi@hattyhood.com. We are here to address any concerns you may have.

Once again, thank you for choosing Hattyhood. We value your trust in our products and services and look forward to serving you.

Best regards,

Aayushi Singh
Hattyhood
`,
                    attachments: [
                      {
                        filename: "order.pdf",
                        content: pdfData,
                      },
                    ],
                  },
                  (err, info) => {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("Email sent:", info.response);
                    }
                  }
                );
              })
              .catch((error) => {
                console.error("Failed to retrieve PDF data:", error);
              });
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
    const data = await client.query(`SELECT * FROM bulkorders;`);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(200).json({
        error: "no orders found.",
      });
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
    const data = await client.query(`SELECT * FROM bulkorders WHERE bulkid =$1;`, [
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
        "UPDATE bulkorders SET orderid=$1 WHERE bulkid = $2",
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

router.delete("/:orderid", async (req, res) => {
  id = req.params.orderid;
  try {
    const data = await client.query(`SELECT * FROM bulkorders WHERE bulkid =$1;`, [
      id,
    ]);
    const arr = data.rows;
    if (arr.length === 0) {
      return res.status(404).json({
        error: "product not found.",
      });
    } else {
      client.query(
        "DELETE FROM bulkorders WHERE bulkid = $1",
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
          `select * from bulkorders where email = (select email from users where email=$1);`,
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
  

router.post("/", async (req, res) => {
  // Parse the JSON payload received in the request body
  const payload = JSON.parse(req.body);

  // Retrieve the 8th element from the payload
  const eighthElement = payload[7]; // Arrays are zero-indexed, so the 8th element is at index 7

    console.log("Eighth Element:", eighthElement); // Log the eighth element to the console

  // Send the eighth element as a response
  res.status(200).json({ eighthElement });
});


module.exports = router;
