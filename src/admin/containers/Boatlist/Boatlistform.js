import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { Button } from '@mui/material';


function Boatlistform({onhandlesubmit,onupdate}) {
    const [open, setOpen] = React.useState(false);

        useEffect (()=>{
            if(onupdate){
                handleClickOpen()
                formik.setValues(onupdate)
            }
        },[onupdate])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // .....validation.....

    let boatlistSchema = Yup.object({
        // img: Yup.string()
        //     .required(),
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
            // img: '',
            size: '',
            Length: '',
            engine: '',
            price: '',
        },
        validationSchema: boatlistSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            handleClose()
            // console.log(values);
            onhandlesubmit(values)


        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    // ............................   

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen} style={{ margin: '20px' }}>
                Open boat ditails
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogContent>
                    <form method="post" onSubmit={handleSubmit} >

                        <h2
                            style={{
                                margin: '10px',
                                textAlign: 'center'

                            }}>Fishing Boat</h2>
                        {/* <div className="social">
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
                        </div> */}

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
        </>
    );
}

export default Boatlistform;