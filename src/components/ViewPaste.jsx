import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes } from '../Redux/pasteSlice';


function ViewPaste() {

  const {id}= useParams();
  const allPastes=useSelector((state)=> state.paste.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];
  return (
    <div>
      <div className='flex flex-row gap-10 place-content-evenly'>
      <input 
      className='p-2 rounded-2xl mt-2 bg-amber-700 text-white'
      type='text'
      placeholder='Enter title here'
      value={paste.title}
      disabled
      onChange={(e)=> setTitle(e.target.value)}
      />

      

    </div>

    <div className='mt-8'>
    <textarea
      className='bg-red-100 p-3 mt-4 rounded-2xl min-w-[500px]'
      value={paste.content}
      placeholder='enter content here'
      disabled
      onChange={(e)=> setValue(e.target.value)}
      rows={20}
    />
    </div>


    </div>
  )
}

export default ViewPaste
