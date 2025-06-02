import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const {id} = useParams()
  return (
    <>
      <h1>Blog Details - ID : {id}</h1>
    </>
  )
}

export default BlogDetails
