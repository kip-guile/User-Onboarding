import React, {useState} from 'react';
import './App.css';
import UserForm from './Form';
import axios from 'axios';
// import List from './List';



function App() {

  const userApi = 'https://reqres.in/api/users'

  const testArray = [{id: 1, name: 'alex', email: 'ggsgsgsg', password: 'jjjjj', tos: true}]

  
  const [userList, setUserList] = useState(testArray)

  const addUser = (formValues, actions) => {
    const newUser = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        tos: formValues.tos,
    };

    axios.post(userApi, newUser)
        .then(res => {
            console.log(res.data);
            const newEntry = res.data;
            setUserList(userList.concat(newEntry));
            console.log(userList);
            actions.resetForm();
        })
        .catch(err => {
            console.log(err.message);
        });
  }

  return (
    <div className="App">
      <UserForm onSubmit={addUser}/>


    {userList.map(entry => (
      <p>{entry.name}</p>
    ))}

    </div>
  );
}

export default App;
