import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/searchBox";
import ContactList from "./ContactList/contactList";
import contacts from "../contacts.json";
import { useEffect, useState } from "react";



const getSaveContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts !== null && savedContacts !== '[]' ?JSON.parse(savedContacts): contacts;
};

export default function App() {

  const [contact, setContact] = useState(getSaveContacts);
  const [filter, setFilter] = useState('')

  const visibleContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact))
  }, [contact]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onType={setFilter} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>

  );
}