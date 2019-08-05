import React, { useContext } from 'react';
import { Rev } from '../App'

const Counter = () => {
  const { visible, words, setWords, result, limWords } = useContext(Rev)
	
  return (
    <div id="work" style={{display: visible.none}}>
      <form>
        { result >= 0 && <p>Words left: { result }</p> }
        <textarea
          onChange={ (e) => setWords({
            needed: words.needed,
            written: e.target.value})}
          maxLength={ limWords }
          value={ words.written }
          type="text">
        </textarea>
      </form>
      { result < 0 && <p id="excess">You exceeded the maximum number of words!!</p> }
    </div>
    )
  }

export default Counter