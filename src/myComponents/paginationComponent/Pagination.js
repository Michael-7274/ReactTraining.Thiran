import React, { useEffect, useState } from 'react'

export default function Pagination({ totalPages,changePage}) {//first define the component statically without using parent component
  //const [clicked, setClicked] = useState()
  const [currentPgVal, setCurrentPgVal] = useState(1)
  //setCurrentPgVal(1)--don't declare it here , causes re-rendering error
  
  useEffect(() => {
  changePage(currentPgVal)//because there could be a delay in updating if we call props function directly insde a function
  }, [currentPgVal])

  function onPrevClickHandler() {
    if (currentPgVal > 1) {
      setCurrentPgVal(currentPgVal - 1)
      
    }
  }
  function onPageClickHandler(button) {
    setCurrentPgVal(button)
    
    //alert("button:"+button)
  }
  function onNextClickHandler() {
    if (currentPgVal < totalPages) {
      setCurrentPgVal(currentPgVal + 1)
      
    }
  }
    function generateButton() {
      let txt = []
      for (let i = 1; i <= totalPages; i++) {
        txt.push(<button className={i == currentPgVal ? "highlight" : ''} onClick={() => { onPageClickHandler(i) }}>{i}</button>)
      }
      return txt
    }
    const buttonArray = generateButton()


    return (
      <>
        <button onClick={() => onPrevClickHandler()}>{'<'}</button>
        {buttonArray}
        <button onClick={() => onNextClickHandler()}>{'>'}</button>
      </>
    )
  }

