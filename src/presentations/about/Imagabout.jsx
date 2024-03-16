import React from 'react'
import "./about.css"
function Imagabout() {
    return (
        <section className='container-fluid p-0'>
            <div className='relative overflow-hidden  group '>
                <img src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.6435-9/89561315_139297284248552_5061364722041880576_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeGAC8vmJ6SHUqnOk63EieXfeYRff6FvFop5hF9_oW8WiudE4oyM9iuOUD55pHIvbSkMGpY79D7zIR_kycXjK651&_nc_ohc=oxFZak9fPVQAX80f4qG&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfAcpSQxQtc0OZSAwFcJHl4DB1gCVY_aytvyulVQSD_eWw&oe=6603B7BE" className=' object-contain' />
                <div className='absolute  top-0 bottom-0 flex items-center justify-center w-full h-full  bg-slate-700 bg-opacity-60 group-hover:ml-[-100%] duration-300 ease-in-out'>
                    <h1 className='font-bold   opacity-50 text-[140px] xs:text-lg   '>About</h1>
                </div>
            </div>
        </section>
    )
}

export default Imagabout