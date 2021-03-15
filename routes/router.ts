import { Request, Response, Router } from 'express';

const router = Router();

//Servicios


router.get('/mensajes', (req : Request, res : Response) => {
    res.json({
        ok: true,
        mensaje : "Todo esta bien!!!"
    });
});

router.post('/mensajes', (req : Request, res : Response) => {
    //Si quiero leer la impformanción  : 
    //La prueba en postman con XMLDocument.www.form.urlencoded KEY VALUE
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
router.post('/mensajes/:id', (req : Request, res : Response) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;

