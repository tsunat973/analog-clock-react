import { useState, useEffect } from 'react';


//↓これがコンポーネント本体です。Reactでは画面に表示するものをコンポーネントという関数にして書きます。
function App() {
  //現在時刻を保存する　timeが現在の値、setTimeがその値を更新するための関数
  //useStateを呼ぶと、Reactが自動的に「このtimeという値を更新するための専用の関数」を作って返してくれます。それがsetTimeです。名前は自分で決められますが、useStateの決まりとして**2番目の要素は必ず「値を更新する関数」**になります。
  const [time, setTime] = useState(new Date());

  //useEffectとは何かReactのコンポーネントは「画面に何を表示するか」を決める関数です。でも、画面の表示とは別に「裏側で何か処理をしたい」場面があります。こういう「画面の見た目とは直接関係ない、裏側の処理」を書く場所がuseEffectです。
  //useEffectは2つの引数を受け取ります。

  //1つ目の引数:実行したい処理を書いた関数(() => { ... }の部分)
  //2つ目の引数:[]という配列。これは「いつ実行するか」を決めるものです

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // 時・分・秒から、それぞれの針の角度(度数)を計算する
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondAngle = seconds * 6; // 360度 / 60秒 = 6度ずつ
  const minuteAngle = minutes * 6 + seconds * 0.1; // 分も秒に応じて少しずつ進む
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 360度 / 12時間 = 30度ずつ

  return (
    //画面を中央に表示するための囲みdiv
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }
    }>
      {/*svgの表示エリア svgは、図形を描くための特別なHTMLタグです。*/}
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* 時計の外枠 */}
        <circle cx="150" cy="150" r="140" fill="white" stroke="black" strokeWidth="4" />
        {/* 時針 */}
        <line
          x1="160" y1="160"
          x2="160" y2="100"
          stroke="#333" strokeWidth="6" strokeLinecap="round"
          transform={`rotate(${hourAngle}, 160, 160)`}
        />
        {/* 分針　*/}
        <line x1="150" y1="150" x2="150" y2="50" stroke="black" strokeWidth="4"
          transform={`rotate(${minuteAngle}, 150, 150)`} />
        {/* 秒針 */}
        <line x1="150" y1="150" x2="150" y2="40" stroke="red" strokeWidth="2"
          transform={`rotate(${secondAngle}, 150, 150)`} />
        {/*メモリを追加*/}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = i * 6;
          const isHour = i % 5 === 0;
          const innerR = isHour ? 130 : 138;
          const x1 = 160 + innerR * Math.sin((angle * Math.PI) / 180);
          const y1 = 160 - innerR * Math.cos((angle * Math.PI) / 180);
          const x2 = 160 + 145 * Math.sin((angle * Math.PI) / 180);
          const y2 = 160 - 145 * Math.cos((angle * Math.PI) / 180);
          return (
            <line
              key={i}
              x1={x1} y1={y1}
              x2={x2} y2={y2}
              stroke={isHour ? '#333' : '#ccc'}
              strokeWidth={isHour ? 2 : 1}
            />
          );
        })}
        {/* 数字追加 */}
        {[12, 3, 6, 9].map((num) => {
          const angle = num * 30;
          const x = 150 + 95 * Math.sin((angle * Math.PI) / 180);
          const y = 150 - 95 * Math.cos((angle * Math.PI) / 180);
          return (
            <text
              key={num}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="18"
              fontWeight="bold"

            >
              {num}
            </text>
          )
        })}
        <circle cx="150" cy="150" r="5" fill="black" />
      </svg>


    </div>
  )
}
export default App;
