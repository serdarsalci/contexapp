import BookList from './components/BookList'
import Navbar from './components/Navbar'
import TestComponent from './components/TestComponent'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider, { AuthContext } from './contexts/AuthContext'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
	return (
		<div className='App'>
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
					<BookList />
					<ThemeToggle />
					{/* <TestComponent /> */}
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	)
}

export default App
