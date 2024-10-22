const ENDPOINTS = {
  getAllPosts: (filter: string) => `/posts${filter}`,
  getAllUsers: '/users',
  getUser: (userId: string) => `/users/${userId}`,
  getPost: (postId: string) => `/posts/${postId}`,
};

export default ENDPOINTS;
