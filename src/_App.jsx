import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // usestateは状態をつkるReactのフックで（）内初期値
  // countは現在の状態でsetCountはそれを変更する関数
  // inputタグが２個あるとき、2個フックはいる。必ずvalueを入れないとReactではいけない
  const[name,setName] = useState("名前入力")
  const[email,setEmail] = useState("アドレス入力")

// イベント処理＝クリックしたらXXXするというもので、eはイベントオブジェクト　JSでクリックイベントとかでもできる
const handleNameChange = (e) =>{
  // 処理を記載する。e.targetのvalueが変わる。eはイベントオブジェクトで中にはtargetというDOM要素を含んでいるのだ
  setName(e.target.value);
};

const handleEmailChange = (e) =>{
  // 処理を記載する。e.targetのvalueが変わる。eはイベントオブジェクトで中にはtargetというDOM要素を含んでいるのだ
  setEmail(e.target.value);
};

// 発火タイミングは早く何かを読み込むときに使う
useEffect(()=>{
  console.log("起動")
},[])

console.log("確認")


  return (
    <>
    <div>
        <p>名前</p>
        <input 
          type="text"
          placeholder="名前を入れる"
          value={name}
          onChange={handleNameChange}
        />
    </div>
    <div>
        <p>アドレス</p>
        <input 
          type="text"
          placeholder="アドレスを入れる" 
          value={email}
          onChange={handleEmailChange}
          />
    </div>

    </>
  )
}

export default App
