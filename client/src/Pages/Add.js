import React from 'react';
import {Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import { addContact } from '../Redux/actions/contact';

const Add = () => {
  const [newContact, setnewContact] = useState({ name:"", email:"", phone:""});
  const dispatch = useDispatch();

  const handleChange = (e) => {setnewContact({...newContact, [e.target.name] : e.target.value})}
  const add = () =>{
    dispatch(addContact(newContact));
  }
  return (  
  <div>  
      <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="name" value={newContact.name} onChange={handleChange} />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name ="email" value={newContact.email} onChange={handleChange}/>
    <Form.Label>Phone</Form.Label>
    <Form.Control type="number" placeholder="Enter Phone" name = "phone" value={newContact.phone} onChange={handleChange} />
    <Button variant="primary" type="submit" onClick={() => add()}>
        Submit
      </Button>
    </div>
  )
}

export default Add