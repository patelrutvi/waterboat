import React from 'react';
import Adminpanle from '../admin/components/Adminpanle'
import { Route, Routes } from 'react-router-dom';
import Boatlist from '../admin/containers/Boatlist';

function AdminRoutes(props) {
    return (
        <Adminpanle>
            <Routes>
                <Route path='/boatlist' element={<Boatlist />} />
                
            </Routes>
        </Adminpanle>
    );
}

export default AdminRoutes;