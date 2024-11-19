import './App.css';
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Homepage';
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About';
import Configuration from '../Configuration/Configuration';  
import Shop from './../Pages/Shop/Shop';


function App() {
  return (
    <Router>
      <Configuration>
        <Routes>
              <Route path='/' index element={<Home/>}/>
              <Route path='contactus' element={<Contact/>}/>
              <Route path='aboutus' element={<About/>}/>
              <Route path='shop' element={<Shop/>}/>

        </Routes>
        </Configuration>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

