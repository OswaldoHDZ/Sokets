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
    res.json({
        ok: true,
        mensaje : "Todo esta bien POST!!!"
    });
});

export default router;

