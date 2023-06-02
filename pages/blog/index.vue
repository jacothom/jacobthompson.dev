<template>
  <div>
    <Title>Blog</Title>
    <BasicLayout
      title="Blog"
      subtitle="A place for me to document my thoughts and learnings, and hopefully provide some value back to the software community."
    >
      <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="flex max-w-3xl flex-col space-y-16 border-t border-zinc-200 dark:border-zinc-800">
          <ArticleCard
              v-for="article in articles"
              :key="article._path"
              :article="article"
              class="flex flex-col overflow-hidden rounded-lg p-6 shadow-lg"
          >
          </ArticleCard>
        </div>night
      </div>

    </BasicLayout>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData("blog", () =>
  queryContent("blog")
    .only(["title", "description", "_path", "createdAt", "tags"])
    .sort({ createdAt: -1 })
    .find()
);
</script>
