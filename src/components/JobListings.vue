<script setup>
import JobListing from "./JobListing.vue";
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { useVirtualList, useInfiniteScroll } from "@vueuse/core";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const state = reactive({
  jobs: [],
  isLoading: true,
});

const props = defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const { list, containerProps, wrapperProps } = useVirtualList(state.jobs, {
  itemHeight: 120,
});

// useInfiniteScroll(
//   containerProps.ref,
//   async () => {
//     if (props.limit && state.jobs.length >= props.limit) return;

//     state.isLoading = true;
//     try {
//       const res = await axios.get("/api/jobs", {
//         params: {
//           offset: state.jobs.length,
//           limit: 10,
//         },
//       });
//       state.jobs.push(...res.data);
//     } catch (error) {
//       console.error("Error fetching more jobs", error);
//     } finally {
//       state.isLoading = false;
//     }
//   },
//   {
//     distance: 200,
//   }
// );

onMounted(async () => {
  try {
    const res = await axios.get("/api/jobs");
    state.jobs.splice(0, state.jobs.length, ...res.data);
    console.log(" state.jobs", state.jobs);
  } catch (error) {
    console.error("Error fetching jobs", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Virtual Scroll Container -->
      <div
        v-else
        v-bind="containerProps"
        class="h-screen overflow-y-auto p-2 rounded"
      >
        <div v-bind="wrapperProps">
          <!-- use destructuring: each item is { index, data } -->
          <div
            v-for="({ data }, index) in list"
            :key="data?.id || index"
            class="mb-4 border border-gray-300 rounded-lg bg-white shadow"
          >
            <JobListing :job="data" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="props.showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>
