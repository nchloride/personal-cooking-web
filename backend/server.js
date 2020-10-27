// PACKAGES
const express = require("express")
const app = express();
const path = require("path")
//CONFIG
const port = process.env.PORT|| 8000;

app.use(express.static("../client/build"));

//MIDDLEWARES
app.use(express.json());


//ROUTES



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build","index.html"));
});



//APP PORT

app.listen(port,()=> console.log(`PORT IS RUNNING ON ${port}`));











