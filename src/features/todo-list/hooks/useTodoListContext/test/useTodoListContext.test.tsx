import { TodoList } from "@/features/todo-list";
import { TodoListContextProvider } from "@/features/todo-list";
import { TodoData } from "@/features/todo-list";
import { render, screen } from "@testing-library/react";

describe("useTodoListContext test", () => {
  it("Should get todo list from context", () => {
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

  it("Should throw an error if component which relies on context used without it", () => {
    expect(() =>
      render(
        <>
          <TodoList />
        </>
      )
    ).toThrow();
  });
});
