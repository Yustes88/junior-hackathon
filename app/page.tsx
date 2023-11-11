import GameField from '@/components/GameField'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white text-md">
        <Link href={'/gallery'}>Go back to gallery</Link>
      </div>
      <div className='text-7xl'>
        Hello, world!
      </div>
      <div>
        <GameField/>
      </div>
    </main>
  )
}
