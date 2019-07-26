import React, { useState, createContext } from 'react';
import './App.scss';
import Intro from "./components/Intro"
import Counter from "./components/Counter"

export const Rev = createContext()

function Reversed(){
  const [ words, setWords ] = useState({
    needed: 2,
    written: ''
    })
  const [ visible, setVisible ] = useState({
    block: 'block',
    none: 'none'
    })

  const wordCount = words.written === '' ? 0 : words.written.trim().split(' ').length
  const result = words.needed - wordCount
  const limWords = words.needed - wordCount < 0 ? words.written.length : null

  return(
    <Rev.Provider value={{visible, words, setVisible, setWords, result, limWords}}>
      <div id="container">
        <h1>Reverse Word Counter</h1>
        <Intro/>
        <Counter/>
      </div>
    </Rev.Provider>
    )
}

export default Reversed;