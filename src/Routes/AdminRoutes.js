import React from 'react';
import Adminpanle from '../admin/components/Adminpanle'
import { Route, Routes } from 'react-router-dom';
import Boatlist from '../admin/containers/Boatlist/Boatlist';

import DashBoard from '../admin/containers/DashBoard';
import Facilities from '../admin/containers/facilities/Facilities';

function AdminRoutes(props) {
    return (
        <Adminpanle>
            <Routes>
                <Route path='/dashboard' element={<DashBoard />}/>
                <Route path='/boatlist' element={<Boatlist />} />
                <Route path='/facilities' element={<Facilities />} />
                
            </Routes>
        </Adminpanle>
    );
}

export default AdminRoutes;