"use server";

export async function addTodo(title: string) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });

  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
}
export async function toggleTodo(id: number, completed: boolean) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });

  if (!res.ok) throw new Error("Failed to update todo");
  return res.json();
}
