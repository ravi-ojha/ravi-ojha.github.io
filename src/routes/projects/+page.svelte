<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<PageHead title="Projects" description="Projects by Ravi Ojha" path="/projects" />

<main>
  <Navbar />
  <div class="measure py-12 min-h-first-fold">
    <h1 class="page-title">Projects</h1>
    <ul class="project-list">
      <li class="project-item">
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
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: var(--foreground);
    margin: 0 0 2.5rem 0;
    line-height: 1.2;
  }

  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-item {
    padding: 1.35rem 0;
    border-top: 1px solid var(--border);
  }

  .project-item:last-child {
    border-bottom: 1px solid var(--border);
  }

  .project-link {
    font-size: 1.125rem;
    color: var(--foreground);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .project-link:hover {
    opacity: 0.65;
  }

  .project-desc {
    margin: 0.35rem 0 0 0;
    color: var(--muted);
    font-size: 1.05rem;
  }
</style>
