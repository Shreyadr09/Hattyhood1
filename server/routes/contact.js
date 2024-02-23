
const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

// router.use(express.json())
router.get('/', async (req,res)=>{
    res.send("Running")
})

router.post("/", async (req, res) => {

    const data = req.body;
    try {
        function sendEmail() {
            return new Promise((resolve, reject) => { // Changed 'request' to 'reject' for error handling
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.REACT_APP_MAIL_USER1,
                        pass: process.env.REACT_APP_MAIL_USER1_PASS,
                    }
                });

                // point to the template folder
                const handlebarOptions = {
                    viewEngine: {
                        partialsDir: path.resolve('./views/'),
                        defaultLayout: false,
                    },
                    viewPath: path.resolve('./views/'),
                };

                // use a template file with nodemailer
                transporter.use('compile', hbs(handlebarOptions))

                var mailOptions = {
                    from: 'teamhattyhood@gmail.com',
                    to: 'teamhattyhood@gmail.com,aayushi@hattyhood.com',
                    subject: 'Contact',
                    template: 'email',
                    context: {
                        name: data.formname,
                        email: data.formemail,
                        phoneNumber: data.formphoneNumber,
                        message: data.formmessage
                    }
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        reject(error); // Reject with error for proper error handling
                    } else {
                        resolve(info.response); // Resolve with response for success handling
                    }
                });
            })
        }

        const response = await sendEmail(); // Store the resolved value in a variable
        res.status(200).json({ message: 'Email sent successfully', response: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email', error: error }); // Include error details in response
    }
});


module.exports = router;

