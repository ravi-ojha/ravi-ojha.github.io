import { posts } from '$lib/data/posts'
import { SITE_URL } from '$lib/config/site'

export const prerender = true

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.7', changefreq: 'monthly' },
  { path: '/projects/idiom-of-the-day', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.4', changefreq: 'yearly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' }
]

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function urlEntry(loc: string, lastmod?: string, changefreq = 'monthly', priority = '0.5') {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''
  return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10)

  const staticEntries = staticPages.map((page) =>
    urlEntry(`${SITE_URL}${page.path === '/' ? '' : page.path}`, today, page.changefreq, page.priority)
  )

  const postEntries = posts.map((post) => {
    const lastmod = post.date instanceof Date ? post.date.toISOString().slice(0, 10) : today
    return urlEntry(`${SITE_URL}/posts/${post.slug}`, lastmod, 'yearly', '0.7')
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].join('\n')}
</urlset>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  })
}
