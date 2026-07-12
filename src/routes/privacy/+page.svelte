<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<PageHead title="Privacy Policy" description="Privacy Policy for Rookie's Lab" path="/privacy" />

<main>
  <Navbar />
  <div class="measure py-12 min-h-first-fold">
    <h1 class="page-title">Privacy Policy</h1>
    <p class="page-body">Coming soon...</p>
  </div>
  <Footer />
</main>

<style>
  .page-title {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: var(--foreground);
    margin: 0 0 2rem 0;
    line-height: 1.2;
  }

  .page-body {
    color: var(--paragraph);
  }
</style>
