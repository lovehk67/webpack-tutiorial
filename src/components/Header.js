import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

const Header = (props) => {
	const {players, title} = props;
	console.log(props);
	return (
	<header>
		<Stats players={players}/>
		<h1>{ title }</h1>
		<Stopwatch />
	</header>
	);
}

Header.propTypes = {
	players	: PropTypes.arrayOf(PropTypes.object)
	,title	: PropTypes.string
}
Header.defaultProps = {
	title		:'Scoreboard'
}

export default Header;
