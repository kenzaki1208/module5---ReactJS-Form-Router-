import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/exercise5/Login";
import Home from "../components/exercise5/Home";

export default function AppExercise5() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}