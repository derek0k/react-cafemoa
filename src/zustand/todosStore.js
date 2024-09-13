import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

const useTodoStore = create(
  persist(
    immer(set => ({
      todos: [],
      addTodo: text => {
        return set(state => {
          state.todos.push({ id: Date.now(), text, completed: false });
          return state;
        });
      },
      toggleTodo: id =>
        set(state => {
          const todo = state.todos.find(todo => todo.id === id);
          if (todo) {
            todo.completed = !todo.completed;
          }
          return state;
        }),
    })),
    { name: 'todos-store', getStorage: () => sessionStorage },
  ),
);

export default useTodoStore;
