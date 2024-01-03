import{_ as a,c as e,o,U as t}from"./chunks/framework.XSCAJDP7.js";const b=JSON.parse('{"title":"[博碩] Visual Studio Code 實用指南","description":"","frontmatter":{"title":"[博碩] Visual Studio Code 實用指南"},"headers":[],"relativePath":"page/notes/vscode/vscode-10.md","filePath":"page/notes/vscode/vscode-10.md"}'),i={name:"page/notes/vscode/vscode-10.md"},r=t('<h1 id="_10-像-vim-高手一樣寫自己的腳本-建立自己的-vsce-script-專案" tabindex="-1">10 像 Vim 高手一樣寫自己的腳本，建立自己的 VSCE-Script 專案 <a class="header-anchor" href="#_10-像-vim-高手一樣寫自己的腳本-建立自己的-vsce-script-專案" aria-label="Permalink to &quot;10 像 Vim 高手一樣寫自己的腳本，建立自己的 VSCE-Script 專案&quot;">​</a></h1><h2 id="_10-1-建立自己的-vs-code-extension-專案" tabindex="-1">10.1 建立自己的 VS Code Extension 專案 <a class="header-anchor" href="#_10-1-建立自己的-vs-code-extension-專案" aria-label="Permalink to &quot;10.1 建立自己的 VS Code Extension 專案&quot;">​</a></h2><h2 id="_10-2-操控-vs-code-執行自動化的任務" tabindex="-1">10.2 操控 VS Code 執行自動化的任務 <a class="header-anchor" href="#_10-2-操控-vs-code-執行自動化的任務" aria-label="Permalink to &quot;10.2 操控 VS Code 執行自動化的任務&quot;">​</a></h2><ul><li><h3 id="_10-2-1-設計-invokecommands-工具函數" tabindex="-1">10.2.1 設計 invokeCommands 工具函數 <a class="header-anchor" href="#_10-2-1-設計-invokecommands-工具函數" aria-label="Permalink to &quot;10.2.1 設計 invokeCommands 工具函數&quot;">​</a></h3></li><li><h3 id="_10-2-2-活用-partial-function-減少樣板程式碼" tabindex="-1">10.2.2 活用 partial function 減少樣板程式碼 <a class="header-anchor" href="#_10-2-2-活用-partial-function-減少樣板程式碼" aria-label="Permalink to &quot;10.2.2 活用 partial function 減少樣板程式碼&quot;">​</a></h3></li><li><h3 id="_10-2-3-設計-typecommands-與-runmacro-函數" tabindex="-1">10.2.3 設計 typeCommands 與 runMacro 函數 <a class="header-anchor" href="#_10-2-3-設計-typecommands-與-runmacro-函數" aria-label="Permalink to &quot;10.2.3 設計 typeCommands 與 runMacro 函數&quot;">​</a></h3></li><li><h3 id="_10-2-4-設計可以執行-shell-命令的-execshell-函數" tabindex="-1">10.2.4 設計可以執行 shell 命令的 execShell 函數 <a class="header-anchor" href="#_10-2-4-設計可以執行-shell-命令的-execshell-函數" aria-label="Permalink to &quot;10.2.4 設計可以執行 shell 命令的 execShell 函數&quot;">​</a></h3></li><li><h3 id="_10-2-5-設計函數方法簡化-registercommand-行為" tabindex="-1">10.2.5 設計函數方法簡化 registerCommand 行為 <a class="header-anchor" href="#_10-2-5-設計函數方法簡化-registercommand-行為" aria-label="Permalink to &quot;10.2.5 設計函數方法簡化 registerCommand 行為&quot;">​</a></h3></li></ul><h2 id="_10-3-案例一-讓括號跟大括號輸入更友善的命令" tabindex="-1">10.3 案例一：讓括號跟大括號輸入更友善的命令 <a class="header-anchor" href="#_10-3-案例一-讓括號跟大括號輸入更友善的命令" aria-label="Permalink to &quot;10.3 案例一：讓括號跟大括號輸入更友善的命令&quot;">​</a></h2><ul><li><h3 id="_10-3-1-輸入大括號並展開" tabindex="-1">10.3.1 輸入大括號並展開 <a class="header-anchor" href="#_10-3-1-輸入大括號並展開" aria-label="Permalink to &quot;10.3.1 輸入大括號並展開&quot;">​</a></h3></li><li><h3 id="_10-3-2-補全前面的括號或空格" tabindex="-1">10.3.2 補全前面的括號或空格 <a class="header-anchor" href="#_10-3-2-補全前面的括號或空格" aria-label="Permalink to &quot;10.3.2 補全前面的括號或空格&quot;">​</a></h3></li></ul><h2 id="_10-4-案例二-讓-surround-with-在多行選取的狀況也可以順利運作" tabindex="-1">10.4 案例二：讓 Surround With 在多行選取的狀況也可以順利運作 <a class="header-anchor" href="#_10-4-案例二-讓-surround-with-在多行選取的狀況也可以順利運作" aria-label="Permalink to &quot;10.4 案例二：讓 Surround With 在多行選取的狀況也可以順利運作&quot;">​</a></h2><ul><li><h3 id="_10-4-1-實作-switchtoinsertmodeselection-函數" tabindex="-1">10.4.1 實作 switchToInsertModeSelection 函數 <a class="header-anchor" href="#_10-4-1-實作-switchtoinsertmodeselection-函數" aria-label="Permalink to &quot;10.4.1 實作 switchToInsertModeSelection 函數&quot;">​</a></h3></li><li><h3 id="_10-4-2-組合-surround-with-命令" tabindex="-1">10.4.2 組合 Surround With 命令 <a class="header-anchor" href="#_10-4-2-組合-surround-with-命令" aria-label="Permalink to &quot;10.4.2 組合 Surround With 命令&quot;">​</a></h3></li></ul><h2 id="_10-5-案例三-回復可視模式下-yank-過後的游標位置" tabindex="-1">10.5 案例三：回復可視模式下 yank 過後的游標位置 <a class="header-anchor" href="#_10-5-案例三-回復可視模式下-yank-過後的游標位置" aria-label="Permalink to &quot;10.5 案例三：回復可視模式下 yank 過後的游標位置&quot;">​</a></h2><h2 id="_10-6-使用-vsix-打包-extension-專案" tabindex="-1">10.6 使用 VSIX 打包 Extension 專案 <a class="header-anchor" href="#_10-6-使用-vsix-打包-extension-專案" aria-label="Permalink to &quot;10.6 使用 VSIX 打包 Extension 專案&quot;">​</a></h2><h2 id="_10-7-本章小結" tabindex="-1">10.7 本章小結 <a class="header-anchor" href="#_10-7-本章小結" aria-label="Permalink to &quot;10.7 本章小結&quot;">​</a></h2>',11),n=[r];function l(s,h,d,c,u,_){return o(),e("div",null,n)}const q=a(i,[["render",l]]);export{b as __pageData,q as default};
