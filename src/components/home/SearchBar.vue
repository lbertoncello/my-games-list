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
          <v-form @submit.prevent="" >
            <v-text-field
              v-model="searchQuery"
              @keypress.enter.prevent="handleSubmit"
              :rules="[rules.required]"
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

const rules = ref({
  required: (value) => !!value || 'This field is required',
});

const emit = defineEmits(['submit']);
const searchQuery = ref('');

async function handleSubmit() {
  if (searchQuery.value && searchQuery.value.length > 0) {
    emit('submit', { searchQuery: searchQuery.value });
  }
}

</script>
