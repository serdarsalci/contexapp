import React, { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const TestComponent = () => {
	let { light, dark, isLightTheme } = useContext(ThemeContext)

	let theme = isLightTheme ? light : dark

	return (
		<div style={{ background: theme.bg, color: theme.syntax }}>
			{theme.syntax}
			<br />
			{isLightTheme ? 'light' : 'dark'}
			<h1>Test component</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
				adipisci quidem explicabo eum nisi ex ducimus voluptas atque eos,
			</p>
			<br />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt magni
				est itaque vero fugiat voluptas rerum esse aut odio quasi.
			</p>
			<button onClick={() => {}}>{isLightTheme ? 'dark' : 'light'}</button>
			<div>{theme.bg}</div>
		</div>
	)
}

export default TestComponent
