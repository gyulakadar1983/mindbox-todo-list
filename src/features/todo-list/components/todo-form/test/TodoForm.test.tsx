import { render, screen } from "@testing-library/react";
import {
  TodoForm,
  TodoList,
  TodoListContextProvider,
} from "@/features/todo-list";
import userEvent from "@testing-library/user-event";

describe("TodoForm test", () => {
  it("Should render an input", () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoForm />
        </TodoListContextProvider>
      </>
    );

    const input = screen.getByRole("textbox", {
      name: "Todo title",
    });
    expect(input).toBeInTheDocument();
  });

  it("Should add a todo on form submit", async () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoForm />
          <TodoList />
        </TodoListContextProvider>
      </>
    );

    // React 19 clears input after submit if we set function as action, so not checking for clearinb here.
    const input = screen.getByRole("textbox", {
      name: "Todo title",
    });

    const addButton = screen.getByRole("button", {
      name: "Add",
    });

    await userEvent.type(input, "New Todo");
    await userEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });
});
