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
            || v.Length.toString().includes(val)
            || v.engine.toString().includes(val)

        )
        console.log(fdata);
        setfilterdata(fdata)

    }
    return (
        <>
            <div className="section-title">
                <h2>BOAT LIST</h2>
            </div>

            <div class="input-group" style={{ margin:'0 auto' }}>
                <div class="form-outline" style={{ width: '50%', margin:'50px',display:'inline-block'}}>
                    <input id="search-input"
                        type="search"
                        placeholder='Search'
                        class="form-control"
                        onChange={(e) => handlechange(e.target.value)} />

                </div>
                {/* <button id="search-button" type="button" class="btn btn-primary" style={{ margin: '50px 0px' }}>
                    <i class="fas fa-search"></i>
                </button> */}
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


