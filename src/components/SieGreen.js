import React from "react";
import pfp from '../asset/pfp.jpg';

const SieGreen = () => {
    return (
        <section id="siegreen" className="py-20 bg-gray-100">
            <div className="container mx-auto text-left px-6">
                <h2 className="text-4x1 font-bold mb-8 text-gray-800">
                    Hi! Disini bersama SieGreen.<br /> 
                    
                </h2>

                <div className="flex flex-row items-center mb-12 space-x-6">
                    <img src={`${pfp}`} alt="img" className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"/>
                    
                    <div className="flex flex-col">
                        <p className="text-lg text-green-950 mb-2 font-semibold">SieGreen</p>
                        <p className="text-x1 text-green-950 font-medium ">Admin</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-900">
                        <h3 className="text-2x1 font-bold mb-4 text-green-900">5 Aksi Lingkungan Generasi Hijau</h3>
                        <p className="text-gray-700 mb-4 pl-2 px-1">
                        1. Terapkan Slow Fashion. <br />
                        2. Hidup Minim Sampah. <br />
                        3. Ikuti Aksi Restorasi Lingkungan. <br />
                        4. Jadi Konten Kreator Kampanye Lingkungan. <br />
                        5. Donasi Untuk Mendukung Aksi Lingkungan.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-green-900">Apa Itu Ecotechnofarming?</h3>
                        <p className="text-gray-700 mb-4">
                        Ecotechnofarming adalah sebuah pendekatan holistik dalam pertanian.<br />
                        Teknologi ini mencakup alat dan teknik yang sederhana tetapi efektif dalam meningkatkan efisiensi penggunaan sumber daya, serta inovasi dalam pengolahan hasil dan produk samping.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-green-900">Teknik-Teknik Ramah Lingkungan dalam Pertanian Berkelanjutan</h3>
                        <p className="text-gray-700 mb-4">
                        1. Penggunaan Pupuk Organik.<br />
                        2. Pengelolaan Air yang Efisien.<br />
                        3. Rotasi Tanaman.<br />
                        4. Pengurangan Limbah Plastik<br />
                        5. Pemanfaatan Energi Terbarukan<br />
                        </p>
                    </div>
                </div>
                <a href="https://www.sunterra.id/teknologi-ramah-lingkungan/#:~:text=Teknologi%20ramah%20lingkungan%20adalah%20teknologi%20yang%20dirancang%20untuk,penggunaan%20sumber%20daya%20alam%2C%20dan%20meningkatkan%20efisiensi%20energi." className="text-lg text-blue-600 mt-5 underline text-right block">
                    Pelajari lebih lanjut.
                </a>
            </div>
        </section>
    )
}

export default SieGreen;