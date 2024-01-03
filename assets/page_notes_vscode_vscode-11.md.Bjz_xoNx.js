import{_ as a,c as e,o,U as i}from"./chunks/framework.XSCAJDP7.js";const x=JSON.parse('{"title":"[博碩] Visual Studio Code 實用指南","description":"","frontmatter":{"title":"[博碩] Visual Studio Code 實用指南"},"headers":[],"relativePath":"page/notes/vscode/vscode-11.md","filePath":"page/notes/vscode/vscode-11.md"}'),t={name:"page/notes/vscode/vscode-11.md"},r=i('<h1 id="_11-開發-extension-實現以往無法更順手的操作" tabindex="-1">11 開發 Extension，實現以往無法更順手的操作 <a class="header-anchor" href="#_11-開發-extension-實現以往無法更順手的操作" aria-label="Permalink to &quot;11 開發 Extension，實現以往無法更順手的操作&quot;">​</a></h1><h2 id="_11-1-你問我答-extension-與使用者的互動流程" tabindex="-1">11.1 你問我答，Extension 與使用者的互動流程 <a class="header-anchor" href="#_11-1-你問我答-extension-與使用者的互動流程" aria-label="Permalink to &quot;11.1 你問我答，Extension 與使用者的互動流程&quot;">​</a></h2><ul><li><h3 id="_11-1-1-使用者流程與情境說明" tabindex="-1">11.1.1 使用者流程與情境說明 <a class="header-anchor" href="#_11-1-1-使用者流程與情境說明" aria-label="Permalink to &quot;11.1.1 使用者流程與情境說明&quot;">​</a></h3></li><li><h3 id="_11-1-2-練習-打造-vs-code-裡的-git-使用者互動流程" tabindex="-1">11.1.2 練習：打造 VS Code 裡的 Git 使用者互動流程 <a class="header-anchor" href="#_11-1-2-練習-打造-vs-code-裡的-git-使用者互動流程" aria-label="Permalink to &quot;11.1.2 練習：打造 VS Code 裡的 Git 使用者互動流程&quot;">​</a></h3></li></ul><h2 id="_11-2-掌握-vs-code-api-的命名空間與結構" tabindex="-1">11.2 掌握 VS Code API 的命名空間與結構 <a class="header-anchor" href="#_11-2-掌握-vs-code-api-的命名空間與結構" aria-label="Permalink to &quot;11.2 掌握 VS Code API 的命名空間與結構&quot;">​</a></h2><ul><li><h3 id="_11-2-1-window-命名空間-api-概覽" tabindex="-1">11.2.1 window 命名空間 API 概覽 <a class="header-anchor" href="#_11-2-1-window-命名空間-api-概覽" aria-label="Permalink to &quot;11.2.1 window 命名空間 API 概覽&quot;">​</a></h3></li><li><h3 id="_11-2-2-window-命名空間底下的-api-分類" tabindex="-1">11.2.2 window 命名空間底下的 API 分類 <a class="header-anchor" href="#_11-2-2-window-命名空間底下的-api-分類" aria-label="Permalink to &quot;11.2.2 window 命名空間底下的 API 分類&quot;">​</a></h3></li></ul><h2 id="_11-3-更順手的-extension-命令-客製化命令的-quick-pick-選單" tabindex="-1">11.3 更順手的 Extension 命令，客製化命令的 Quick Pick 選單 <a class="header-anchor" href="#_11-3-更順手的-extension-命令-客製化命令的-quick-pick-選單" aria-label="Permalink to &quot;11.3 更順手的 Extension 命令，客製化命令的 Quick Pick 選單&quot;">​</a></h2><h2 id="_11-4-使用過動態的-vim-macro-嗎-讓-macro-可以根據使用者輸入改變執行的行為" tabindex="-1">11.4 使用過動態的 Vim Macro 嗎？讓 Macro 可以根據使用者輸入改變執行的行為 <a class="header-anchor" href="#_11-4-使用過動態的-vim-macro-嗎-讓-macro-可以根據使用者輸入改變執行的行為" aria-label="Permalink to &quot;11.4 使用過動態的 Vim Macro 嗎？讓 Macro 可以根據使用者輸入改變執行的行為&quot;">​</a></h2><ul><li><h3 id="_11-4-1-建立通用的-macro" tabindex="-1">11.4.1 建立通用的 Macro <a class="header-anchor" href="#_11-4-1-建立通用的-macro" aria-label="Permalink to &quot;11.4.1 建立通用的 Macro&quot;">​</a></h3></li><li><h3 id="_11-4-2-設計可重複使用-並能根據使用者輸入改變執行行為的-macro" tabindex="-1">11.4.2 設計可重複使用，並能根據使用者輸入改變執行行為的 Macro <a class="header-anchor" href="#_11-4-2-設計可重複使用-並能根據使用者輸入改變執行行為的-macro" aria-label="Permalink to &quot;11.4.2 設計可重複使用，並能根據使用者輸入改變執行行為的 Macro&quot;">​</a></h3></li></ul><h2 id="_11-5-本章小結" tabindex="-1">11.5 本章小結 <a class="header-anchor" href="#_11-5-本章小結" aria-label="Permalink to &quot;11.5 本章小結&quot;">​</a></h2>',9),n=[r];function c(l,d,s,h,_,u){return o(),e("div",null,n)}const q=a(t,[["render",c]]);export{x as __pageData,q as default};
