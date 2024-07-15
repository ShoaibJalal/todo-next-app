import { todoProps } from "@/types";

import ChangeTodo from "./ChangeTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isDone === true ? "line-through" : "none",
    opacity: todo.isDone === true ? 0.5 : 1,
  };

  return (
    <div
      style={todoStyle}
      className="w-full mx-auto flex gap-4 items-center justify-between bg-rose-700 py-1 px-7 rounded-2xl"
    >
        <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
    </div>
  );
};

export default Todo;
