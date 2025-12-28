import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', ...mdsvexConfig.extensions]
};

export default config;
