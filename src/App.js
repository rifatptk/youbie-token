import './App.css';
import './assets/css/responsive.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
