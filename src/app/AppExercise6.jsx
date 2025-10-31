import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/exercise6/Login";
import Employee from "../components/exercise6/Employee";
import EmployeeDetail from "../components/exercise6/EmployeeDetail";

export default function AppExercise6() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/employee-detail" element={<EmployeeDetail />} />
            </Routes>
        </Router>
    );
}