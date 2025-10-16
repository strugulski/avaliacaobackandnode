import express from 'express'
import controllerCalculadora from './controller/calculadora.js'

const router = express.Router()

router.get('/exercicio1' , controllerCalculadora.Exercicio1Get)
router.post('/exercicio1', controllerCalculadora.Exercicio1Post)  
router.get('/exercicio2' , controllerCalculadora.Exercicio2Get)
router.post('/exercicio2', controllerCalculadora.Exercicio2Post)  
router.get('/exercicio3' , controllerCalculadora.Exercicio3Get)
router.post('/exercicio4', controllerCalculadora.Exercicio4Post)  
router.get('/exercicio4' , controllerCalculadora.Exercicio4Get) 
router.get('/exercicio5' , controllerCalculadora.Exercicio5Get)
router.post('/exercicio5', controllerCalculadora.Exercicio5Post)  

export default router