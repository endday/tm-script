import pkg from '../../package.json'

const now = new Date()
const meta = `// ==UserScript==
// @name         谷歌CDN替换
// @version      0.0.1
// @description  将 Google 的 CDN 替换成国内的 CDN 地址
// @author       ${pkg.author}
// @license      ${pkg.license}
// @update       ${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}
// @include      *
// @homepageURL  ${pkg.homepage}

// @run-at       document-start

// ==/UserScript==
/* eslint-disable */
`

export default meta
