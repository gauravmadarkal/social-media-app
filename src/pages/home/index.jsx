import React, { useContext } from 'react';
// import { posts } from '../../api/mock';
import NewPost from '../../components/layout/NewPost';
import Post from '../../components/layout/Post';
import GlobalContext from '../../context/GlobalContext/GlobalContext';
import './style.scss';

const Home = () => {
	const { posts } = useContext(GlobalContext);
	return (
		<div className='container'>
			<NewPost />
			<div className='post-grid'>
				{posts.map(post => (
					<Post data={post} />
				))}
			</div>
		</div>
	);
};

export default Home;