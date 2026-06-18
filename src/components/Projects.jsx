export default function ProjectsSection () {
  return (
    <section id='Projects'>
      <h1 className='text-3xl font-bold text-gray-500 text-center'>My Projects</h1>

      <div className='grid grid-cols-2 text-white p-6 gap-4 '>
        <div className='bg-rose-300 p-4 rounded-lg'>
          <h2>TicTacToe Game</h2>
          <p>A simple implementation of the classic Tic Tac Toe game.</p>
        </div>

        <div className='bg-amber-500 p-4 rounded-lg'>
          <h2>Gigsta recreate</h2>
          <p>A recreation of the Gigsta platform with additional features.</p>
        </div>

        <div className='bg-violet-300 p-4 rounded-lg'>
          <h2>Doggo Fetch</h2>
          <p>An interactive game where you help a dog fetch toys.</p>
        </div>

        <div className='bg-mauve-400 p-4 rounded-lg'>
          <h2>Javascript Quiz</h2>
          <p>A fun quiz to test your JavaScript knowledge.</p>
        </div>
        
      </div>
    </section>
  )
}
