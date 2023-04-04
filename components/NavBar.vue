<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="link in links"
              :to="link.to"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >{{ link.displayText }}</NuxtLink
            >
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <MobileNavMenu :links="links"></MobileNavMenu>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import MobileNavMenu from "~/components/MobileNavMenu.vue";

const links: Link[] = [
  {
    displayText: "Home",
    to: "/",
  },
  {
    displayText: "Blog",
    to: "/blog",
  },
];
</script>

<style scoped>
.router-link-active {
  @apply border-emerald-500 text-gray-900 hover:border-emerald-500 hover:text-gray-900;
}
</style>
