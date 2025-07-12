import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import { useCategories } from '../hooks/useCategories'
import PostCard from '../components/PostCard'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

const Home = () => {
  const { posts, loading, error, refetch } = usePosts({ limit: 6 })
  const { categories } = useCategories()
  
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '10px',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to MERN Blog
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Discover amazing stories, insights, and knowledge from our community
        </p>
        <Link to="/posts" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
          Explore Posts
        </Link>
      </section>

      {/* Categories Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Browse Categories</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {categories.slice(0, 6).map(category => (
            <Link
              key={category._id}
              to={`/categories/${category._id}`}
              className="card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'center',
                padding: '1.5rem',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <h3>{category.name}</h3>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>
                {category.description}
              </p>
              <small style={{ color: '#999' }}>
                {category.postCount || 0} posts
              </small>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts Section */}
      <section>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2>Latest Posts</h2>
          <Link to="/posts" className="btn btn-secondary">
            View All Posts
          </Link>
        </div>

        {loading && <Loading message="Loading latest posts..." />}
        
        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={refetch} 
          />
        )}

        {!loading && !error && posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h3>No posts yet</h3>
            <p>Be the first to share your story!</p>
            <Link to="/create-post" className="btn btn-primary">
              Create Post
            </Link>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="post-grid">
            {posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section style={{
        textAlign: 'center',
        padding: '3rem 0',
        marginTop: '3rem'
      }}>
        <h2>Ready to Share Your Story?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666' }}>
          Join our community of writers and share your thoughts with the world
        </p>
        <Link to="/register" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
          Get Started
        </Link>
      </section>
    </div>
  )
}

export default Home