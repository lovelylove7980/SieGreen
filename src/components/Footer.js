import React from "react";

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Kalula. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;