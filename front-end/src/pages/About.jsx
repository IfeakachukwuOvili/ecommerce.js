import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>"So this text is about me and my struggles. Growing up, I faced obstacles that often left me questioning my path. There were moments of doubt and hardship—times when the challenges seemed insurmountable. But each setback taught me valuable lessons about resilience and determination. Over time, I learned that my struggles did not define me; instead, they became the foundation for my growth. They showed me the strength I never knew I had and helped me embrace change as a chance to evolve. Now, as I reflect on my journey, I'm reminded that every trial is a stepping stone towards becoming a stronger, more compassionate person.</p>
        <p> There were moments of doubt and hardship—times when the challenges seemed insurmountable. But each setback taught me valuable lessons about resilience and determination. Over time, I learned that my struggles did not define me; instead, they became the foundation for my growth. They showed me the strength I never knew I had and helped me embrace change as a chance to evolve. Now, as I reflect on my journey, I'm reminded that every trial is a stepping stone towards becoming a stronger, more compassionate person.</p>
        
        <b className='text-gray-800'>Our Mission</b>
        <p>"So this text is about me and my struggles. Growing up, I faced obstacles that often left me questioning my path. There were moments of doubt and hardship—times when the challenges seemed insurmountable. But each setback taught me valuable lessons about resilience and determination. Over time, I learned that my struggles did not define me; instead, they became the foundation for my growth. They showed me the strength I never knew I had and helped me embrace change as a chance to evolve. Now, as I reflect on my journey, I'm reminded that every trial is a stepping stone towards becoming a stronger, more compassionate person.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>"So this text is about me and my struggles. Growing up, I faced obstacles that often left me questioning my path. There were moments of doubt and hardship—times when the challenges seemed insurmountable. But each setback taught me valuable lessons about resilience and determination. Over time, I learned that my struggles did not define me; instead, they became the foundation for my growth. They showed me the strength I never knew I had and helped me embrace change as a chance to evolve. Now, as I reflect on my journey, I'm reminded that every trial is a stepping stone towards becoming a stronger, more compassionate person.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>"So this text is about me and my struggles. Growing up, I faced obstacles that often left me questioning my path. There were moments of doubt and hardship—times when the challenges seemed insurmountable. But each setback taught me valuable lessons about resilience and determination. Over time, I learned that my struggles did not define me; instead, they became the foundation for my growth. They showed me the strength I never knew I had and helped me embrace change as a chance to evolve. Now, as I reflect on my journey, I'm reminded that every trial is a stepping stone towards becoming a stronger, more compassionate person.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>"So this text is about me and my struggles. Growing up, I faced obstacles that often left me questioning my path. There were moments of doubt and hardship—times when the challenges seemed insurmountable. But each setback taught me valuable lessons about resilience and determination. Over time, I learned that my struggles did not define me; instead, they became the foundation for my growth. They showed me the strength I never knew I had and helped me embrace change as a chance to evolve. Now, as I reflect on my journey, I'm reminded that every trial is a stepping stone towards becoming a stronger, more compassionate person.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About