import AddTodo from "@/components/todos/AddTodo";
export default function Home() {
  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-gray-950 text-zinc-50 min-h-[80vh] md:w-[55%]">
      <h1 className="font-bold text-center text-3xl">Todo App</h1>
      <div className="flex justify-center flex-col items-center m-3">
        <AddTodo />
        <p className="text-red-500">map todos</p>
      </div>
    </div>
  );
}
