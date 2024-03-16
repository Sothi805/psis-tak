import React from 'react'
import Footer from '../home/component/Footer'
import myImage from "./presedent.jpg"
import myImage1 from "./signature.png"
function Morep() {
    return (
        <div>
        <div className='container-fluid     '>
            <div className="container ">
                <h2 className='py-10 text-center shadow-lg rounded-xl  font-bold text-4xl tracking-[3px] md:text-xl xs:text-sm'data-aos="flip-right">PRESIDENT’S MESSAGE</h2>
            </div>
            <div className="container flex  items-center md:flex-col-reverse md:items-start  justify-between ">
                <div className='w-[65%] md:w-full' data-aos="zoom-out-right">
                    <h3 className='text-2xl text-blue-600 xs:text-lg py-2 md:text-center'>Message from the President</h3>
                    <p className='text-lg py-3'><b className='text-red-500'>Congratulations</b> to all new students! You have chosen well in selecting Paññasastra University of Cambodia (PUC). We are committed to Excellence in education. We view education as the prime most important purpose in life.</p>
                    <p className='text-lg'>From our founding, we have taken our role - to educate and empower future leaders - most seriously. PUC strives to provide top quality instructions and to develop younger generations to be qualified professionals with high leadership qualities and wisdom. We also strive to play a leadership role in local, national, regional, and global affairs. Our faculty members are drawn among professionals in business, government, and academia from different parts of the world.</p>
                    
                </div>
                <div className='w-[30%] bg-red-400 md:w-full md:flex md:items-center'>
                    <img src={myImage} className='h-[80%] object-contain ' />
                </div>
            </div>
            <div className='container'>
                <p className='text-lg py-2'>in order to integrate our graduates into international community, we use English as our primary vehicle of learning. Indeed, we are the only university in Cambodia, and one of a select few in Southeast Asia to offer all instructions in English. In addition, and as part of our general education requirement, our undergraduate and graduate programs are enriched with courses in Khmer Studies, Asian Cultures and Civilizations, Ethics, Good Governance, Philosophy, Gender Studies, Psychology, and Environment.   </p>
                    <p className='text-lg pb-2'><b className='text-blue-600'> You and your dear parents</b> should be proud of being associated with PUC. PUC is your University. As a student at PUC, you have full access to PUC Library, AmCam Exchange, Hiroshima Corner, RWI Law Library, Electronic Libraries with our overseas partners, Multi-Media Center, Independent Learning Centers, Computer Labs, Special Premier English Language Online, Institutes, and Community Service Learning Center. Each year, we improved our existing programs, along with the new innovated ones. In order to be on par with rapid advancement of ITC, PUC has strengthened its programs in mathematics, sciences, and education technologies.</p>
                    <p className='text-lg'><b className='text-blue-600'>Each of you has the seeds of greatness within you. At PUC,</b> you will receive education and training under strict and rigorous academic disciplines. Although we treat everyone of you with loving-kindness and compassion as we treat our own children, your true success depends only on your personal efforts, patience, endurance, commitment, and most of all your self-discipline. With self-discipline, you will rise to your full potential.</p>
                    <p className='text-lg py-2'>Thank you very much for placing your confidence in us. We welcome prospective students and their parents to visit our campuses, meet with our administrators, faculty members, and advisors. Also, you are welcome to see me personally for any concerns that you or your parents might have for your future professional career. Our doors are open. Please enter to taste the sweetness of knowledge and develop your wisdom.</p>
                    <p className='text-lg py-2'>To everyone a great success and Happiness! With Metta Dharma</p>
                    <p className='text-lg py-2'>Sincerely Yours,</p>
                    <img src={myImage1} alt="" />
                    <b className='text-lg '>Kol Pheng, Ph.D.</b>
                    <span className='text-lg '>Founder & President</span>
                    <small className='text-lg '>January 01, 2000</small>
                    <p className='text-lg py-2'>Edited on January 31, 2020</p>
            </div>
        </div>
        <Footer/>
        </div>
       
    )
}

export default Morep