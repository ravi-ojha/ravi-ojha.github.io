import { posts } from '$lib/data/posts'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, AUTHOR, resolveOgImage } from '$lib/config/site'

export const prerender = true

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/posts/${post.slug}`
      const pubDate =
        post.date instanceof Date ? post.date.toUTCString() : new Date().toUTCString()
      const description = escapeXml(post.description || post.preview?.text || '')
      const title = escapeXml(post.title || 'Untitled')
      const image = resolveOgImage(post.og_image)

      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      <enclosure url="${escapeXml(image)}" type="image/jpeg" />
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <managingEditor>${escapeXml(AUTHOR.name)}</managingEditor>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  })
}
