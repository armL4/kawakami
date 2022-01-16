import { BrowserRouter, Router,Route ,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/paginas/Home';
import ItemListContainer from '../src/components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemlistcontainer/itemDetailContainer/itemDetailContainer';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <div className='content'>
      <Routes>
          
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/categorias/:tipoComida" element={<ItemListContainer/>} />
          <Route exact path='/productos/:detalleId' element={<ItemDetailContainer/>}/>
          {/* <Route exact path='/Almuerzo' element={<Almuerzo/>}/>
          <Route exact path='/cena' element={<Cena/>}/>
          <Route exact path='/desayuno' element={<Desayuno/>}/> */}
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
