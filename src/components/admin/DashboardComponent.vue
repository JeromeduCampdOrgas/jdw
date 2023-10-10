<script setup>
import { useUserStore } from "../../stores/users";
const userStore = useUserStore();
</script>
<template>
  <div class="dashboard-main">
    <h1>Test dashboard</h1>
    <p>{{ userStore.userRole }}</p>
  </div>
</template>
<style lang="scss">
.dashboard-main {
  margin-top: 80px;
}
</style>
