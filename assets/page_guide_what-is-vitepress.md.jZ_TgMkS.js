import{_ as e,c as t,o as a,U as i}from"./chunks/framework.XSCAJDP7.js";const V=JSON.parse('{"title":"Vitepress 介紹","description":"","frontmatter":{"title":"Vitepress 介紹"},"headers":[],"relativePath":"page/guide/what-is-vitepress.md","filePath":"page/guide/what-is-vitepress.md"}'),r={name:"page/guide/what-is-vitepress.md"},s=i('<h1 id="什麼是-vitepress" tabindex="-1">什麼是 VitePress？ <a class="header-anchor" href="#什麼是-vitepress" aria-label="Permalink to &quot;什麼是 VitePress？&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">! 警告</p><p>VitePress 是早期的WIP！目前的重點首先是讓Vite 穩定和功能完善。目前，不建議將其用於任何正式的場景。</p></div><p>VitePress 是 <a href="https://www.vuepress.cn/" target="_blank" rel="noreferrer">VuePress</a> 小兄弟, 基於 <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">Vite</a> 構建。</p><ul><li><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-label="Permalink to &quot;Motivation&quot;">​</a></h2><p>我們喜愛 <code>VuePress</code>，但是它是基於 Webpack 構建。為了一個只有幾個簡單頁面的簡單文件網站啟動開發伺服器所需的時間正變得難以忍受。即使是 <code>HMR</code> 熱更新也需要幾秒鐘的時間才能在瀏覽器中顯示出來。</p><p>作為參考，<a href="https://github.com/vuejs/composition-api-rfc" target="_blank" rel="noreferrer">Composition API RFC repo</a> 僅只有兩個頁面，但是它花了 4 秒鐘來啟動伺服器，並且任何修改都需要將近 2 秒的時間才能在瀏覽器中顯示出來。</p><p>從根本上來說，這是因為 VuePress 是 webpack 的一個應用程式。即使只有兩頁，這也是一個完整的 webpack 專案(包括所有的主題原始檔)正在編譯。當專案有很多頁面時，情況會變得更糟：每個頁面都必須先完全編譯，然後伺服器才能顯示內容！</p><p>順便說一句，Vite 很好地解決了這些問題：幾乎立即啟動伺服器，只按需編譯正在服務的頁面，以及閃電般的快速hmr。另外，隨著時間的推移，我在 <code>VuePress</code> 中注意到了一些額外的設計問題，但由於重構的數量，我從來沒有時間去修復它。</p><p>現在，使用 Vite 和 Vue 3，是時候重新考慮「Vue 驅動的靜態站點產生器」到底能是什麼了。</p></li><li><h2 id="對-vuepress-的改進" tabindex="-1">對 VuePress 的改進 <a class="header-anchor" href="#對-vuepress-的改進" aria-label="Permalink to &quot;對 VuePress 的改進&quot;">​</a></h2><p>從VuePress 改進的地方有以下幾點：</p><ul><li><h3 id="使用vue-3" tabindex="-1">使用Vue 3 <a class="header-anchor" href="#使用vue-3" aria-label="Permalink to &quot;使用Vue 3&quot;">​</a></h3><p>利用Vue 3 改進的模板靜態分析，它能盡可能的壓縮靜態內容。靜態內容是以字串的形式傳送，而不是透過 JavaScript 渲染函數程式碼。因此 JS 負載更容易解析，hydration 也變得更快。</p><p>主要，在優化應用的同時，VitePress 仍然允許用戶在Markdown 內容中自由的混合 Vue 元件。編譯器將自動的為你分離動態/靜態內容，你不需要考慮這個。</p></li><li><h3 id="it-uses-vite-under-the-hood" tabindex="-1">It Uses Vite Under The Hood <a class="header-anchor" href="#it-uses-vite-under-the-hood" aria-label="Permalink to &quot;It Uses Vite Under The Hood&quot;">​</a></h3><ul><li>開發伺服器啟動更快</li><li>熱更新更快</li><li>建置更快(內部使用Rollup)</li></ul></li><li><h3 id="lighter-page-weight" tabindex="-1">Lighter Page Weight <a class="header-anchor" href="#lighter-page-weight" aria-label="Permalink to &quot;Lighter Page Weight&quot;">​</a></h3><ul><li>Vue 3 tree-shaking + Rollup code splitting</li><li>不為每個請求發送元資料。這些Page Weight 將從總頁數中分離出來。每次請求只發送目前頁面的元資料。客戶端導覽列會一起取得新頁面的元件和元資料。</li><li>不要使用 vue-router，因為VitePress 的需求非常簡單和具體，使用了一個簡單的自訂路由器(小於200 LOC)替代。</li><li>(WIP) i18n locale 資料也是按需取得。</li></ul></li></ul></li><li><h2 id="其他不同" tabindex="-1">其他不同 <a class="header-anchor" href="#其他不同" aria-label="Permalink to &quot;其他不同&quot;">​</a></h2><p>VitePress 更多的是主觀性的並且配置很少：VitePress 的目標是減少當前VuePress 的複雜性，並回歸到它的簡約主義根源。</p><p>VitePress 是面向未來的：VitePress 僅適用於支援原生ES 模組導入的瀏覽器，鼓勵使用沒有經過轉換的原生JavaScript 以及主題化中使用CSS 變數。</p></li><li><h2 id="這會成為未來的下一個vuepress-嗎" tabindex="-1">這會成為未來的下一個VuePress 嗎？ <a class="header-anchor" href="#這會成為未來的下一個vuepress-嗎" aria-label="Permalink to &quot;這會成為未來的下一個VuePress 嗎？&quot;">​</a></h2><p>可能不是。它目前以不同的名稱命名，這樣我們就不會過度地致力於與當前VuePress 生態系統(主要是主題和外掛)的兼容性。我們將看到，在不損害上面列出的設計目標的情況下，我們可以取得多大的進展。但是總的想法是VitePress 將有一個非常小的主題API(更傾向於JavaScript API 而不是文件佈局約定)，而且很可能沒有插件(所有定制都是在主題中完成)。</p></li></ul>',4),o=[s];function l(h,p,u,n,c,d){return a(),t("div",null,o)}const _=e(r,[["render",l]]);export{V as __pageData,_ as default};
