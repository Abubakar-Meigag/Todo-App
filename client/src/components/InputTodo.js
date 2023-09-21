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
      <h1 className="text-center title-header fs-2 mt-5">
        Beko Todo List
      </h1>
      <form className="d-flex mt-5" onSubmit={sendTodo}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handelChange}
        />
        <button className="btn btn-success ml-2 px-5 py-2">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
