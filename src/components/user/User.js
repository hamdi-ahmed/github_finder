import React, { useContext, useEffect } from 'react'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layouts/Spinner'
import SingleUserItem from './SingleUserItem'
import UserRepos from './UserRepos'

const User = ({ match }) => {
	// Context
	const githubContext = useContext(GithubContext)
	const { loading, user, getUser, getRepos, repos } = githubContext

	// Fetch Single User
	useEffect(() => {
		getUser(match.params.username)
		getRepos(match.params.username)
		// eslint-disable-next-line
	}, [])
	//console.log(match)
	loading && <Spinner />
	return (
		<div className="container">
			<SingleUserItem user={user} />
			<UserRepos repos={repos} />
		</div>
	)
}

export default User
