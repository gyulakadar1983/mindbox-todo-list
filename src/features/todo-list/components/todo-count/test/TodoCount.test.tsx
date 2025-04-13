import { TodoListContextProvider } from "@/features/todo-list/contexts/todoListContext";
import { TodoList } from "@/features/todo-list";
import { TodoCount } from "@/features/todo-list";
import { render, screen } from "@testing-library/react";
import { TodoData } from "@/features/todo-list";

describe("TodoCount test", () => {
  it("Should render a correct todo count for 0 out of 0 todos", () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoList />
          <TodoCount />
        </TodoListContextProvider>
      </>
    );

    const completedCount = screen
      .getByLabelText("List statistics")
      .querySelector(":first-child");
    expect(completedCount).toHaveTextContent("0");

    const allCount = screen
      .getByLabelText("List statistics")
      .querySelector(":nth-child(3)");
    expect(allCount).toHaveTextContent("0");
  });

  it("Should render a correct todo count for 0 out of n todos", () => {
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
          <TodoCount />
        </TodoListContextProvider>
      </>
    );

    const completedCount = screen
      .getByLabelText("List statistics")
      .querySelector(":first-child");
    expect(completedCount).toHaveTextContent("0");

    const allCount = screen
      .getByLabelText("List statistics")
      .querySelector(":nth-child(3)");
    expect(allCount).toHaveTextContent("3");
  });

  it("Should render a correct todo count for n out of n todos", () => {
    localStorage.setItem(
      "todoList",
      JSON.stringify([
        { id: "1", title: "Todo 1", state: true },
        { id: "2", title: "Todo 2", state: true },
        { id: "3", title: "Todo 3", state: true },
      ] satisfies TodoData[])
    );

    render(
      <>
        <TodoListContextProvider>
          <TodoList />
          <TodoCount />
        </TodoListContextProvider>
      </>
    );

    const completedCount = screen
      .getByLabelText("List statistics")
      .querySelector(":first-child");
    expect(completedCount).toHaveTextContent("3");

    const allCount = screen
      .getByLabelText("List statistics")
      .querySelector(":nth-child(3)");
    expect(allCount).toHaveTextContent("3");
  });
});
