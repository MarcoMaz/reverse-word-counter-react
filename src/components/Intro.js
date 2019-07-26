import React, { useContext } from 'react';
import { Rev } from '../App'

const Intro = () => {
	const { visible, words, setVisible, setWords } = useContext(Rev)

	return (
		<div id="intro" style={{display: visible.block}}>
			<p>How many words do you have to write?</p>
          	<input
            	type="number"
            	min='2'
            	data-required-message="E-Mail or Username is required!"
            	value={ words.needed }
            	onChange={ (e) => setWords({ 
              		needed: e.target.value, 
              		written: ''
            	})}            
            	required>
            </input>
            <button onClick={() => setVisible({
            	block: 'none',
              	none: 'block'
            	})}>Go
            </button>          
        </div>
        )
}

export default Intro