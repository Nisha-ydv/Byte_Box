import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes } from '../Redux/pasteSlice';


function Home() {
   
    const[title,setTitle]=useState('');
    const [value,setValue]=useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId");
    const dispatch=useDispatch();
    const allPastes=useSelector((state)=>state.paste.pastes)

    useEffect(() => {
      if(pasteId){
        const paste=allPastes.find((p)=>
        p._id===pasteId)
        setTitle(paste.title);
        setValue(paste.content);
      }
       
     }, [pasteId]);

    function createPaste(){
    const paste ={
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

   


    if(pasteId){
     //update
     dispatch(updateToPaste(paste));
    }
    else{
    // create
    dispatch(addToPastes(paste));
    }

    // After creation and updation
    setTitle('');
    setValue('');
    setSearchParams({});
    }
    
  return (
    <div>
      <div className='flex flex-row gap-10 place-content-evenly'>
      <input 
      className='p-2 rounded-2xl mt-2 bg-amber-700 text-white'
      type='text'
      placeholder='Enter title here'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />

      <button  onClick={createPaste} className='text-white bg-amber-700 mt-2 rounded-2xl p-2'>
      {
        pasteId ? "update Paste":"Create My Paste"
      } 
      </button>

    </div>

    <div className='mt-8'>
    <textarea
      className='bg-red-100 p-3 mt-4 rounded-2xl min-w-[500px]'
      value={value}
      placeholder='enter content here'
      onChange={(e)=> setValue(e.target.value)}
      rows={20}
    />
    </div>


    </div>
  )
}

export default Home

