import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/containers/Home';
import Header from '../user/componentes/Header';
import About from '../user/containers/About';
import Service from '../user/containers/Service';
import Blog from '../user/containers/Blog';
import Footer from '../user/componentes/Footer';
import Contact from '../user/containers/Contact';
import Singlepage from '../user/containers/Singlepage';

function UserRoutes(props) {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route  path='/singlepage' element={<Singlepage />}/>
                {/* <Route  path='/userboatlist' element={<UserBoatlist />}/> */}

            </Routes>
            <Footer />

        </>
    );
}

export default UserRoutes;