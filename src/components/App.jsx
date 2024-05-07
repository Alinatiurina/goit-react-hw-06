import {ContactForm} from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/searchBox";
import {ContactList} from "./ContactList/contactList";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList />
    </div>

  );
}