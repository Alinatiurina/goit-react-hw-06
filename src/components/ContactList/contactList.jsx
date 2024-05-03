import Contact from "../Contact/contact.jsx";
import css from "./contactList.module.css";

export default function ContactList({contacts, onDelete}) {
    return (
        <ul className={css.contactList}>
            {contacts.map((contacts) => (
                <li key={contacts.id}>
                    <Contact contacts={contacts} onDelete={onDelete} />
                </li>))}
        </ul>

    );
}