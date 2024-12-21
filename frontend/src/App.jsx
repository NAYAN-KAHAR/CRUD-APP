
import './style.css';
import HomePage from './home';
import CreatePage from './create';
import {Routes, Route} from 'react-router-dom';
import Header from './header';

const App = ()  => {
  return (
    <>
     <Header />
   
      <Routes>
        <Route path ="/" element={<HomePage/>} />
        <Route path ="/create" element={<CreatePage/>} />
      </Routes>

    </>
  );
}

export default App;
