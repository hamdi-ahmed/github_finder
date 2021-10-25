import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import GithubState from './context/github/GithubState'
import SingleUser from './pages/SingleUser'

const App = () => {
	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Route path="/" exact component={Home} />
						<Route path="/user/:username" exact component={SingleUser} />
					</div>
					<Route path="/about" exact component={About} />
				</div>
			</Router>
		</GithubState>
	)
}

export default App
