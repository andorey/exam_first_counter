import React from 'react';
import './App.css';


const Buttons = (props) => {
	return (
		<button
			onClick={props.onClick}
			disabled={
				props.children === 'rst' || props.state.counter < props.state.maxCounter ? false : true
			}>

			{props.children}

		</button>
	)
}


export default Buttons;
