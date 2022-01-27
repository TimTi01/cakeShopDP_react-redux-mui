import React, { useState} from 'react';
import {Alert, Button, Dialog, DialogContent, DialogTitle, Grid, InputAdornment, Snackbar, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {getAvatarStatus, getLoginData} from "../../../store/store";
import {useDispatch} from "react-redux";
import PortraitIcon from '@mui/icons-material/Portrait';
import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const BarLogin = ({openLoginForm, handleCloseLoginForm}) => {
    const dispatch = useDispatch()
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(8, "Minimum of 8 characters")
                .required("required field"),
            password: Yup.string()
                .min(8, "Minimum of 8 characters")
                .required("required field")
        }),
        onSubmit: (values) => {
            dispatch(getLoginData(values))
            console.log(values)
        }
    })

    const closeLoginFormAfterTime = (ms) => {
        setTimeout(() => {
            handleCloseLoginForm()
        }, ms)
    }

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true)
    }
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }
    const closeSnackbarAfterTime = (ms) => {
        setTimeout(()=> {
            handleCloseSnackbar()
        }, ms)
    }

    const toggleAvatar = () => {
        if ((formik.errors.email === undefined && formik.errors.password === undefined) && (formik.touched.email && formik.touched.password)) {
            dispatch(getAvatarStatus(true))
            closeLoginFormAfterTime(800)
        }

        handleOpenSnackbar()
        closeSnackbarAfterTime(3000)
    }

    return (
        <Dialog
            open={openLoginForm}
            onClose={handleCloseLoginForm}
        >
            <DialogTitle sx={{margin: '0 auto'}}>Login</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container
                          direction='column'
                          alignItems='center'
                    >
                        <Grid item>
                            <TextField id='name'
                                       margin='dense'
                                       label='Name'
                                       type='text'
                                       variant='standard'
                                       size='small'
                                       onChange={formik.handleChange}
                                       value={formik.values.name}
                                       onBlur={formik.handleBlur}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <PortraitIcon />
                                               </InputAdornment>
                                           ),
                                       }}
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id='surname'
                                       margin='dense'
                                       label='Surname'
                                       type='text'
                                       variant='standard'
                                       size='small'
                                       onChange={formik.handleChange}
                                       value={formik.values.surname}
                                       onBlur={formik.handleBlur}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <PortraitIcon />
                                               </InputAdornment>
                                           ),
                                       }}
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id='email'
                                       margin='dense'
                                       label='Email'
                                       type='email'
                                       variant='standard'
                                       size='small'
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                       onBlur={formik.handleBlur}
                                       error={!!formik.errors.email && formik.touched.email}
                                       helperText={formik.errors.email && formik.touched.email
                                           ? formik.errors.email
                                           : null
                                       }
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <AlternateEmailIcon />
                                               </InputAdornment>
                                           ),
                                       }}
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id='password'
                                       margin='dense'
                                       label='Password'
                                       type='password'
                                       variant='standard'
                                       size='small'
                                       onChange={formik.handleChange}
                                       value={formik.values.password}
                                       onBlur={formik.handleBlur}
                                       error={!!formik.errors.password && formik.touched.password}
                                       helperText={formik.errors.password && formik.touched.password
                                           ? formik.errors.password
                                           : null
                                       }
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <PasswordIcon />
                                               </InputAdornment>
                                           ),
                                       }}
                                       fullWidth
                            />
                        </Grid>
                        <Grid item mt={2}>
                            <Button onClick={toggleAvatar} variant='contained' type='submit'>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Snackbar open={openSnackbar}>
                    {(formik.errors.email === undefined && formik.errors.password === undefined)
                        ?<Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                            Data sent! :)
                        </Alert>
                        :<Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                            No data sent! :(
                        </Alert>
                    }
                </Snackbar>
            </DialogContent>
        </Dialog>
    );
};