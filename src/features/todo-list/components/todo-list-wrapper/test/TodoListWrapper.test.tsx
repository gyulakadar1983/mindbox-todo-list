import { TodoListContextProvider } from "@/features/todo-list";
import { render, screen } from "@testing-library/react";
import { TodoData, TodoListWrapper } from "@/features/todo-list";

describe("TodoListWrapper test", () => {
  it("Should render an empty message if the TodoList is empty", () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoListWrapper />
        </TodoListContextProvider>
      </>
    );

    expect(
      screen.getByText("No todos yet. Add one above!")
    ).toBeInTheDocument();

    [
      screen.queryByLabelText("List statistics"),
      screen.queryByLabelText("Filter the list"),
      screen.queryByLabelText("List controls"),
    ].forEach((em) => {
      expect(em).not.toBeInTheDocument();
    });
  });

  it("Should render all list-related components if the TodoList is empty", () => {
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
          <TodoListWrapper />
        </TodoListContextProvider>
      </>
    );

    [
      screen.queryByLabelText("List statistics"),
      screen.queryByLabelText("Filter the list"),
      screen.queryByLabelText("List controls"),
    ].forEach((em) => {
      expect(em).toBeInTheDocument();
    });
  });
});
