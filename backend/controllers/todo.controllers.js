const Todo = require('../models/todo.models')

exports.create = async (req, res) => {
    const { text } = req.body
    try {
        const newTodo = new Todo({ text })
        await newTodo.save()
        return res.json(newTodo)
    } catch (error) {
        console.log(error)
    }
}

exports.getAll = async (_req, res) => {
    try {
        const todos = await Todo.find()
        return res.json(todos)
    } catch (error) {
        console.log(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        await todo.remove()
        return res.json({ todoId: req.params.todoId })
    } catch (error) {
        console.log(error)
    }
}

exports.update = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        await todo.update().save()
        return res.json({ todoId: req.params.todoId })
    } catch (error) {
        console.log(error)
    }
}

exports.complete = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        todo.complete = !todo.complete
        await todo.save()
        return res.json({ todoId: req.params.todoId })
    } catch (error) {
        console.log(error)
    }
}