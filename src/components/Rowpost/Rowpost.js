import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { apiKey, imageUrl } from "../../constants/constant";
function Rowpost(props) {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        console.log(Response.data);
        setMovies(Response.data.results)
      });
  }, []);

  return (
    <div className="row">
      <h1 className="title">{props.title}</h1>
      <div className="posters">
        {movies.map((obj)=>
        <img
        className={props.isSmall ? 'smallPoster' : 'imgposters' }
        src={`${imageUrl+obj.backdrop_path}`}
        alt="posters"
      />
        )}
        
        
      </div>
      
    </div>
  );
}

export default Rowpost;
