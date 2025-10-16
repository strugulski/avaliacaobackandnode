import ServiceCalculadora from "../services/calculadora.js"

class controllerCalculadora{

     Exercicio1Get(req, res) {
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = serviceCalculadora.Somar(num1, num2)
        res.status(200).send({ num1, num2, result })
    }

    Exercicio1Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = serviceExercicio.Somar(num1, num2)
            res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })   
        }
    }

     Exercicio2Get(req, res) {
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = ServiceCalculadora.Subtrair(num1, num2)
        res.status(200).send({ num1, num2, result })
    }

    Exercicio2Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = serviceExercicio.Subtrair(num1, num2)
            res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })   
        }
    }

     Exercicio3Get(req, res) {
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = ServiceCalculadora.Dividir(num1, num2)
        res.status(200).send({ num1, num2, result })
    }

    Exercicio3Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = serviceExercicio.Dividir(num1, num2)
            res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })   
        }
    }

     Exercicio4Get(req, res) {
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = ServiceCalculadora.Multiplicar(num1, num2)
        res.status(200).send({ num1, num2, result })
    }

    Exercicio4Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = serviceExercicio.Multiplicar(num1, num2)
            res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })   
        }
    }

     Exercicio5Get(req, res) {
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = ServiceCalculadora.Potenciacao(num1, num2)
        res.status(200).send({ num1, num2, result })
    }

    Exercicio5Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = serviceExercicio.Potenciacao(num1, num2)
            res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })   
        }
    }



}

export default new controllerCalculadora
