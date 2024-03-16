import React from 'react'
import myImage1 from './recentimg/n1.jpg'
import myImage2 from './recentimg/n2.jpg'
import myImage3 from './recentimg/n3.jpg'
import myImage4 from './recentimg/n4.jpg'
function RecentNew() {
  const myImage = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/428620181_811830770959138_7713941794387940705_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGZ-TaLUGpp1pGVXbs55PLDdRR7EM2jidp1FHsQzaOJ2nTEPgvRGlFiIm1WoGwjldB2RZE5BCJG4bKU6URe3oAr&_nc_ohc=Ot6z-j_zP9gAX--ZMWa&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfCBn-k-HXKYI_rbCsQbgR4UZEKTD2k0OtmNJRHUpS2lVA&oe=65E434F0"
  const myImage1 = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/428601954_811827964292752_992108279844896388_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGnm2T2TdY7C7EHQOXE4qs0Kcjc6vX1RnopyNzq9fVGej8qHLPLl16NfRwYUrniDNEKBoGQQmXkBlWsbuCvsnuA&_nc_ohc=1fj9J2NiZAUAX-K1q90&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfBr5WzrAQeTN4inBfntxuGk9RsDcn6QDwuMFexKdFpScw&oe=65E43422"
  const myImage2 = "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/428616998_811830984292450_2812342135544301584_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHBWQZHaMkoPO0SM2nnd_THe_95EM13hjN7_3kQzXeGM_GWspgXcHswRjQZdf3dw06LuBvUbD7-_8vDnEhnNv0x&_nc_ohc=yzAwmGVyu2MAX-npTds&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfDKUSlQ3dYKrUWPkM8VxioU2yPTG4hAUx9pQ65Jtfwthg&oe=65E396D1"
  return (
    <div className='container-fluid ' style={{ background: "#F8FAFF" }}  data-aos="flip-left" >
      <div className="container grid gap-4 grid-cols-2 md:grid-cols-1">
        <div className=''>
          <h1 className=' text-[40px]  text-[#11009E] font-bold py-4 xs:text-[30px]  uppercase '>ព័ត៌មានថ្មីៗ<hr className='h-1 w-[60%] xs:w-[90%] duration-300 bg-white' /></h1>

          <div className='overflow-hidden'>
            <img src={myImage4} className='object-contain hover:scale-105 duration-500 ' alt="" />
          </div>
          <p className='text-justify text-lg text-black md:text-lg   rounded-lg py-3'>
            អនុមោទនាបុណ្យមាឃបូជា🙏
            ថ្ងៃសុក្រ ១៤កើត ខែមាឃ ឆ្នាំថោះ បញ្ចស័ក ពុទ្ធសករាជ ២៥៦៧ ត្រូវនឹងថ្ងៃទី ២៣ ខែកុម្ភៈ ឆ្នាំ២០២៤
            អនុមោទនាបុណ្យមាឃបូជា🙏
            ពិធីបុណ្យមាឃបូជា ប្រារព្ធឡើងនៅថ្ងៃ១៥កើត ពេញបរមី ខែមាឃ ដើម្បីរំឭកដល់ព្រឹត្តិការណ៍ សំខាន់ ៗដែលបានកើតឡើងនៅក្នុងពេលដែលព្រះពុទ្ធជាម្ចាស់ទ្រង់គង់ធរមាននៅឡើយ
            ហេតុ ៥ យ៉ាងនោះគឺ៖
          </p>
        </div>
        <div className=' flex flex-col gap-[18px]   '>
          <div className=' py-3  flex items-center justify-between md:flex-col '>
            <p className='text-2xl font-bold text-[#11009E] py-2'>ស្វែងយល់ព័ត៌មានបន្ថែម</p>
            <button className="button-19 w-[23%] md:w-[50%] xs:text-sm" role="button">AllNEW</button>
          </div>
          <div className='flex flex-col bg-[#F8FAFF]  rounded-lg shadow-md gap-3' >
          <div className=' flex justify-between  md:flex-col' >
            <div className=' btn w-[40%] md:w-full '>
              <img src={myImage} className='object-contain  '/>
            </div>
            <div className='w-[55%] md:w-full md:text-xl'>
              <ul className='py-2 text-black text-lg'>
                <li>ការធ្វើបទបង្ហាញលើផ្ទាំងរូបភាពដោយសិស្ស លើប្រធានបទ៖</li>
                <li>1. អាហារដែលខ្ញុំចូលចិត្ត🥘 🍎🍔🍱</li>
                <li>2. តើធ្វើដូចម្តេចដើម្បីក្លាយជាសិស្សពូកែ? 👩‍🎓👩‍🎓</li>
              </ul>
            </div>
          </div>
          <div className='flex  justify-between md:flex-col' >
            <div className=' btn w-[40%] md:w-full'>
              <img src={myImage1} className='object-contain '/>
            </div>
            <div className='w-[55%] md:w-full md:text-xl'>
              <ul className='py-2  text-black text-lg'>
                <li>ការធ្វើបទបង្ហាញលើផ្ទាំងរូបភាពដោយសិស្ស លើប្រធានបទ៖</li>
                <li>1. អាហារដែលខ្ញុំចូលចិត្ត🥘 🍎🍔🍱</li>
                <li>2. តើធ្វើដូចម្តេចដើម្បីក្លាយជាសិស្សពូកែ? 👩‍🎓👩‍🎓</li>
              </ul>
            </div>
          </div>
          <div className=' flex  justify-between md:flex-col mb-3' >
            <div className='  btn w-[40%] md:w-full'>
              <img src={myImage2} className='object-contain '/>
            </div>
            <div className='w-[55%] md:w-full md:text-xl '>
              <ul className='py-2  text-black text-lg'>
                <li>ការធ្វើបទបង្ហាញលើផ្ទាំងរូបភាពដោយសិស្ស លើប្រធានបទ៖</li>
                <li>1. អាហារដែលខ្ញុំចូលចិត្ត🥘 🍎🍔🍱</li>
                <li>2. តើធ្វើដូចម្តេចដើម្បីក្លាយជាសិស្សពូកែ? 👩‍🎓👩‍🎓</li>
              </ul>
            </div>
          </div>
           
            </div>
            
        </div>
           
      </div>
    </div>
  )
}

export default RecentNew