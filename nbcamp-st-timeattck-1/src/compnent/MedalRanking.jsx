import React from 'react'

const MedalRanking = ({medallist,setMedalList}) => {

  //삭제,리스트
  const sortedMelList = [...medallist].sort((a,b) => b.gold - a.gold);

  const deleteConutry = (deleteConutry) => {
    setMedalList(medallist.filter((Entry)=>{ Entry.country !== deleteConutry.country
    }));
  }


  return (
    <table>
      <thead>
        <tr>
          <td>국가</td>
          <td>금메달</td>
          <td>은메달</td>
          <td>동메달</td>
          <td>동작</td>
        </tr>
      </thead>
      <tbody>
        {sortedMelList.map((Entry,index)=>{
          <tr key={index}>
            <td>{Entry.country}</td>
            <td>{Entry.gold}</td>
            <td>{Entry.silver}</td>
            <td>{Entry.bronze}</td>
            <td>
              <button onClick={() => deleteConutry(Entry.country)}></button>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default MedalRanking