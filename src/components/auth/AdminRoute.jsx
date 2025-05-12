import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
    const { roles } = useSelector((state) => state.auth);

    // Kiểm tra nếu user không có quyền admin hoặc seller
    if (!roles.includes("ROLE_ADMIN") && !roles.includes("ROLE_SELLER")) {
        return <Navigate to="/admin-login" replace />;
    }

    // Nếu user có quyền, render các route con
    return <Outlet />;
};

export default AdminRoute;