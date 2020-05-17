import React from 'react';
import { View, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


/* input de l'api:
{
  "date": "2020-01-10T14:44:18Z",
  "lat_est_s": "W",
  "lat_est_h": 45,
  "lat_est_m": 0.0,
  "long_est_s": "S",
  "long_est_h": 0,
  "long_est_m": 0
}

output de l'api:
{
  "date": "2020-01-10T14:44:18+00:00",
  "hc": 36.78579397541047,
  "Z": 227.0875592309295
}
*/

class InterfaceAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: null,
        };
    }

    /*      componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "date": "2020-01-10T14:44:18Z",
                "lat_est_s": "W",
                "lat_est_h": 45,
                "lat_est_m": 0.0,
                "long_est_s": "S",
                "long_est_h": 0,
                "long_est_m": 0
               })
        };
        fetch('http://127.0.0.1:8000/calc', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data }));
        } */

    render() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
               /*  "date": "2020-01-10T14:44:18Z",
                "lat_est_s": "W",
                "lat_est_h": 45,
                "lat_est_m": 0.0,
                "long_est_s": "S",
                "long_est_h": 0,
                "long_est_m": 0  */}
        };

        return (
            <Button
                title='patate'
                onClick={() => {
                    fetch('/calc/', {
                        method: 'POST', body: JSON.stringify(
                            {
                                "date": "2020-01-10T14:44:18Z", "lat_est_s": "W",
                                "lat_est_h": 45,
                                "lat_est_m": 0.0,
                                "long_est_s": "S",
                                "long_est_h": 0,
                                "long_est_m": 0
                            })
                    },
                    )
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data }));
                    console.log(this.state);
                }
                }
            />

        );
    }
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: null,
        };
    }

    render() {
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

                onSubmit={fields => {
                    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    fetch('/calc/', { method: 'POST', body: JSON.stringify(fields, null, 4) })
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data }));
                    console.log(this.state.postId);

                }}
                render={({ errors, status, touched }) => (
                    <Fragment>
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
                        <div> {this.state.postId == null ? console.log("tes null") : this.state.postId.Z}</div>
                    </Fragment>


                )}
            />

        )
    }
}

