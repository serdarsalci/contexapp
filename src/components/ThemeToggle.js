import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
class ThemeToggle extends Component {
	static contextType = ThemeContext
	render() {
		const { toggleTheme, toggleTest } = this.context
		return (
			<>
				<button onClick={toggleTheme}>Toggle the Theme</button>
				<br />
				<button onClick={toggleTest}>toggle test</button>
			</>
		)
	}
}

export default ThemeToggle
