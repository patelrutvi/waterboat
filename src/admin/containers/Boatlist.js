import * as React from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'

// .......grid table........
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


// ...............................//


export default function Boatlist() {
    const [open, setOpen] = React.useState(false);
    const [bdata, setbdata] = React.useState([]);

    React.useEffect(() => {
        let boat = JSON.parse(localStorage.getItem('boat'));
        // console.log(medicine,"getmedicine");  
        if (boat !== null) {
            setbdata(boat);
        }
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // .......................................

    const handledelete = (i) => {
        console.log("delete", i);

        let boatgetlocaldata = JSON.parse(localStorage.getItem("boat"))
        // console.log(mgetlocaldata);

        let fdata = boatgetlocaldata.filter((v, index) => v.id !== i)
        setbdata(fdata)
        localStorage.setItem("boat", JSON.stringify(fdata))

    }


    const handleAdd = (data) => {
        console.log(data);
        handleClose()

        let getlocaldata = JSON.parse(localStorage.getItem("boat"))
        console.log(getlocaldata);
        let rno = Math.floor(Math.random() * 1000)

        let newdata = { id: rno, ...data }

        if (getlocaldata === null) {
            localStorage.setItem("boat", JSON.stringify([newdata]))
            setbdata([newdata])
        } else {
            getlocaldata.push(newdata)
            console.log(getlocaldata);
            localStorage.setItem("boat", JSON.stringify(getlocaldata))
            setbdata(getlocaldata)
        }
    }


    // .....validation.....

    let boatlistSchema = Yup.object({
        img: Yup.string()
            .required(),
        size: Yup.string()
            .required("please enter size"),
        Length: Yup.string()
            .required(),
        engine: Yup.string()
            .required(),
        price: Yup.number()
            .required()
            .typeError('please enter valid price'),
    })

    const formik = useFormik({
        initialValues: {
            img: '',
            size: '',
            Length: '',
            engine: '',
            price: '',
        },
        validationSchema: boatlistSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            // console.log(values);
            handleAdd(values)


        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    // ............................   
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
                <DeleteIcon onClick={() => handledelete(params.row.id)}>

                </DeleteIcon>


            ),

        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 130,
            renderCell: (params) => (
                <EditIcon >

                </EditIcon>
            )

        },

    ];


    // /......................//

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ margin: '20px' }}>
                Open boat ditails
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogContent>
                    <form method="post" onSubmit={handleSubmit} >

                        <h2
                            style={{
                                margin: '10px',
                                textAlign:'center'

                            }}>Fishing Boat</h2>
                        <div className="social">
                            <input
                                type='file'
                                name="img"
                                id="img"
                                src=''
                                label="icon"
                                sx={{ margin: '10px', padding: '25px 0 0 0' }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.img}
                            >

                            </input>
                            <span style={{ color: "red" }} className='error'>{errors.img && touched.img ? errors.img : ''}</span>
                        </div>

                        <TextField
                            margin="dense"
                            name='size'
                            id="size"
                            label="size"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.size}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.size && touched.size ? errors.size : ''}</span>
                        <TextField
                            margin="dense"
                            name='Length'
                            id="Length"
                            label="Length"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Length}

                        />
                        <span style={{ color: "red" }} className='error'>{errors.Length && touched.Length ? errors.Length : ''}</span>
                        <TextField
                            margin="dense"
                            name='engine'
                            id="engine"
                            label="Engine"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.engine}

                        />
                        <span style={{ color: "red" }} className='error'>{errors.engine && touched.engine ? errors.engine : ''}</span>
                        <TextField
                            margin="dense"
                            name='price'
                            id="price"
                            label="Price"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}

                        />
                        <span style={{ color: "red" }} className='error'>{errors.price && touched.price ? errors.price : ''}</span>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>

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

