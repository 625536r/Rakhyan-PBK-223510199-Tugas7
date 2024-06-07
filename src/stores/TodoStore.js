// stores/TodoStore.js
import { defineStore } from 'pinia'

let id = 0

export const useTodoStore = defineStore('TodoStore', {
  state: () => ({
    todos: [
      { id: id++, text: 'Belajar HTML', done: false },
      { id: id++, text: 'Belajar JavaScript', done: false },
      { id: id++, text: 'Belajar Vue', done: false }
    ],
    hideCompleted: false,
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ id: id++, text, done: false })
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
    toggleHideCompleted() {
      this.hideCompleted = !this.hideCompleted
    }
  },
  getters: {
    filteredTodos(state) {
      return state.hideCompleted
        ? state.todos.filter((t) => !t.done)
        : state.todos
    },
    unfinishedTodoCount(state) {
      return state.todos.filter(todo => !todo.done).length
    }
  }
})
