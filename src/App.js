import React from 'react';
import './App.css';
import Display from "./Display";
import Buttons from "./Buttons";


class App extends React.Component {

	state = {
		counter: 0,
		maxCounter: 5,
		isDisable: false
	};

	buttons = ['inc', 'rst'];

	onClickUp = () => {

		if (this.state.counter < this.state.maxCounter){
			this.setState({ counter: this.state.counter + 1}
			)}
	};

	onClickReset = () => {
		this.setState({
				counter: 0,
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
								{this.buttons.map( element =>
									<Buttons buttonsName={ element }
											 state={this.state}
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
