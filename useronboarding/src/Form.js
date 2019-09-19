import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const initialValueForm = {
    name: '',
    email: '',
    password: '',
    tos: '',
}

const validationSchema = yup.object().shape({
    name: yup.string()
        .required('A name input is required'),
    email: yup.string()
        .email('email not valid')
        .required('required field'),
    password: yup.string()
        .min(6, 'password must be six characters or longer')
        .required('password is required'),
});



function UserForm(props){
    const {values, errors, touched} = props;

    return(
    <Formik
    initialValues = {initialValueForm}
    // onSubmit = {onSubmit}
    validationSchema={validationSchema}
    render={props => {
        return (
            <Form>
                <div>
                    <label> ANAME
                    <Field type='name' name='name' placeholder='Name'/>
                    </label>
                </div>

                <div>
                <label> EMAIL
                <Field type='email' name='email' placeholder='Email'/>
                </label> 
                </div>

                <div>
                <label> PASSWORD
                <Field type='password' name='password' placeholder='Password'/> 
                </label>  
                </div>

                <div>
                <label> ACCEPT TERMS OF SERVICE
                    <Field type='checkbox' name='tos' checked={values.tos}/>
                </label>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        );
    }}

    />);
}

export default UserForm;