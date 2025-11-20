<!-- 
Lifecycle Hooks/Methods
In Vue 3 with the Composition API, lifecycle hooks are used to perform 
actions at specific stages of a component's lifecycle. 
Here are some commonly used lifecycle hooks:
- onMounted: Called after the component is mounted to the DOM.
- onUpdated: Called after the component's reactive data has changed and the DOM has been updated
- onUnmounted: Called just before the component is unmounted from the DOM.
- onBeforeMount: Called right before the component is mounted to the DOM, useful for fetching data.
- onBeforeUpdate: Called right before the component's reactive data changes and the DOM is updated.
- onBeforeUnmount: Called right before the component is unmounted from the DOM, useful for cleanup tasks.
These hooks can be imported from 'vue' and used within the <script setup> block of a Vue component.

-->

<script setup>
import { ref, onMounted } from "vue";

const name = ref("Themba Mtshelwane");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pendding";
  } else if (status.value === "pendding") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = () => {
  if (newTask.value.trim() != "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// Fetching data when the component is mounted
onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((item) => item.title);
  } catch (error) {
    console.log("Error Fetching tasks");
  }
});

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h2>Task list</h2>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span> {{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>

  <button @click="toggleStatus">Change status</button>
</template>

<style></style>
