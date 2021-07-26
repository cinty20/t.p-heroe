const express = require ("express") ;
const app = express () ;
const path = require ("path") ;
const port = 3030;




app.listen(port,()=> console.log ("servidor corriendo en el puerto http://localhost:" + port)) 
