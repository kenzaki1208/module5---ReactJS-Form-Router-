import React from 'react';
import { Formik } from 'formik';
import "../app/css/AppExercise3.css";

export default function AppExercise3() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const handleValidate = (values) => {
        const errors = {};

        if (!values.to) {
            errors.to = "Required";
        } else if (!REGEX.email.test(values.to)) {
            errors.to = "Invalid email address";
        }

        if (!values.title) {
            errors.title = "Required";
        }

        if (!values.message) {
            errors.message = "Required";
        }

        return errors;
    };

    const handleSubmit = (values) => {
        alert("Sent successfully!!!");
        console.log("Submitted data:", values);
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Mail form</h1>

            <Formik
                initialValues={{ to: "", title: "", message: "", file: null }}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        {/* To */}
                        <div
                            className={`custom-input ${errors.to ? "custom-input-error" : ""
                                }`}
                        >
                            <label>To</label>
                            <input
                                type="text"
                                name="to"
                                value={values.to}
                                onChange={handleChange}
                            />
                            {errors.to && <p className="error">{errors.to}</p>}
                        </div>

                        {/* Title */}
                        <div
                            className={`custom-input ${errors.title ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                            />
                            {errors.title && <p className="error">{errors.title}</p>}
                        </div>

                        {/* Message */}
                        <div
                            className={`custom-input ${errors.message ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>

                        {/* Upload file */}
                        <div className="custom-input">
                            <label>Attachment</label>
                            <input
                                type="file"
                                name="file"
                                onChange={(event) =>
                                    setFieldValue("file", event.currentTarget.files[0])
                                }
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}