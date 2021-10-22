import React, { useContext, useState } from 'react';
import { createPostAPI, uploadImageAPI } from '../../../api';
import GlobalContext from '../../../context/GlobalContext/GlobalContext';
import Button from '../../common/Button';
import './style.scss';

const NewPost = () => {
	const [showNewPost, setShowNewPost] = useState(false);
	const { profileState, fetchPosts } = useContext(GlobalContext);
	const [profileName, ] = profileState;
	const [postData, setNewPostData] = useState({
		title: '',
		desc: '',
		img: undefined,
	});
	const handleSubmit = async () => {
		try {
			const today = new Date()
			const date = today.toISOString().split('T')[0];
			let reqBody = {
				...postData,
				username: profileName,
				comments: [],
				likes: 0,
				timestamp: date
			};
			if (postData.img) {
				const response = await uploadImageAPI(postData.img);
				reqBody = {
					...reqBody,
					img: response.imageId
				}
			}
			await createPostAPI(reqBody);
			setShowNewPost(false);
			await fetchPosts();
		} catch (err) {
			console.log(err);
		} finally {
			setNewPostData({
				title: '',
				desc: '',
				img: undefined,	
			})
		}
	}
	function getBase64(file) {
		return new Promise((resolve, reject) => {
		  const reader = new FileReader();
		  reader.readAsDataURL(file);
		  reader.onload = () => resolve(reader.result);
		  reader.onerror = error => reject(error);
		});
	}
	return (
		<div className='new-post'>
			<div className='create-p'>
				<span>Have some thoughts? Why don't you create a new Post</span>
				<Button type='outlined' content={`${showNewPost ? 'Cancel': ' Create Post'}`} clickHandler={() => setShowNewPost(!showNewPost)} />
			</div>
			{showNewPost && <div className='add-content'>
				<div className='post-item'>
					<label>Title</label>
					<input 
						className='title-inp' 
						placeholder='What is the title for your post?' 
						onChange={(e) => setNewPostData({ ...postData, title: e.target.value })}
						value={postData.title}
					/>
				</div>
				<div className='post-item'>
					<label>Do you have an image?</label>
					<input 
						type='file' 
						accept="image/*"
						onChange={(e) => {
							const file = e?.target?.files?.[0];
							if (file) {	
								getBase64(file).then(data => {
									setNewPostData({ ...postData, img: data})
								})
							}
						}}
					/>
				</div>
				<div className='post-item'>
					<label>Describe your thought</label>
					<textarea 
						placeholder='More the better'
						onChange={(e) => setNewPostData({ ...postData, desc: e.target.value })}
						value={postData.desc}
					/>
				</div>
				<Button content='Submit' type='primary' clickHandler={handleSubmit} classes='submit-post'/>
			</div>}
		</div>
	)
};

export default NewPost;