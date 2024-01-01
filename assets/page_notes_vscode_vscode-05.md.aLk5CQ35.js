import{_ as a,c as e,o as i,U as l}from"./chunks/framework.XSCAJDP7.js";const b=JSON.parse('{"title":"[博碩] Visual Studio Code 實用指南","description":"","frontmatter":{"title":"[博碩] Visual Studio Code 實用指南"},"headers":[],"relativePath":"page/notes/vscode/vscode-05.md","filePath":"page/notes/vscode/vscode-05.md"}'),r={name:"page/notes/vscode/vscode-05.md"},o=l('<h1 id="_05-vscodevim-優雅地使用編輯器" tabindex="-1">05 VSCodeVim：優雅地使用編輯器 <a class="header-anchor" href="#_05-vscodevim-優雅地使用編輯器" aria-label="Permalink to &quot;05 VSCodeVim：優雅地使用編輯器&quot;">​</a></h1><h2 id="_5-1-vim-的哲學與解決問題之道" tabindex="-1">5.1 Vim 的哲學與解決問題之道 <a class="header-anchor" href="#_5-1-vim-的哲學與解決問題之道" aria-label="Permalink to &quot;5.1 Vim 的哲學與解決問題之道&quot;">​</a></h2><ul><li><h3 id="_5-1-1-先閱讀-再寫作" tabindex="-1">5.1.1 先閱讀，再寫作 <a class="header-anchor" href="#_5-1-1-先閱讀-再寫作" aria-label="Permalink to &quot;5.1.1 先閱讀，再寫作&quot;">​</a></h3></li><li><h3 id="_5-1-2-用組合命令解決問題" tabindex="-1">5.1.2 用組合命令解決問題 <a class="header-anchor" href="#_5-1-2-用組合命令解決問題" aria-label="Permalink to &quot;5.1.2 用組合命令解決問題&quot;">​</a></h3></li><li><h3 id="_5-1-3-用更少的動作完成任務" tabindex="-1">5.1.3 用更少的動作完成任務 <a class="header-anchor" href="#_5-1-3-用更少的動作完成任務" aria-label="Permalink to &quot;5.1.3 用更少的動作完成任務&quot;">​</a></h3></li><li><h3 id="_5-1-4-避免重複-發掘可重用的命令" tabindex="-1">5.1.4 避免重複，發掘可重用的命令 <a class="header-anchor" href="#_5-1-4-避免重複-發掘可重用的命令" aria-label="Permalink to &quot;5.1.4 避免重複，發掘可重用的命令&quot;">​</a></h3></li></ul><h2 id="_5-2-普通模式-normal-mode-與游標移動" tabindex="-1">5.2 普通模式 (Normal Mode) 與游標移動 <a class="header-anchor" href="#_5-2-普通模式-normal-mode-與游標移動" aria-label="Permalink to &quot;5.2 普通模式 (Normal Mode) 與游標移動&quot;">​</a></h2><ul><li><h3 id="_5-2-1-基本的游標移動" tabindex="-1">5.2.1 基本的游標移動 <a class="header-anchor" href="#_5-2-1-基本的游標移動" aria-label="Permalink to &quot;5.2.1 基本的游標移動&quot;">​</a></h3></li><li><h3 id="_5-2-2-基於文字的游標移動" tabindex="-1">5.2.2 基於文字的游標移動 <a class="header-anchor" href="#_5-2-2-基於文字的游標移動" aria-label="Permalink to &quot;5.2.2 基於文字的游標移動&quot;">​</a></h3></li><li><h3 id="_5-2-3-各種情境的游標移動" tabindex="-1">5.2.3 各種情境的游標移動 <a class="header-anchor" href="#_5-2-3-各種情境的游標移動" aria-label="Permalink to &quot;5.2.3 各種情境的游標移動&quot;">​</a></h3></li><li><h3 id="_5-2-4-操作游標下的內容" tabindex="-1">5.2.4 操作游標下的內容 <a class="header-anchor" href="#_5-2-4-操作游標下的內容" aria-label="Permalink to &quot;5.2.4 操作游標下的內容&quot;">​</a></h3></li></ul><h2 id="_5-3-必要知識-vim-的暫存器與-yank-命令" tabindex="-1">5.3 必要知識：Vim 的暫存器與 Yank 命令 <a class="header-anchor" href="#_5-3-必要知識-vim-的暫存器與-yank-命令" aria-label="Permalink to &quot;5.3 必要知識：Vim 的暫存器與 Yank 命令&quot;">​</a></h2><ul><li><h3 id="_5-3-1-暫存器的種類" tabindex="-1">5.3.1 暫存器的種類 <a class="header-anchor" href="#_5-3-1-暫存器的種類" aria-label="Permalink to &quot;5.3.1 暫存器的種類&quot;">​</a></h3></li><li><h3 id="_5-3-2-操作並查看暫存器狀態" tabindex="-1">5.3.2 操作並查看暫存器狀態 <a class="header-anchor" href="#_5-3-2-操作並查看暫存器狀態" aria-label="Permalink to &quot;5.3.2 操作並查看暫存器狀態&quot;">​</a></h3></li><li><h3 id="_5-3-3-將操作後的內容放入指定暫存器" tabindex="-1">5.3.3 將操作後的內容放入指定暫存器 <a class="header-anchor" href="#_5-3-3-將操作後的內容放入指定暫存器" aria-label="Permalink to &quot;5.3.3 將操作後的內容放入指定暫存器&quot;">​</a></h3></li></ul><h2 id="_5-4-插入模式-insert-mode" tabindex="-1">5.4 插入模式 (Insert Mode) <a class="header-anchor" href="#_5-4-插入模式-insert-mode" aria-label="Permalink to &quot;5.4 插入模式 (Insert Mode)&quot;">​</a></h2><ul><li><h3 id="_5-4-1-進入插入模式" tabindex="-1">5.4.1 進入插入模式 <a class="header-anchor" href="#_5-4-1-進入插入模式" aria-label="Permalink to &quot;5.4.1 進入插入模式&quot;">​</a></h3></li><li><h3 id="_5-4-2-離開插入模式" tabindex="-1">5.4.2 離開插入模式 <a class="header-anchor" href="#_5-4-2-離開插入模式" aria-label="Permalink to &quot;5.4.2 離開插入模式&quot;">​</a></h3></li><li><h3 id="_5-4-3-使用-ctrl-修飾鍵來組合快捷鍵" tabindex="-1">5.4.3 使用 Ctrl 修飾鍵來組合快捷鍵 <a class="header-anchor" href="#_5-4-3-使用-ctrl-修飾鍵來組合快捷鍵" aria-label="Permalink to &quot;5.4.3 使用 Ctrl 修飾鍵來組合快捷鍵&quot;">​</a></h3></li><li><h3 id="_5-4-4-插入暫存器裡的內容" tabindex="-1">5.4.4 插入暫存器裡的內容 <a class="header-anchor" href="#_5-4-4-插入暫存器裡的內容" aria-label="Permalink to &quot;5.4.4 插入暫存器裡的內容&quot;">​</a></h3></li><li><h3 id="_5-4-5-在插入模式中使用普通模式命令" tabindex="-1">5.4.5 在插入模式中使用普通模式命令 <a class="header-anchor" href="#_5-4-5-在插入模式中使用普通模式命令" aria-label="Permalink to &quot;5.4.5 在插入模式中使用普通模式命令&quot;">​</a></h3></li></ul><h2 id="_5-5-可視模式-命令列模式-可視列模式-visual-line-mode" tabindex="-1">5.5 可視模式 / 命令列模式 / 可視列模式 (Visual Line Mode) <a class="header-anchor" href="#_5-5-可視模式-命令列模式-可視列模式-visual-line-mode" aria-label="Permalink to &quot;5.5 可視模式 / 命令列模式 / 可視列模式 (Visual Line Mode)&quot;">​</a></h2><ul><li><h3 id="_5-5-1-選取字串裡的文字" tabindex="-1">5.5.1 選取字串裡的文字 <a class="header-anchor" href="#_5-5-1-選取字串裡的文字" aria-label="Permalink to &quot;5.5.1 選取字串裡的文字&quot;">​</a></h3></li><li><h3 id="_5-5-2-用組合命令進行有效率的選取" tabindex="-1">5.5.2 用組合命令進行有效率的選取 <a class="header-anchor" href="#_5-5-2-用組合命令進行有效率的選取" aria-label="Permalink to &quot;5.5.2 用組合命令進行有效率的選取&quot;">​</a></h3></li><li><h3 id="_5-5-3-可視列模式與普通模式命令的組合技" tabindex="-1">5.5.3 可視列模式與普通模式命令的組合技 <a class="header-anchor" href="#_5-5-3-可視列模式與普通模式命令的組合技" aria-label="Permalink to &quot;5.5.3 可視列模式與普通模式命令的組合技&quot;">​</a></h3></li></ul><h2 id="_5-6-本章小結" tabindex="-1">5.6 本章小結 <a class="header-anchor" href="#_5-6-本章小結" aria-label="Permalink to &quot;5.6 本章小結&quot;">​</a></h2>',12),t=[o];function h(d,n,s,c,_,u){return i(),e("div",null,t)}const q=a(r,[["render",h]]);export{b as __pageData,q as default};
