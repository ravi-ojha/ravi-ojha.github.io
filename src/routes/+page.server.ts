import { posts } from '$lib/data/posts'

export async function load() {
  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push({
      title: post.title,
      slug: post.slug,
      date: post.date
    })
    return acc
  }, {} as Record<number, { title: string; slug: string; date: Date }[]>)

  // Convert to array sorted by year descending
  const groupedPosts = Object.entries(postsByYear)
    .map(([year, posts]) => ({
      year: parseInt(year),
      posts
    }))
    .sort((a, b) => b.year - a.year)

  return {
    groupedPosts
  }
}

