import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

function TVShowSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="tv-show-search">
    <h2 style={{fontFamily:"cursive", color:"#370617", fontSize:"5vw"}}>Movie Description</h2>
    <h2>Search Any Tv Show or Movie</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter TV show title"
      />
      <button onClick={handleSearch}>Search</button>
      <ul className="results">
        {results.map(result => (
          <li key={result.show.id} className="show-card">
            <div className="show-image">
              <img src={result.show.image?.medium} alt={result.show.name} />
            </div>
            <div className="show-details">
              <h3>{result.show.name}</h3>
              <p><strong>Language:</strong> {result.show.language}</p>
              <p><strong>Genres:</strong> {result.show.genres.join(', ')}</p>
              <p><strong>Premiered:</strong> {result.show.premiered}</p>
              <p><strong>Ended:</strong> {result.show.ended}</p>
              <p><strong>Official Site:</strong> <a href={result.show.officialSite} target="_blank" rel="noopener noreferrer">{result.show.officialSite}</a></p>
              <p><strong>IMDb Rating:</strong> {result.show.rating.average}</p>
              <div className="summary" dangerouslySetInnerHTML={{ __html: result.show.summary }} />
              <p><strong>Status:</strong> {result.show.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TVShowSearch;
