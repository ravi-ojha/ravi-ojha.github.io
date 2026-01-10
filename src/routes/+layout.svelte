<script lang="ts">
  // Supports weights 100-900
  // Supports weights 100-900
  import '@fontsource-variable/geist';
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import { setInitialTheme } from '$lib/stores/theme'
  import '../app.css'

  let { children } = $props();

  onMount(() => {
    if (browser) {
      setInitialTheme()
    }
  })
</script>

{@render children()}
