import { useContext } from "react";
import { TodoListContext } from "@/features/todo-list";

const useTodoListContext = () => {
  const todoListContext = useContext(TodoListContext);

  if (!todoListContext) {
    throw new Error("Component must be used within TodoListContext.Provider");
  }

  return todoListContext;
};

export default useTodoListContext;
