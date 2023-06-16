<template>
  <div class="main-title elevation-5">
    <h1 :class="{ 'text-uppercase': uppercase }">{{ text }}</h1>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  uppercase: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 100%;
  background: #7960e6;
  border-radius: 5px;
  padding: 1.3rem 0;
}
</style>
