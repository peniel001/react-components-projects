import aboutImage from '../assets/about_1.jpg'
export default function AboutSection () {
  return (
    <section id='About' className='flex flex-col h screen'>
      <h1 className='text-3xl font-bold text-gray-500 text-center p-4'>
        About Me
      </h1>
      <div className='flex flex-1'>
        <div className='w-1/2 bg-taupe-500 flex items-center justify-center p-6 hover:bg-stone-500 transition-all duration-500'>
          <p className='text-white p-2'>
            I am a passionate fullstack web designer with versatile knowledge
            across a wide range of programming languages and frameworks. Over
            the years, Ive dedicated myself to building websites that are not
            only functional but also visually striking, blending creativity with
            technical precision. My focus is on delivering modern, user friendly
            designs that make a lasting impression. Whether its crafting
            responsive layouts, optimizing performance, or integrating cutting
            edge features.
          </p>
        </div>

        <div className='w-1/2 bg-taupe-500 flex items-center justify-center p-4 max-h-[400px] hover:bg-gray-500 transition-all duration-500'>
          <img
            src={aboutImage}
            alt='About Me'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}
