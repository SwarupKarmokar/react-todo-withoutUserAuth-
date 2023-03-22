const express = require('express');
const { getTodos, addTodo, deleteTodo, updateTodo, toggleTodo, getTodo } = require('../controllers/todoController');
const router = express.Router();

router.route('/').get(getTodos).post(addTodo);
router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);
router.route('/toggle/:id').put(toggleTodo);


module.exports = router;