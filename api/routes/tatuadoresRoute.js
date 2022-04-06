const { Router } = require('express')
const TatuadoresControllers = require('../controllers/TatuadoresControllers')

const router = Router()

router.get('/Tatuadores', TatuadoresControllers.pegaTodosOsTatuadores)
router.get('/Tatuadores/:id', TatuadoresControllers.mostraUmTatuador)
router.post('/Tatuadores', TatuadoresControllers.criaTatuador)

module.exports = router
