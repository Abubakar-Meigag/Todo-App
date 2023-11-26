require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

const port = process.env.PORT || 5099;

app.use(cors());
app.use(express.json());
db.connect;

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
    const { id } = req.params;
    const query = "SELECT * FROM todo_list WHERE todo_id = $1";
    const todo = await db.query(query, [id]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// create todo
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;
    const query = "INSERT INTO todo_list (description) values($1) RETURNING * ";
    const newTodo = await db.query(query, [description]);
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(error);
  }
});

// update a todo
app.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const query = "UPDATE todo_list SET description = $1 WHERE todo_id = $2";
    const updateTodo = await db.query(query, [description, id]);
    res.status(200).json("todo was updating");
  } catch (err) {
    console.error(err.message);
    res.status(500).send(error.message);
  }
});

// delete todo
app.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "DELETE FROM todo_list WHERE todo_id = $1";
    const todo = await db.query(query, [id]);
    res.status(200).json("Todo was deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
