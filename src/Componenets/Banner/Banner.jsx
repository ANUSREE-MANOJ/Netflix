import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'
import {ApiKey,imageUrl} from '../../Constants/Constant'
function Banner() {

          const[movie,setMovie]=useState(null)
useEffect(()=>{


  axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((response)=>{
    let random = Math.floor(Math.random() * 20)

    console.log(response.data.results[0])
    setMovie(response.data.results[random])

  })


},[])



  return (
   
    <div className='Banner ' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
    <div className="content pt-44 h-96  pl-6">
        
        <h1 className='text-5xl   pb-4 font-extrabold'>{movie?movie.title:""}</h1>
        <div className=' '>

            <button className=' text-white font-bold rounded-md pl-6 pr-6 pt-1 pb-1 mt-2 bg-gray-700 bg-opacity-25 cursor-pointer hover:text-black mr-4 hover:bg-white'>Play</button>
            <button className=' text-white font-bold rounded-md pl-6 pr-6 pt-1 pb-1 mt-2 bg-gray-700 bg-opacity-25 cursor-pointer hover:text-black mr-4 hover:bg-white'>My List</button>
        </div>
        <h1 className='w-[900px] leading-tight pt-4 font-medium h-[80px] max-w-[450px]'>{movie?movie.overview:""}</h1>
    </div>

    <div className="fade-bottom h-24 "></div>
    </div>
  )
}

export default Banner