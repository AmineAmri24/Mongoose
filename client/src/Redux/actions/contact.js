import { FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from "../actionTypes/contact";
import axios from "axios";




// GET ALL CONTACTS


export const getContacts = () => async (dispatch) => {
    dispatch ({ type : LOAD_CONTACTS});
    try {
        let result = await axios.get('/api/contact/all')
        dispatch ({type : GET_CONTACTS, payload: result.data});
    } catch (error) {
        dispatch({type : FAIL_CONTACTS, payload : error.response})
        
    }
};

// add Contact 


export const addContact = (newContact) => async ( dispatch) => {
    try {
        await axios.post("/api/contact/add", newContact)
        dispatch(getContacts());
    } catch (error) {
        dispatch({type : FAIL_CONTACTS, payload : error.response})
    }
};


//delete 


export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({type : FAIL_CONTACTS, payload : error.response})
    }
}

// edit

export const editCOntact = (id, newContact) => async (dispatch) =>{
    try {
        await axios.put(`/api/contact/${id}`,newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({type : FAIL_CONTACTS, payload : error.response})
    }
}

// GET one

export const getContact = (id) => async (dispatch) => {
    dispatch({type: LOAD_CONTACTS})
    try {
        let result = await axios.get(`/api/contact/${id}`);
        dispatch( {type: GET_CONTACT , payload : result.data} )
    } catch (error) {
        dispatch({type : FAIL_CONTACTS, payload : error.response})
    }
}