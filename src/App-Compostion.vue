<!-- 
 This is an example of the Composition API in Vue.js.
 It demonstrates reactive references, conditional rendering,
 list rendering, and event handling. 
 This version also includes a form to add new tasks.
 Tasks can be deleted individually.
-->

<script setup>
import { ref } from "vue";

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

  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>

<style></style>
