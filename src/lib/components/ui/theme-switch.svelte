<script>
  import { setLightTheme, setDarkTheme, theme } from '$lib/stores/theme'

  import SunDim from 'phosphor-svelte/lib/SunDim'
  import MoonStars from 'phosphor-svelte/lib/MoonStars'
</script>

<div class="theme-switch">
  <div class="theme-thumb" class:dark-pos={$theme === 'dark'}></div>
  <button class="toggle-button" type="button" aria-label="Light theme" onclick={() => setLightTheme()}>
    <SunDim size="18px" />
  </button>
  <button class="toggle-button" type="button" aria-label="Dark theme" onclick={() => setDarkTheme()}>
    <MoonStars size="18px" />
  </button>
</div>

<style>
  .theme-switch {
    position: relative;
    display: flex;
    width: fit-content;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--muted);
    transition: border-color 0.3s ease, color 0.3s ease;
  }

  .theme-thumb {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background: var(--code-bg);
    border-radius: calc(var(--radius-md) - 1px);
    transition: transform 0.35s ease, background-color 0.3s ease;
    z-index: 0;
  }

  .theme-thumb.dark-pos {
    transform: translateX(100%);
  }

  .toggle-button {
    position: relative;
    z-index: 1;
    cursor: pointer;
    padding: 0.35rem;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle-button:hover {
    color: var(--foreground);
  }
</style>
