import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate, extractExcerpt } from '../utils/helpers'

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      {post.featuredImage && (
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="post-image"
        />
      )}
      
      <div className="post-content">
        <h3 className="post-title">
          <Link 
            to={`/posts/${post._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {post.title}
          </Link>
        </h3>
        
        <p className="post-excerpt">
          {extractExcerpt(post.content, 120)}
        </p>
        
        <div className="post-meta">
          <div>
            <span className="category-badge">
              {post.category?.name || 'Uncategorized'}
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <div>By {post.author?.name || 'Anonymous'}</div>
            <div>{formatDate(post.createdAt)}</div>
          </div>
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <Link 
            to={`/posts/${post._id}`}
            className="btn btn-primary"
            style={{ textDecoration: 'none' }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard