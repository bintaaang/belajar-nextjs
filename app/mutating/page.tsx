"use client";

import { useState } from "react";
import { useTodoStore } from "../mutating/store/todoStore"

export default function MutatingPage() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Mutating Data dengan Zustand</h1>

      <div className="flex gap-2 mt-2">
        <input
          className="border px-2 py-1 rounded"
          value={title}
          placeholder="New todo..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b pb-1"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.title}
              </span>
            </label>
            <button
              className="text-red-500"
              onClick={() => removeTodo(todo.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
