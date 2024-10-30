import React from "react";
import minangkabau from '../asset/minangkabau.jpg';
import ecoprint from '../asset/ecoprint.jpg';
import chitrakala from '../asset/chitrakala.jpeg'

const Blog = () => {
    return (
        <section id="blog" className='py-20 bg-white'>
            <div className="container mx-auto text-center">
                <h2 className="text-2x1 font-bold mb-8">Contoh-contoh yang Telah Masyarakat Lakukan di Indonesia untuk Lingkungan</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <img src={minangkabau} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mb-4">Kincia Aia: Refleksi Kondisi Alam Minangkabau</h3>
                    <div className="flex-grow">
                    <p className="text-gray-700 text-left">Rania Jambak, seorang seniman dan komposer berdarah Minangkabau, merasa suara-suara yang dihasilkan oleh kincia aia dapat digunakan sebagai wadah eksplorasinya dalam bermusik. < br />
                        Diciptakannya inovasi kincia aia sebagai media musik bagi Rania merupakan bentuk refleksi dari kondisi lingkungan yang semakin hari semakin mengkhawatirkan.</p>
                        <a href="https://www.kompas.com/edu/read/2024/10/28/164041671/kala-generasi-muda-suarakan-isu-kerusakan-lingkungan-lewat-seni" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read More</a>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <img src={ecoprint} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mb-4">Ecoprint: Seni Berkelanjutan Yang Menghubungkan Alam dan Manusia</h3>
                    <div className="flex-grow">
                    <p className="text-gray-700 text-left">Di SDN 05 Parambahan, Kecamatan Bukit Sundi, Kabupaten Solok, teknik ecoprint diperkenalkan oleh beberapa mahasiswi Teknik Mesin Universitas Andalas dalam program Kuliah Kerja Nyata (KKN). Hal ini bertujuan untuk mengedukasi lingkungan kepada siswa-siswa sekolah dasar melalui kegiatan yang kreatif dan interaktif.</p>
                    <a href="https://kumparan.com/widya-harahap/ecoprint-seni-berkelanjutan-yang-menghubungkan-alam-dan-manusia-23KvG7OEjox/1" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read More</a>
                    </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <img src={chitrakala} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mb-4">Gandeng Sederet Seniman, Chitrakala Ajak Masyarakat Kritis terhadap Isu Lingkungan</h3>
                    <div className="flex-grow">
                    <p className="text-gray-700 text-left">Sepuluh seniman Bali yang tergabung dalam komunitas Chitrakala menggelar pameran seni rupa bertajuk “Environment” di Uma Seminyak. Pameran ini digelar sebagai bentuk kritik terhadap persoalan lingkungan yang ada. Melalui inisiasi event Chitrakala yang dikomandoi oleh Krisna B. Simamora, Yayasan Sasthi Svara berupaya memberi ruang bagi perupa untuk menampilkan karya-karyanya.</p>
                    <a href="https://wacanabali.com/2024/01/27/gandeng-sederet-seniman-chitrakala-ajak-masyarakat-kritis-terhadap-isu-lingkungan" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read More</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;