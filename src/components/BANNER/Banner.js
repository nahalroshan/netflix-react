import React, { useState } from "react";
import "./Banner.css";
import { useEffect } from "react";
import axios from "../../axios";
import { apiKey,imageUrl } from "../../constants/constant";

function Banner() {
  const [movie, setMovie] = useState()
 /* const [count, setCount] = useState(0)*/


  
 /* useEffect(() => {
   setTimeout(()=>{
    setCount((count)=>count+1);
   },2000)
  },)*/
  

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[6]);
        setMovie(response.data.results[6])
      });
  }, []);

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className="banner">
      <div className="content">
        <h1 className="content1">{movie ? movie.title : ""}</h1>
        <div className="buttons">
          <button className="button1">Play</button>
          &nbsp;&nbsp;&nbsp;
          <button className="button2">change</button>
        </div>
        <h3 className="content2">{movie ? movie.overview : ""}
        </h3>
        
    
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
