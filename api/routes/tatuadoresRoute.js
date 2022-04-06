const { Router } = require('express')
const TatuadoresControllers = require('../controllers/TatuadoresControllers')

const router = Router()

router.get('/Tatuadores', TatuadoresControllers.pegaTodosOsTatuadores)

module.exports = router
