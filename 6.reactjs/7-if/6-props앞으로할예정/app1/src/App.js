import React from 'react'
import Counter from './components/Counter'
import { useState } from 'react'


function App () {
  const { text, setText } = useState('리뉴얼된 클릭')
  const change = () => {
    setText('리뉴얼된 클릭2')
  }

  return (
    <div className='App'>
      <h1>Components</h1>
      <Counter click="변경된 클릭" />
      <Counter />
      <Counter click={text} />
      <Counter />
      <Counter />
      <button onClick={change}>세번째 버튼변경</button>
    </div>
  )
  //세번째버튼을 누르면 세번째 버튼의 상태가 변경이 아직 안됨. 고쳐보기.
}

export default App;
