<template>
  <div v-if="article">
    <Head>
      <Title>{{ article.title }}</Title>
      <Meta name="description" :content="article.description" />
    </Head>

    <div>
      <article class="mt-16 sm:mt-32">
        <header class="flex flex-col">
          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          >
            {{ article.title }}
          </h1>
          <time
            :datetime="article.createdAt"
            class="order-first flex items-center text-base text-zinc-400 dark:text-gray-500"
          >
            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            <span class="ml-3">{{ formatDate(article.createdAt) }}</span>
          </time>
          <p class="my-6 text-base text-zinc-600 dark:text-zinc-300">
            {{ article.description }}
          </p>
        </header>

        <ContentRenderer
          class="prose dark:prose-invert"
          :value="article"
        ></ContentRenderer>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();

const { data: article } = await useAsyncData(`content-${path}`, () =>
  queryContent().where({ _path: path }).findOne()
);

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
</script>

<style lang="postcss">
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}

.prose h1 {
  @apply font-bold;
}
</style>
