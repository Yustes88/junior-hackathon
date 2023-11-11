import GameField from '@/components/GameField'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center justify-center">
      <div className="text-white text-md">
        <Link href={'/gallery'}>Go back to gallery</Link>
      </div>
      <div className='flex justify-center w-3/5 h-3/5'>
        <GameField/>
      </div>
    </main>
  )
}
