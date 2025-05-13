import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} E-Shop. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="/about" className="hover:underline">
                        About Us
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                    <a href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </a>
                </div>
            </div>

        </footer>

    );
};

export default Footer;