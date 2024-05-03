import css from "./serchBox.module.css";

export default function SearchBox({ value, onType }) {
    return (
        <>
            <p className={css.text}>Find contacts by name</p>
            <input className={css.input}
                type="text"
                value={value}
                onChange={(event) => onType(event.target.value)} />
             
        </>
    );
}