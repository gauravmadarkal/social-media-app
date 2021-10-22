// ENDPOINT DOCUMENTATION

export const BASE_URL = 'https://api.gauravmadarkal.workers.dev/api';
// ENDPOINT - "/api/posts"
// METHOD - "POST"
/*-------------add new post--------------
{
	title: string,
	desc: string,
	img: imageId,
	comments: [],
	likes: number
}
*/
export const POSTS_URL = `${BASE_URL}/posts`;
// ENDPOINT - "/api/images"
// METHOD - "POST"
/*-------------upload an image--------------
{
	"buffer": imageData
}
*/
export const IMAGES_URL = `${BASE_URL}/images`;

// ENDPOINT - "/api/post/likes"
// METHOD - "PUT"
/*------------like post---------------
{
 "postId": "post_1634881231456"
}
*/
export const LIKES_URL = `${BASE_URL}/post/likes`;
// ENDPOINT - "/api/post/comments"
// METHOD - "PUT"
/*-------------add comments--------------
{
	"postId": "post_1634881231456",
	"newComment": {
		"comment": "this looks bad",
		"username": "gaurav"
	}
}
*/
export const COMMENTS_URL = `${BASE_URL}/post/comments`;



