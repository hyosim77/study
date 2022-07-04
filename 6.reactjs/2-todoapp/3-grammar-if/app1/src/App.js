import './app.css'
import Hello from './Hello'
import Wrapper from './Wrapper'

function App () { 
  const name = 'Park'
  
  return (
    <>
     
        <Hello name={name} isPremium={true}/>
        <Hello name={name} isPremium={true}/>
        <Hello name={name} isPremium={true}/>
        <Hello />
        <Hello />
        <Hello />
      
    </>
)
}
export default App


//문제:isPremium 프롭을 주고, 얘가 투르이면 // 스페셜 "유료" 고객님 Park...// false이면 스페션 "무료" 고객님 Park... 