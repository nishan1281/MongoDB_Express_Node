//express configurations
const express = require('express'); //inmport express
const app = express();
app.use(express.urlencoded({ extended: true })); //to use form data
app.use(express.json());  //to use json data

//cors cofigures for different port
const cors = require('cors');
app.use(cors());

//handling GET requests at a particular path. 
app.get ("/", (req, res) =>{
    res.sendFile(__dirname + "/./views/index.html");
})

//app.use(): used to mount middleware functions
//handling routing errors
app.use((req, res, next) =>{
    res.status(404).json({
        message : "route not found",
    });
});

//handling server errors
app.use((err, req, res, next) =>{
    res.status(404).json({
        message : "server error",
    });
})

//export the app js 
module.exports = app;