const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const { Console } = require("console")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// app.post('/', (req, res) => {
//     const firstname = req.body.first_name
//     const lastname = req.body.last_name
//     const email = req.body.email
//     console.log(firstname, lastname, email)
//     const data = {
//         members:[{
//             email_address: email,
//             status:  "subscribed",
//             merge_fields:{
//                 FNAME: firstname,
//                 LNAME: lastname
//             }
//         }]
//     }
//     jsonData = JSON.stringify(data)
//     const apiKey = "d971b198c16e5e45876e765be18341ee-us22"
//     // const list_id="cd63619dfe"
//     const url = "https://us22.api.mailchimp.com/3.0/lists/cd63619dfe"
//     const options = {
//         method: "POST",
//         auth:"dan:d971b198c16e5e45876e765be18341ee-us22"
//     }

//     const request = https.request(url, options, (response)=> {
//         response.on("data", (data) => {
//             console.log(JSON.parse(data))
//         })
//     })

//     request.write(jsonData)
//     request.end()
//     console.log(firstname, lastname,email)
// })
app.listen(8080, (req, res) => {
    console.log("listening on Port 8080")
})



app.post('/', (req, res) => {
    var api_key = '8a94b9224364daf6bc59146c8faca2d6-0f1db83d-ab421ccf';
    var domain = 'sandbox2214517ef86c4a2084e11a9f29b9c186.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    const Email = req.body.email;

    var data = {
        from: 'danielp2811@gmail.com',
        to: Email,
        subject: 'Hello',
        text: 'Testing some Mailgun awesomeness!'
    };

    console.log(data);

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.error(error);
        }
        console.log(body);
    });
})

