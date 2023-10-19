import React, { useEffect, useState } from 'react'
import ChildButton from './ChildButton';
import './style.css'
export default function ParentBoard() {
    const [turnCount,increaseTurnCount]=useState(0);
    const buttons = [];
    const [result,setResult]=useState('');
    const [boxValues,setBoxValues]=useState(['1','2','3','4','5','6','7','8','9']);
    const winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    useEffect(() => {
        console.log(turnCount);
        console.log(boxValues);
        setWinner();
    }, [turnCount,boxValues])
    function setWinner(){
        for(const condition of winConditions){
            const [a,b,c]=condition;
            console.log(a,b,c);
            if(boxValues[a]===boxValues[b]===boxValues[c]){
                if((turnCount%2)==1){
                    setResult('X wins')
                }
                else{
                    setResult('o wins')
                }
            }
        }
    }
    
    function setBoxArray(index,value){
        let tempArr=[...boxValues]
        tempArr[index]=value;
        setBoxValues(tempArr)
    }
    for (let i = 0; i <9; i++) {
        buttons.push(<ChildButton index={i} turnNo={turnCount} updateTurn={increaseTurnCount} setArrayValues={setBoxArray}/>);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>TIC-TAC-TOE</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="button-container">
                    {buttons}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>{result}</h1>
            </div>

        </>
    )
}
