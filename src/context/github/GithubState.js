import React, { useReducer } from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import { githubReducer } from './githubReducer'
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_REPOS,
	GET_USER,
	GET_REPOS,
} from '../types'

const GithubState = (props) => {
	// Initial State
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	}

	// dispatch
	const [state, dispatch] = useReducer(githubReducer, initialState)

	// Search for users
	const searchUsers = async (username) => {
		setLoading()
		const res = await axios.get(
			`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		})
	}

	// Get User
	const getUser = async (username) => {
		setLoading()
		const res = await axios.get(`https://api.github.com/users/${username}`)
		dispatch({ type: GET_USER, payload: res.data })
	}

	// Get User Repos
	const getRepos = async (username) => {
		setLoading()
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		dispatch({
			type: GET_REPOS,
			payload: res.data,
		})
	}

	// Clear Search
	const clearRepos = () => dispatch({ type: CLEAR_REPOS })

	// Loading
	const setLoading = () => dispatch({ type: SET_LOADING })

	return (
		<githubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearRepos,
				getUser,
				getRepos,
			}}
		>
			{props.children}
		</githubContext.Provider>
	)
}

export default GithubState
