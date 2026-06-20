import { Request, Response, Router } from 'express';

const router = Router();

const METODO_PAGO = [
    'Efectivo',
    'Transferencia',
    'Débito',
    'Crédito'
];

router.post('/', (req: Request, res: Response) => {
    const {
        estudianteID,
        materias,
        periodoID,
        metodo_pago
    } = req.body;

    if (
        !estudianteID ||
        !Array.isArray(materias) ||
        materias.length === 0 ||
        !periodoID ||
        !metodo_pago
    ) {
        return res.status(400).json({
            error:
                'Campos requeridos: estudianteID, materias, periodoID, metodo_pago'
        });
    }

    if (!METODO_PAGO.includes(metodo_pago)) {
        return res.status(400).json({
            error:
                'El método de pago debe ser: Efectivo, Transferencia, Débito o Crédito'
        });
    }

    return res.status(201).json({
        version: 'v2',
        message: {
            estudianteID,
            materias,
            periodoID,
            metodo_pago
        }
    });
});

export default router;