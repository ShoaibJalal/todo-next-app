import { todoProps } from "@/types";

import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isDone === true ? "line-through" : "none",
    opacity: todo.isDone === true ? 0.8 : 1,
  };

  return (
    <div
      style={todoStyle}
      className=" w-10/12  mx-auto flex gap-4 items-center justify-between bg-rose-700 py-1 px-7 rounded-2xl"
    >
        <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      <div className="flex items-center ">
        <EditTodo todo={todo} />
      </div>
      <div className="flex items-center ">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
