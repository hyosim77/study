import './app.css'
import Hello from './Hello'
import Wrapper from './Wrapper'

function App () { 
  const name = 'Park'
  
  return (
    <>
      <Wrapper>
        <Hello nam = {name}/>
      </Wrapper>
    </>
)
}
export default App
