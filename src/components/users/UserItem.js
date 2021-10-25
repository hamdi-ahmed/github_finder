import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user, match }) => {
	const { avatar_url, login } = user
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				style={{ width: '150px', borderRadius: '50%' }}
				alt={login}
			/>
			<h3>{user.login}</h3>
			<Link to={`/user/${login}`} className="btn btn-primary btn-sm m-1">
				More
			</Link>
		</div>
	)
}

export default UserItem
