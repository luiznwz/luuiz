import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects() {
  const projects = await client.fetch(
    `*[_type == "project"] | order(publishedAt desc) {
      title,
      slug,
      description,
      projectUrl,
      imageUrl,
      technologies,
      publishedAt
    }`
  );
  return projects;
}

export async function getPosts() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      tags,
      publishedAt
    }`
  );
  return posts;
}