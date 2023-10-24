import React, { useEffect, useState } from 'react'
import './style.css'
export default function TicTacToe() {//reduce state and props
    const [turnCount, increaseTurnCount] = useState(0);
    const [boxValues, setBoxValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [result, setResult] = useState('');
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    useEffect(() => {
        console.log(turnCount);
        console.log(boxValues);
        findWinner();
    }, [boxValues])

    function findWinner() {
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if ((boxValues[a] != '') && (boxValues[a] === boxValues[b]) && (boxValues[b] === boxValues[c])) {

                if ((turnCount % 2) == 1) {
                    setResult('X wins')
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 10000)

                }
                else {
                    setResult('O wins')
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 10000)

                }
                break;
            }
            else if (turnCount == 9) {
                setResult("Draw")
                setTimeout(function () {
                    window.location.reload(false);
                }, 10000)
            }
        }
    }

    function setBoxArray(index, value) {
        let tempArr = [...boxValues]
        tempArr[index] = value;
        setBoxValues(tempArr);
        //turnCount += 1;
        increaseTurnCount(turnCount + 1);
        console.log(turnCount);
    }

    function changingTurn(index) {
        if (boxValues[index] == '' && result == '') {
            if (turnCount % 2 == 0) {
                setBoxArray(index, 'X')
            }
            else {
                setBoxArray(index, "O")
            }
        }
    }

    let buttons = boxValues.map((val, i) => {
        return(
        <button className="button" onClick={()=>{changingTurn(i)}}><h1>{val}</h1></button>
        ) 
    })

    return (
        <>
            <div className='centerdiv'>
                <h1>TIC-TAC-TOE</h1>
            </div>
            <div className='centerdiv'>
                {((turnCount == 9) || (result != '')) ? <h1>Match over</h1> : ((turnCount % 2 == 0) ?
                    <h1>X Turn</h1> : <h1>O Turn</h1>)}
            </div>
            <div className='centerdiv'>
                <div className="button-container">
                    {
                        buttons
                    }
                </div>
            </div>
            <div className="centerdiv">
                <h1>{result}</h1>
            </div>

        </>
    )
}
