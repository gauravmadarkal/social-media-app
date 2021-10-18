import React, { useState } from 'react';
import './style.scss';
import Like from '../../../assets/imgs/like.png';
import Comment from '../../../assets/imgs/comment.png';

const Post = ({
	data
}) => {
	const [showComments, setShowComments] = useState(false);
	const getTimestamp = (d) => {
		const posted = Date.parse(d);
		const today = Date.now();
		const diffTime = Math.abs(today - posted);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		console.log(diffDays)
		if ((diffDays/30) > 3) {
			return {
				months: parseInt(diffDays/30)
			};
		}
		return {
			days: diffDays
		};
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
					{data.img && <img className='post-img' src={data.img} />}
					{data.comments && showComments && 
						<div className='post-comments'>
							<p className='comments-heading'>Comments</p>
							<input type='text' placeholder='Write a comment' className='comment'/>
							{data.comments.map(comment => (
								<p className='comment'>{comment}</p>
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
					/>
					<div className='count'>
						<span>{data.comments.length}</span>
					</div>
					<img 
						className='post-action' 
						src={Comment}
						onClick={() => setShowComments(!showComments)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Post;