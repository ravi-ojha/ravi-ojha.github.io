<script>
  import { setLightTheme, setDarkTheme, theme } from '$lib/stores/theme'

  import SunDim from 'phosphor-svelte/lib/SunDim'
  import MoonStars from 'phosphor-svelte/lib/MoonStars'
</script>

<div
  class="relative flex flex-row w-fit border border-gray-200 dark:border-gray-800 rounded-full text-gray-500 dark:text-gray-500 transition duration-500 ease-out"
>
  <div
    class="absolute left-0 w-1/2 h-full bg-gray-100/70 dark:bg-gray-900/70 rounded-full transition duration-500 ease-out"
    class:translate-x-0={$theme == 'light'}
    class:translate-x-full={$theme == 'dark'}
  ></div>
  <button class="toggle-button z-10" onclick={() => setLightTheme()}>
    <SunDim size="20px" />
  </button>
  <button class="toggle-button z-10" onclick={() => setDarkTheme()}>
    <MoonStars size="20px" />
  </button>
</div>

<style lang="postcss">
  @reference "tailwindcss";

  .toggle-button {
    cursor: pointer;
    font-size: 24px;
    @apply rounded-full p-1 bg-transparent;
  }
</style>
