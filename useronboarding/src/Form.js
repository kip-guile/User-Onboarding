import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

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

// const userApi = 'https://reqres.in/api/users'

// const addUser = (formValues, actions) => {
//     const newUser = {
//         name: formValues.name,
//         email: formValues.email,
//         password: formValues.password,
//         tos: formValues.tos,
//     };

//     axios.post(userApi, newUser)
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => {
//             debugger
//         })
// }



function UserForm(props){
    const {values, errors, touched, onSubmit} = props;

    return(
    <Formik
    initialValues = {initialValueForm}
    onSubmit = {onSubmit}
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

                {/* <div>
                <label> ACCEPT TERMS OF SERVICE
                    <Field type='checkbox' name='tos' checked={values.tos}/>
                </label>
                </div> */}
                <button type='submit'>Submit</button>
            </Form>
        );
    }}

    />);
}

export default UserForm;