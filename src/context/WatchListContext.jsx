import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=e2b742728e4f921405fa9824e72df53d`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setGenreList(data.genres)) 
      .catch((error) => console.error("Genre fetch error:", error));
  }, []);

  const toggleWatchlist = (movie) => {
    const index = watchlist.findIndex((m) => m.id === movie.id);

    if (index === -1) {
      setWatchlist([...watchlist, movie]);
    } else {
      setWatchlist([
        ...watchlist.slice(0, index),
        ...watchlist.slice(index + 1),
      ]);
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, genreList }}>
      {children}
    </WatchlistContext.Provider>
  );
};