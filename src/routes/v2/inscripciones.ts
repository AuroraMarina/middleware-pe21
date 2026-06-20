import {Request, Response, Router} from 'express';

// public router = 
    
const router = Router();

const METODO_PAGO = ['Efectivo', 'Transferencia', 'Débito', 'Crédito']

// Post: estudianteID, materias (Arreglo), periodoID metodo pago - registrar matrículo
router.post('/', (req: Request, res: Response, next) =>{
    // const body = req.body;
    const {estudianteID, materias, periodoID, metodo_pago} = req.body;
    if(!estudianteID || !materias.length || !periodoID || !metodo_pago) {
        console.error('No existe el id del estudiante')
        res.status(400).json(
            {
                error: 'Campos requeridos: estudianteID. materias, periodoID'
            }

        
        )
    if(!METODO_PAGO.includes(metodo_pago)){
        console.log('El método de pago insertado no es válido');
        res.status(400).json({
            error: 'El método de pago insertado debe ser: efectivo, debito credito y tarjeta'
        })
    }
    
    }

    res.status(201).json({
        version: 'v1',
        message: {
            estudianteID, materias, periodoID, metodo_pago
        }

    })
    

})

export default router;