import React from 'react';
import './App.css';

class Display extends React.Component {

	render() {

		return (
			<div className={this.props.state.counter < this.props.state.maxCounter ? 'display': 'maxValueClass'}>
				{this.props.state.counter}
			</div>
		)
	}
}


export default Display;
