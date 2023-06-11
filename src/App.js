import './App.css';
import Avtosalonlar from './components/Avtosalonlar/Avtosalonlar.jsx';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import CarPage from './pages/CarPage/CarPage';
function App() {
 
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}  >
          
          <Route index element={<Home />} />
          <Route path='/Avtosalonlar' element={<Avtosalonlar />} />
          <Route path='*' element={<NoPage />} />
          <Route path='*' element={<NoPage />} />
          <Route path='car' element={<CarPage />} />
        </Route >
      </Routes>
    </BrowserRouter>
  );





}

export default App;
