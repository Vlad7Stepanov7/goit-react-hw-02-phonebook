import React, { Component } from "react";
import { nanoid } from 'nanoid'
import Box from "./Box";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  };
 

  

  render() {
    const { contacts } = this.state;

    return <Box
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      fontSize='40'
      color='#010101'
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact} />
      <h2>Contact</h2>
      <ContactList contacts={contacts} deleteContact={this.deleteContact} />
    </Box>
  };
};
