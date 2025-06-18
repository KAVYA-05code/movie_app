import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { WatchlistContext } from '../context/WatchListContext'

const Navbar = () => {
    const{watchlist}=useContext(WatchlistContext)
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-evenly w-full top-0 fixed z-10">
        <Link to="/" className='text-xl font-bold'>Movie App</Link>
        <Link to="/watchlist" className='text-xl'>Watchlist({watchlist.length})</Link>
    </nav>
)}

export default Navbar