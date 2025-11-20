<!-- 
This is an example of the Options API in Vue.js.
 It demonstrates data properties, conditional rendering,
 list rendering, attribute binding, and event handling. 
-->

<script>
export default {
  data() {
    return {
      name: "Themba Mtshelwane",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task 3"],
      link: "https://www.example.com",
    };
  },

  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pendding";
      } else if (this.status === "pendding") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h2>Task list</h2>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>

  <!-- <a v-bind:href="link">Click for example.com</a> -->
  <a :href="link">Click for example.com</a>
<br>
  <button v-on:click="toggleStatus">Change status</button>
  <button @click="toggleStatus">Change status</button>
</template>

<style></style>
