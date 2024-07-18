const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email
    console.log(firstname, lastname, email)
    const data = {
        members:[{
            email_address: email,
            status:  "subscribed",
            merge_fields:{
                FNAME: firstname,
                LNAME: lastname
            }
        }]
    }
    jsonData = JSON.stringify(data)
    const apiKey = "522aeb117b9c6c0d3bdba8d4045d36c9-us22"
    // const list_id="cd63619dfe"
    const url = "https://us22.api.mailchimp.com/3.0/lists/cd63619dfe"
    const options = {
        method: "POST",
        auth:"dan:522aeb117b9c6c0d3bdba8d4045d36c9-us22"
    }

    const request = https.request(url, options, (response)=> {
        response.on("data", (data) => {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
    console.log(firstname, lastname,email)
})
app.listen(8080, (req,res)=>{
    console.log("listening on Port 8080")
})