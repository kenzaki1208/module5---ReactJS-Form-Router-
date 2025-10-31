import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EmployeeDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const { employee, account } = location.state || {};

    if (!employee || !account) {
        return <p>Không có dữ liệu! Quay lại trang Employee.</p>;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Chi tiết nhân viên</h2>
            <p><b>ID:</b> {employee.id}</p>
            <p><b>Tên:</b> {employee.name}</p>
            <p><b>Tuổi:</b> {employee.age}</p>
            <p><b>Người đăng nhập:</b> {account}</p>

            <button
                onClick={() => navigate("/employee", { state: { account } })}
                style={{ marginTop: "20px", padding: "5px 15px" }}
            >
                Quay lại danh sách
            </button>
        </div>
    );
}