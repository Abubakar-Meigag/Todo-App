import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

function ListTodo() {
    const [todoList, setTodoList] = useState([]);
    const url = "https://beko-todo-app.onrender.com/todo";

    const getTodo = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setTodoList(data);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodo();
    }, [])

    const deleteTodo = async (id) => {
    try {
        const deleteTodo = await fetch(
          `https://beko-todo-app.onrender.com/todo/${id}`,
          {
            method: "DELETE",
          }
        );
        console.log(deleteTodo);
        setTodoList(todoList.filter((todo) => todo.todo_id !== id));
    } catch (err) {
        console.error(err.message);
    }
    };

    return (
        <div>
        <Fragment>
            <table className="table table-dark table-hover fw-bold fs-2 mt-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todo) => (
                <tr key={todo.todo_id}>
                    <td>{todo.todo_id}</td>
                    <td>{todo.description}</td>
                    <td><EditTodo todo={todo} /></td>
                    <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(todo.todo_id)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
        </div>
    );
}

export default ListTodo;
