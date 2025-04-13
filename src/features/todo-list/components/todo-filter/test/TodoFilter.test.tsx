import { render, screen } from "@testing-library/react";
import { TodoListContextProvider } from "@/features/todo-list";
import { TodoData, TodoListFilterType } from "@/features/todo-list";
import { TodoFilter } from "@/features/todo-list";
import { TodoList } from "@/features/todo-list";
import userEvent from "@testing-library/user-event";

describe("TodoFilter test", () => {
  it("Should render buttons per each filter type", () => {
    const filterTypes: TodoListFilterType[] = ["all", "active", "completed"];

    render(
      <>
        <TodoListContextProvider>
          <TodoFilter />
        </TodoListContextProvider>
      </>
    );

    filterTypes.forEach((type) => {
      expect(screen.getByText(new RegExp(`${type}`, "i"))).toBeInTheDocument();
    });
  });

  it('Should render all todos if the filter is "all"', async () => {
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
          <TodoFilter />
        </TodoListContextProvider>
      </>
    );

    const filterCompletedButton = screen.getByText("All");
    await userEvent.click(filterCompletedButton);

    const todos = screen.getAllByText(/Todo/);
    expect(todos).toHaveLength(3);
  });

  it('Should render only completed todos if the filter is "completed"', async () => {
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
          <TodoFilter />
        </TodoListContextProvider>
      </>
    );

    const filterCompletedButton = screen.getByText("Completed");
    await userEvent.click(filterCompletedButton);

    const todos = screen.getAllByText(/Todo/);
    expect(todos).toHaveLength(1);
  });

  it('Should render only active todos if the filter is "active"', async () => {
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
          <TodoFilter />
        </TodoListContextProvider>
      </>
    );

    const filterCompletedButton = screen.getByText("Active");
    await userEvent.click(filterCompletedButton);

    const todos = screen.getAllByText(/Todo/);
    expect(todos).toHaveLength(2);
  });
});
