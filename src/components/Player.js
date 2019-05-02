import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

class Player extends React.Component {
	static propTypes = {
		id						:PropTypes.number
		,name					:PropTypes.string.isRequired
		,score				:PropTypes.number.isRequired
		,index				:PropTypes.number
		,removePlayer	:PropTypes.func
		,changeScore	:PropTypes.func
	}

	render() {
		console.log(this.props.name, ' rendered');
		const {id, name, score, index, removePlayer, changeScore} = this.props;
		return (
			<div className="player">
				<span className="player-name">
				<button className="remove-player" onClick={()=>this.props.removePlayer(id)}> x</button>
			</span>
			<span className="player-name">
				{ name }
				</span>
				<Counter score={ score } id={id} changeScore={changeScore} />
			</div>
		);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		console.log('componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('shouldComponentUpdate', nextProps);
		return nextProps.score !== this.props.score;
	}
}

export default Player;
