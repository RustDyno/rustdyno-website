// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/dyno.svg',
			head: [
				// Add ICO favicon fallback.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/images/dyno.ico',
						sizes: '32x32',
					},
				},
			],
			title: 'RustDyno',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RustDyno' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
