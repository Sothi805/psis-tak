import React from 'react'
import myImage from "./womenday.jpg"
import myImage2 from "./st2.jpg"
import myImage3 from "./st3.jpg"
import './academice.css'
function Sachievements() {
    return (
        <section className='container-fluid bg-[#0C359E] p-0'>
            <div className='bg-[#0C359E] container p-0'>
                <div className='py-5' >
                    <h1 className='text-white text-[30px] py-2 font-bold border-b-2'>STUDENT ACHIEVEMENTS</h1>
                </div>
                <div className='flex justify-between gap-5  pb-5'>
                    <div className='w-[50%] '>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={myImage} className="d-block w-100 rounded-tl-[150px] border-[5px] border-[#FDA403] rounded-br-[150px]" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={myImage2} className="d-block w-100 rounded-tl-[150px] border-[5px] border-[#FDA403] rounded-br-[150px]" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={myImage3} className="d-block w-100 rounded-tl-[150px] border-[5px] border-[#FDA403] rounded-br-[150px]" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='w-[50%] flex flex-col gap-3 '>
                        <div className='h-[50%]'>
                            <h1 className='text-white font-bold text-[30px] mt-[10%]'>Celebrating the 113th Anniversary of International<span className='text-pink-400'> Women's</span> Day March 8, 2024</h1>
                        </div>
                        <div className='h-[50%]'>
                            <p className='text-lg text-white'>
                                Under the theme "Women and girls in the digital revolution"
                                Wish all women good health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sachievements