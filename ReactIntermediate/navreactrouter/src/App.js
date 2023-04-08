import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import NotFound from './components/NotFound';
import {NavLink} from 'react-router-dom'
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      
      {/* <Routes>
           <Route path="/" element={<div>Home</div>}></Route>
           <Route path="/about" element={<div>About</div>}></Route>
           <Route path="/support" element={<div>Support</div>}></Route>
           <Route path="/labs" element={<div>Labs</div>}></Route>
           <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes> */}

      <nav>
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/support">Support</NavLink></li>
        <li><NavLink to="/labs">Labs</NavLink></li>
        </ul>
      </nav>


      <Routes>
           <Route path="/" element={<MainHeader/>}>
            {/* Default Route */}
           <Route index element={<Home/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/support" element={<Support/>}></Route>
           <Route path="/labs" element={<Labs/>}></Route>
           <Route path="*" element={<NotFound/>}></Route>
           </Route>
      </Routes>
    </div>
  );
}

export default App;
