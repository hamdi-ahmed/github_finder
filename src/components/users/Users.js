import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

const Users = () => {
	// Context
	const githubContext = useContext(GithubContext)
	const { users, loading } = githubContext

	// Spinner
	if (loading) return <Spinner />
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				gridGap: '1rem',
			}}
		>
			{users && users.map((user) => <UserItem user={user} key={user.id} />)}
		</div>
	)
}

export default Users
