import React, { useState } from 'react'
import MedalInput from './compnent/MedalInput'
import MedalRanking from './compnent/MedalRanking'
const App = () => {
  const [medallist,setMedalList] = useState([]);


  return (
    <>
     <h1>메달 리스트 만들기~</h1>
     <MedalInput 
      medallist={medallist}
      setMedalList={setMedalList}
     />
     <MedalRanking 
      medallist={medallist}
      setMedalList={setMedalList}
     />
    </>
  )
}

export default App