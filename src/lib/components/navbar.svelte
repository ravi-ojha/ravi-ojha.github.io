<script>
  import RlLogo from '$lib/components/ui/icons/rl-logo.svelte'
</script>

<nav>
  <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex-shrink-0 flex items-center">
        <a href="/" class="flex items-center w-8">
          <RlLogo />
        </a>
      </div>
      <div class="flex items-center">
        <div class="flex space-x-4 md:space-x-8">
          <a href="/projects" class="link-navbar-1">
            Projects
          </a>
          <a href="/about" class="link-navbar-1">
            About
          </a>
      </div>
    </div>
  </div>
</nav>
