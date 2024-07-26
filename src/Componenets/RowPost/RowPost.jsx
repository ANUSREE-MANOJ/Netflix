import React, { useEffect, useState } from "react";
import axios from "../../axios";
import {ApiKey, imageUrl} from "../../Constants/Constant";
import YouTube from "react-youtube";
import './RowPost.css'


function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const[urlid,setUrlId]=useState("")
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results)
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const handleMovie=(id)=>{
     console.log(id)
     axios.get( `https://api.themoviedb.org/3/movie/${id}/videos?api_key=37826db6bb80828807bcabb9ac811466
     ` ).then(response=>{
      if(response.data.results.length!==0)
      {
        setUrlId(response.data.results[0])
      }
      else
      {
        console.log('Array empty')
      }
     })
     

  }
  return (
    <div className="row ml-10 text-white">
      <h2>{props.title}</h2>
      <div className="posters flex p-10 overflow-x-scroll overflow-y-hidden ">

        {movies.map((obj)=>
             <img onClick={()=>handleMovie(obj.id)}
             src={`${imageUrl+obj.backdrop_path}`}
             alt=""
             className={props.isSmall ? 'max-h-[150px] mr-[10px]' :"max-h-[250px] mr-[10px]"}
           />
        )}
        

       
      </div>
     {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
      
    </div>
  );
}

export default RowPost;
