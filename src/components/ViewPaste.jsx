import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ViewPaste() {
  const { id } = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.find((p) => p._id === id)

  if (!paste) return <div className="p-6 text-center text-gray-600">Paste not found.</div>

  return (
    <div className="p-6 flex flex-col items-center">
      <input
        className="p-3 rounded-xl w-full max-w-3xl bg-gray-200 text-gray-700 font-semibold"
        value={paste.title}
        disabled
      />

      <textarea
        className="bg-red-100 mt-6 p-4 w-full max-w-3xl min-h-[300px] rounded-xl"
        value={paste.content}
        disabled
      />
    </div>
  )
}

export default ViewPaste

