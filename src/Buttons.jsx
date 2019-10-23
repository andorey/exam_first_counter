import React from 'react';
import './App.css';


class Buttons extends React.Component {

	render() {

		return (
			<button onClick={this.props.btnsName === 'inc' ? this.props.onClickUp :
			this.props.onClickReset} disabled={this.props.btnsName === 'inc' ?  this.props.isDisable : false}>
				{this.props.btnsName}
			</button>
		)
	}
}


export default Buttons;
