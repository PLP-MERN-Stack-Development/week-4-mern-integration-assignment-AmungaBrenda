import api from './api'

export const uploadService = {
  // Upload single file
  uploadFile: async (file, type = 'image') => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)

      const response = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Upload multiple files
  uploadMultipleFiles: async (files, type = 'image') => {
    try {
      const formData = new FormData()
      files.forEach((file, index) => {
        formData.append(`files`, file)
      })
      formData.append('type', type)

      const response = await api.post('/upload/multiple', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Delete uploaded file
  deleteFile: async (filename) => {
    try {
      const response = await api.delete(`/upload/${filename}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
}