import { createContext, ReactNode, useEffect, useState } from "react";
import type { TodoData, TodoListFilterType } from "@/features/todo-list";
import { nanoid } from "nanoid";

type TodoListFilterFunction = (todo: TodoData) => boolean;

const todoListFilterFunctions: Record<
  TodoListFilterType,
  TodoListFilterFunction
> = {
  all: () => true,
  completed: (todo) => Boolean(todo.state),
  active: (todo) => Boolean(!todo.state),
};

interface TodoListContextData {
  todoList: TodoData[];
  setTodoList: (prev: (todoList: TodoData[]) => TodoData[]) => void;
  addTodo: (formData: FormData) => void;
  updateTodo: (todo: TodoData) => void;
  filteredTodoList: TodoData[];
  filterType: TodoListFilterType;
  setFilterType: (type: TodoListFilterType) => void;
}

export const TodoListContext = createContext<TodoListContextData | undefined>(
  undefined
);

interface TodoListContextProviderProps {
  children: ReactNode;
}

export const TodoListContextProvider = ({
  children,
}: TodoListContextProviderProps) => {
  const [todoList, setTodoList] = useState<TodoData[]>(() => {
    const todoList = localStorage.getItem("todoList");
    return todoList ? JSON.parse(todoList) : [];
  });

  const [filterType, setFilterType] = useState<TodoListFilterType>("all");

  const [filteredTodoList, setFilteredTodoList] =
    useState<TodoData[]>(todoList);

  const [filterFunction, setFilterFunction] = useState<TodoListFilterFunction>(
    () => todoListFilterFunctions[filterType]
  );

  // Setting the filtering function when the type changes
  useEffect(() => {
    setFilterFunction(() => todoListFilterFunctions[filterType]);
  }, [filterType]);

  // Setting the filtered todo list when the filtering function or todo list changes
  useEffect(() => {
    setFilteredTodoList(todoList.filter(filterFunction));
  }, [todoList, filterFunction]);

  // Saving the todo list to local storage on every change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo: TodoListContextData["addTodo"] = (formData) => {
    const title: string = String(formData.get("title"));
    if (title.trim()) {
      setTodoList((todoList) => [...todoList, { title, id: nanoid() }]);
    }
  };

  const updateTodo: TodoListContextData["updateTodo"] = (todo) => {
    setTodoList((todoList) =>
      todoList.map((t) => (t.id === todo.id ? todo : t))
    );
  };

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
        addTodo,
        updateTodo,
        filteredTodoList,
        filterType,
        setFilterType,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
