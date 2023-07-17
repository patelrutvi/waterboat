import logo from './logo.svg';
import './App.css';
import Header from './user/componentes/Header';
import Footer from './user/componentes/Footer';
import Home from './user/containers/Home';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import Protected from './Routes/Protected';
import { configureStore } from './reduce/store';
import { Provider } from 'react-redux';



function App() {

  const store = configureStore()
  return (
    <>
      <Provider store={store}>
        {/* <Header />
      <Home />
      <Footer /> */}

        <Routes >
          <Route path='/*' element={<UserRoutes />} />
          <Route element={<Protected />}>
            <Route path='/admin/*' element={<AdminRoutes />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
