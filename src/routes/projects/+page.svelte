<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<PageHead title="Projects" description="Projects by Ravi Ojha" />

<main>
  <Navbar />
  <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-first-fold">
    <h1 class="page-title">Projects</h1>
    <ul class="project-list">
      <li>
        <a href="/projects/idiom-of-the-day" class="project-link">
          Idiom of the Day
        </a>
        <p class="project-desc">A Chrome extension to learn one idiom every day</p>
      </li>
    </ul>
  </div>
  <Footer />
</main>

<style>
  .page-title {
    font-size: 2.25rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: var(--color-arctic-900);
    margin: 0 0 2rem 0;
    line-height: 1.2;
  }

  :global(.dark) .page-title {
    color: var(--color-arctic-100);
  }

  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .project-link {
    font-size: 1.2rem;
    color: var(--color-arctic-950);
    text-decoration: underline;
    text-decoration-color: color-mix(in srgb, var(--color-accent) 60%, transparent);
    text-underline-offset: 4px;
  }

  :global(.dark) .project-link {
    color: var(--color-arctic-50);
  }

  .project-link:hover {
    text-decoration-color: var(--color-accent);
  }

  .project-desc {
    margin: 0.35rem 0 0 0;
    color: var(--color-arctic-600);
  }

  :global(.dark) .project-desc {
    color: var(--color-arctic-400);
  }
</style>
