import myPhoto from '../assets/Gemini_Generated_Image_38brvt38brvt38br.png'

export default function HomeSection () {
  return (
    <section id='Home' className='relative w-full h-screen'>
      <img
        src={myPhoto}
        alt='My Photo'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-slate-100 bg-black/40'>
        <h1 className='text-4xl font-bold'>Welcome to Peniel's Portfolio</h1>
        <p className='mt-4 text-lg'>Looking for something?.</p>
      </div>
    </section>
  )
}
