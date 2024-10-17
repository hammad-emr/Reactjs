import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputData, setInputData] = useState({
    firstName: '',
    secondName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', inputData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/posts/1/', inputData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const idToDelete = 1; // Change this to the ID you want to delete
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${idToDelete}`)
      .then((res) => {
        console.log('Deleted:', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='app'>
      <h1>API Example</h1>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        value={inputData.firstName}
        onChange={handleChange}
      /><br /><br />
      <input
        type='text'
        name='secondName'
        placeholder='Second Name'
        value={inputData.secondName}
        onChange={handleChange}
      /><br /><br />
      <input
        type='text'
        name='email'
        placeholder='Email'
        value={inputData.email}
        onChange={handleChange}
      /><br /><br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default App;
