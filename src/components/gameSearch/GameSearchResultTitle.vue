<template>
  <MainTitle :text="text" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainTitle from '@/components/general/MainTitle.vue';

const props = defineProps({
  numberOfResults: {
    type: Number,
    required: true,
  },
  serchString: {
    type: String,
    required: true,
  },
});

const text = ref('');

onMounted(() => {
  text.value = `${props.numberOfResults} results for “${props.serchString}”`;
});
</script>

<style scoped>
.game-search-result-title {
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
