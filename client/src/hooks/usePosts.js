import { useState, useEffect } from 'react'
import { postService } from '../services/postService'

export const usePosts = (initialParams = {}) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [params, setParams] = useState(initialParams)

  const fetchPosts = async (searchParams = params) => {
    try {
      setLoading(true)
      setError(null)
      const data = await postService.getAllPosts(searchParams)
      setPosts(data.posts || data)
    } catch (err) {
      setError(err.message || 'Failed to fetch posts')
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [params])

  const refetch = () => {
    fetchPosts()
  }

  const updateParams = (newParams) => {
    setParams(prev => ({ ...prev, ...newParams }))
  }

  const createPost = async (postData) => {
    try {
      const newPost = await postService.createPost(postData)
      setPosts(prev => [newPost, ...prev])
      return { success: true, post: newPost }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updatePost = async (id, postData) => {
    try {
      const updatedPost = await postService.updatePost(id, postData)
      setPosts(prev => prev.map(post => 
        post._id === id ? updatedPost : post
      ))
      return { success: true, post: updatedPost }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deletePost = async (id) => {
    try {
      await postService.deletePost(id)
      setPosts(prev => prev.filter(post => post._id !== id))
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return {
    posts,
    loading,
    error,
    refetch,
    updateParams,
    createPost,
    updatePost,
    deletePost
  }
}