import { TodoListContextProvider } from "@/features/todo-list/contexts/todoListContext";
import { TodoData } from "@/features/todo-list/types/todo.types";
import { render, screen } from "@testing-library/react";
import { TodoList } from "@/features/todo-list";

describe("TodoList test", () => {
  it("Should render a list with 3 todos", () => {
    localStorage.setItem(
      "todoList",
      JSON.stringify([
        { id: "1", title: "Todo 1", state: false },
        { id: "2", title: "Todo 2", state: false },
        { id: "3", title: "Todo 3", state: false },
      ] satisfies TodoData[])
    );

    render(
      <>
        <TodoListContextProvider>
          <TodoList />
        </TodoListContextProvider>
      </>
    );

    const todos = screen.getAllByText(/Todo/);
    expect(todos).toHaveLength(3);
  });
});
