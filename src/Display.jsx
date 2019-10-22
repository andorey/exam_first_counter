import React from 'react';


class Display extends React.Component {

	render() {

	let displayClass = this.props.state.isMaxValue ? 'display maxValueClass' : 'display';

		return (
			<div className={displayClass}>
				{this.props.state.counter}
			</div>
		)
	}
}


export default Display;
