import css from "./contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Contact({onDelete, contacts: {
    id,
    name,
    number
} }) {
    return (
        <div className={css.container}>
            <div className={css.contact}>
                <p className={css.text}><FaUser /> {name}</p>
                <p className={css.text}><BsFillTelephoneFill/> {number}</p>
            </div>
            <button className={css.button} onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
}