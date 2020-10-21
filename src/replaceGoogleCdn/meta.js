import pkg from '../../package.json'

const now = new Date()
const meta = `// ==UserScript==
// @name         stackoverflow的加载速度优化 js和css资源CDN替换
// @namespace    endday
// @version      0.0.2
// @description  将stackoverflow使用的Google相关的js和css资源替换成国内的 CDN 地址
// @author       ${pkg.author}
// @license      ${pkg.license}
// @update       ${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}
// @match        https://*.stackoverflow.com
// @match        https://*.stackoverflow.com/*
// @homepageURL  ${pkg.homepage}

// @run-at       document-start

// ==/UserScript==
/* eslint-disable */
`

export default meta
