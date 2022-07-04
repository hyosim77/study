import './Appp.css'
import Hello from './Hello'

function App () { 
  const name = 'Park'
  const style = {
    backgroundColor: '#000',
    color: 'red'
  }
  return (
    <>
      <div style={style}>{name}</div>
      <div className="gray-box">{name}</div>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />    
    </>
)
}
export default App
