import React, { Fragment } from 'react'
import Search from '../components/search/Search'
import Users from '../components/users/Users'

const Home = () => {
	return (
		<Fragment>
			<Search />
			<Users />
		</Fragment>
	)
}

export default Home
