import React from "react";
import { Formik } from "formik";
import "../app/css/AppExercise1.css"

export default function AppExercise1() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    return (
        <div className="App">
            <h1>Contact form</h1>
            <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = "Required";
                    }

                    if (!values.email) {
                        errors.email = "Required";
                    } else if (!REGEX.email.test(values.email)) {
                        errors.email = "Invalid email address";
                    }

                    if (!values.phone) {
                        errors.phone = "Required";
                    }

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    alert("Add contact successfully!!!");
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name && touched.name ? "custom-input-error" : ""}`}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name && (<p className="error">{errors.name}</p>)}
                        </div>

                        <div className={`custom-input ${errors.email && touched.email ? "custom-input-error" : ""}`}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email && (<p className="error">{errors.email}</p>)}
                        </div>

                        <div className={`custom-input ${errors.phone && touched.phone ? "custom-input-error" : ""}`}>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                            {errors.phone && touched.phone && (<p className="error">{errors.phone}</p>)}
                        </div>

                        <div className="custom-input">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" value={values.message} onChange={handleChange}></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}