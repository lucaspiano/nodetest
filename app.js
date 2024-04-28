"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var WaterJugBackend_1 = require("./WaterJugBackend");
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.post('/solve-water-jug-riddle', function (req, res) {
    var _a = req.body, x_capacity = _a.x_capacity, y_capacity = _a.y_capacity, z_amount_wanted = _a.z_amount_wanted;

    if (!Number.isInteger(x_capacity) || !Number.isInteger(y_capacity) || !Number.isInteger(z_amount_wanted) || x_capacity <= 0 || y_capacity <= 0 || z_amount_wanted <= 0) {
        return res.status(400).json({ error: 'Invalid input. x_capacity, y_capacity, and z_amount_wanted must be positive integers.' });
    }

    var solution = (0, WaterJugBackend_1.solveWaterJugRiddle)(x_capacity, y_capacity, z_amount_wanted);
    if (solution) {
        return res.json({ solution: solution });
    }
    else {
        return res.json({ message: 'No solution possible.' });
    }
});

app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
