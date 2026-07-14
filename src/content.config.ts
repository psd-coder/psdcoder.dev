import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, getCollection } from "astro:content";

const articles = defineCollection({
  loader: file("./src/content/articles.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    source: z.string(),
    date: z.coerce.date(),
    href: z.url(),
  }),
});

const projects = defineCollection({
  loader: file("./src/content/projects.json"),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    role: z.string().optional(),
    tags: z.array(z.string()),
    href: z.url(),
    logo: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { articles, projects };

export async function getProjects() {
  const items = await getCollection("projects");
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getArticles() {
  const items = await getCollection("articles");
  return items.sort((a, b) => Number(b.data.date) - Number(a.data.date));
}
