import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppPractice6 from "../app/AppPractice6";

ReactDOM.createRoot(document.getElementById("root6")).render(
    <React.StrictMode>
        <BrowserRouter basename="/index">
            <AppPractice6 />
        </BrowserRouter>
    </React.StrictMode>
);