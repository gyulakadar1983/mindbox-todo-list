import { TodoForm } from "@/features/todo-list";
import { TodoListWrapper } from "@/features/todo-list";
import { TodoListContextProvider } from "@/features/todo-list";

const TodoPage = () => {
  return (
    <TodoListContextProvider>
      <TodoForm />
      <TodoListWrapper />
    </TodoListContextProvider>
  );
};
export default TodoPage;
