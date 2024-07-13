import Button from "../button/Button";
import Input from "../input/Input";
import Form from "../form/Form";
import { createTodo } from "@/actions";

const AddTodo = () => {
  return (
    <>
      <Form action={createTodo} >
        <div className="flex gap-5 items-center">
          <Input name="input" type="text" placeholder="Add Todo Here" />
          <Button type="submit" text="Add" bgColor="bg-rose-700 " />
        </div>
      </Form>
    </>
  );
};
export default AddTodo;
