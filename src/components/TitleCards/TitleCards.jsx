import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
  const [apiData, setApiData] =useState([]);
  const cardRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdkYjExNmNjMTVmMmIwZmMxYzJmODVhMGQzOTI4MCIsIm5iZiI6MTc0MTYyMTczNi45Miwic3ViIjoiNjdjZjA5ZThkOTVlNDExZGQwMmE4NzJhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NGCYIUoBx74Bo1t9N3zpwriQxE7DEZB0lLpv-HY87mQ'
    }
  };
  
  
  const handleWheel = (event)=>{
      event.preventDefault();
      cardRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel',handleWheel); 
  },[category])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`}  className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
      </div>
  )
}

export default TitleCards