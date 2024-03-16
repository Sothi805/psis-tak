import React from 'react'

function MisV() {
    const myImage = "https://media.istockphoto.com/id/1082031022/vector/target-and-darts.jpg?s=612x612&w=0&k=20&c=UyDshrr-XC3IldAI8SbXyh6bfLArYFwaU0lQgsu99HA=";
    const myImage1 = "https://thumbs.dreamstime.com/b/live-your-dream-rainbow-43815562.jpg";
    return (
        <div className='container-fluid jus-b'>
            <div className='container flex justify-between py-16  md:flex-col md:items-center'>
                <div className='  w-[50%]  flex items-center flex-col border-r-2 md:border-hidden md:border-b-2 md:w-full '>
                    <h3 className='font-bold text-5xl tracking-widest py-4 uppercas xs:text-[30px] '>MISSION</h3>
                    <img src={myImage} className='  object-contain px-16 img-r 'data-aos="zoom-in-up" />
                    <div>

                        <p className='py-5 text-2xl text-center md:text-start px-5 text-white'>From our founding, we have taken our role - to educate and empower future leaders - most seriously. PUC strives to provide top quality instructions and to develop younger generations to be qualified professionals with high leadership qualities and wisdom.</p>
                    </div>
                </div>
                <div className='  w-[50%]  flex items-center flex-col  md:w-full '>
                    <h3 className='font-bold text-5xl tracking-widest  uppercase py-4 xs:text-[30px] '>VISION</h3>
                    <img src={myImage1} className=' object-contain px-16 img-r ' data-aos="zoom-in-down"/>
                    <div>
                            <p className='py-5 text-2xl text-center md:text-start  px-5  text-white'> We also strive to play a leadership role in local, national, and global Our faculty members are drawn among professionals in business, and academia from different parts of the world.

 your dear parents should be proud of being associated with PUC.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MisV