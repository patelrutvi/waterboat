import React, { useEffect, useState } from 'react';
import Boatmodeluser from '../userboatmodel/Boatmodeluser'

function UserBoatlist(props) {
    const [data, setdata] = useState([])
    const [filterdata, setfilterdata] = useState([])

    useEffect(() => {
        let boatgetlocaldata = JSON.parse(localStorage.getItem("boat"))
        console.log(boatgetlocaldata, "getmedicine");
        if (boatgetlocaldata) {
            setdata(boatgetlocaldata)
        }

    }, [])



    const handlechange = (val) => {
        console.log(val);
        let boatgetlocaldata = JSON.parse(localStorage.getItem("boat"))
        let fdata = boatgetlocaldata.filter((v) =>
            v.size.toString().includes(val)

        )
        console.log(fdata);
        setfilterdata(fdata)

    }



    return (
        <>
            <div className="section-title">
                <h2>BOAT LIST</h2>
            </div>

            <div class="input-group">
                <div class="form-outline" style={{ width: '80%', margin: '30px', marginRight: '0px' }}>
                    <input id="search-input"
                        type="search"
                        class="form-control"
                        onChange={(e) => handlechange(e.target.value)} />

                </div>
                <button id="search-button" type="button" class="btn btn-primary" style={{ margin: '30px 0px' }}>
                    <i class="fas fa-search"></i>
                </button>
            </div>

            <div className='container' >
                <div className='row ' >
                    <Boatmodeluser bdata={filterdata.length > 0 ? filterdata : data} />
                </div>

            </div>
        </>
    );
}

export default UserBoatlist;


