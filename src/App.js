import logo from './logo.svg';
import './App.css';
import Header from './user/componentes/Header';
import Footer from './user/componentes/Footer';
import Home from './user/containers/Home';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';


function App() {
  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}

      <Routes >
        <Route path='/*' element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />


      </Routes>
    </>
  );
}

export default App;
