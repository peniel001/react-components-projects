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
            I am a passionate fullstack web designer with versatile knowledge
            across a wide range of programming languages and frameworks. Over
            the years, Ive dedicated myself to building websites that are not
            only functional but also visually striking, blending creativity with
            technical precision. My focus is on delivering modern, user friendly
            designs that make a lasting impression. Whether its crafting
            responsive layouts, optimizing performance, or integrating
            cutting edge features, I approach every project with a commitment to
            excellence. What sets me apart is my progressive mindset — I never
            stop learning. Technology evolves quickly, and I thrive on staying
            ahead of the curve by exploring new tools, design trends, and
            development practices. This drive ensures that every project I take
            on reflects the latest innovations while meeting the unique needs of
            clients and users. Beyond coding and design, I value collaboration
            and clear communication. I believe the best digital experiences are
            built when creativity and technical expertise come together
            seamlessly. My goal is to transform ideas into impactful online
            solutions that inspire and engage.
          </p>
        </div>

        <div className='w-1/2 bg-taupe-500 flex items-center justify-center p-4'>
          <img src={aboutImage} alt='About Me' />
        </div>
      </div>
    </section>
  )
}
