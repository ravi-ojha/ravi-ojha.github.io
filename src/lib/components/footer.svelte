<script lang="ts">
  import ThemeSwitch from '$lib/components/ui/theme-switch.svelte'
</script>

<footer class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
  <div class="py-4 md:py-4 flex flex-wrap justify-between gap-4">
    <div class="flex flex-row gap-8 items-center">
      <div class="mt-1">
        <ThemeSwitch />
      </div>
    </div>
    <div class="flex flex-row gap-2 mt-2 items-center">
      <a href="/contact" class="link-footer-1"> Contact </a>
      <span class="text-slate-500 dark:text-slate-500"> · </span>
      <a href="/privacy" class="link-footer-1"> Privacy </a>
    </div>
  </div>
</footer>
