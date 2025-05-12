import React, { useState, useEffect } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");

    // Lấy danh sách danh mục từ API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/admin/categories");
                setCategories(response.data);
            } catch (error) {
                toast.error("Failed to fetch categories");
            }
        };
        fetchCategories();
    }, []);

    // Xử lý thêm danh mục mới
    const handleAddCategory = async () => {
        if (!newCategory.trim()) {
            toast.error("Category name cannot be empty");
            return;
        }
        try {
            const response = await api.post("/admin/categories", { name: newCategory });
            setCategories([...categories, response.data]);
            setNewCategory("");
            toast.success("Category added successfully");
        } catch (error) {
            toast.error("Failed to add category");
        }
    };

    // Xử lý xóa danh mục
    const handleDeleteCategory = async (id) => {
        try {
            await api.delete(`/admin/categories/${id}`);
            setCategories(categories.filter((category) => category.id !== id));
            toast.success("Category deleted successfully");
        } catch (error) {
            toast.error("Failed to delete category");
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter new category"
                    className="border px-4 py-2 rounded-md w-full"
                />
                <button
                    onClick={handleAddCategory}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                >
                    Add Category
                </button>
            </div>
            <table className="table-auto w-full bg-white shadow-md rounded-md">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td className="border px-4 py-2">{category.id}</td>
                            <td className="border px-4 py-2">{category.name}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleDeleteCategory(category.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCategories;