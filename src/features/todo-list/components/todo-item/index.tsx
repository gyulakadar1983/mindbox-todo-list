import { CheckCircle, Circle } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import type { TodoData } from "@/features/todo-list";
import { useTodoListContext } from "@/features/todo-list";

const Todo = (todo: TodoData) => {
  const { updateTodo } = useTodoListContext();
  const { state, title } = todo;

  return (
    <article
      className={cn(
        "flex items-center p-3 rounded-lg transition-all",
        "border border-gray-100 hover:border-indigo-200",
        "bg-white hover:bg-indigo-50"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => updateTodo({ ...todo, state: !todo.state })}
        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100"
      >
        {state ? (
          <CheckCircle className="h-6 w-6" />
        ) : (
          <Circle className="h-6 w-6" />
        )}
      </Button>
      <h2
        className={cn(
          "ml-2 flex-1 text-gray-800",
          state && "line-through text-gray-400"
        )}
      >
        {title}
      </h2>
    </article>
  );
};
export default Todo;
