const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(()=> {
    console.log(`database connection established`);
})
.catch((err)=>{
    console.log(`database connection error: ${err}`);
    process.exit(1);
})