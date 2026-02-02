interface LexicalNode {
  type: string
  children?: LexicalNode[]
  text?: string
  format?: number
  mode?: string
  style?: string
  direction?: string
  tag?: string
  url?: string
  rel?: string
  target?: string
  title?: string
  listType?: string
  start?: number
  value?: number
  version?: number
}

export function serializeLexical(editorState: unknown): string {
  if (!editorState) {
    return ''
  }

  // Handle both root object and direct children array
  let children = []
  const state = editorState as Record<string, unknown>
  
  if (state.root && typeof state.root === 'object' && state.root !== null) {
    const root = state.root as Record<string, unknown>
    if (Array.isArray(root.children)) {
      children = root.children
    }
  } else if (Array.isArray(state.children)) {
    children = state.children
  } else if (Array.isArray(editorState)) {
    children = editorState
  } else {
    console.log('Unknown content structure:', editorState)
    return ''
  }

  return serializeChildren(children)
}

function serializeChildren(children: LexicalNode[]): string {
  if (!Array.isArray(children)) {
    return ''
  }
  return children.map(serializeNode).join('')
}

function serializeNode(node: LexicalNode): string {
  if (!node || !node.type) {
    return ''
  }

  switch (node.type) {
    case 'paragraph':
      const content = serializeChildren(node.children || [])
      return content ? `<p>${content}</p>` : '<p></p>'
    
    case 'heading':
      const tag = node.tag || 'h2'
      return `<${tag}>${serializeChildren(node.children || [])}</${tag}>`
    
    case 'text':
      let text = escapeHtml(node.text || '')
      
      // Apply text formatting based on format bitmask
      if (node.format) {
        if (node.format & 1) text = `<strong>${text}</strong>` // Bold
        if (node.format & 2) text = `<em>${text}</em>` // Italic
        if (node.format & 4) text = `<s>${text}</s>` // Strikethrough
        if (node.format & 8) text = `<u>${text}</u>` // Underline
        if (node.format & 16) text = `<code>${text}</code>` // Code
        if (node.format & 32) text = `<sub>${text}</sub>` // Subscript
        if (node.format & 64) text = `<sup>${text}</sup>` // Superscript
      }
      
      return text
    
    case 'link':
      const url = node.url || '#'
      const rel = node.rel ? ` rel="${escapeHtml(node.rel)}"` : ''
      const target = node.target ? ` target="${escapeHtml(node.target)}"` : ''
      const title = node.title ? ` title="${escapeHtml(node.title)}"` : ''
      return `<a href="${escapeHtml(url)}"${rel}${target}${title}>${serializeChildren(node.children || [])}</a>`
    
    case 'list':
      const listTag = node.listType === 'number' ? 'ol' : 'ul'
      const start = node.start && node.start !== 1 ? ` start="${node.start}"` : ''
      return `<${listTag}${start}>${serializeChildren(node.children || [])}</${listTag}>`
    
    case 'listitem':
      const value = node.value ? ` value="${node.value}"` : ''
      return `<li${value}>${serializeChildren(node.children || [])}</li>`
    
    case 'quote':
      return `<blockquote>${serializeChildren(node.children || [])}</blockquote>`
    
    case 'code':
      return `<pre><code>${serializeChildren(node.children || [])}</code></pre>`
    
    case 'linebreak':
      return '<br>'
    
    case 'horizontalrule':
      return '<hr>'
    
    default:
      console.log('Unknown node type:', node.type, node)
      // For unknown nodes, try to render children
      if (node.children) {
        return serializeChildren(node.children)
      }
      return ''
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}