import React from 'react'

const UserRepos = ({ repos }) => {
	console.log(repos)
	return repos.map((repo) => (
		<div key={repo.id} className="card">
			<a href={repo.html_url}>{repo.name}</a>
		</div>
	))
}

export default UserRepos
