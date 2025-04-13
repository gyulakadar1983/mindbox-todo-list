import { TodoListContextProvider } from "@/features/todo-list";
import { TodoData } from "@/features/todo-list";
import { render, screen } from "@testing-library/react";
import { TodoList } from "@/features/todo-list";
import userEvent from "@testing-library/user-event";
import { TodoListControls } from "@/features/todo-list";

describe("TodoControls test", () => {
  it("Should render a button to clear all todos", () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoListControls />
        </TodoListContextProvider>
      </>
    );

    expect(screen.getByText("Clear completed")).toBeInTheDocument();
  });

  it("Should clear completed todos when the button is clicked", async () => {
    localStorage.setItem(
      "todoList",
      JSON.stringify([
        { id: "1", title: "Todo 1", state: false },
        { id: "2", title: "Todo 2", state: true },
        { id: "3", title: "Todo 3", state: false },
      ] satisfies TodoData[])
    );

    render(
      <>
        <TodoListContextProvider>
          <TodoList />
          <TodoListControls />
        </TodoListContextProvider>
      </>
    );

    expect(screen.getAllByText(/Todo/)).toHaveLength(3);

    const clearCompletedButton = screen.getByText("Clear completed");
    await userEvent.click(clearCompletedButton);

    expect(screen.getAllByText(/Todo/)).toHaveLength(2);
  });
});
