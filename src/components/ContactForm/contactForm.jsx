import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import css from "./contactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, 'Must be 50 characters or less')
    .required("Required!"),
 number: Yup.string()
    .min(3, "Too Short!")
    .max(9, 'Must be 9 characters or less')
    .required("Required!")
});


export default function ContactForm({onAdd}) {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{
              name: "",
              number: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.container}>
                <div className={css.form}>
                    <label>Name:</label>
                    <Field className={css.input}  name="name" />
                    <ErrorMessage className={css.error}  name="name" component="span" />
                </div>
                <div className={css.form}>
                    <label>Number:</label>
                    <Field className={css.input} name="number" placeholder="xxx-xx-xx" />
                    <ErrorMessage className={css.error}  name="number" component="span" />
                </div>
                 <button className={css.button} type="submit">Add contact</button>
            </Form>               
        </Formik>
    )
}