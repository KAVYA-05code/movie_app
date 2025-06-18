import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import { WatchlistProvider } from './context/WatchListContext'
function App() {
  return (
    <WatchlistProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/watchlist' element={<Watchlist />}></Route>
        </Routes>
      
    </BrowserRouter >
    </WatchlistProvider>
  )
}

export default App
