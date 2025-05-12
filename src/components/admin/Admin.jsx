import React from "react";
import ManageCategories from "./ManageCategories";

const AdminPage = () => {
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-6">
            <h1 className="text-4xl font-bold text-slate-800 mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-slate-800">Manage Products</h2>
                    <p className="text-slate-600 mt-2">Add, edit, or delete products.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-slate-800">Manage Users</h2>
                    <p className="text-slate-600 mt-2">View and manage user accounts.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-slate-800">View Orders</h2>
                    <p className="text-slate-600 mt-2">Track and manage customer orders.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-slate-800">Manage Categories</h2>
                    <ManageCategories />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;