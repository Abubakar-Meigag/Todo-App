const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./db");

const port = process.env.PORT || 5099;

app.use(cors());
app.use(express.json());

// Routes 

// create todo

app.post('/todo', async (req, res) => {
    try {
        const { description } = req.body;
        const query = "INSERT INTO todo_list (description) values($1) ";
        const newTodo = await db.query(query, [description]);
        res.status(200).json(newTodo);
    } catch (error) {
        console.error(error);
    }
})

// get all todo 

app.get('/', async (req, res) => {
      try {
    const todo = await db.query("select * from todo_list");
      res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
})

// update a todo 

// delete todo 

// delete all todo










app.listen(port, () => console.log(`Listening on port ${port}`));