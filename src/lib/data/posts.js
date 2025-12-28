import { browser } from '$app/environment'
import { parse } from 'node-html-parser'
import { render } from 'svelte/server'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`posts can only be imported server-side`)
}

// Get all posts and add metadata
export const posts = Object.entries(import.meta.glob('/src/posts/**/*.md', { eager: true }))
  .map(([filepath, post]) => {
    const renderPost = render(post.default, { props: {} })
    const html = parse(renderPost.html)
    const preview = post.metadata.preview ? parse(post.metadata.preview) : html.querySelector('p')

    const filename = filepath
      .replace(/(\/index)?\.md/, '')
      .split('/')
      .pop()

    // Remove date prefix (YYYY-MM-DD-) from slug if present
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '')

    return {
      ...post.metadata,

      // filename with date prefix (for importing the component)
      filename,

      // clean slug without date prefix (for URLs)
      slug,

      // format date as yyyy-MM-dd
      date: post.metadata.date
        ? new Date(post.metadata.date)
        : undefined,

      preview: {
        html: preview.toString(),
        // text-only preview (i.e no html elements), used for SEO
        text: preview.structuredText ?? preview.toString()
      },

    }
  })
  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous post
  .map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1],
    previous: allPosts[index + 1]
  }))
