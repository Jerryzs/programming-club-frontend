import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styles from '../scss/components/Markdown.module.scss'

function Markdown ({
  children
}: {
  children: string
}): JSX.Element {
  const renderers = {
    blockquote: ({ children }: { children: React.ReactNode }) => {
      return (
        <blockquote
          children={children}
          style={{
            padding: '0 1rem',
            borderLeft: '0.25rem solid #f8f9fa'
          }}
        />
      )
    },
    code: ({ language, value }: { language: string, value: string }) => {
      return (
        <SyntaxHighlighter
          style={dark}
          language={language}
          children={value}
        />
      )
    }
  }

  return (
    <ReactMarkdown
      className={styles.wrapper}
      plugins={[
        [gfm]
      ]}
      renderers={renderers}
      children={children}
    />
  )
}

const dark = {
  'code[class*="language-"]': {
    color: 'white',
    background: 'none',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    color: 'white',
    background: '#111111',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto'
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#111111',
    padding: '.15em .2em .05em',
    whiteSpace: 'normal'
  },
  comment: {
    color: 'hsl(30, 20%, 50%)'
  },
  prolog: {
    color: 'hsl(30, 20%, 50%)'
  },
  doctype: {
    color: 'hsl(30, 20%, 50%)'
  },
  cdata: {
    color: 'hsl(30, 20%, 50%)'
  },
  punctuation: {
    Opacity: '.7'
  },
  namespace: {
    Opacity: '.7'
  },
  property: {
    color: 'hsl(350, 40%, 70%)'
  },
  tag: {
    color: 'hsl(350, 40%, 70%)'
  },
  boolean: {
    color: 'hsl(350, 40%, 70%)'
  },
  number: {
    color: 'hsl(350, 40%, 70%)'
  },
  constant: {
    color: 'hsl(350, 40%, 70%)'
  },
  symbol: {
    color: 'hsl(350, 40%, 70%)'
  },
  selector: {
    color: 'hsl(75, 70%, 60%)'
  },
  'attr-name': {
    color: 'hsl(75, 70%, 60%)'
  },
  string: {
    color: 'hsl(75, 70%, 60%)'
  },
  char: {
    color: 'hsl(75, 70%, 60%)'
  },
  builtin: {
    color: 'hsl(75, 70%, 60%)'
  },
  inserted: {
    color: 'hsl(75, 70%, 60%)'
  },
  operator: {
    color: 'hsl(40, 90%, 60%)'
  },
  entity: {
    color: 'hsl(40, 90%, 60%)',
    cursor: 'help'
  },
  url: {
    color: 'hsl(40, 90%, 60%)'
  },
  '.language-css .token.string': {
    color: 'hsl(40, 90%, 60%)'
  },
  '.style .token.string': {
    color: 'hsl(40, 90%, 60%)'
  },
  variable: {
    color: 'hsl(40, 90%, 60%)'
  },
  atrule: {
    color: 'hsl(350, 40%, 70%)'
  },
  'attr-value': {
    color: 'hsl(350, 40%, 70%)'
  },
  keyword: {
    color: 'hsl(350, 40%, 70%)'
  },
  regex: {
    color: '#e90'
  },
  important: {
    color: '#e90',
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  deleted: {
    color: 'red'
  }
}

export default Markdown
