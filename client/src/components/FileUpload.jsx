import React, { useState } from 'react'
import { uploadService } from '../services/uploadService'
import { formatFileSize, isValidFileType, isValidFileSize } from '../utils/helpers'

const FileUpload = ({ onUpload, accept = "image/*", maxSize = 5 * 1024 * 1024 }) => {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setError(null)

    // Validate file type
    if (!isValidFileType(file)) {
      setError('Please select a valid image file (JPEG, PNG, GIF)')
      return
    }

    // Validate file size
    if (!isValidFileSize(file, maxSize)) {
      setError(`File size must be less than ${formatFileSize(maxSize)}`)
      return
    }

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target.result)
    }
    reader.readAsDataURL(file)

    try {
      setUploading(true)
      const response = await uploadService.uploadFile(file)
      onUpload(response.url)
    } catch (err) {
      setError(err.message || 'Upload failed')
      setPreview(null)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="file-upload">
      <div className="form-group">
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Upload Image
        </label>
        <input
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          disabled={uploading}
          className="form-control"
          style={{
            padding: '10px',
            border: '2px dashed #ddd',
            borderRadius: '5px',
            cursor: uploading ? 'not-allowed' : 'pointer'
          }}
        />
      </div>

      {uploading && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="spinner"></div>
          <p>Uploading...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {preview && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              objectFit: 'cover',
              borderRadius: '5px'
            }}
          />
        </div>
      )}
    </div>
  )
}

export default FileUpload