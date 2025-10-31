import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const account = location.state?.account;

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Welcome to Home Page</h2>
            {account ? (
                <p>Xin chào, {account}!</p>
            ) : (
                <p>Không có thông tin tài khoản. Hãy đăng nhập lại!</p>
            )}

            <button
                onClick={() => navigate("/")}
                style={{ marginTop: "20px", padding: "5px 15px" }}
            >
                Đăng xuất
            </button>
        </div>
    );
}
