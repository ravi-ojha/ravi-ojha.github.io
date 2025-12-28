<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
  import { toLocalDate } from '$lib/common/time-utils'

  let { data } = $props()
</script>

<PageHead title={data.post.title} description={data.post.preview?.text} />

<main>
  <Navbar />
  <article class="prose prose-lg prose-slate dark:prose-invert max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold mb-2">{data.post.title}</h1>
      {#if data.post.date}
        <time class="text-slate-500 dark:text-slate-400" datetime={data.post.date.toISOString()}>
          {toLocalDate(data.post.date.toISOString())}
        </time>
      {/if}
    </header>

    <div class="mt-8">
      <data.component />
    </div>

    <nav class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
      <div class="flex justify-between">
        {#if data.post.previous}
          <a href="/posts/{data.post.previous.slug}" class="text-blue-600 dark:text-blue-400 hover:underline">
            ← {data.post.previous.title}
          </a>
        {:else}
          <span></span>
        {/if}

        {#if data.post.next}
          <a href="/posts/{data.post.next.slug}" class="text-blue-600 dark:text-blue-400 hover:underline">
            {data.post.next.title} →
          </a>
        {/if}
      </div>
    </nav>
  </article>
  <Footer />
</main>

