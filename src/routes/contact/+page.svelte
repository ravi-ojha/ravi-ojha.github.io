<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<PageHead title="Contact" description="Contact Ravi Ojha" />

<main>
  <Navbar />
  <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-first-fold">
    <h1 class="page-title">Contact</h1>
    <p class="page-body">Coming soon...</p>
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

  .page-body {
    color: var(--color-arctic-700);
  }

  :global(.dark) .page-body {
    color: var(--color-arctic-300);
  }
</style>
