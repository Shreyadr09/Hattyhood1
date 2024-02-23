const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT ||4000;
const UserRoute = require("./routes/users");
const categoryRoute = require("./routes/category");
const ProductRoute = require("./routes/product");
const PaymentRoute = require("./routes/payment");
const cartRoute = require('./routes/cart');
const orderRoute = require("./routes/orders");
const billingRoute = require("./routes/billing");
const bulkordersRoute = require("./routes/bulkOrder");
const newsletterRoute = require("./routes/newsletter");
const contactRoute = require("./routes/contact");
const customizationctRoute = require("./routes/customization");
const canvasImageRoute = require("./routes/canvasimage");


let cors = require("cors");

var corsOptions = {
  origin: 'https://www.hattyhood.com/,',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors());
 /*app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});*/

app.get('/', (req, res) => {
  res.send('Hello! It is running')
});
app.use("/users", UserRoute);
app.use("/category", categoryRoute);
app.use("/product", ProductRoute);
app.use("/payment", PaymentRoute);
app.use("/cart", cartRoute);
app.use("/orders", orderRoute);
app.use("/billing", billingRoute);
app.use("/bulkorders", bulkordersRoute);
app.use("/newsletter", newsletterRoute);
app.use("/contact", contactRoute)
app.use("/customization", customizationctRoute);
app.use("/canvasimage", canvasImageRoute);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});