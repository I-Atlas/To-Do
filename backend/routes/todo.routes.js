const { Router } = require("express")
const controllers = require('../controllers/todo.controllers')
const router = Router()

router.get('/', controllers.fetchAll)
router.post('/', controllers.create)
router.post('/:todoId', controllers.delete)
router.post('/:todoId/complete', controllers.complete)

module.exports = router
