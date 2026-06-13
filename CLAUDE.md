# CLAUDE.md

## 開発目的

このプロジェクトは、弘前大学の学生向けに、履修登録時のシラバス確認負担を減らすための「履修候補ピッカー」プロトタイプを作るものです。

目的は完成品を作ることではなく、ユーザーが「自分の目的・興味・条件に合いそうな授業候補を先に提示してもらうこと」に価値を感じるかを検証することです。

## 最重要方針

* これは1日MVPです。
* 完成度よりも、価値検証できる最小体験を優先してください。
* 外部API、DB、認証、スクレイピングは使わないでください。
* 授業データは静的なTypeScript配列として管理してください。
* 1画面で完結するアプリにしてください。
* 履修可否や卒業要件は断定しないでください。
* 公式サービスのように見せないでください。
* 元のシラバスPDFはリポジトリに含めないでください。
* `.env` や `.env.local` などの環境変数ファイルは作成してもGit管理しないでください。

## 実装対象

Next.js + TypeScript + Reactで、1画面のWebアプリを実装してください。

画面構成は以下です。

1. ヘッダー
2. アプリの説明
3. 注意書き
4. 条件入力フォーム
5. 推薦結果カード
6. おすすめ授業の比較表
7. 公式情報確認のリマインド

## 入力フォーム

ユーザーが以下を入力・選択できるようにしてください。

* 学年
* 興味分野
* 履修目的
* 重視する条件
* 避けたい条件
* 自由記述メモ

興味分野、履修目的、重視条件、避けたい条件は、チェックボックスまたは複数選択UIにしてください。

## 推薦ロジック

外部AIやAPIは使わず、タグ・条件一致によるスコアリングを実装してください。

授業データの以下の項目を参照してください。

* `tags`
* `recommendedFor`
* `cautions`
* `summary`
* `evaluation`
* `classFormat`
* `requiredElective`

基本ルール：

* ユーザーの興味分野と `course.tags` が一致したら加点
* ユーザーの履修目的と `course.recommendedFor` が意味的に近い場合は加点
* 重視条件と `course.tags`, `classFormat`, `requiredElective`, `evaluation` が一致したら加点
* 避けたい条件と `course.cautions`, `evaluation`, `dayPeriod`, `credits` が一致したら減点
* スコアが同点の場合は、マッチした理由の数が多いものを上位にしてください
* 上位3〜5件を表示してください

厳密な自然言語理解は不要です。MVPなので、単純なキーワード・タグ一致で実装してください。

## 推薦結果表示

各推薦授業カードには以下を表示してください。

* 授業名
* 英語名
* 曜日・時限
* 単位数
* 担当教員
* おすすめ度スコア
* おすすめ理由
* 注意点
* 公式シラバスで確認すべき事項
* タグ

## 比較表

推薦された授業について、比較表を表示してください。

比較表の列：

* 授業名
* 分野タグ
* 曜日・時限
* 単位数
* 評価方法
* 向いている学生
* 注意点

## .gitignore の作成

プロジェクト直下に `.gitignore` を必ず作成してください。

以下を含めてください。

```gitignore
# dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/
build/

# production
dist/

# environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local
!.env.example

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# OS files
.DS_Store
Thumbs.db

# editor files
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea/

# Claude Code local settings
.claude/settings.local.json
.claude/commands.local/
.claude/tmp/

# raw syllabus files and local source materials
*.pdf
data/raw/
public/syllabus-pdfs/
notes/
memo/
tmp/
temp/

# Vercel
.vercel/

# TypeScript
*.tsbuildinfo

# test / coverage
coverage/
```

## Git管理しないもの

以下は絶対にGitに含めないでください。

* `node_modules/`
* `.next/`
* `.vercel/`
* `.env`
* `.env.local`
* `.env*.local`
* `.claude/settings.local.json`
* 元のシラバスPDF
* `data/raw/`
* `public/syllabus-pdfs/`
* 一時メモ
* 作業ログ
* ビルド生成物

## Git管理するもの

以下はGitに含めてください。

* `README.md`
* `CLAUDE.md`
* `.gitignore`
* `package.json`
* ロックファイル
* `src/`
* `src/data/courses.ts`
* `src/lib/recommend.ts`
* `src/components/`
* `src/app/`

## 注意書き

以下の注意書きを画面上部または推薦結果付近に必ず表示してください。

このアプリは弘前大学の公式サービスではなく、履修候補を整理するための非公式プロトタイプです。授業情報の正確性・最新性は保証しません。履修登録前には、必ず公式シラバス、履修要項、教務情報を確認してください。このアプリは履修可否、卒業要件、単位取得を保証しません。

## 作らない機能

以下は実装しないでください。

* 弘前大学シラバス全件の自動取得
* シラバスサイトのスクレイピング
* 外部LLM API連携
* RAG検索
* ベクトルデータベース
* ログイン
* ユーザーごとの履修履歴保存
* 卒業要件判定
* 時間割の自動生成
* 履修登録可否の断定
* 教務情報との連携
* 口コミ・先輩レビュー機能
* 複数大学対応
* 管理画面

## ディレクトリ構成の希望

```txt
src/
  app/
    page.tsx
    globals.css
  data/
    courses.ts
  lib/
    recommend.ts
  components/
    ConditionForm.tsx
    CourseCard.tsx
    ComparisonTable.tsx
    Disclaimer.tsx
```

## 完了条件

* `npm run dev` でローカル起動できる
* 条件入力フォームが表示される
* 条件を選択して推薦結果が出る
* おすすめ理由・注意点・確認事項が表示される
* 比較表が表示される
* 注意書きが表示される
* `.gitignore` が作成されている
* `.gitignore` に `node_modules/`, `.next/`, `.env*`, `.vercel/`, `*.pdf`, `.claude/settings.local.json` が含まれている
* 外部APIやDBを使っていない
* TypeScriptエラーがない
