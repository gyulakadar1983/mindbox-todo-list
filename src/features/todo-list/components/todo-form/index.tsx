import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useTodoListContext } from "@/features/todo-list";
import { PlusCircle } from "lucide-react";

const TodoForm = () => {
  const { addTodo } = useTodoListContext();

  return (
    <form action={addTodo} className="flex gap-2 mb-6">
      <Input
        type="text"
        name="title"
        placeholder="What needs to be done?"
        aria-label="Todo title"
        className="flex-1 border-indigo-200 focus-visible:ring-indigo-500"
      />
      <Button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        <PlusCircle className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
};
export default TodoForm;
