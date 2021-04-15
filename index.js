const express = require("express");
//const axios = require("axios");
const app = express();

const port = process.env.PORT || 3000;
let arrOfJSONS = [];

app.use(express.json());

app.get("/Request/:id/:message", async (req, res) => {
    let { id, message } = req.params;
    let numericid = Number(id);
    if (!isNaN(numericid) && numericid < 100) {
        arrOfJSONS[numericid] = message;
    }

    console.log("true");
    console.log(id);
    res.send(id);
});

app.get("/viewall", (req, res) => {
    arrOfJSONS.forEach((element, index) => {
        console.log(`array [${index}]  =  ${element}`);
    });
    res.send(arrOfJSONS);
})

app.listen(port, () => console.log(port));