import React from "react";
import { useParams } from "react-router-dom";
import "../app/css/AppPractice6.css";

function Product() {
    // Lấy tham số categoryId từ URL
    const { categoryId } = useParams();

    return (
        <div className="app-container">
            <h3>Id selected:</h3>
            <p className="category-id">{categoryId}</p>
        </div>
    );
}

export default Product;