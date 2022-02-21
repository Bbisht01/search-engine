import './App.css';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/Search/:q' element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
