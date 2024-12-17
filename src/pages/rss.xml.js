import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('projects');
	return rss({
		title: "Portfolio Eero Prittinen",
		description: "Portfolio Eero Prittinen",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/projects/${post.id}/`,
		})),
	});
}
