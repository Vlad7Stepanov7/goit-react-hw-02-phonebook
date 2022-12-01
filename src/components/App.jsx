import React, { Component } from "react";
import { nanoid } from 'nanoid'
import Box from "./Box";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const contacts = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
                 ]
export class App extends Component {
  state = {
    contacts: contacts,
    filter: ''
  }

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  };
 
  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  }

  

  render() {
    const { filter } = this.state
    
    const normalizedFilter = this.state.filter.toLowerCase();
    
    const filterContacts = this.state.contacts.filter(contact => {
     return contact.name.toLowerCase().includes(normalizedFilter)
    });

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
      <Filter value={filter} onChange={this.handleChangeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={this.handleDeleteContact} />
    </Box>
  };
};
