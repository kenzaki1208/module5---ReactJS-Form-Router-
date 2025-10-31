import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Employee() {
    const location = useLocation();
    const navigate = useNavigate();
    const account = location.state?.account; // Lấy account từ Login truyền sang

    const employees = [
        { id: 1, name: "Hoa", age: 20 },
        { id: 2, name: "Khánh", age: 25 },
        { id: 3, name: "Tú", age: 22 },
    ];

    const handleDetail = (employee) => {
        navigate("/employee-detail", { state: { employee, account } });
    };

    if (!account) {
        return <p>Chưa đăng nhập! Vui lòng quay lại trang Login.</p>;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Xin chào, {account}</h2>
            <h3>Danh sách nhân viên</h3>

            <table border="1" style={{ margin: "auto", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>
                                <button onClick={() => handleDetail(emp)}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                onClick={() => navigate("/")}
                style={{ marginTop: "20px", padding: "5px 15px" }}
            >
                Đăng xuất
            </button>
        </div>
    );
}