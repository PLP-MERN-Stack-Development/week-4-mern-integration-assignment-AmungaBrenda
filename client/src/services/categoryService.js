import api from './api'

export const categoryService = {
  // Get all categories
  getAllCategories: async () => {
    try {
      const response = await api.get('/categories')
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get category by ID
  getCategoryById: async (id) => {
    try {
      const response = await api.get(`/categories/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Create new category
  createCategory: async (categoryData) => {
    try {
      const response = await api.post('/categories', categoryData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Update category
  updateCategory: async (id, categoryData) => {
    try {
      const response = await api.put(`/categories/${id}`, categoryData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Delete category
  deleteCategory: async (id) => {
    try {
      const response = await api.delete(`/categories/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
}