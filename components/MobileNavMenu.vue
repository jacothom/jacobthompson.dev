<template>
  <DisclosurePanel class="sm:hidden" v-slot="{ close }">
    <div class="space-y-1 pt-2 pb-3">
      <DisclosureButton as="div" v-for="link in links">
        <NuxtLink
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          :to="link.to"
          @click="close()"
          >{{ link.displayText }}</NuxtLink
        >
      </DisclosureButton>
    </div>
  </DisclosurePanel>
</template>

<script setup lang="ts">
import { DisclosureButton, DisclosurePanel } from "@headlessui/vue";

defineProps<{
  links: Array<Link>;
}>();
</script>

<style scoped>
.router-link-active {
  @apply border-emerald-500 bg-emerald-50 text-emerald-700;
}
</style>
