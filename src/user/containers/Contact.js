import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup'


function Contact(props) {

    let wbcontactSchema = Yup.object({
        fname: Yup.string().required('Please enter first name').matches(/^[a-z]+$/ , 'Please enter valid name'),
    })

    const formik = useFormik({
        initialValues: {

        },
        validationSchema: wbcontactSchema,
        onSubmit: values => {

        },
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik
    return (
        <div>
            <div className="intro-section site-blocks-cover innerpage" style={{ backgroundImage: 'url("assest/images/hero_1.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center text-center border">
                        <div className="col-lg-12 mt-5" data-aos="fade-up">
                            <h1>Get In Touch</h1>
                            <p className="text-white text-center">
                                <a href="index.html">Home</a>
                                <span className="mx-2">/</span>
                                <span>Contact Us</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <form
                        action
                        method="post"
                        role="form"
                        className="php-email-form"
                        onSubmit={() => handleSubmit}
                    >
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="fname">First Name</label>
                                <input type="text"
                                    id="fname"
                                    name='fname'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fname}
                                />
                                <span style={{ color: 'red' }} className='error'>{errors.fname && touched.fname ? errors.fname : null}</span>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text"
                                    id="lname"
                                    name='lname'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lname}
                                />
                                   <span style={{color : 'red'}}  className='error'>{errors.lname && touched.lname ? errors.lname : null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="eaddress">Email Address</label>
                                <input type="email"
                                    id="eaddress"
                                    name='email'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                   <span style={{color : 'red'}}  className='error'>{errors.email && touched.email ? errors.email : null}</span>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="tel">Tel. Number</label>
                                <input type="number"
                                    id="tel"
                                    name='mobile'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile}

                                />
                                   <span style={{color : 'red'}}  className='error'>{errors.mobile && touched.mobile ? errors.mobile : null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name='msg'
                                    cols={20}
                                    rows={5}
                                    className="form-control"
                                    defaultValue={""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.msg}
                                />
                                   <span style={{color : 'red'}}  className='error'>{errors.msg && touched.msg ? errors.msg : null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="submit"
                                    defaultValue="Send Message"
                                    className="btn btn-primary rounded-0 px-3 px-5"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="section-bg style-1" style={{ backgroundImage: 'url("assest/images/hero_1.jpg")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <span className="icon flaticon-mortarboard" />
                            <h3>Our Philosphy</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <span className="icon flaticon-school-material" />
                            <h3>Academics Principle</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
                                Dolore, amet reprehenderit.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <span className="icon flaticon-library" />
                            <h3>Key of Success</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
                                Dolore, amet reprehenderit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;