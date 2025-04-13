export interface TodoData {
  readonly id: string;
  readonly title: string;
  state?: boolean;
}

export type TodoListFilterType = "all" | "active" | "completed";

export const isTodoListFilterType = (
  filterType: string
): filterType is TodoListFilterType => {
  return ["all", "active", "completed"].includes(filterType);
};
