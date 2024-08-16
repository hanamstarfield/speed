import React, { useState } from 'react'

const MedalInput = ({medallist, setMedalList}) => {


    const [country, setCountry] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const clonecountry = (newEntry) => {
        setMedalList([...medallist, newEntry]);
    }

    const updateMedals = (updateEntry) => {
        setMedalList(medallist.map((Entry) => {
            Entry.country === updateEntry.country? updateEntry:Entry;
        }))
    }

    const isExist = medallist.some((Entry) => Entry.country === country);


    const resetInput = () => {
        setCountry("");
        setGold(0);
        setSilver(0);
        setBronze(0);
    }

    const handleAddCountry = () => {
        if(country.trim() === ""){
            alert("국가를 입력해주세요!");
            return;
        }
        if(isExist){
            alert("이미 추가된 국가입니다!")
            return;
        }
        clonecountry({country,gold,silver,bronze})
        resetInput();
    }



    const handleUpdateMedals = () => {
        if(country.trim() === ""){
            alert("국가를 입력해주세요!");
            return;
        }

        if(!isExist){
            alert("리스트에 없는 국가!");
            return;
        }
        updateMedals({country,gold,silver,bronze});
        resetInput();
    }


  return (
    <div>
        <div>
            <label>국가이름:</label>
            <input type="text" 
            placeholder='나라 이름'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            />
        </div>
        <div>
            <label>금메달:</label>
            <input type="number" 
            value={gold}
            onChange={(e) => setGold(+e.target.value)}
            min="0"
            />
        </div>
        <div>
            <label>은메달:</label>
            <input type="number" 
            value={silver}
            onChange={(e) => setSilver(+e.target.value)}
            min="0"
            />
        </div>
        <div>
            <label>동메달:</label>
            <input type="number" 
            value={bronze}
            onChange={(e) => setBronze(+e.target.value)}
            min="0"
            />
        </div>
        <div>
            <button onClick={handleAddCountry}>추가하기</button>
            <button onClick={handleUpdateMedals}>업데이트</button>
        </div>
    </div>
  )
}

export default MedalInput