
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { useFormik } from 'formik';

export default function FacilitiesForm({ onhandlesubmit , onupdate }) {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        if (onupdate) {
            handleClickOpen()
            formik.setValues(onupdate)
        }
    }, [onupdate])

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
        iceroomsize: Yup.string()
            .required("please enter  iceroom size"),
        cabinesize: Yup.string()
            .required("please enter cabine size"),
        staring: Yup.string()
            .required(),
        kitchenroomsize: Yup.string()
            .required("please enter kitchenroom size"),
    })

    const formik = useFormik({
        initialValues: {
            iceroomsize: '',
            cabinesize: '',
            staring: '',
            kitchenroomsize: '',
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

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Facilities
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <form method="post" onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            id="iceroomsize"
                            label="IceRoom Size"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.iceroomsize}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.iceroomsize && touched.iceroomsize ? errors.iceroomsize : ''}</span>
                        <TextField
                            margin="dense"
                            id="cabinesize"
                            label="Cabine Size"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cabinesize}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.cabinesize && touched.cabinesize ? errors.cabinesize : ''}</span>
                        <TextField
                            margin="dense"
                            id="staring"
                            label="Staring"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.staring}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.staring && touched.staring ? errors.staring : ''}</span>
                        <TextField
                            margin="dense"
                            id="kitchenroomsize"
                            label="KitchenRoom Size"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.kitchenroomsize}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.kitchenroomsize && touched.kitchenroomsize ? errors.kitchenroomsize : ''}</span>
                        <DialogActions>
                            <button onClick={handleClose}>Cancel</button>
                            <button type='submit'>Submit</button>
                        </DialogActions>

                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
}