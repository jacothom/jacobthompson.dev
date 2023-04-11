<template>
  <div class="mt-16 sm:mt-32">
    <header class="max-w-2xl">
      <h1
        class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
      >
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        {{ subtitle}}
      </p>
    </header>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title:{
    type: String,
    required: true
  },
  subtitle: String,
});
</script>
