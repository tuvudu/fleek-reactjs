
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Header from './components/Header';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
