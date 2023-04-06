<template>
  <div class="flex mt-9 w-[100%] flex-col items-center">
      <ThemeSwitch class="absolute top-5 right-5"/>
      <div class="logo-container" @click="$router.push('/dashboard')">
        <img src="~/static/assets/svg/ai.svg" alt="ai-maker logo" class="main-logo"/>
      </div>
      <h1 class="text-4xl mt-5 font-bold  font-serif">
      AI Maker
    </h1>
  </div>
</template>

<script>
import ThemeSwitch from '../components/ThemeSwitch.vue';

export default {
    name: "IndexPage"
}
</script>
