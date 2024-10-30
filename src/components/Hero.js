import React from "react";
import cover from '../asset/cover.jpg';

const Home = () => {
    return (
        <section id="home" className="bg-cover bg-center h-screen text-white" 
        style={{ backgroundImage: `url(${cover})` }} 
        >
            <div className="bg-opacity-10 h-full flex flex-col justify-center items-start text-left mb-19 p-10">
                <h2 className="text-5xl font-bold mb-5">Menyatukan Seni dan Inovasi Untuk Masa Depan yang Lebih Berkelanjutan</h2>
                <p className="text-2xl mb-8 ">Mari jelajahi bagaimana seni dan teknologi dapat menginspirasi perubahan positif untuk lingkungan.<br /> 
                Bersama, kita dapat menciptakan dunia yang lebih berkelanjutan.</p>
                <a href="#blog" className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-900">
                    Blog
                </a>
            </div>
        </section>
    )
}

export default Home;
