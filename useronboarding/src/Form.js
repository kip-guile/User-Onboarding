import React from 'react';
import {Formik, Form, Field,} from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4em;
    border: 0.2em solid black;
    width: 50%;
    align-self: center;`

const StyledInnerDiv = styled.div`
    font-size: 0.8em;
    margin: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;`

const Submit = styled.button`
    color: white;
    background-color: purple;
    text-transform: uppercase;
    text-align: center;
    font-size: 1em;
    border-radius: 0.5em;
    margin: 0 auto;
    padding: 0.5em;
    `


const initialValueForm = {
    name: '',
    email: '',
    password: '',
    tos: false,
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
    const {onSubmit} = props;

    return(
    <Formik
    initialValues = {initialValueForm}
    onSubmit = {onSubmit}
    validationSchema={validationSchema}
    render={props => {
        return (
            <Form>
                <StyledDiv>
                    <StyledInnerDiv>
                        <label> NAME
                        <Field type='name' name='name' placeholder='Name'/>
                        </label>
                    </StyledInnerDiv>

                    <StyledInnerDiv>
                    <label> EMAIL
                    <Field type='email' name='email' placeholder='Email'/>
                    </label> 
                    </StyledInnerDiv>

                    <StyledInnerDiv>
                    <label> PASSWORD
                    <Field type='password' name='password' placeholder='Password'/> 
                    </label>  
                    </StyledInnerDiv>

                    <StyledInnerDiv>
                    <label> ACCEPT TERMS OF SERVICE
                        <Field type='checkbox' name='tos'/>
                    </label>
                    </StyledInnerDiv>

                    <StyledInnerDiv>
                    <label> CHOOSE, MAN!
                        <Field component='select' name='card'>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="platinum">Platinum</option>
                        </Field>
                    </label>
                    </StyledInnerDiv>
                    <Submit type='submit'>Submit</Submit>
                </StyledDiv>
            </Form>
        );
    }}

    />);
}

export default UserForm;