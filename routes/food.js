const express = require('express');
const router = express.Router();

function orderFood(req, res, next) {
    console.log("Order food");
    res.responseText = "<p>Ordering food</p>";
    next();
}

function makeFood(req, res, next) {
    console.log("Make food");
    res.responseText += "<p>Making some food</p>"
    res.send(res.responseText);
}

function sendFood(req, res, next) {
    console.log("Send food");
    res.send("<p>Sending food</p>");
}

router.get("/", (req, res, next) => {

    if(Object.keys(req.params).length > 0) {
        console.log("FOOD ROUTE, NO PARAMS");
        next('route');
    }
    else {
        next();
    }

}, orderFood, makeFood);

router.get("/", sendFood);

module.exports = router;