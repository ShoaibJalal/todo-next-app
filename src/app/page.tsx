import AddTodo from "@/components/todos/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isDone: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
export default async function Home() {
  const data = await getData();
  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-gray-950 text-zinc-50 min-h-[80vh] md:w-[55%]">
      <h1 className="font-bold text-center text-3xl">Todo App</h1>
      <div className="flex justify-center flex-col items-center m-3">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo, id) => (
            <div className={todo.isDone ? "line-through" : ""} key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
