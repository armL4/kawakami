import { BrowserRouter, Router,Route ,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/paginas/Home';
import Almuerzo from './components/paginas/Almuerzo';
import Cena from './components/paginas/Cena';
import Desayuno from './components/paginas/Desayuno';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <div className='content'>
      <Routes>
          
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Almuerzo' element={<Almuerzo/>}/>
          <Route exact path='/cena' element={<Cena/>}/>
          <Route exact path='/desayuno' element={<Desayuno/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
