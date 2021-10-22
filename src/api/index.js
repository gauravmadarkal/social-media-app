import { IMAGES_URL, POSTS_URL } from "./endpoints";

export const getPosts = async () => {
	const response = await fetch(POSTS_URL);
	return await response.json();
};

export const createPost = async (post) => {
	const body = { post };
	await fetch(POSTS_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',

		},
		body: JSON.stringify(body)
	});
};

export const uploadImage = async (buffer) => {
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