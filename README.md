# Analog Clock (React + TypeScript)

React と TypeScript、SVG を使って実装したアナログ時計アプリです。
アナログ時計アプリがなかなかなくあっても広告が多くて不便だと感じたためリリースも見据えて作りました。
JavaScript の学習者が、TypeScript・React・Node.js を実践的に学ぶために制作しました。

## デモ

url

## 使用技術

- React
- TypeScript
- Vite
- SVG

## 工夫した点

- `useState` / `useEffect` を使い、1秒ごとに現在時刻を取得してリアルタイムに描画を更新
- SVG の `<line>` と `transform="rotate()"` を使い、時・分・秒それぞれの針を中心点を軸に回転させて表現
- 秒の進み具合を分針・時針にもわずかに反映させる補正計算を入れることで、針がカクカク動かず滑らかに動くように実装

## 今後の展望

- Capacitor を使った Android アプリ化
- Google Play への公開

## セットアップ方法

\`\`\`bash
npm install
npm run dev
\`\`\`