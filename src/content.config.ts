import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		type: z.string(),
		year: z.string(),
		thumb: z.string(),
		image: z.string(),
		image_alt: z.string(),
		additional_images: z.array(z.string()).optional(),
		video: z.string().optional(),
		client: z.string(),
		priority: z.number().optional(),
	}),
});

export const collections = { projects };
