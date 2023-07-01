import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav'>
          <div className='Left'>
            Logo
          </div>
          <div className='Right'>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', margin: 0 }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link to="/Product" style={{ color: 'white', textDecoration: 'none' }}>Product</Link>
              <Link to="/AddtoCart" style={{ color: 'white', textDecoration: 'none' }}>Add to cart</Link>
            </ul>
          </div>
        </div>
      </header >

    </div >
  );
}

export default Nav;
