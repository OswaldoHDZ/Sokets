"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
//Servicios
router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: "Todo esta bien!!!"
    });
});
router.post('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: "Todo esta bien POST!!!"
    });
});
exports.default = router;
