import React, { Component } from 'react'

class WordDisplay extends Component {
	render() {
		return (
			<ul className="randomWord">
				{this.props.randomWord.split('').map((letter, index) => {
					return (
						<li
							key={index}
							title="Your random word will populate here as you guess the letters correctly"
						>
							{this.props.lettersChosen.includes(letter) ? letter : '_'}
						</li>
					)
				})}
			</ul>
		)
	}
}

export default WordDisplay
