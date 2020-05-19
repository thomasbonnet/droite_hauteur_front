import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = ({onSubmit}) => {
    return (
        <Formik
                initialValues={
                    {
                        date: '2020-01-10T14:44:18Z',
                        lat_est_s: 'W',
                        lat_est_h: '45',
                        lat_est_m: '15',
                        long_est_s: 'S',
                        long_est_h: '23',
                        long_est_m: '56'
                    }
                }

                validationSchema={Yup.object().shape({
                    date: Yup
                        .date()
                        .required(),
                    lat_est_s: Yup
                        .string()
                        .required(),
                    lat_est_h: Yup
                        .number()
                        .required()
                        .integer()
                        .positive(),
                    lat_est_m: Yup
                        .number()
                        .required()
                        .positive(),
                    long_est_s: Yup
                        .string()
                        .required(),
                    long_est_h: Yup
                        .number()
                        .integer()
                        .required()
                        .positive(),
                    long_est_m: Yup
                        .number()
                        .required()
                        .positive(),

                })}
                
                onSubmit = {onSubmit}

                render={({ errors, status, touched }) => (         
                        <Form>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <Field name="date" type="text" className={'form-control' + (errors.date && touched.date ? ' is-invalid' : '')} />
                                <ErrorMessage name="date" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lat_est_s">Signe latitude estimée (W ou E)</label>
                                <Field name="lat_est_s" type="text" className={'form-control' + (errors.lat_est_s && touched.lat_est_s ? ' is-invalid' : '')} />
                                <ErrorMessage name="lat_est_s" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lat_est_h">Degré latitude estimée (°)</label>
                                <Field name="lat_est_h" type="text" className={'form-control' + (errors.lat_est_h && touched.lat_est_h ? ' is-invalid' : '')} />
                                <ErrorMessage name="lat_est_h" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lat_est_m">Minute latitude estimée ('')</label>
                                <Field name="lat_est_m" type="text" className={'form-control' + (errors.lat_est_m && touched.lat_est_m ? ' is-invalid' : '')} />
                                <ErrorMessage name="lat_est_m" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="long_est_s">Signe latitude estimée (N ou S)</label>
                                <Field name="long_est_s" type="text" className={'form-control' + (errors.long_est_s && touched.long_est_s ? ' is-invalid' : '')} />
                                <ErrorMessage name="long_est_s" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="long_est_h">Degré latitude estimée (°)</label>
                                <Field name="long_est_h" type="text" className={'form-control' + (errors.long_est_h && touched.long_est_h ? ' is-invalid' : '')} />
                                <ErrorMessage name="long_est_h" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="long_est_m">Minute latitude estimée ('')</label>
                                <Field name="long_est_m" type="text" className={'form-control' + (errors.long_est_m && touched.long_est_m ? ' is-invalid' : '')} />
                                <ErrorMessage name="long_est_m" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                )}
            />
    )
}



export default MyForm