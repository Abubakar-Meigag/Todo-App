import React, { Fragment, useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");
  const handelChange = (e) => setDescription(e.target.value);

  const sendTodo = async (e) => {
      e.preventDefault()
      try {
          const body = { description }
        const res = await fetch("http://localhost:5099/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        console.warn(res);
        window.location = "/";
      } catch (err) {
          console.error(err.message);
      }
  }
    
  return (
    <Fragment>
      <h1 className="text-center mt-5">Beko Todo List</h1>
      <form className="d-flex mt-5" onSubmit={sendTodo}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handelChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
