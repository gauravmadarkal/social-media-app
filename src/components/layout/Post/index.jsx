import React, { useContext, useState } from 'react';
import './style.scss';
import Like from '../../../assets/imgs/like.png';
import Comment from '../../../assets/imgs/comment.png';
import { incrementLikesAPI, updateCommentsAPI } from '../../../api';
import GlobalContext from '../../../context/GlobalContext/GlobalContext';
import Button from '../../common/Button';

const Post = ({
	data
}) => {
	const [showComments, setShowComments] = useState(false);
	const [comment, setNewComment] = useState();
	const { profileState, fetchPosts } = useContext(GlobalContext);
	const [profileName, ] = profileState;
	const getTimestamp = (d) => {
		if (d) {
			const posted = Date.parse(d);
			const today = Date.now();
			const diffTime = Math.abs(today - posted);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			if ((diffDays/30) > 3) {
				return {
					months: parseInt(diffDays/30)
				};
			}
			return {
				days: diffDays
			};
		}
		return {
			days: 1
		};
	}

	const addLike = async () => {
		await incrementLikesAPI(data.postId);
		await fetchPosts()
	}

	const updateComments = async () => {
		await updateCommentsAPI(
			data.postId,
			{
				comment,
				username: profileName
			}
		);
		await fetchPosts()
		setNewComment('');
	}

	const getCommentedUsername = (name) => {
		if (name === null || name === undefined) {
			return "Anonymous";
		}
		return name;
	}

	return (
		<div className='post'>
			<div className='row'>
				<div className='col content'>
					<p className='timestamp'>
						<b>{data.username}</b> Posted {getTimestamp(data.timestamp).days ? getTimestamp(data.timestamp).days + " days back" : getTimestamp(data.timestamp).months + " months back"} 
					</p>

					<p className='post-title'>{data.title}</p>
					{data.desc && <p className='post-desc'>{data.desc}</p>}
					{data.img && <img className='post-img' src={data.img} alt='Thoughts - Post' />}
					{data.comments && showComments && 
						<div className='post-comments'>
							<p className='comments-heading'>Comments</p>
							<div className='new-comment'>
								<input 
									type='text' 
									placeholder='Write a comment' 
									className='comment'
									value={comment}
									onChange={(e) => setNewComment(e.target.value)}
								/>
								<Button content='Comment' type='primary' clickHandler={updateComments} classes='submit-comment' />
							</div>
							{data.comments.map(comt_data => (
								<>
									<p className='comment-user'><b><i>{getCommentedUsername(comt_data.username)}</i></b> commented</p>
									<p className='comment'>{comt_data.comment}</p>
								</>
							))}
						</div>
					}
				</div>
				<div className='col actions'>
					<div className='count'>
						<span>{data.likes}</span>
					</div>
					<img 
						className='post-action' 
						src={Like}
						alt='Like a post'
						onClick={addLike}
					/>
					<div className='count'>
						<span>{data.comments.length}</span>
					</div>
					<img 
						className='post-action' 
						src={Comment}
						alt='Comment on a post'
						onClick={() => setShowComments(!showComments)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Post;