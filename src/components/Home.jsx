import React from 'react'
import { useState, useEffect } from 'react'
import Moviecard from './Moviecard'


export const Home = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=5e7d8c2ff96d8889d8fdfbd48894d985`
        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=5e7d8c2ff96d8889d8fdfbd48894d985`;
        }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response: ", data);
                if (data.results) {
                    setMovies(data.results);
                } else {
                    setMovies([]);
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setMovies([]);
            });
    }, [page, search]);
    return (
        <div className='p-4 pt-16'>
            <input type='text' placeholder='Search Movies...'
                className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16  transform- translate-x-1/2 z-10'
                onChange={(e) => setSearch(e.target.value)}
            ></input>
            <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 '>
                {movies.map(movie => {
                    return (<Moviecard key={movie.id} movie={movie} />)
                })}

            </div>
            <div className="pagination-container flex justify-between mt-5">
                <button disabled={page == 1}
                    className='p-2 bg-gray-700 text-white rounded'
                    onClick={() => {
                        setPage(prev => prev - 1)
                    }}
                > PREV</button>
                <button className='p-2 bg-gray-700 text-white rounded'
                    onClick={() => {
                        setPage(prev => prev + 1)
                    }}
                >NEXT</button>
            </div>
        </div >
    )
}

export default Home