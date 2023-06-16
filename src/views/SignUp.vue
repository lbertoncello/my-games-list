<template>
  <article class="sign-up">
    <SignUpTitle />
    <SignUpForm />
  </article>
</template>

<script setup>
import SignUpTitle from '@/components/signUp/SignUpTitle.vue';
import SignUpForm from '@/components/signUp/SignUpForm.vue';
</script>

<style scoped>
.sign-up {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 95vw;
  margin: auto;
}

.sign-up > * {
  margin: 1rem auto 0;
}

/* SM breakpoint */
@media only screen and (min-width: 600px) {
  .sign-up {
    width: 75vw;
  }
}

/* MD breakpoint */
@media only screen and (min-width: 960px) {
  .sign-up {
    width: 40vw;
  }

  .result-list {
    justify-content: space-between;
  }

  .result-list li {
    max-width: 49%;
    min-width: 0;
  }
}

/* LG breakpoint */
@media only screen and (min-width: 1280px) {
  .sign-up {
    width: 30vw;
  }
}

/* XL breakpoint */
@media only screen and (min-width: 1920px) {
  .sign-up {
    width: 25vw;
  }
}

/* XXL breakpoint */
@media only screen and (min-width: 2560px) {
  .sign-up {
    width: 15vw;
  }
}
</style>
