import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	},
	extensions: ['.svelte', ...mdsvexConfig.extensions]
};

export default config;
