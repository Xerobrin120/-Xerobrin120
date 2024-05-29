const fs = require("fs").promises
const mainRouter = require("express").Router();

const sendHtml =   (req,res) => {
    fs.readFile("./publiс/index.html", "utf-8").then((data) => {
        res.header("Content-Type","text/html");
        res.send(data)   
    });
};

mainRouter.get("/", sendHtml);

module.exports = mainRouter