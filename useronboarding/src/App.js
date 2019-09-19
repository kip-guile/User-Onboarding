import React from 'react';
import './App.css';
import UserForm from './Form';
import axios from 'axios';

function App() {

  const userApi = 'https://reqres.in/api/users'

  const addUser = (formValues, actions) => {
    const newUser = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        tos: formValues.tos,
    };

    axios.post(userApi, newUser)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            debugger
        })
}

  return (
    <div className="App">
      <UserForm onSubmit={addUser}/>
    </div>
  );
}

export default App;
