<template>
  <article class="md:grid md:grid-cols-4 md:items-baseline">
    <div class="group relative flex flex-col items-start md:col-span-3">
        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </h2>
        <p class="relative z-10 mt-2 text-sm text-zinc-600 text:dark-zinc-400">{{ article.description}}</p>

        <!--      Eyebrow  -->
        <!--      Description-->
        <!--      CallToAction-->

    </div>


<!--    <NuxtLink :to="article._path" class="mt-4 block">-->
<!--      <span class="text-sm text-gray-500">-->
<!--        {{ formatDate(article.createdAt) }}-->
<!--      </span>-->

<!--      <h2 class="text-xl font-bold text-gray-800">-->
<!--        {{ article.title }}-->
<!--      </h2>-->

<!--      <p class="mt-3 text-base text-gray-500">{{ article.description }}</p>-->



<!--      <div class="pt-3">-->
<!--        <TagChips :tags="article.tags"></TagChips>-->
<!--      </div>-->


<!--    </NuxtLink>-->
  </article>

</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps<{
  article: ParsedContent;
}>();

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString(undefined, {
    timeZone: "UTC",
  });
}
</script>
