import React from 'react'

{/*useParams() Hook give us power to generate ids*/}
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
