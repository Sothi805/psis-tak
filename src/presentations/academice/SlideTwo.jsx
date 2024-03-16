import React from 'react'
import myImage from './slideA.jpg'
function SlideTwo() {
  const img1 = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/298408413_591623422349267_8343272119905377868_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9534ce&_nc_eui2=AeEAbbc-xV_cFQUKSx5pudfHWrNDSj5ylWRas0NKPnKVZDyZ9QA4DPYGRCKmbYzW2XsHiTXUV-AGTFWuFrsJTi9K&_nc_ohc=gAapxNvFAdkAX_r8Ajc&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfBBREI7ni8h5F2Pmf9y5pk-B3XjrGVWvUCSz0sZudN8EQ&oe=65EAFAFB"
  const img2 = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/275462140_495915875253356_7981153371323365496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEy1-I2yBj17HEFAYG1Q6Ap5seu0bxJG1bmx67RvEkbVp8YsBYH9Wn0vU8DybjNBvuAb-WrpdsbgWV0XX-RfXWj&_nc_ohc=D00LTkUX14EAX8nKSZZ&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfBddJg66pOSw8QxTnJAgqNfmSYfAxfaJe4cg_lkHiGSsg&oe=65E75726"
  const img3 = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.6435-9/192526921_317768416401437_6927668863068443533_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeFsitL78GV7p6iz7dT1TAV6CpEI_bTbrx0KkQj9tNuvHUMUKg4KzCkxllJxniv1ZxvG-yoIu3X-sfbAjEA6Ryvc&_nc_ohc=cmeT1udp4IQAX9IC1yV&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfDF9NLzQltAeRfyoPnI7_yRuLZQWdcbz8qBC_tF2o0CVg&oe=66090CFF"
  return (
    <section className='container-fluid relative flex flex-col justify-center items-center group  p-0'>
      <div className='relative overflow-hidden  group  '>
        <img src={myImage} className=' object-contain' />
        <div className='absolute  left-[-100%] bottom-0 top-0 right-0 flex items-center  justify-center flex-col text-center w-full h-full  bg-slate-700 bg-opacity-60 group-hover:ml-[100%] duration-300 ease-in-out'>
          <h1 className='font-bold text-yellow-300 opacity-80 text-[70px] xs:text-[30px] underline underline-offset-8   '>Congratulation!</h1>
          <p className=' text-[40px] text-white  xs:text-2xl xs:py'>The First Graduation </p>
          <p className='text-white  text-[40px]  xs:text-2xl'>PUC-Institute of Foreign Language </p>
        </div>
      </div>
    </section>

  )
}

export default SlideTwo