<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="0"
          sm="1"
          lg="2"
          xl="3"
        >
        </v-col>
        <v-col
          cols="12"
          sm="10"
          lg="8"
          xl="6"
        >
          <v-form @submit.prevent="">
            <v-text-field
              v-model="searchQuery"
              @keypress.enter.prevent="handleSubmit"
              variant="outlined"
              prepend-inner-icon="mdi-magnify"
              clearable
              label="Search for your game"
              placeholder="Which game do you want to search?"
            />
          </v-form>
        </v-col>
        <v-col
          cols="0"
          sm="1"
          lg="2"
          xl="3"
        >
      </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits({
  // eslint-disable-next-line no-unused-vars
  setup(payload) {
    return true;
  },
});
const searchQuery = ref('');

async function handleSubmit() {
  emit('submit', { searchQuery: searchQuery.value });
}

</script>
