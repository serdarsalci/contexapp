import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import AuthContext from '../contexts/AuthContext'

class BookList extends Component {
	static contextType = ThemeContext
	render() {
		const { isLightTheme, light, dark, testBool, testText } = this.context
		const theme = isLightTheme ? light : dark
		console.log('heeel')

		return (
			<div
				className='book-list'
				style={{ background: theme.ui, color: theme.syntax }}>
				<ul>
					<li style={{ background: theme.bg, color: theme.syntax }}>
						the way of kings
					</li>
					<li style={{ background: theme.bg }}>the name of the wind</li>
					<li style={{ background: theme.bg }}>The final empire</li>
				</ul>
				{testText}
			</div>
		)
	}
}

export default BookList
