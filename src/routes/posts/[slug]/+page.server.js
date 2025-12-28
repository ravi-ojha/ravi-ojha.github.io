import { posts } from '$lib/data/posts'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const { slug } = params

  // Find post by slug
  const post = posts.find((post) => slug === post.slug)

  if (!post) {
    throw error(404, 'Post not found')
  }

  return {
    post
  }
}

export function entries() {
  return posts.map((post) => ({
    slug: post.slug
  }))
}

