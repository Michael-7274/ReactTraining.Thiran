import React, { useEffect, useState } from 'react'
import ChildButton from './ChildButton';
import './style.css'
export default function ParentBoard() {//reduce state and props
    const [turnCount, increaseTurnCount] = useState(0);
    const [boxValues, setBoxValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [result, setResult] = useState('');
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    //used to invoke the findWinner() everytime the boxValues array values are changed
    useEffect(() => {
        findWinner();
    }, [boxValues])

    //this function updates the turn each time when a button is clicked
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

    //this function is used to update the array with X or O based on the turn
    function setBoxArray(index, value) {
        let tempArr = [...boxValues]
        tempArr[index] = value;
        setBoxValues(tempArr);
        increaseTurnCount(turnCount + 1);
        console.log(turnCount);
    }

    //this function checks if the winning condition is satisfied based on the turn in which a button is clicked
    function findWinner() {
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if ((boxValues[a] != '') && (boxValues[a] === boxValues[b]) && (boxValues[b] === boxValues[c])) {

                if ((turnCount % 2) == 1) {
                    setResult('X wins')
                    setTimeout(function () {
                        window.location.reload(true);
                    }, 10000)

                }
                else {
                    setResult('O wins')
                    setTimeout(function () {
                        window.location.reload(true);
                    }, 10000)

                }
                break;
            }
            else if (turnCount == 9) {
                setResult("Draw")
                setTimeout(function () {
                    window.location.reload(true);
                }, 10000)
            }
        }
    }

    //generates an array of child components
    let buttons = boxValues.map((val, i) => {
        return (
            <ChildButton boxValueAndIndexArray={[val, i]} updateTurn={changingTurn} />
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