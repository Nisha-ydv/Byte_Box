import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updateToPastes } from '../Redux/pasteSlice'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const Home = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")
  const pastes = useSelector(state => state.paste.pastes)

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find(p => p._id === pasteId)
      if (paste) {
        setTitle(paste.title)
        setValue(paste.content)
      }
    }
  }, [pasteId, pastes])

  function createPaste() {
    if (!title.trim()) {
      toast.error("Title cannot be empty!")
      return
    }

    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste))
      toast.success("Paste updated!")
    } else {
      dispatch(addToPastes(paste))
      toast.success("Paste created!")
    }

    setTitle('')
    setValue('')
    window.history.replaceState(null, '', '/')
  }

  return (
    <div className="flex flex-col gap-5 bg-gray-100 p-6 rounded-2xl shadow-md max-w-5xl mx-auto mt-6">
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold text-gray-700">Paste Title</label>
        <input
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold text-gray-700">Paste Content</label>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={12}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none"
          placeholder="Enter your code or content here..."
        />
      </div>

      <button
        onClick={createPaste}
        className="self-start px-6 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button>
    </div>
  )
}

export default Home
