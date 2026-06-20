import { Request, Response, Router } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { estudianteID, materias, periodoID } = req.body;

    if (
        !estudianteID ||
        !Array.isArray(materias) ||
        materias.length === 0 ||
        !periodoID
    ) {
        return res.status(400).json({
            error: 'Campos requeridos: estudianteID, materias, periodoID'
        });
    }

    return res.status(201).json({
        version: 'v1',
        message: {
            estudianteID,
            materias,
            periodoID
        }
    });
});

export default router;