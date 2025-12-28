<script lang="ts">
  import '@fontsource-variable/inter'
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
