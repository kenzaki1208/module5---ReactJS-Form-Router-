import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = form;

        if (email === "admin@gmail.com" && password === "letmein") {
            // ✅ Chuyển sang trang Employee, truyền dữ liệu người đăng nhập
            navigate("/employee", { state: { account: email } });
        } else {
            setError("Sai tài khoản hoặc mật khẩu!");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    style={{ marginTop: "10px" }}
                />
                <br />
                <button
                    type="submit"
                    style={{ marginTop: "15px", padding: "5px 15px" }}
                >
                    Login
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}