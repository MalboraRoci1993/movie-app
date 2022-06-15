import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type,Awards, Director} }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p> </p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400x500"} alt={Title} />
      </div>

      <div>
        <span>{Type} | {Year} </span>
        <span>{Director}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;