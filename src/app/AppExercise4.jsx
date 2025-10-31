import React from "react";
import { Formik } from "formik";
import "../app/css/AppExercise4.css";

export default function AppExercise4() {
    const SEX_LIST = [
        { label: "Nam", value: "male" },
        { label: "Nữ", value: "female" },
    ];

    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) errors.name = "Required";
        if (!values.number) errors.number = "Required";
        if (!values.birthYear) errors.birthYear = "Required";
        else if (values.birthYear <= 1900)
            errors.birthYear = "Năm sinh phải > 1900";

        if (!values.nationality) errors.nationality = "Required";
        if (!values.province) errors.province = "Required";
        if (!values.district) errors.district = "Required";
        if (!values.ward) errors.ward = "Required";
        if (!values.address) errors.address = "Required";
        if (!values.phone) errors.phone = "Required";

        if (!values.email) errors.email = "Required";
        else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        )
            errors.email = "Invalid email address";

        return errors;
    };

    const handleSubmit = (values) => {
        alert("Khai báo thành công!");
        console.log(values);
    };

    return (
        <div className="container">
            <h1>Tờ khai y tế</h1>
            <Formik
                initialValues={{
                    name: "",
                    number: "",
                    birthYear: "",
                    sex: "",
                    nationality: "",
                    company: "",
                    department: "",
                    healthInsurance: false,
                    province: "",
                    district: "",
                    ward: "",
                    address: "",
                    phone: "",
                    email: "",
                    travelHistory: "",
                    symptoms: [],
                    contact: [],
                }}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Thông tin cá nhân */}
                        <div
                            className={`custom-input ${errors.name && touched.name ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Họ tên</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && (
                                <p className="error">{errors.name}</p>
                            )}
                        </div>

                        <label>Số hộ chiếu / CMND</label>
                        <input
                            type="text"
                            name="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.number}
                        />
                        {errors.number && touched.number && (
                            <p className="error">{errors.number}</p>
                        )}

                        <label>Năm sinh</label>
                        <input
                            type="number"
                            name="birthYear"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.birthYear}
                        />
                        {errors.birthYear && touched.birthYear && (
                            <p className="error">{errors.birthYear}</p>
                        )}

                        <label>Giới tính</label>
                        <div className="flex">
                            {SEX_LIST.map((item) => (
                                <label key={item.value} className="width-auto">
                                    <input
                                        type="radio"
                                        name="sex"
                                        value={item.value}
                                        checked={values.sex === item.value}
                                        onChange={handleChange}
                                    />{" "}
                                    {item.label}
                                </label>
                            ))}
                        </div>

                        <label>Quốc tịch</label>
                        <input
                            type="text"
                            name="nationality"
                            onChange={handleChange}
                            value={values.nationality}
                        />
                        {errors.nationality && touched.nationality && (
                            <p className="error">{errors.nationality}</p>
                        )}

                        <label>Công ty làm việc</label>
                        <input
                            type="text"
                            name="company"
                            onChange={handleChange}
                            value={values.company}
                        />

                        <label>Bộ phận làm việc</label>
                        <input
                            type="text"
                            name="department"
                            onChange={handleChange}
                            value={values.department}
                        />

                        <label>
                            <input
                                type="checkbox"
                                name="healthInsurance"
                                checked={values.healthInsurance}
                                onChange={handleChange}
                            />
                            Có thẻ bảo hiểm y tế
                        </label>

                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <label>Tỉnh thành</label>
                        <input
                            type="text"
                            name="province"
                            onChange={handleChange}
                            value={values.province}
                        />
                        {errors.province && touched.province && (
                            <p className="error">{errors.province}</p>
                        )}

                        <label>Quận / Huyện</label>
                        <input
                            type="text"
                            name="district"
                            onChange={handleChange}
                            value={values.district}
                        />
                        {errors.district && touched.district && (
                            <p className="error">{errors.district}</p>
                        )}

                        <label>Phường / Xã</label>
                        <input
                            type="text"
                            name="ward"
                            onChange={handleChange}
                            value={values.ward}
                        />
                        {errors.ward && touched.ward && (
                            <p className="error">{errors.ward}</p>
                        )}

                        <label>Số nhà, phố, tổ dân phố / thôn / đội</label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={values.address}
                        />
                        {errors.address && touched.address && (
                            <p className="error">{errors.address}</p>
                        )}

                        <label>Điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                        />
                        {errors.phone && touched.phone && (
                            <p className="error">{errors.phone}</p>
                        )}

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        {errors.email && touched.email && (
                            <p className="error">{errors.email}</p>
                        )}

                        {/* Thông tin sàng lọc */}
                        <h3>Trong 14 ngày qua...</h3>
                        <label>
                            Anh/Chị có đến quốc gia / vùng lãnh thổ nào (nếu có):
                        </label>
                        <textarea
                            name="travelHistory"
                            onChange={handleChange}
                            value={values.travelHistory}
                        ></textarea>

                        <label>Có thấy dấu hiệu nào sau đây không?</label>
                        <div>
                            {["Sốt", "Ho", "Khó thở", "Viêm phổi", "Đau họng", "Mệt mỏi"].map(
                                (symptom) => (
                                    <label key={symptom} className="width-auto">
                                        <input
                                            type="checkbox"
                                            name="symptoms"
                                            value={symptom}
                                            onChange={handleChange}
                                        />
                                        {symptom}
                                    </label>
                                )
                            )}
                        </div>

                        <label>Tiếp xúc với?</label>
                        <div>
                            {[
                                "Người bệnh hoặc nghi ngờ COVID-19",
                                "Người từ nước có COVID-19",
                                "Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)",
                            ].map((item) => (
                                <label key={item} className="width-auto">
                                    <input
                                        type="checkbox"
                                        name="contact"
                                        value={item}
                                        onChange={handleChange}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}