import aboutImage from '../assets/about_1.jpg'
export default function AboutSection () {
  return (
    <section id='About' className='flex flex-col h screen'>
      <h1 className='text-3xl font-bold text-gray-500 text-center p-4'>
        About Me
      </h1>
      <div className='flex flex-1'>
        <div className='w-1/2 bg-taupe-500 flex items-center justify-center p-6'>
          <p className='text-white p-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sit,
            perspiciatis, ipsa accusamus nulla, nostrum atque ex placeat
            pariatur omnis harum repudiandae consequatur sint saepe quia
            laboriosam ab consectetur porro?
          </p>
        </div>

        <div className='w-1/2 bg-taupe-500 flex items-center justify-center p-4'>
          <img src={aboutImage} alt='About Me' />
        </div>
      </div>
    </section>
  )
}
