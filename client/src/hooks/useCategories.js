import { useState, useEffect } from 'react'
import { categoryService } from '../services/categoryService'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await categoryService.getAllCategories()
      setCategories(data.categories || data)
    } catch (err) {
      setError(err.message || 'Failed to fetch categories')
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const refetch = () => {
    fetchCategories()
  }

  const createCategory = async (categoryData) => {
    try {
      const newCategory = await categoryService.createCategory(categoryData)
      setCategories(prev => [...prev, newCategory])
      return { success: true, category: newCategory }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateCategory = async (id, categoryData) => {
    try {
      const updatedCategory = await categoryService.updateCategory(id, categoryData)
      setCategories(prev => prev.map(category => 
        category._id === id ? updatedCategory : category
      ))
      return { success: true, category: updatedCategory }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteCategory = async (id) => {
    try {
      await categoryService.deleteCategory(id)
      setCategories(prev => prev.filter(category => category._id !== id))
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return {
    categories,
    loading,
    error,
    refetch,
    createCategory,
    updateCategory,
    deleteCategory
  }
}