const express = require("express");
const Contact = require("../Models/Contact");

const router = express.Router();







// test router

router.get('/test', (req,res) =>{
    res.send("hello")
});

// add contact

router.post('/add', async (req,res) =>{
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone});
        await newContact.save();
        res.status(200).send({msg : "contact added successfully", newContact});
        
    } catch (error) {
      res.status(400).send({msg : "can not add contact !", error}) ; 
    }
}
);

// get all acontact

router.get ('/all', async (req,res) => {
    try {
        const listContacts = await Contact.find();
        res.status (200).send ({msg : "this is all the contacts", listContacts}) ;
    }   catch (error) {
        res.status(400).send({msg : "can not show contacts !", error}) ; 
      }
});


// get one contact

router.get ('/:id', async (req,res) =>{
    try {
        const contactToGet = await Contact.findOne({_id : req.params.id});
        res.status (200).send ({msg : "the contact is...", contactToGet});
    
    } catch (error) {
        res.status (400).send ({msg: "cannot get ", error})
    }
});

// delete contact

router.delete('/:_id', async (req,res) => {
    try {
        const {_id} = req.params;
        await Contact.findOneAndDelete({_id});
        res.status (200).send ({msg : "the contact is deleted .."})
    } catch (error){
        res.status (400).send ({msg : "cannot delete contact", error});
    }
});


// edit contact

router.put('/:_id', async (req,res) =>{
    try {
        const {_id} = req.params;
        const result = await contact.updateOne({_id}, {$set : {... req.body}});
        res.status(200).send ({msg : " the contact is updated"})
    } catch (error) {
       res.status(400).send ({msg : "cannot update the contact", error}) 
    }
})

module.exports = router;