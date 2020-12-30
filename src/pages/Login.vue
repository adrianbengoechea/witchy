<template>
  <main class="page login pt-3" role="main">

    <section class="block-card mt-5">
      <Title class="text-left pb-3 pt-3">
        → Login
      </Title>
      <LoginForm />
    </section>

  </main>
</template>

<script>
import LoginForm from "../components/forms/FormLogin.vue";
import Title from "../components/layout/Title.vue";

export default {
  components: {
    LoginForm, Title
  }
}
</script>
