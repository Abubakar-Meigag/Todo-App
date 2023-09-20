const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./db");

const port = process.env.PORT || 5099;

app.use(cors());
app.use(express.json());

// Routes 

// get all todo 

app.get("/todo", async (req, res) => {
  try {
    const query = "select * from todo_list";
    const todo = await db.query(query);
    res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// get one todo 

app.get("/todo/:id", async (req, res) => {
  try {
    const  { id }  = req.params;
    const query = "SELECT * FROM todo_list WHERE todo_id = $1";
    const todo = await db.query(query, [id]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// create todo

app.post('/todo', async (req, res) => {
    try {
        const { description } = req.body;
        const query =
            "INSERT INTO todo_list (description) values($1) RETURNING * ";
        const newTodo = await db.query(query, [description]);
        res.status(200).json(newTodo);
    } catch (error) {
        console.error(error);
    }
})

// update a todo 

// delete todo 

// delete all todo










app.listen(port, () => console.log(`Listening on port ${port}`));