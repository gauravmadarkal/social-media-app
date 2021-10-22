import { COMMENTS_URL, IMAGES_URL, LIKES_URL, POSTS_URL } from "./endpoints";

export const getPostsAPI = async () => {
	const response = await fetch(POSTS_URL);
	return await response.json();
};

export const createPostAPI = async (post) => {
	const body = { post };
	await fetch(POSTS_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',

		},
		body: JSON.stringify(body)
	});
};

export const uploadImageAPI = async (buffer) => {
	const body = { buffer };
	const res = await fetch(IMAGES_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(body)
	});
	return await res.json();
}

export const incrementLikesAPI = async (postId) => {
	const body = { postId };
	const res = await fetch(LIKES_URL, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(body)
	});
	return await res.json();
}

export const updateCommentsAPI = async (postId, newComment) => {
	const body = { postId, newComment };
	const res = await fetch(COMMENTS_URL, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(body)
	});
	return await res.json();
}