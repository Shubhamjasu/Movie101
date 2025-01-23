
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Favourite from './pages/Favourite'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />}></Route>
            <Route path='/favorite' element={<Favourite />}></Route>
            <Route path='/watchlist' element={<Watchlist />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
