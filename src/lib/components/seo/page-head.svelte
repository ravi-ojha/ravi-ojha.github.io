<script lang="ts">
  import { serializeJson } from '$lib/common/misc'

  interface Props {
    title?: string;
    description?: string;
    ogImage?: string;
    ogType?: string;
    ldJson?: any;
    isArticle?: boolean;
    article?: any;
  }

  let {
    title = $bindable('Rookie\'s Lab - Ravi Ojha\'s Blog'),
    description = $bindable('Blog about software engineering, design, competitive programming and my projects.'),
    ogImage = $bindable('https://rookieslab.com/og/default.jpg'),
    ogType = $bindable('website'),
    ldJson = $bindable(null),
    isArticle = false,
    article = null
  }: Props = $props();

  export const defaultLdJson: any = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Rookie\'s Lab',
    alternateName: title,
    url: 'https://rookieslab.com'
  }

  if (!ldJson) {
    ldJson = defaultLdJson
  }

  if (isArticle) {
    let blogUrl = `https://rookieslab.com/blog/${article.slug}/`

    title = article.title
    description = article.description || description
    ogImage = article.ogImage || ogImage
    ogType = 'article'

    ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'Organization',
        name: 'Rookie\'s Lab',
        url: 'https://rookieslab.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rookieslab.com/android-chrome-192x192.png'
        }
      },
      author: {
        '@type': 'Person',
        name: article.postAuthor.name,
        url: article.postAuthor.url,
        sameAs: []
      },
      headline: title,
      url: blogUrl,
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt,
      image: {
        '@type': 'ImageObject',
        url: ogImage,
        width: 1200,
        height: 630
      },
      description: description,
      mainEntityOfPage: blogUrl
    }
  }

  const siteName = 'rookieslab.com'
  let formattedTitle = $derived(`${title} · ${siteName}`)
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />

  <title>{formattedTitle}</title>
  <meta name="description" content={description} />
  <meta itemprop="name" content={formattedTitle} />
  <meta itemprop="image" content={ogImage} />
  <meta itemprop="description" content={description} />

  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={title} />
  <meta property="og:url" content="https://rookieslab.com/" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="en" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:site" content="@raviojhax" />

  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Rookie's Lab" />

  <link rel="base" href="https://rookieslab.com" />
  <meta name="robots" content="index/follow" />
  <meta name="googlebot" content="index/follow" />

  {@html serializeJson(ldJson)}

  {#if isArticle}
    <meta property="article:published_time" content={article.publishedAt} />
    <meta property="article:modified_time" content={article.modifiedAt} />

    {#each article.tagList as tag}
      <meta property="article:tag" content={tag.name} />
    {/each}
    <meta property="article:publisher" content="https://www.facebook.com/RookiesLab" />
  {/if}
</svelte:head>
