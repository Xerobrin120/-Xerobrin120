const express = require("express")

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})

app.get("/", (req,res) => {
res.send("<h1>hello<h1>");
});