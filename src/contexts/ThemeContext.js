import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: true,
		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
		testBool: false,
		testText: 'text in state',
	}

	toggleTest = () => {
		this.setState({
			testBool: !this.state.testBool,
			testText: this.state.testBool ? 'original text' : 'text has changed',
		})
		// this.setState({ testText: 'testText has changed' })
	}
	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme })
	}
	render() {
		return (
			<ThemeContext.Provider
				value={{
					...this.state,
					...this.test,
					toggleTheme: this.toggleTheme,
					toggleTest: this.toggleTest,
				}}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}

export default ThemeContextProvider
