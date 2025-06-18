import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import Genre from './Genre'
import { WatchlistContext } from '../context/WatchListContext'
import Moviecard from './Moviecard'

const Watchlist = () => {
    const { watchlist } = useContext(WatchlistContext)
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const filteredMovies = watchlist.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()))
        .filter((movie) =>
            selectedGenre === "" || movie.genre_ids.includes(parseInt(selectedGenre))
        );
    return (
        <div className='p-4 pt-16'>
            <input type='text' placeholder='Search Movies...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16  transform- translate-x-1/2  z-10'
            ></input>
            <div className='mt-16 flex justify-center'>
                <Genre selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} /></div>


            <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 '>
                {filteredMovies.map(movie => {
                    return (<Moviecard key={movie.id} movie={movie} />)
                })}

            </div>
        </div>
    )
}

export default Watchlist