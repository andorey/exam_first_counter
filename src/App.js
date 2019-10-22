import React from 'react';
import './App.css';
import Display from "./Display";


class App extends React.Component {

	state = {
		counter: 0,
		isMaxValue: false,
	};

	onClickUp = () => {

		let isMaxValue = this.state.counter >= 4;

		this.setState({
				counter: this.state.counter === 5 ? this.state.counter : this.state.counter + 1,
				isMaxValue: isMaxValue,
			}
		)
	};

	onClickReset = () => {
		this.setState({
				counter: 0,
				isMaxValue: false,
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
								<button onClick={this.onClickUp}>Add</button>
								<button onClick={this.onClickReset}>Reset</button>
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	}
}


export default App;
