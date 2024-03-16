import React from 'react'
import myImage from "./presedent.jpg"
import { useNavigate } from 'react-router-dom'
import MisV from './MisV'
import './about.css'

const President = () => {
    const route = useNavigate() 
    return (
        <>
        <section className='container-fluid'>
            <div className='container'>
                <h1 className='text-center py-10 text-4xl font-bold text-blue-500 underline md:text-[30px] xs:text-[20px] xs:py-1'>Welcome To Paññāsāstra University of Cambodia</h1>
                <article className='  overflow-hidden flex justify-between  md:flex-col-reverse gap-10 py-10'>
                    <div className=' w-[50%] overflow-hidden   line p-1 md:w-full  '>
                        <h1 className='text-xl font-bold text-white bg-yellow-300 rounded-md xs:text-[18px] xs:text-center' data-aos="flip-up">Message from the President</h1>
                        <p className='text-lg text-slate-500 py-3' ><b className='text-blue-600'>Congratulations</b> to all new students! You have chosen well in selecting Paññasastra University of Cambodia (PUC). We are committed to Excellence in education. We view education as the prime most important purpose in life.</p>
                        <p className='text-lg  text-slate-500'>From our founding, we have taken our role - to educate and empower future leaders - most seriously. PUC strives to provide top quality instructions and to develop younger generations to be qualified professionals with high leadership qualities and wisdom. We also strive to play a leadership role in local, national, regional, and global affairs. Our faculty members are drawn among professionals in business, government, and academia from different parts of the world.</p>
                <p className='text-lg  text-slate-500 '>You and your dear parents should be proud of being associated with PUC. PUC is your University. As a student at PUC, you have full access to PUC Library, AmCam Exchange, Hiroshima Corner, RWI Law Library, Electronic Libraries with our overseas partners, Multi-Media Center, Independent Learning Centers, Computer Labs, Special Premier English Language Online, Institutes, and Community Service Learning Center. Each year, we improved our existing programs, along with the new innovated ones. In order to be on par with rapid advancement of ITC, PUC has strengthened its programs in mathematics, sciences, and education technologies.</p>
                    </div>  
                    <div className=' w-[50%] md:w-full md:flex md:justify-center 'data-aos="flip-down">
                        <img src={myImage} className='object-contain  h-[100%] rounded-lg cursor-pointer' onClick={()=>route('./morep/*')} />
                    </div>
                </article>
            </div>
        </section>
            <MisV/>
        </>
    )
}

export default President