import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactCard from "./ContactCard"
import { getContacts } from '../Redux/actions/contact';

const ContactList = () => {
  const listContacts = useSelector (
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector(state => state.contactReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
    return (
    <div>
      { load ? (<h2> loading ... </h2>) : (listContacts.map((el) => < ContactCard contact={el} key={el.id}/>))}
      </div>
  )
}

export default ContactList;