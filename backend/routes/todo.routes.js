const { Router } = require("express")
const controllers = require('../controllers/todo.controllers')
const router = Router()

router.get('/', controllers.getAll)
router.post('/', controllers.create)
router.post('/:todoId', controllers.delete)
router.post('/:todoId', controllers.update)
router.post('/:todoId/complete', controllers.complete)

module.exports = router