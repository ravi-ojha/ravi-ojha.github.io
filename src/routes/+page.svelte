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

<PageHead path="/" />

<main>
  <Navbar />
  <div class="posts-container measure min-h-first-fold">
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
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  .year-section {
    margin-bottom: 4rem;
  }

  .year-heading {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--muted);
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
  }

  .posts-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .post-item {
    border-top: 1px solid var(--border);
  }

  .post-item:last-child {
    border-bottom: 1px solid var(--border);
  }

  .post-link {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 1.35rem 0;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .post-link:hover {
    opacity: 0.65;
  }

  .post-title {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--foreground);
    line-height: 1.4;
  }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--subtle);
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: 0.02em;
  }

  .month {
    margin-right: 0.5rem;
  }
</style>
