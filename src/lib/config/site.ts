/** Canonical site origin (www — apex redirects here). */
export const SITE_URL = 'https://www.rookieslab.com'
export const SITE_NAME = "Rookie's Lab"
export const SITE_DOMAIN = 'rookieslab.com'
export const SITE_DESCRIPTION =
  "Blog about software engineering, design, competitive programming and my projects."
export const DEFAULT_OG_IMAGE = `${SITE_URL}/posts/rookieslab-og.jpg`
export const GA_MEASUREMENT_ID = 'G-256BTWGXCL'
export const TWITTER_HANDLE = '@raviojhax'
export const AUTHOR = {
  name: 'Ravi Ojha',
  url: `${SITE_URL}/about`
}

/** Build an absolute URL from a path or absolute URL. */
export function absoluteUrl(pathOrUrl = '/') {
  if (!pathOrUrl) return SITE_URL
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl.replace('https://rookieslab.com', SITE_URL)
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_URL}${path}`
}

/**
 * Resolve frontmatter og_image values to an absolute URL.
 * Legacy `documentation/rookieslab-og.jpg` maps to `/posts/rookieslab-og.jpg`.
 * Bare placeholders like `og-image.jpg` fall back to the default OG image.
 */
export function resolveOgImage(ogImage?: string | null) {
  if (!ogImage) return DEFAULT_OG_IMAGE

  if (ogImage.startsWith('http://') || ogImage.startsWith('https://')) {
    return ogImage.replace('https://rookieslab.com', SITE_URL)
  }

  let path = ogImage.replace(/^\//, '')
  if (path.startsWith('documentation/')) {
    path = `posts/${path.slice('documentation/'.length)}`
  }

  // Generic placeholder filenames with no folder → use site default
  if (path === 'og-image.jpg' || path === 'og-image.png' || path === 'default.jpg') {
    return DEFAULT_OG_IMAGE
  }

  if (!path.startsWith('posts/') && !path.startsWith('projects/') && !path.startsWith('og/')) {
    path = `posts/${path}`
  }

  return absoluteUrl(`/${path}`)
}
