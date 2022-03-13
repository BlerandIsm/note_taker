//creating linking routes
const express = require('express');
const fs = require('fs');
const path =require('path');
const database = require('./db/db.json')

// express app set up 
const app = express();
var PORT = process.env.PORT || 3000;

//linking all the html and css file so they run all together
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})