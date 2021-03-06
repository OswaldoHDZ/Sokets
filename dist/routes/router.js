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
    //Si quiero leer la impformanción  : 
    //La prueba en postman con XMLDocument.www.form.urlencoded KEY VALUE
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de
    });
});
router.post('/mensajes/:id', function (req, res) {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    var id = req.params.id;
    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de,
        id: id
    });
});
exports.default = router;
