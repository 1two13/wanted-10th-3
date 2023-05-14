export type Todo = {
  createdAt: String;
  id: String;
  title: String;
  updatedAt: String;
};

export type SetTodos = (value: Todo[] | ((value: Todo[]) => Todo[])) => void;

export type Todos = {
  id: String;
  title: String;
};

export type InputTodoProps = {
  setTodos: SetTodos;
};

export type TodoListProps = {
  todos: Todo[];
  setTodos: SetTodos;
};

export type TodoItemProps = {
  id: String;
  title: String;
  setTodos: SetTodos;
};

export type CreateTodo = {
  title: String;
};
