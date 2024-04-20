const express = require('express')

const app = express()

const port = 5000;

app.listen(port, () => console.log('Listing on port', port))

app.get("/", (req, res) => {
    res.send('Welcome to the homepage')
})

app.get('/about', (req, res) => {
    res.send("Welcome to the about page")
})