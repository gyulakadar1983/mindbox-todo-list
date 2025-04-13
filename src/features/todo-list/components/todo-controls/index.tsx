import { Trash2 } from "lucide-react";
import { useTodoListContext } from "@/features/todo-list";
import { Button } from "@/shared/ui/button";

const TodoListControls = () => {
  const { todoList, setTodoList } = useTodoListContext();

  const hasCompleted = todoList.filter((todo) => todo.state);

  const clearCompleted = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.state));
  };

  return (
    <section aria-label="List controls">
      <Button
        variant="ghost"
        size="sm"
        onClick={clearCompleted}
        disabled={!Boolean(hasCompleted.length)}
        className="text-gray-500 hover:text-red-500 disabled:opacity-50"
      >
        <Trash2 className="h-4 w-4 mr-1" />
        Clear completed
      </Button>
    </section>
  );
};
export default TodoListControls;
