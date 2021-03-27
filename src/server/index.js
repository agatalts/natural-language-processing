const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);


var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const mockAPIResponse = require('./mockAPI.js');
const apiKey = process.env.API_KEY;
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

const app = express()

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post("/add", async(req, res) => {
    const apiData = await fetch(`${apiUrl}${apiKey}&lang=auto&url=${req.body.newUrl}`, 
    {method: 'POST'});

    try {
        const response = await resp.json();
        requestAnimationFrame.send(response)
    }
    catch(error) {
        console.log("error", error);
    }
});