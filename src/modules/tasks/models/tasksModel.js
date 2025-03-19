const { pool } = require('../../../config/database')


class TasksModel{

  static async criar(id, titulo, descricao, status, prazo, categoria){
    const dados = [id, titulo, descricao, status, prazo, categoria]
    const consulta = `INSERT INTO tarefas(id, titulo, descricao, status, prazo, categoria)
                       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    const newTask = await pool.query(consulta, dados)
    return newTask.rows
  }
  static async editar(id, titulo, descricao, status, prazo, categoria){
    const dados = [id, titulo, descricao, status, prazo, categoria]
    const consulta = `UPDATE tarefas SET titulo = $2, descricao = $3, status = $4, prazo = $5, categoria = $6
                      WHERE id = $1 RETURNING *`
    const taskAtualizada = await pool.query(consulta, dados)
    return taskAtualizada.rows
  }

  static async listar(){
    const consulta = `SELECT * FROM tarefas`
    const tasks = await pool.query(consulta)
    return tasks.rows
  }

  static async listarPorID(id){
    const dados = [id]
    const consulta = `SELECT * FROM tarefas WHERE id = $1`
    const task = await pool.query(consulta, dados)
    return task.rows
  }

  static async excluirPorID(id){
    const dados = [id]
    const consulta = `DELETE FROM tarefas WHERE id = $1`
    await pool.query(consulta, dados)
  }

  static async excluirTodos(){
    const consulta = `DELETE FROM tarefas`
    await pool.query(consulta)
  }

}


module.exports = TasksModel;