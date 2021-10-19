import React, { useState } from 'react';
import Button from '../../common/Button';
import './style.scss';

const NewPost = () => {
	const [showNewPost, setShowNewPost] = useState(false);
	return (
		<div className='new-post'>
			<div className='create-p'>
				<span>Have some thoughts? Why don't you create a new Post</span>
				<Button type='outlined' content={`${showNewPost ? 'Cancel': ' Create Post'}`} clickHandler={() => setShowNewPost(!showNewPost)} />
			</div>
			{showNewPost && <div className='add-content'>
				<div className='post-item'>
					<label>Title</label>
					<input className='title-inp' placeholder='What is the title for your post?' />
				</div>
				<div className='post-item'>
					<label>Do you have an image?</label>
					<input type='file' />
				</div>
				<div className='post-item'>
					<label>Describe your thought</label>
					<textarea placeholder='More the better' />
				</div>
				<Button content='Submit' type='primary' clickHandler={() => {}} classes='submit-post'/>
			</div>}
		</div>
	)
};

export default NewPost;