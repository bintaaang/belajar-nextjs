"use client";

import { useState } from "react";
import { addTodo, toggleTodo } from "./actions"

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function MutatingPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    if (!title) return;

    const tempTodo = { id: Date.now(), title, completed: false };
    setTodos((prev) => [tempTodo, ...prev]);
    setTitle("");

    try {
      const newTodo = await addTodo(title);
      setTodos((prev) => [newTodo, ...prev.filter((t) => t.id !== tempTodo.id)]);
    } catch (err) {
      console.error(err);
      setTodos((prev) => prev.filter((t) => t.id !== tempTodo.id));
    }
  };

  const handleToggle = async (todo: Todo) => {
    const updated = { ...todo, completed: !todo.completed };
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)));

    try {
      await toggleTodo(todo.id, updated.completed);
    } catch (err) {
      console.error(err);
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Mutating Data (JSONPlaceholder)</h1>

      <div>
        <input
          value={title}
          placeholder="New todo..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
