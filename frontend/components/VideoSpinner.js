import React from 'react'

export default function VideoSpinner() {
  return (
    <div className="absolute top-0 h-screen w-screen flex justify-center items-center bg-gray-800">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
