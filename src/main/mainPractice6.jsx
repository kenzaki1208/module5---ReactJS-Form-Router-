import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppPractice6 from "../app/AppPractice6";

ReactDOM.createRoot(document.getElementById("root6")).render(
    <React.StrictMode>
        {/* bình thường ko có basename nhưng vì làm chung project và sắp xếp khác nhau nên mới thêm để có thể link đc đến file index6.html */}
        <BrowserRouter basename="/index/index6.html">
            <AppPractice6 />
        </BrowserRouter>
    </React.StrictMode>
);