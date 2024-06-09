let express = require("express");
let router = express.Router();

function capitalOfPoland(req, res, next) {
    // console.log("Warsaw");
    res.write("Warsaw\n");
    next();
}

function capitalOfSpain(req, res, next) {
    // console.log("Madrid");
    res.end("Madrid\n");
    next();
}

function capitalOfFrance(req, res, next) {
    // console.log("Paris");
    res.write("Paris\n");
    next();
}

router.get("/", [capitalOfFrance, capitalOfPoland, capitalOfSpain]);

module.exports = router;