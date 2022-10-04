import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Home from './pages/Home'
import Regeister from "./pages/Register";



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/register' element= {<Regeister/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
