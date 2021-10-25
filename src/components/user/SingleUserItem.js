import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const SingleUserItem = ({ user }) => {
	// user
	const {
		login,
		company,
		name,
		avatar_url,
		location,
		bio,
		blog,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user

	return (
		<Fragment>
			<Link to="/" className="btn btn-light">
				Back To Home
			</Link>
			Hireable:{' '}
			{hireable ? (
				<i className="fa-solid fa-check btn-success"></i>
			) : (
				<i className="fa-solid fa-circle-xmark btn-danger"></i>
			)}
			<div className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						className="round-img"
						style={{ width: '150px' }}
						alt=""
					/>
					<h1>{login}</h1>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio: </h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url}>Visit Profile Github</a>
					<ul>
						<li>
							<strong>Name:</strong> {name}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong>
									{company}
								</Fragment>
							)}
						</li>
						<li>
							<strong>Website:</strong> {blog}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-success">Following: {following}</div>
				<div className="badge badge-danger">Public Repos: {public_repos}</div>
				<div className="badge badge-dark">Public Gists: {public_gists}</div>
			</div>
		</Fragment>
	)
}

export default SingleUserItem
