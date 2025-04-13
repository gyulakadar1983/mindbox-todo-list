import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {
  TodoItem,
  TodoList,
  TodoListContextProvider,
} from "@/features/todo-list";
import { TodoData } from "@/features/todo-list";

describe("TodoItem test", () => {
  it("Should render a todo with title", () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoItem id="1" title="Todo" state={false} />
        </TodoListContextProvider>
      </>
    );

    const todoItemEm = screen.getByText("Todo");
    expect(todoItemEm).toBeInTheDocument();
  });

  it("Should render a finished todo", () => {
    render(
      <>
        <TodoListContextProvider>
          <TodoItem id="1" title="Todo" state={true} />
        </TodoListContextProvider>
      </>
    );

    const todoHeadingEm = screen.getByRole("heading");
    expect(todoHeadingEm).toHaveClass("line-through");
  });

  it("Should update a todo state on and off on button click", async () => {
    localStorage.setItem(
      "todoList",
      JSON.stringify([
        { id: "1", title: "Todo", state: false } satisfies TodoData,
      ])
    );

    render(
      <>
        <TodoListContextProvider>
          <TodoList />
        </TodoListContextProvider>
      </>
    );

    const todoHeadingEm = screen.getByText("Todo");
    expect(todoHeadingEm).not.toHaveClass("line-through");
    const todoItemButtonEm = screen.getByRole("button");

    /** Toggling the state ON */
    await userEvent.click(todoItemButtonEm);
    expect(todoHeadingEm).toHaveClass("line-through");

    /** Toggling the state OFF */
    await userEvent.click(todoItemButtonEm);
    expect(todoHeadingEm).not.toHaveClass("line-through");
  });
});
