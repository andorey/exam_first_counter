import React from 'react';
import './App.css';
import Display from "./Display";
import Buttons from "./Buttons";


class App extends React.Component {

	state = {
		counter: 0,
		maxCounter: 4,
		buttons: ['inc', 'rst'],
		isMaxValue: 'display',
		isDisable: false
	};

	onClickUp = () => {

		this.state.counter <= this.state.maxCounter ?
			this.setState({ counter: this.state.counter + 1}) :
			this.setState({isMaxValue: this.state.isMaxValue + ' maxValueClass',
			isDisable: true})
	};

	onClickReset = () => {
		this.setState({
				counter: 0,
				isMaxValue: 'display',
				isDisable: false
			}
		)
	};


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="box">

						<Display state={this.state}/>

						<div className="boxButton">
							<div className="button">
								{this.state.buttons.map(el =>
									<Buttons btnsName={ el }
											 isDisable={this.state.isDisable}
											 onClickUp={this.onClickUp}
											 onClickReset={this.onClickReset}/>
								)}
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	}
}


export default App;
