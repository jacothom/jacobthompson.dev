<template>
  <div class="inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div
        class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
      >
        <div class="relative mx-auto max-w-7xl lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar";

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Jacob Thompson` : `Jacob Thompson`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "bg-white dark:bg-black",
  },
});
</script>
