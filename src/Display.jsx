import React from 'react';
import './App.css';

class Display extends React.Component {

	render() {

		return (
			<div className={this.props.state.isMaxValue}>
				{this.props.state.counter}
			</div>
		)
	}
}


export default Display;
