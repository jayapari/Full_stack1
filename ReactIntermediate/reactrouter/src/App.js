import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* <Routes>
           <Route path="/" element={<div>Home</div>}></Route>
           <Route path="/support" element={<div>Support</div>}></Route>
           <Route path="/about" element={<div>About</div>}></Route>
           <Route path="/labs" element={<div>Labs</div>}></Route>
           <Route path="*" element={<div>Not found</div>}></Route>
       </Routes> */}

   

    
    </div>
  );
}

export default App;
