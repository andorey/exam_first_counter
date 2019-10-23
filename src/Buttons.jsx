import React from 'react';
import './App.css';


class Buttons extends React.Component {

	render() {

		return (
			<button
				onClick={this.props.buttonsName === 'inc' ? this.props.onClickUp : this.props.onClickReset}
				disabled={this.props.buttonsName === 'rst' || this.props.state.counter < this.props.state.maxCounter ? false : true}>
				{this.props.buttonsName}
			</button>
		)
	}
}


export default Buttons;
