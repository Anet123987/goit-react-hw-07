import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Обов’язкове поле'),
    number: Yup.string()
      .matches(
        /^[0-9\s\-()+]+$/,
        'Номер може містити лише цифри, пробіли, дужки, тире, плюс'
      )
      .min(5, 'Мінімум 5 символів')
      .max(20, 'Максимум 20 символів')
      .required('Обов’язкове поле'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      name: values.name.trim(),
      number: values.number.trim(),
    }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor="name">Name</label><br />
          <Field className={css.input} name="name" type="text" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div>
          <label className={css.label} htmlFor="number">Number</label><br />
          <Field className={css.input} name="number" type="text" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
