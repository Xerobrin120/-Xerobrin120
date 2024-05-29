const express = require("express");
const  path  = require("path");
const { mainRouter,gamesRouter } = require('./routes');
const bodyParser = require("body-parser");
const cors = require('./middlewares/cors');


const app = express();


 const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server has been started on\nhttp://localhost:${PORT}`);
})

app.use(express.static(path.join(__dirname,"public")),
bodyParser.json(),
cors,
mainRouter,
gamesRouter

);

