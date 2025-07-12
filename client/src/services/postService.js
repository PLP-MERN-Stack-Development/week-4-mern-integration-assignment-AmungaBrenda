import api from './api'

export const postService = {
  // Get all posts
  getAllPosts: async (params = {}) => {
    try {
      const response = await api.get('/posts', { params })
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get post by ID
  getPostById: async (id) => {
    try {
      const response = await api.get(`/posts/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Create new post
  createPost: async (postData) => {
    try {
      const response = await api.post('/posts', postData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Update post
  updatePost: async (id, postData) => {
    try {
      const response = await api.put(`/posts/${id}`, postData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Delete post
  deletePost: async (id) => {
    try {
      const response = await api.delete(`/posts/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get posts by category
  getPostsByCategory: async (categoryId) => {
    try {
      const response = await api.get(`/posts/category/${categoryId}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get posts by user
  getPostsByUser: async (userId) => {
    try {
      const response = await api.get(`/posts/user/${userId}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
}