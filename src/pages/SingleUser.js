import React, { Fragment } from 'react'
import User from '../components/user/User'

const SingleUser = ({ match }) => {
	return (
		<Fragment>
			<User match={match} />
		</Fragment>
	)
}

export default SingleUser
