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

  return (
    <div style={{ display: 'flex', justifyContent: 'Center', marginTop: '50px' }}>
    </div>
  )
}
export default App;
