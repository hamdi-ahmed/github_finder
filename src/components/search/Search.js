import React, { useState, useContext, Fragment } from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = () => {
	// Context
	const githubContext = useContext(GithubContext)
	const { searchUsers, clearRepos } = githubContext

	// state
	const [text, setText] = useState('')
	const [valid, setValid] = useState("Search shouldn't be empty")

	// Clear
	const handleClick = () => {
		clearRepos()
		setText('')
	}

	// Form Submit
	const handleSubmit = (e) => {
		e.preventDefault()
		if (text === '') {
			setValid("Search shouldn't be empty")
		} else {
			searchUsers(text)
		}
	}

	return (
		<Fragment>
			{text === '' && <div className="adding badge badge-light">{valid}</div>}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Search for users.."
				/>
				<button type="submit" className="btn btn-block btn-dark">
					Search
				</button>
			</form>
			<button onClick={handleClick} className="btn btn-light btn-block my-1">
				Clear
			</button>
		</Fragment>
	)
}

export default Search
