import * as React from 'react';

// .......grid table........
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Boatlistform from './Boatlistform';

// ...............................//

export default function Boatlist() {

    const [bdata, setbdata] = React.useState([]);
    const [updatedata, setupdatedata] = React.useState(null)

    React.useEffect(() => {
        let boat = JSON.parse(localStorage.getItem('boat'));
        // console.log(medicine,"getmedicine");  
        if (boat !== null) {
            setbdata(boat);
        }
    }, []);
    // .......................................
    const handledelete = (i) => {
        console.log("delete", i);

        let boatgetlocaldata = JSON.parse(localStorage.getItem("boat"))
        // console.log(mgetlocaldata);

        let fdata = boatgetlocaldata.filter((v, index) => v.id !== i)
        setbdata(fdata)
        localStorage.setItem("boat", JSON.stringify(fdata))

    }
    const handleEdit = (evalue) => {
        console.log(evalue);
      
        setupdatedata(evalue)

    }

    const handleSubmitdata = (data) => {
        console.log(data);


        let getlocaldata = JSON.parse(localStorage.getItem("boat"))
        console.log(getlocaldata);
        let rno = Math.floor(Math.random() * 1000)

        let newdata = { id: rno, ...data }

        if (getlocaldata === null) {
            localStorage.setItem("boat", JSON.stringify([newdata]))
            setbdata([newdata])
        } else {
            if (updatedata) {
                let udata = getlocaldata.map((v) => {
                    if (v.id === data.id) {
                        return data
                    } else {
                        return v
                    }
                })
                console.log(udata);
                localStorage.setItem("boat", JSON.stringify(udata))
                setbdata(udata)

            } else {
                getlocaldata.push(newdata)
                console.log(getlocaldata);
                localStorage.setItem("boat", JSON.stringify(getlocaldata))
                setbdata(getlocaldata)
            }
        }
    }
    // ......grid table...................
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'img', headerName: 'img', width: 130 },
        { field: 'size', headerName: 'Size', width: 130 },
        { field: 'Length', headerName: 'Length', width: 130 },
        { field: 'engine', headerName: 'engine', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        {
            field: 'action',
            headerName: 'Remove',
            width: 130,

            renderCell: (params) => (
                <>

                    <DeleteIcon onClick={() => handledelete(params.row.id)}>

                    </DeleteIcon>

                    <EditIcon onClick={() => handleEdit(params.row)}>

                    </EditIcon>
                </>


            ),

        },

    ];
    // /......................//

    return (
        <div>
            <Boatlistform onhandlesubmit={handleSubmitdata} onupdate={updatedata} />
            {/* .............data grid........ */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={bdata}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            {/* ............................... */}
        </div>
    );
}

