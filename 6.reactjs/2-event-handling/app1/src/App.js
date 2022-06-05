function App () {
  const onKeyUp = (event) => {
    if (event.keyCode === 13) { //event.keyCode 키코드 입력조건
      onSubmit() //함수 실행시
    }
    console.log('event.keyCode: ', event.keyCode);
    // 엔터키를 쳤을 때, onSubmit을 실행
  }



  const onSubmit = () => {
    alert('제출됐음')
  }


  return (
    <div className="App">
      {/* <button onClick={() => alert('hello react')}>Submit</button> */}
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;

