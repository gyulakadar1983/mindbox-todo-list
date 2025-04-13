import { useTodoListContext } from "@/features/todo-list";

const TodoCount = () => {
  const { todoList } = useTodoListContext();

  return (
    <div aria-label="List statistics" className="text-sm text-gray-500">
      <span className="font-medium text-indigo-600">
        {todoList.filter((todo) => todo.state).length}
      </span>
      <span> completed of </span>
      <span className="font-medium text-indigo-600">{todoList.length}</span>
      <span> tasks</span>
    </div>
  );
};
export default TodoCount;
