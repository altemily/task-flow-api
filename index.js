const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./src/modules/tasks/routes/tasksRoutes');

dotenv.config();

const port = process.env.PORTA;
const app = express();

app.use(express.json());
app.use(taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


