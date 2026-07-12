<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
  import { toLocalDate } from '$lib/common/time-utils'

  let { data } = $props()

  const publishedAt = $derived(
    data.post.date instanceof Date ? data.post.date.toISOString() : undefined
  )
  const description = $derived(
    data.post.description || data.post.preview?.text || ''
  )
</script>

<PageHead
  title={data.post.title}
  {description}
  path={`/posts/${data.post.slug}`}
  ogImage={data.post.og_image}
  isArticle={true}
  article={{
    slug: data.post.slug,
    title: data.post.title,
    description,
    publishedAt,
    modifiedAt: publishedAt,
    tags: data.post.tags || [],
    ogImage: data.post.og_image
  }}
/>

<main>
  <Navbar />
  <article class="measure py-12 min-h-first-fold">
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
    margin-bottom: 3rem;
  }

  .post-header h1 {
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: var(--foreground);
    margin: 0 0 0.85rem 0;
    line-height: 1.2;
  }

  .post-header time {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--muted);
    letter-spacing: 0.02em;
  }

  .post-nav {
    margin-top: 5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .nav-link {
    color: var(--muted);
    text-decoration: none;
    font-size: 1.05rem;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: var(--accent);
  }
</style>
