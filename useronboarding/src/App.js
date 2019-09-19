import React, {useState} from 'react';
import './App.css';
import UserForm from './Form';
import axios from 'axios';
import uuid from 'uuid';
import styled from 'styled-components';

const StyledP = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 1em;
  background-color: lightskyblue;
  border: 0.2em solid grey;`

const StyledODiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3em;
    border: 0.2em solid black;
    width: 90%;
    align-self: center;`

function App() {

  const userApi = 'https://reqres.in/api/users'

  const testArray = []

  
  const [userList, setUserList] = useState(testArray)

  const addUser = (formValues, actions) => {
    const newUser = {
        key: uuid(),
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        tos: formValues.tos,
    };

    axios.post(userApi, newUser)
        .then(res => {
            const newEntry = res.data;
            setUserList(userList.concat(newEntry));
            actions.resetForm();
            console.log(userList);
        })
        .catch(err => {
            console.log(err.message);
        });
  }

  return (
    <StyledODiv>
      <UserForm onSubmit={addUser}/>


    {userList.map(entry => (
      <StyledP>{entry.name}</StyledP>
    ))}

    </StyledODiv>
  );
}

export default App;
