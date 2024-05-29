const allowedCors = [
    "http://localhost:3000",
    "http://practicum.yandex.ru",
    "http://students-projects.ru"
]
const cors = (req,res,next ) => {
const { origin } = req.headers;
if(allowedCors.includes(origin)){
    res.header("Access-Control-Allow-Oigin",origin);
}
next();
};
module.exports = cors;