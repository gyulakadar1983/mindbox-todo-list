import { isTodoListFilterType, TodoListFilterType } from "@/features/todo-list";
import { useTodoListContext } from "@/features/todo-list";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

const TodoFilter = () => {
  const { filterType, setFilterType } = useTodoListContext();

  const setTodoFilter = (formData: FormData) => {
    const filterType = String(formData.get("filter-type"));

    if (isTodoListFilterType(filterType)) {
      setFilterType(filterType);
    } else {
      throw new Error("Filter type must be of type TodoFilterProps");
    }
  };

  const filterTypes: TodoListFilterType[] = ["all", "active", "completed"];

  return (
    <form
      action={setTodoFilter}
      aria-label="Filter the list"
      className="flex gap-1"
    >
      {filterTypes.map((type, index) => (
        <Button
          name="filter-type"
          value={type}
          size={"sm"}
          variant={"outline"}
          key={index}
          type="submit"
          className={cn(
            "capitalize border-indigo-200",
            filterType === type &&
              "bg-indigo-100 text-indigo-700 border-indigo-300"
          )}
        >
          {type.charAt(0).toUpperCase().concat(type.slice(1))}
        </Button>
      ))}
    </form>
  );
};
export default TodoFilter;
