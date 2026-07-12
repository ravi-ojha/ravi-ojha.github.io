<script>
  import RlLogo from '$lib/components/ui/icons/rl-logo.svelte'
</script>

<nav>
  <div class="measure">
    <div class="flex justify-between h-16">
      <div class="flex-shrink-0 flex items-center">
        <a href="/" class="flex items-center w-8" aria-label="Rookie's Lab home">
          <RlLogo />
        </a>
      </div>
      <div class="flex items-center">
        <div class="flex gap-6 md:gap-8">
          <a href="/projects" class="link-navbar-1">Projects</a>
          <a href="/about" class="link-navbar-1">About</a>
        </div>
      </div>
    </div>
  </div>
</nav>
