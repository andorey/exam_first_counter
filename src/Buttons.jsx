import React from 'react';
import './App.css';


class Buttons extends React.Component {

	render() {

		return (
			<div className="boxButton">
				<div className="button">
					<button onClick={this.onClickUp}>Add</button>
					<button onClick={this.clickReset}>Reset</button>
				</div>
			</div>
		)
	}
}


export default Buttons;
