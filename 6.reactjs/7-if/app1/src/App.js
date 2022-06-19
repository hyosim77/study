import React from 'react'
import { useState } from 'react'
//import { useEffect } from 'react'

function App () {
  const { bool, setBool } = useState('false')
  const toggle = () => {
    setBool(!bool)
  }
  const text = bool ? 'true' : 'false'

  return (
    <div className='App'>
      <h1>조건렌더링</h1>
      <div>
        {text}
      </div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
  //세번째버튼을 누르면 세번째 버튼의 상태가 변경이 아직 안됨. 고쳐보기.
}

export default App;
