import React from 'react'
import 'flowbite'
import "./Home.css"
import myImage1 from './cardimg/card.jpg'
// import myImage2 from './cardimg/card2.jpg'
// import myImage3 from './cardimg/card3.jpg'
function Cards() {
  const myImage2 = "https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/352052341_768494398065287_3892116211623714213_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHo5pIdvbd13p5cqigxQJsMYzzWxLR_4tRjPNbEtH_i1IViFUY0EB7l40VPR65Jrm31tvcb9rGbEb9fAjQd9-3R&_nc_ohc=nWiBPLtIyisAX-1CLZf&_nc_oc=AQk8CJYhBK8pYMzfamoCgdCq_r6a8j6KmoRtPVFN2lEng58wqVNJu8HaNt6wdk0W7I8&_nc_ht=scontent.fpnh1-1.fna&oh=00_AfDVTU1ND4RI4-ZWzJ9-UOiToU2BNSz-zaNPNNiych8eFg&oe=65E38DD5"
  const myImage3 = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/429945002_815306957278186_3064431382260546448_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFFA2x51BTdUvcHaY-XHdCtLSSwZTIc0AUtJLBlMhzQBaTDN49wPwvGGVFDeSbp425OekKYjDg2aG2wmh4XHxDY&_nc_ohc=7M8ND9Q8w2EAX9nQize&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfBfHnI1HRs8rg8aD8s23ulioBOjqvvxoqg6ziL7XksWSw&oe=65E4BFDB"
  return (
    <div className='institutes flex flex-col justify-center pb-5 ' >
      <div className=' container py-10'>
        <h1 className=' text-[40px] font-bold xs:text-[30px]' data-aos="fade-up">វិទ្យាស្ថាន</h1>
      </div>
      <div className='container grid gap-4  grid-cols-3 md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1' >
        <div className=" h-full xs:w-full  bg-white border  border-gray-200 rounded-lg shadow   dark:bg-gray-800 dark:border-gray-700" >
          <div className='overflow-hidden' >
          
        <img className="rounded-t-lg h-[350px]  sm:h-[500px] xs:h-[400px] md:h-[600px] w-full object-fill hover:scale-105 transition duration-500 ease-in-out " src={myImage1} alt="" />
            </div>
          <div className="p-2 w-full ">
            <a href="#">
              <h5 className=" text-2xl font-bold tracking-tight text-blue-900 dark:text-white ">📣សាលាបញ្ញាសាស្ដ្រអន្ដរជាតិ-សាខាក្រុងតាខ្មៅ</h5>
            </a>
            <p className="mb-3 py-2 font-normal text-gray-700 text-justify dark:text-gray-400">📝ទទួលចុះឈ្មោះសិស្សចូលរៀនឆមាសទី២ ចាប់ពីថ្ងៃជូនដំណឹងនេះតទៅ
              ក្នុងកម្មវិធីចំណេះទូទៅអន្ដរជាតិ ៣ ភាសា
              ភាសាខ្មែរ🇰🇭-អង់គ្លេស🇬🇧-ចិន🇨🇳</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>        
            </a>
          </div>
        </div>

        {/* card2 */}
        <div className=" h-full  bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className='overflow-hidden'   >
          
          <img className="rounded-t-lg h-[350px]  sm:h-[500px] xs:h-[400px] md:h-[600px] w-full object-fill hover:scale-105 transition duration-500 ease-in-out " src={myImage2} alt="" />
              </div>
          <div className="p-2 w-full ">
            <a href="#">
              <h5 className=" text-2xl font-bold tracking-tight  text-blue-900 dark:text-white">📣សាលាបញ្ញាសាស្ដ្រអន្ដរជាតិ-សាខាក្រុងតាខ្មៅ</h5>
            </a>
            <p className="mb-3 py-2 font-normal text-gray-700 text-justify dark:text-gray-400">📝ទទួលចុះឈ្មោះសិស្សចូលរៀនឆមាសទី២ ចាប់ពីថ្ងៃជូនដំណឹងនេះតទៅ
              ក្នុងកម្មវិធីចំណេះទូទៅអន្ដរជាតិ ៣ ភាសា
              ភាសាខ្មែរ🇰🇭-អង់គ្លេស🇬🇧-ចិន🇨🇳</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>

        </div>
        {/* card3 */}
        <div className=" h-full bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className='overflow-hidden' >
          
          <img className="rounded-t-lg h-[350px]  sm:h-[500px] xs:h-[400px] md:h-[600px] w-full object-fill hover:scale-105 transition duration-500 ease-in-out " src={myImage3} alt="" />
              </div>
          <div className="p-2 w-full ">
            <a href="#">
              <h5 className=" text-2xl font-bold tracking-tight  text-blue-900 dark:text-white">📣សាលាបញ្ញាសាស្ដ្រអន្ដរជាតិ-សាខាក្រុងតាខ្មៅ</h5>
            </a>
            <p className="mb-3 py-2 font-normal text-gray-700 text-justify dark:text-gray-400">📝ទទួលចុះឈ្មោះសិស្សចូលរៀនឆមាសទី២ ចាប់ពីថ្ងៃជូនដំណឹងនេះតទៅ
              ក្នុងកម្មវិធីចំណេះទូទៅអន្ដរជាតិ ៣ ភាសា
              ភាសាខ្មែរ🇰🇭-អង់គ្លេស🇬🇧-ចិន🇨🇳</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards