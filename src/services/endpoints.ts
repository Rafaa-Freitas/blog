const ENDPOINTS = {
  getAllPosts: (filter: string) => `/posts${filter}`,
  getAllUsers: '/users',
  getUser: (userId: string) => `/users/${userId}`,
};

export default ENDPOINTS;
