// Injects the server-rendered app into dist/index.html so crawlers
// get the full page text without having to run JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexPath = `${root}dist/index.html`
const ssrDir = `${root}dist-ssr`

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href)
const html = await readFile(indexPath, 'utf8')
const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error('prerender: #root placeholder not found in dist/index.html')

await writeFile(indexPath, html.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html now contains the rendered page')
