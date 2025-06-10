import React, { useState } from "react";

function TodoList() {
  const [Todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [editIndex, setEditIndex] = useState();
  const [editValue, setEditValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...Todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...Todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(Todos[index]);
  };

  const handleSave = (index) => {
    const updatedtodos = [...Todos];
    updatedtodos[index] = editValue;
    setTodos(updatedtodos);
    setEditIndex(null);
    setInputValue("");
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-center text-3xl">To Do List</h1>
      <div className="">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-center gap-4">
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="border border-black w-full px-3 py-2 rounded"
              />
            </div>
            <div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
          </div>
        </form>

        <ul className="space-y-2">
         {Todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between border-b py-2">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border px-2 py-1 flex-1 mr-2"
                />
                <button
                  onClick={() => handleSave(index)}
                  className="bg-green-500 text-white px-2 py-1 mr-1 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo}</span>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-black px-2 py-1 mr-1 rounded"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;


