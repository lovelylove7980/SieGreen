import React from "react";
import lingkungan from '../asset/lingkungan.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                    About
                </h2>

                <div className="grid grid-cols-1 md:grid-col gap-8">
                    <div className="flex flex-row items-center">
                    <img src={lingkungan} alt="Samuel Wattimena" className="object-cover mb-9 w-13 rounded mr-7"/>
                    <div className="ml-4 max-w-lg">
                    <h3 className="text-left text-2xl font-bold">Pemandangan</h3>
                    <p className="text-gray-700 text-left mt-2">
                        Suasana senja yang tenang di pedesaan, dengan pemandangan indah, ayunan gantung putih yang tergantung di antara dua tiang di bawah pohon rindang. Lingkungan asri di pedesaan inilah yang membuat kita merasa nyaman, jauh dari polusi dan keramaian. Sinar matahari terbenam memancarkan cahaya keemasan di atas ladang hijau yang luas, menciptakan pemandangan alam yang hangat dan artistic. Kombinasi ini menghadirkan suasana relaksasi yang menyatu dengan indah.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;