import React from 'react';

class AddPlayerForm extends React.Component {
	textInput = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.textInput.current.value);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" ref={this.textInput} placeholder="enter a playr's name" />
				<input type="submit" value="Add Player"/>
			</form>
		);
	}
}

export default AddPlayerForm;
