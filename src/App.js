import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends React.Component {
	state = {
		players: [
			{name: 'LDK', id: 1}
			,{name: 'HOG', id: 2}
			,{name: 'KIM', id: 3}
			,{name: 'PAR', id: 4}
			,{name: 'JAN', id: 5}
		]
	};

	handleRemovePlayer = (id) => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter(item=>item.id!==id)
			}
		});
	}

	render() {
		return (
			<div className="scoreboard">
				<Header title="My scoreboard" totalPlayers={this.state.players.length} />

				{/*Players List*/}
				{this.state.players.map(item => <Player name={item.name} key={item.id.toString()} removePlayer={this.handleRemovePlayer} id={item.id} />)
				}
			</div>
		);
	}
}

export default App;
