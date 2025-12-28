<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<PageHead title="Projects" description="Projects by Ravi Ojha" />

<main>
  <Navbar />
  <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-first-fold">
    <h1 class="text-4xl text-slate-900 dark:text-white font-bold mb-8">Projects</h1>
    <ul class="space-y-4">
      <li>
        <a href="/projects/idiom-of-the-day" class="text-lg text-blue-600 dark:text-blue-400 hover:underline">
          Idiom of the Day
        </a>
        <p class="text-slate-600 dark:text-slate-400">A Chrome extension to learn one idiom every day</p>
      </li>
    </ul>
  </div>
  <Footer />
</main>

