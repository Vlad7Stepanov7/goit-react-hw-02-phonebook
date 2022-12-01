import { Formik, Form, Field } from 'formik';

const ContactForm = ({onSubmit}) => {
        const handleSubmit = (values, {resetForm}) => {
          onSubmit(values);
          console.log(values);
          resetForm();
    }
    
    const initialValues = {
            name: '',
            number: ''
    }
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >           
        <Form>
           <label htmlFor="name"> Contact
            <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <label htmlFor="number"> Number
                <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               />
            </label>
            <button type="submit">Add contact</button>
            </Form>
            </Formik>
    )
}

export default ContactForm;