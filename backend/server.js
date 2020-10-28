// PACKAGES
const express = require("express")
const app = express();
const path = require("path")
const foods = require("./api/foods")
//CONFIG
const port = process.env.PORT|| 8000;

app.use(express.static("../client/build"));

//MIDDLEWARES
app.use(express.json());


//ROUTES
app.use("/api/foods",foods)


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build","index.html"));
});



//APP PORT

app.listen(port,()=> console.log(`PORT IS RUNNING ON ${port}`));











