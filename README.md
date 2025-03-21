# TaskFlow API

TaskFlow API é uma aplicação simples para gerenciar tarefas. Ela permite a criação, atualização, exclusão e visualização de tarefas, facilitando o gerenciamento de suas atividades diárias.

## Funcionalidades

- Criar uma nova tarefa
- Atualizar uma tarefa existente
- Excluir uma tarefa
- Visualizar todas as tarefas
- Visualizar uma tarefa específica

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL

## Requisitos

- Node.js v14 ou superior
- PostgreSQL v12 ou superior

## Instalação

1. Clone o repositório:
  ```bash
  git clone https://github.com/altemily/task-flow-api.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd task-flow-api
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
  ```
  PORT=3000
  DATABASE_URL=postgres://usuario:senha@localhost:5432/taskflow
  ```
Certifique-se de que o PostgreSQL está configurado corretamente e crie o banco de dados taskflow. 

## Execução

1. Inicie o servidor:
  ```bash
  npm start
  ```
2. A API estará disponível em `http://localhost:3000`.

## Endpoints

- `GET/task` - Retorna todas as tarefas
- `GET/task/:id` - Retorna uma tarefa específica
- `POST/task` - Cria uma nova tarefa
- `PUT/task/:id` - Atualiza uma tarefa existente
- `DELETE/task/:id` - Exclui uma tarefa
- `DELETE/tasl` - Exclui todas as tarefas


## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature:
  ```bash
  git checkout -b minha-feature
  ```
3. Commit suas mudanças:
  ```bash
  git commit -m 'Adiciona minha feature'
  ```
4. Faça o push para a branch:
  ```bash
  git push origin minha-feature
  ```
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

