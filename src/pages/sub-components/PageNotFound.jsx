import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white-900">404</h1>
        <p className="mt-4 text-3xl text-gray-400">Oops! Page not found.</p>
        <p className="mt-2 text-3xl text-gray-400">The page you are looking for does not exist.</p><br/>
        <Link to="/" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Go back to home</Link>
        </div>
    </div>
  )
}

export default PageNotFound
