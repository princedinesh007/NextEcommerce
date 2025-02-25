import React from 'react'
import { ClipLoader } from 'react-spinners'; 

const Loading = () => {
  return (
    <div className="loader-container">
    <ClipLoader size={50} color="#3498db" />
  </div>
  )
}

export default Loading