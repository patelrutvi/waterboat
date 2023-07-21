import React, { useEffect } from 'react';
import FacilitiesForm from './FacilitiesForm';
import { useDispatch, useSelector } from 'react-redux';
import { addFacilite, deleteFaci, getfaciliti, updateFacili } from '../../../reduce/action/facilities.action';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';

function Facilities(props) {
    const dispatch = useDispatch()
    const [updatedata, setupdatedata] = React.useState(null)
    const facival = useSelector(state => state.facidata)
    console.log(facival, "selector state");

    useEffect(() => {
        dispatch(getfaciliti())
    }, [])

    const handlesubmitData = (data) => {

        if (updatedata) {
            dispatch(updateFacili(data))
        } else {
            dispatch(addFacilite(data))
        }
        console.log("ddhvb");
        setupdatedata(null)
    }

    const handledelete = (id) => {
        dispatch(deleteFaci(id))
    }

    const handleEdit = (data) => {
        setupdatedata(data)
    }

    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'iceroomsize', headerName: 'IceRoom Size', width: 130 },
        { field: 'cabinesize', headerName: 'Cabine Size', width: 130 },
        { field: 'staring', headerName: 'Staring', width: 130 },
        { field: 'kitchenroomsize', headerName: 'KitchenRoom Size', width: 130 },

        {
            field: 'action',
            headerName: 'Action',
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




    return (

        <div>
            <FacilitiesForm onhandlesubmit={handlesubmitData} onupdate={updatedata} />
            {
                facival.loding ? <CircularProgress color="secondary" sx={{ marginLeft: 60 }} /> :

                facival.error ?  'Somthing went wrong' : 
                    <>
                        <DataGrid
                            rows={facival.facilities}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />

                    </>

            }


        </div>
    );
}

export default Facilities;