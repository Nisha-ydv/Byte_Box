import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const [showContentId, setShowContentId] = useState(null); // to toggle content view
  const dispatch = useDispatch();

  const filteredData = (pastes || []).filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="min-h-screen px-6 py-4 bg-gray-100">
      <input
        className="p-3 rounded-xl w-full max-w-3xl mx-auto block mt-5 bg-white border border-gray-300 shadow-sm"
        type="search"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mt-8 space-y-6 max-w-4xl mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste._id}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {paste.title}
                </h2>
                <span className="text-sm text-gray-500">
                  {new Date(paste.createdAt).toLocaleString()}
                </span>
              </div>

              {showContentId === paste._id && (
                <div className="mt-4 bg-gray-50 p-3 rounded-lg text-gray-700 font-mono whitespace-pre-wrap">
                  {paste.content}
                </div>
              )}

              <div className="flex gap-3 mt-4 flex-wrap">
                <Link to={`/?pasteId=${paste._id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-full">
                    Edit
                  </button>
                </Link>

                <Link to={`/pastes/${paste._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(paste._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success('Copied to clipboard');
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full"
                >
                  Copy
                </button>

                <button
                  onClick={() =>
                    setShowContentId(
                      showContentId === paste._id ? null : paste._id
                    )
                  }
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1 rounded-full"
                >
                  {showContentId === paste._id ? 'Hide' : 'Show'} Code
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No pastes found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
