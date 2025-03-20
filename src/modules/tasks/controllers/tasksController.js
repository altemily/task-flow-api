const TasksModel = require ('../models/tasksModel');

class TasksController {
  static async criar(requisicao, resposta){
    try {
      const {titulo, descricao, status, prazo, categoria} = requisicao.body;
      if (!titulo || !descricao || !status || !prazo || !categoria){
        return resposta.status(400).json({mensagem: "Todos os campos devem ser preenchidos!"})
      }
      const newTask = await TasksModel.criar({titulo, descricao, status, prazo, categoria});
      resposta.status(201).json({mensagem: "Tarefa criada com sucesso!!", Tarefa: newTask});
    } catch (error) {
      resposta.status(500).json({mensagem:"Erro ao criar tarefa.", erro: error.message});
    }
  }

  static async editar(requisicao, resposta){
    try {
      const id = requisicao.params.id;
      const {titulo, descricao, status, prazo, categoria} = requisicao.body;
      if (!titulo || !descricao || !status || !prazo || !categoria){
        return resposta.status(400).json({mensagem: "Pelo menos um campo deve ser atualizado."});
      }
      const taskAtualizada = await TasksModel.editar(id, {titulo, descricao, status, prazo, categoria});
      if(!taskAtualizada) {
        return resposta.status(200).json({mensagem: "Tarefa atualizada com sucesso!", Tarefa: taskAtualizada});
      }
    } catch (error) {
      resposta.status(500).json({mensagem: "Erro ao atualizar tarefa.", erro: error.message});
    }
  }

  static async listar(requisicao, resposta){
    try {
      const tasks = await TasksModel.listar();
      if(tasks.length === 0) {
        return resposta.status(404).json({mensagem: "Não existem tarefas cadastradas."});
      }
      resposta.status(200).json(tasks)
    } catch (error) {
      resposta.status(500).json({mensagem:"Erro ao buscar tarefas.", erro: error.message});
    }
  }

  static async listarPorID(requisicao, resposta){
    try {
      const id = requisicao.params.id;
      const task = await TasksModel.listarPorID(id);
      if(!task) {
        return resposta.status(404).json({mensagem: "Tarefa não encontrada."});
      }
      resposta.status(200).json(task)
    } catch (error) {
      resposta.status(500).json({mensagem: "Erro ao buscar tarefa.", erro: error.message});
    }
  }

  static async excluirPorID(requisicao, resposta){
    try {
      const id = requisicao.params.id;
      const taskExcluida = await TasksModel.excluirPorID(id);
      if(!taskExcluida) {
        return resposta.status(400).json({mensagem: "Tarefa não encontrada!"});
      }
      resposta.status(200).json({mensagem: "Tarefa excluída com sucesso!"});
    } catch (error) {
      resposta.status(500).json({mensagem: "Erro ao buscar tarefa.", erro: error.message});
    }
  }

  static async excluirTodos(requisicao, resposta){
    try {
      await TasksModel.excluirTodos();
      resposta.status(200).json({mensagem: "Todas as Tarefas foram excluídas com sucesso!"});
    } catch (error) {
      resposta.status(500).json({mensagem: "Erro ao excluir todas as Tarefas.", erro: error.message});
    }
  }

}

module.exports = TasksController;


