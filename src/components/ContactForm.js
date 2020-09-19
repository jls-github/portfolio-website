import React from 'react';
import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
    return (
    <div>
        <h2>Contact Me!</h2>
        <Formik
            initialValues={{ name: "", email: "", message: ""}}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
                {() => (
                    <Form className="contact-form">
                        <Field type="text" name="name" />
                        <Field type="email" name="email" />
                        <Field type="textarea" name="message" />
                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}
        </Formik>

    </div>
    )
};

export default ContactForm