<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'

  interface PostData {
    groupedPosts: {
      year: number
      posts: { title: string; slug: string; date: Date }[]
    }[]
  }

  let { data }: { data: PostData } = $props()

  function formatMonth(date: Date) {
    return new Date(date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  }

  function formatDay(date: Date) {
    return new Date(date).getDate().toString().padStart(2, '0')
  }
</script>

<PageHead />

<main>
  <Navbar />
  <div class="posts-container max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 min-h-first-fold">
    {#each data.groupedPosts as group}
      <section class="year-section">
        <h2 class="year-heading">{group.year}</h2>
        <ul class="posts-list">
          {#each group.posts as post}
            <li class="post-item">
              <a href="/posts/{post.slug}" class="post-link">
                <span class="post-title">{post.title}</span>
                <span class="post-date">
                  <span class="month">{formatMonth(post.date)}</span>
                  <span class="day">{formatDay(post.date)}</span>
                </span>
              </a>
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
  <Footer />
</main>

<style>
  .posts-container {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .year-section {
    margin-bottom: 2.5rem;
  }

  .year-heading {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-arctic-600);
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
  }

  :global(.dark) .year-heading {
    color: var(--color-arctic-400);
  }

  .posts-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .post-item {
    border-top: 1px solid var(--color-arctic-200);
  }

  :global(.dark) .post-item {
    border-top-color: var(--color-arctic-800);
  }

  .post-item:last-child {
    border-bottom: 1px solid var(--color-arctic-200);
  }

  :global(.dark) .post-item:last-child {
    border-bottom-color: var(--color-arctic-800);
  }

  .post-link {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 1.25rem 0;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .post-link:hover {
    opacity: 0.7;
  }

  .post-title {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--color-arctic-900);
    line-height: 1.4;
  }

  :global(.dark) .post-title {
    color: var(--color-arctic-200);
  }

  .post-date {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
    font-size: 0.85rem;
    color: var(--color-arctic-400);
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: 0.02em;
  }

  :global(.dark) .post-date {
    color: var(--color-arctic-600);
  }

  .month {
    margin-right: 0.5rem;
  }
</style>
