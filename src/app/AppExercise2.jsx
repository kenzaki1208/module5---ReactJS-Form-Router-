import React, { useState } from 'react';
import { Formik } from 'formik';
import "../app/css/AppExercise2.css";

export default function AppExercise2() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: "", number: "" });
    const [indexSelected, setIndexSelected] = useState(-1);

    const handleValidate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Required";
        }

        if (!values.number) {
            errors.number = "Required";
        } else if (isNaN(values.number)) {
            errors.number = "Must be a number";
        }

        return errors;
    }

    const handleSelect = (book, index) => {
        setForm(book);
        setIndexSelected(index);
    }

    const handleDelete = (index) => {
        const newBooks = JSON.parse(JSON.stringify(books));
        newBooks.splice(index, 1);
        setBooks(newBooks);
    }

    const handleSubmit = (values, { resetForm }) => {
        const newBooks = JSON.parse(JSON.stringify(books));

        if (indexSelected > -1) {
            newBooks.splice(indexSelected, 1, values);
        } else {
            newBooks.push(values);
        }

        setBooks(newBooks);
        setForm({ title: "", number: "" });
        setIndexSelected(-1);
        resetForm();
    }

    return (
        <div className='container'>
            <h1>Library</h1>

            <Formik
                initialValues={form}
                enableReinitialize
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.title && touched.title ? "custom-input-error" : ""
                                }`}
                        >
                            <label htmlFor="title">Tiêu đề</label>
                            <input
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.title && touched.title && (
                                <p className="error">{errors.title}</p>
                            )}
                        </div>

                        <div
                            className={`custom-input ${errors.number && touched.number ? "custom-input-error" : ""
                                }`}
                        >
                            <label htmlFor="number">Số lượng</label>
                            <input
                                type="text"
                                name="number"
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.number && touched.number && (
                                <p className="error">{errors.number}</p>
                            )}
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.number}</td>
                            <td>
                                <button
                                    className="width-auto"
                                    onClick={() => handleSelect(book, index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="width-auto"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}