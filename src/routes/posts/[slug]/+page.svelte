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
  <article class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-first-fold">
    <header class="post-header">
      <h1>{data.post.title}</h1>
      {#if data.post.date}
        <time datetime={data.post.date.toISOString()}>
          {toLocalDate(data.post.date.toISOString())}
        </time>
      {/if}
    </header>

    <div class="prose">
      <data.component />
    </div>

    <nav class="post-nav">
      <div class="nav-links">
        {#if data.post.previous}
          <a href="/posts/{data.post.previous.slug}" class="nav-link">
            ← {data.post.previous.title}
          </a>
        {:else}
          <span></span>
        {/if}

        {#if data.post.next}
          <a href="/posts/{data.post.next.slug}" class="nav-link">
            {data.post.next.title} →
          </a>
        {/if}
      </div>
    </nav>
  </article>
  <Footer />
</main>

<style>
  .post-header {
    margin-bottom: 2.5rem;
  }

  .post-header h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-arctic-900);
    margin: 0 0 0.75rem 0;
    line-height: 1.2;
  }

  :global(.dark) .post-header h1 {
    color: var(--color-arctic-100);
  }

  .post-header time {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
    font-size: 0.875rem;
    color: var(--color-arctic-600);
    letter-spacing: 0.02em;
  }

  :global(.dark) .post-header time {
    color: var(--color-arctic-400);
  }

  .post-nav {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-arctic-200);
  }

  :global(.dark) .post-nav {
    border-top-color: var(--color-arctic-800);
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .nav-link {
    color: var(--color-accent);
    text-decoration: none;
    font-size: 0.95rem;
    transition: opacity 0.2s ease;
  }

  .nav-link:hover {
    opacity: 0.7;
  }
</style>

