
<template>
    <div class="container">
      <h2>To-Do List</h2>
      <form @submit.prevent="addTodo" class="form-group">
        <input v-model="newTodo" required placeholder="New todo" class="todo-input"> 
        <button class="todo-btn">Add</button>
      </form>
      <ul class="todo-list">
        <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
          <VaCheckbox v-model="todo.done" class="todo-checkbox"/>
          <span :class="{ done: todo.done }" class="todo-text">{{ todo.text }}</span>
          <VaButton color="danger" @click="removeTodo(todo)" class="btn delete-btn">Danger </VaButton>
        </li>
      </ul>
      <VaButton
    text-color="#ffffff80"
     @click="toggleHideCompleted" class="toggle-btn"
  
  >
  {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </VaButton>
      <p>Total unfinished tasks: {{ unfinishedTodoCount }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useTodoStore } from '../stores/TodoStore'
  
  const store = useTodoStore()
  
  const newTodo = ref('')
  
  function addTodo() {
    if (newTodo.value.trim()) {
      store.addTodo(newTodo.value)
      newTodo.value = ''
    }
  }
  
  function removeTodo(todo) {
    store.removeTodo(todo)
  }
  
  const toggleHideCompleted = () => store.toggleHideCompleted()
  
  const filteredTodos = computed(() => store.filteredTodos)
  const hideCompleted = computed(() => store.hideCompleted)
  const unfinishedTodoCount = computed(() => store.unfinishedTodoCount)
  </script>
  
  <style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,26,26,1) 50%, rgba(0,212,255,1) 100%);
}

.container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 8px;
  background: rgb(107,47,47);
  background: radial-gradient(circle, rgba(107,47,47,1) 7%, rgba(135,94,94,1) 56%, rgba(0,212,255,1) 100%);

}

h2 {
  text-align: center;
  color: white;
}

.form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.todo-input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.todo-btn {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  font-size: 1rem;
  background-color: greenyellow;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}

.todo-checkbox {
  margin-right: 0.5rem;
}

.todo-text {
  flex: 1;
  color: #000;
}

.todo-text.done {
  text-decoration: line-through;
  color: #888;
}

.btn {
  margin-left: 0.5rem;
  cursor: pointer;
}

.delete-btn {
  color: red;
}

.toggle-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
}
</style>