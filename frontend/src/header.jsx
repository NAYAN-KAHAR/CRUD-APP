import { Link } from 'react-router-dom';

const Header = ()  => {
  return (
    <>
    <nav>
    
    
    <div className="main-header">
      <ul>
        <li><Link to="/" className="link"><b>Home </b></Link></li>
        <li><Link to="/create" className="link"><b>Create</b></Link></li>
      </ul>
    </div>
    </nav>
    </>
  );
}

export default Header;
