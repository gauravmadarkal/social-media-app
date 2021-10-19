import React from 'react';
import { posts } from '../../api/mock';
import NewPost from '../../components/layout/NewPost';
import Post from '../../components/layout/Post';
import './style.scss';

const Home = () => {
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