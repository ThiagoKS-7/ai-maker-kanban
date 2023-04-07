<template>
  <div class="main-wrapper">
      <ThemeSwitch class="absolute top-5 right-5"/>
      <div class="logo-container" @click="$router.push('/dashboard')">
        <img src="~/static/assets/svg/ai.svg" alt="ai-maker logo" class="main-logo"/>
      </div>
      <h1 class="title">
        AI Maker
    </h1>
  </div>
</template>

<script>

export default {
    name: "IndexPage"
}
</script>
<style>
@import '@/static/scss/global.scss';
</style>