import React from "react";

const Navbar = () => {
    return(
        <nav className="bg-green-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">Kalula</h1>
                <div>
                    <a href="#home" className="text-gray-300 hover:text-white mx-4 transition">Home</a>
                    <a href="#siegreen" className="text-gray-300 hover:text-white mx-4 transition">SieGreen</a>
                    <a href="#about" className="text-gray-300 hover:text-white mx-4 transition">About</a>
                    <a href="#blog" className="text-gray-300 hover:text-white mx-4 transition">Blog</a>
                    <a href="#contact" className="text-gray-300 hover:text-white mx-4 transition">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;