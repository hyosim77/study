import React from 'react'

const App = () => {
  const movies = [
    { title: 'movie1', year: 2011 },
    { title: 'movie2', year: 2012 },
    { title: 'movie3', year: 2013 },
    { title: 'movie4', year: 2014 },
    { title: 'movie5', year: 2015 },
  ]
  // caommand+C+V 줄복사

  // const render = () => {
  //   return (
  //     <div className='movie' key={item.title}>
  //       {item.year}
  //   </div>
  //       )
  // })

  const render = movies.map((item) => {
    return (
      // 배열일땐 키가 필요하므로 고유의 키값으로 클래스를 지정해준다.
      <div className='movie' key={item.title}>
        <div className='movieTitle'>{item.title}</div>
        <div className='movieYear'>{item.year}</div>
      </div>
    )
  })





  return (
    <div className='App'>
      {render}
    </div>
  )
}

export default App