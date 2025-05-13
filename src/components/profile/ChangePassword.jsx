import React, { useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";

const ChangePassword = () => {
    const [oldPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("New password and confirm password do not match");
            return;
        }

        try {
            await api.post("/auth/change-password", {
                oldPassword,
                newPassword,
            });
            toast.success("Password changed successfully");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to change password");
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <div className="mb-4">
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current Password"
                    className="border px-4 py-2 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    className="border px-4 py-2 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm New Password"
                    className="border px-4 py-2 rounded-md w-full"
                />
            </div>
            <button
                onClick={handleChangePassword}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Change Password
            </button>
        </div>
    );
};

export default ChangePassword;