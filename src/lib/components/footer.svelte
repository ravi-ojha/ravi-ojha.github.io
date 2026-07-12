<script lang="ts">
  import ThemeSwitch from '$lib/components/ui/theme-switch.svelte'
</script>

<footer class="measure">
  <div class="footer-inner">
    <div class="mt-1">
      <ThemeSwitch />
    </div>
    <div class="flex flex-row gap-2 items-center">
      <a href="/contact" class="link-footer-1">Contact</a>
      <span class="footer-sep">·</span>
      <a href="/privacy" class="link-footer-1">Privacy</a>
    </div>
  </div>
</footer>

<style>
  .footer-inner {
    padding-top: 2rem;
    padding-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
  }

  .footer-sep {
    color: var(--subtle);
  }
</style>
