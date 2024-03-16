import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <div className='container-fluid' style={{ background: '#021C4F' }} >
            <div className="container flex justify-between xs:flex-col py-5 " data-aos="zoom-in-up">
                <div className=' w-[31%] py-10 xs:w-full text-justify '>
                    <h1 className='text-white font-bold tracking-widest text-xl '>ADDRESS</h1>
                    <hr className='border-b-1 border-solid border-white' />
                    <p className='py-3  text-white'>Address: No. 42 St 432, Toul Tumpoung I,Khan Chamkamorn,</p>
                    <p className=' text-white'>Phnom Penh, Kingdom of Cambodia.</p>
                    <div className='mt-6 flex justify-around flex-wrap xs:flex-row  lg:gap-2  uppercase'>
                        
                           <a href='https://www.facebook.com/PSIS.TakhmauCampus'> <span className='text-4xl text-blue-400 cursor-pointer'> <FontAwesomeIcon icon={faFacebook} /></span></a>
                           <a href='https://www.instagram.com/explore/locations/206954309935116/puc-tkpannasastra-university-of-cambodia-tk/'> <span className='text-4xl text text-pink-400 cursor-pointer'> <FontAwesomeIcon icon={faInstagram} /></span></a>
                           <a href='https://t.me/PUCtelegram'> <span className='text-blue-300 text-4xl cursor-pointer'> <FontAwesomeIcon icon={faTelegram} /></span></a>
                           <a href='https://www.youtube.com/@PUCOfficialTube'><span className='text-red-500 text-4xl cursor-pointer'><FontAwesomeIcon icon={faYoutube} /></span></a>
                    </div>
                    <p className='text-white py-3'>PUC @ 2024 All Rights Reserved</p>

                </div>
                <div className=' w-[31%] py-10 xs:w-full text-justify '>
                    <h1 className='text-white font-bold tracking-widest text-xl '>Scholarship</h1>
                    <hr className='border-b-1 border-solid border-white' />
                    <p className='py-3  text-white'>2019 Asia Pacific Leadership Program (APLP)</p>
                    <p className=' text-white py-1'>Master Programme in International Human Rights Law 2018-2020</p>
                    <p className=' text-white'>Full-Covered Scholarship for Master Degrees at Zheng Zhou University, China</p>

                </div>
                <div className=' w-[31%] py-10 xs:w-full text-justify '>
                    <h1 className='text-white font-bold tracking-widest text-xl '>Contact Us</h1>
                    <hr className='border-b-1 border-solid border-white' />
                    <p className='py-3  text-white'>No. 10 E0, Alley Preah Norodom Blvd, Tonle BassacKhan Chamkamorn, Phnom Penh</p>
                    <p className=' text-white'>Toul Tumpoung Campus</p>
                    <p className=' text-white'>Email: info@puc.edu.kh</p>
                    <p className=' text-white'>Tel: 023 990 153, 087 866 363 and 099 866 363.</p>


                </div>

            </div>

        </div>
    )
}

export default Footer