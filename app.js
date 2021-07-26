const express = require ("express") ;
const app = express () ;
const path = require ("path") ;
const port = 3030;

app.use(express.static('public'));

app.get ("/", (req,res) => res.sendFile(path.join(__dirname, "views","index.html")))

app.get ("/babbage", (req,res) => res.sendFile(path.join(__dirname, "views","babbage.html")))

app.get ("/berners", (req,res) => res.sendFile(path.join(__dirname, "views","berners.html")))

app.get ("/clarke", (req,res) => res.sendFile(path.join(__dirname, "views","clarke.html")))

app.get ("/hamilton", (req,res) => res.sendFile(path.join(__dirname, "views","hamilton.html")))

app.get ("/lovelace", (req,res) => res.sendFile(path.join(__dirname, "views","lovelace.html")))

app.get ("/turing", (req,res) => res.sendFile(path.join(__dirname, "views","turing.html")))



app.listen(port,()=> console.log ("servidor corriendo en el puerto http://localhost:" + port)) 
