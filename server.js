//creating linking routes
const express = require('express');
const fs = require('fs');
const path =require('path');
const database = require('./db/db.json')
const { METHODS } = require('http');

// express app set up 
const app = express();
var PORT = process.env.PORT || 3001;

//linking all the html and css file so they run all together
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Creating GET, POST functions

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes'));
});

app.post('/api/notes', (req, res)=> {
    console.info(`${req.method} request recieved to add a review`);
    console.log(notes)
    const newNote = {
        title:req.body.title,
        text:req.body.text,
        id:Math.floor(Math.random()*1000)
    }
    const note=[...note,newNote]
    fs.writeFile('./db/db.json',JSON.stringify(note),function (error){
        res.json(note)
    });
})
console.log(note)

app.get('/api/notes', (req, res) =>{
    fs.readFile('./db/db.json',"utf-8", function(err,data){
        let parseNotes = [].concat(JSON.parse(data))
        console.log(parseNotes)
        res.json(parseNotes)
    })

})

app.delete('/api/notes/:id',(req, res) =>{

})

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));