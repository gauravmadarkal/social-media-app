import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../api';
import GlobalContext from '../GlobalContext';


const GlobalContextProvider = ({
	children
}) => {
	const [profileName, setProfileName] = useState();
	const [posts, setPosts] = useState();

	const fetchPosts = async () => {
		const response = await getPosts();
		console.log(response);
		setPosts(response.posts);
	}

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				profileState: [profileName, setProfileName],
				fetchPosts,
				posts
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalContextProvider;