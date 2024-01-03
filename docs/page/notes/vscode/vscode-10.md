---
title: '[博碩] Visual Studio Code 實用指南'
---

# 10 像 Vim 高手一樣寫自己的腳本，建立自己的 VSCE-Script 專案
## 10.1 建立自己的 VS Code Extension 專案

## 10.2 操控 VS Code 執行自動化的任務
  - ### 10.2.1 設計 invokeCommands 工具函數
  - ### 10.2.2 活用 partial function 減少樣板程式碼
  - ### 10.2.3 設計 typeCommands 與 runMacro 函數
  - ### 10.2.4 設計可以執行 shell 命令的 execShell 函數
  - ### 10.2.5 設計函數方法簡化 registerCommand 行為

## 10.3 案例一：讓括號跟大括號輸入更友善的命令
  - ### 10.3.1 輸入大括號並展開
  - ### 10.3.2 補全前面的括號或空格

## 10.4 案例二：讓 Surround With 在多行選取的狀況也可以順利運作
  - ### 10.4.1 實作 switchToInsertModeSelection 函數
  - ### 10.4.2 組合 Surround With 命令

## 10.5 案例三：回復可視模式下 yank 過後的游標位置

## 10.6 使用 VSIX 打包 Extension 專案

## 10.7 本章小結