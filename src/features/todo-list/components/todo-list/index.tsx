import { TodoItem } from "@/features/todo-list";
import { useTodoListContext } from "@/features/todo-list";

const TodoList = () => {
  const { filteredTodoList } = useTodoListContext();
  return (
    <>
      <section className="space-y-2">
        {filteredTodoList.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </section>
    </>
  );
};
export default TodoList;
