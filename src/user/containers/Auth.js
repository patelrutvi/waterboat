import { Box } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Button from '../componentes/UI/Button/Button';
import Input from '../componentes/UI/Input/Input';

function Auth(props) {

    const [authdata, setauth] = useState('login')
    const [logindata,setlogindata] = useState([])
    const navigate = useNavigate()
 

    const handleLogin = () => {
        console.log("loginnn");
        localStorage.setItem("login", "true")
        navigate("/")
    }


    let authobj = {}, intivalue = {}
    if (authdata === 'login') {
        authobj = {
            email: Yup.string().required('please enter email').email('please enter valid email'),
            pass: Yup.string().required('please enter password').matches(
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                'password must be eight characters including one uppercase letter, one special character and alphanumeric characters?'
            )
        }
        intivalue = {
            email: '',
            pass: ''
        }
    } else if (authdata === 'sign up') {
        authobj = {
            name: Yup.string().required('please enter name'),
            email: Yup.string().required('please enter email').email('please enter valid email'),
            pass: Yup.string().required('please enter password').matches(
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                'password must be eight characters including one uppercase letter, one special character and alphanumeric characters?'
            )
        }
        intivalue = {
            name: '',
            email: '',
            pass: ''
        }
    } else {
        authobj = {
            email: Yup.string().required('please enter email').email('please enter valid email'),
        }
        intivalue = {
            email: ''

        }
    }

    const authSchema = Yup.object(authobj)

    const formik = useFormik({
        initialValues: intivalue,
        validationSchema: authSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            console.log(values);
            if( authdata === 'login'){
                handleLogin()
            }
           
        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    return (
  
        <div className='auth'>
            <>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title" style={{color:'gray',marginTop:'90px',textAlign:'center'}}>
                            {/* .........Heading......... */}
                            {
                                authdata === 'login'
                                    ? <h2 style={{color:'#1089FF'}}>Login</h2>
                                    :
                                    (authdata === 'sign up'
                                        ? <h2  style={{color:'#1089FF'}}>Sign Up</h2>
                                        :
                                        <h2  style={{color:'#1089FF'}}>Forgot password</h2>
                                    )
                            }
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>
                        <form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row" style={{ justifyContent: 'center' }}>
                                {/* ........name....... */}
                                {
                                    authdata === 'login'
                                        ?
                                        null
                                        :
                                        (authdata === 'sign up'
                                            ?
                                            <div className="col-md-7 form-group">
                                               
                                                <Input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                />
                                                <div className="validate" />
                                                <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>
                                            </div>
                                            :
                                            null
                                        )

                                }
                                {/* ..........email.......... */}
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <Input type="email"
                                        className="form-control"
                                        name="email" id="email"
                                        placeholder="Your Email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <div className="validate" />
                                    <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                                </div>

                                {/* ...........password......... */}
                                {
                                    authdata === 'login'
                                        ?
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <Input type="password"
                                                className="form-control"
                                                name="pass" id="pass"
                                                placeholder="Your Password"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 2 chars"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.pass}

                                            />
                                            <div className="validate" />
                                            <span className='error'>{errors.pass && touched.pass ? errors.pass : ''}</span>
                                        </div>
                                        :
                                        (authdata === 'sign up'
                                            ?
                                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                                <Input type="password"
                                                    className="form-control"
                                                    name="pass"
                                                    id="pass"
                                                    placeholder="Your Password"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 2 chars"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.pass}

                                                />
                                                <div className="validate" />
                                                <span className='error'>{errors.pass && touched.pass ? errors.pass : ''}</span>
                                            </div>
                                            :
                                            null
                                        )
                                }
                            </div>
                            {/* ......buttonnnn...... */}
                            {
                                authdata === 'login'
                                    ?
                                    <div className="text-center"> <Button  className="btn btn-primary rounded-0 px-3 px-5" type="primary" btnDisable={true}>Login</Button></div>
                                   
                                    :
                                    (authdata === 'sign up'
                                        ?
                                        <div className="text-center"><Button  className="btn btn-primary rounded-0 px-3 px-5" type="secondary">Sign Up</Button></div>
                                        : <div className="text-center"><Button  className="btn btn-primary rounded-0 px-3 px-5" type="outlined">submit</Button></div>
                                    )

                            }
                            {/* ......link...sign up ////....login... */}
                            {
                                authdata === 'login'
                                    ?
                                    <div>Create a new account<a href='#' onClick={() => setauth('sign up')}> Sign Up</a></div>
                                    :
                                    <div>Already have an account <a href='#' onClick={() => setauth('login')}> log In</a></div>
                            }
                            {/* ........link.......forgot password.... */}
                            <div>
                                {
                                    authdata === 'login' ?
                                        <a href='#' onClick={() => setauth('forgot')} >Forgot Password?</a>
                                        : (authdata === 'sign up' ? null : null)
                                }
                            </div>


                        </form>
                    </div>
                </section>



            </>
        </div>
    );
}

export default Auth;