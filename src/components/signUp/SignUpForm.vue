<template>
  <section class="sign-up-form elevation-5">
    <v-form v-model="form" @submit.prevent="">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              type="text"
              v-model="name"
              :rules="[rules.required]"
              density="compact"
              label="Name"
              placeholder="Your name"
              prepend-inner-icon="mdi-account"
              clearable
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              type="email"
              v-model="email"
              :rules="[rules.required]"
              density="compact"
              label="Email"
              placeholder="Your email"
              prepend-inner-icon="mdi-email-outline"
              clearable
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              type="password"
              v-model="password"
              :rules="[rules.required]"
              density="compact"
              label="Password"
              placeholder="Type a strong password"
              hint="Your password must contain..."
              prepend-inner-icon="mdi-lock"
              clearable
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              type="password"
              v-model="passwordConfirmation"
              :rules="[rules.required]"
              density="compact"
              label="Password Confirmation"
              placeholder="Type the same password"
              prepend-inner-icon="mdi-lock-alert"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              :disabled="!form"
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"
            >
              Sign Up
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import rules from '@/composables/helpers/fieldValidation';

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const form = ref(false);
</script>

<style scoped>
.sign-up-form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  background: #635985;
  border-radius: 5px;
}

.sign-up-form form {
  width: 100%;
}
</style>
