import { TodoCount } from "@/features/todo-list";
import { TodoFilter } from "@/features/todo-list";
import { TodoList } from "@/features/todo-list";
import { TodoListControls } from "@/features/todo-list";
import { useTodoListContext } from "@/features/todo-list";

const TodoListWrapper = () => {
  const { todoList } = useTodoListContext();

  if (todoList.length) {
    return (
      <>
        <TodoList />

        <div className="mt-4 flex flex-col gap-4 border-t pt-4">
          <TodoCount />

          <div className="flex justify-between items-center flex-wrap gap-2">
            <TodoFilter />
            <TodoListControls />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos yet. Add one above!
      </div>
    );
  }
};
export default TodoListWrapper;
