<script lang="ts">
  import { serializeJson } from '$lib/common/misc'
  import {
    SITE_URL,
    SITE_NAME,
    SITE_DOMAIN,
    SITE_DESCRIPTION,
    DEFAULT_OG_IMAGE,
    TWITTER_HANDLE,
    AUTHOR,
    absoluteUrl,
    resolveOgImage
  } from '$lib/config/site'

  interface ArticleMeta {
    slug: string
    title: string
    description?: string
    publishedAt?: string
    modifiedAt?: string
    tags?: string[]
    ogImage?: string
  }

  interface Props {
    title?: string
    description?: string
    path?: string
    ogImage?: string
    ogType?: string
    isArticle?: boolean
    article?: ArticleMeta | null
  }

  let {
    title = "Rookie's Lab - Ravi Ojha's Blog",
    description = SITE_DESCRIPTION,
    path = '/',
    ogImage,
    ogType = 'website',
    isArticle = false,
    article = null
  }: Props = $props()

  const pageUrl = $derived(absoluteUrl(path))
  const resolvedOgImage = $derived(
    resolveOgImage(ogImage ?? article?.ogImage) || DEFAULT_OG_IMAGE
  )
  const resolvedOgType = $derived(isArticle ? 'article' : ogType)
  const formattedTitle = $derived(
    title.includes(SITE_DOMAIN) ? title : `${title} · ${SITE_DOMAIN}`
  )

  const websiteLdJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: AUTHOR.url
    }
  }

  const articleLdJson = $derived(
    isArticle && article
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/web-app-manifest-192x192.png')
            }
          },
          author: {
            '@type': 'Person',
            name: AUTHOR.name,
            url: AUTHOR.url
          },
          headline: article.title || title,
          url: pageUrl,
          datePublished: article.publishedAt,
          dateModified: article.modifiedAt || article.publishedAt,
          image: {
            '@type': 'ImageObject',
            url: resolvedOgImage,
            width: 1200,
            height: 630
          },
          description: article.description || description,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl
          },
          keywords: article.tags?.join(', ')
        }
      : null
  )

  const ldJson = $derived(articleLdJson || websiteLdJson)
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>{formattedTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={pageUrl} />

  <meta itemprop="name" content={formattedTitle} />
  <meta itemprop="image" content={resolvedOgImage} />
  <meta itemprop="description" content={description} />

  <meta property="og:type" content={resolvedOgType} />
  <meta property="og:title" content={title} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:image" content={resolvedOgImage} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="en_US" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={resolvedOgImage} />
  <meta name="twitter:site" content={TWITTER_HANDLE} />
  <meta name="twitter:creator" content={TWITTER_HANDLE} />

  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="{SITE_NAME} RSS"
    href="{SITE_URL}/rss.xml"
  />

  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="googlebot" content="index, follow, max-image-preview:large" />

  {@html serializeJson(ldJson)}

  {#if isArticle && article}
    {#if article.publishedAt}
      <meta property="article:published_time" content={article.publishedAt} />
    {/if}
    {#if article.modifiedAt || article.publishedAt}
      <meta
        property="article:modified_time"
        content={article.modifiedAt || article.publishedAt}
      />
    {/if}
    <meta property="article:author" content={AUTHOR.name} />
    {#each article.tags || [] as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
</svelte:head>
