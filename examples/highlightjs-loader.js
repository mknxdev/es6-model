import 'highlight.js/styles/default.css'
import hljs from 'highlight.js/lib/highlight.js'
import javascript from 'highlight.js/lib/languages/javascript.js'

hljs.registerLanguage('javascript', javascript)
hljs.initHighlightingOnLoad()
