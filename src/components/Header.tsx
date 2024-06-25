import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Header;