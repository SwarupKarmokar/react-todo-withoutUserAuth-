const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoSchema');

// @desc: Getting Todos 
// @route: GET api/todos  
// @access: public
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})


// @desc: Getting Todo 
// @route: GET api/todos/:id  
// @access: public
const getTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.json(todo);
})


// @desc: Adding Todos 
// @route: POST api/todos  
// @access: public
const addTodo = asyncHandler(async (req, res) => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({
            message: "Add your task"
        })
    }

    const todo = await Todo.create({ text });
    res.json(todo);
})

// @desc: Updating Todos 
// @route: PUT api/todos/:id  
// @access: public
const updateTodo = asyncHandler(async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedTodo)
})

// @desc: Deleting Todos 
// @route: DELETE api/todos/:id  
// @access: public
const deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete({ _id: req.params.id });

    res.json({
        message: "Deleted Successfully"
    })
})

// desc: Toggle Completed
// route: PUT api/todos/toggle/:id
// access: public
const toggleTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById({ _id: req.params.id });

    todo.complete = !todo.complete;

    todo.save();

    res.json(todo);
})

module.exports = { getTodo, getTodos, addTodo, updateTodo, deleteTodo, toggleTodo }