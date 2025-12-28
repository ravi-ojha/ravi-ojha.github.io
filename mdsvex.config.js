import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import { highlight } from 'sugar-high'

export default {
  extensions: ['.svx', '.md'],
  smartypants: {
    dashes: 'oldschool'
  },
  rehypePlugins: [
    slugPlugin,
    [
      autolinkHeadings,
      {
        behavior: 'wrap'
      }
    ]
  ],
  highlight: {
    highlighter: (code, lang, meta) => {
      // Check for showLineNumbers flag in the meta string (e.g. ```python showLineNumbers)
      const showLineNumbers = meta?.includes('showLineNumbers')

      const html = highlight(code)
      // Escape curly braces so Svelte doesn't interpret them as template expressions
      const escaped = html.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')

      const classes = ['sh-code', showLineNumbers ? 'show-line-numbers' : ''].filter(Boolean).join(' ')
      return `<pre class="${classes}" data-language="${lang || ''}"><code>${escaped}</code></pre>`
    }
  }
}
