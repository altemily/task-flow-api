const express = require('express');
const TasksController = require('../controllers/tasksController');

const router = express.Router();

router.post('/task', TasksController.criar);
router.put('/task/:id', TasksController.editar);
router.get('/task', TasksController.listar);
router.get('/task/:id', TasksController.listarPorID);
router.delete('/task/:id', TasksController.excluirPorID);
router.delete('/task', TasksController.excluirTodos);

module.exports = router;

