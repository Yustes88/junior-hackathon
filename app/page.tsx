import GameField from '@/components/GameField'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="gap-4 p-24">
      <div className="text-white text-md">
        <Link href={'/gallery'}>Go back to gallery</Link>
      </div>
      <div className='flex justify-center'>
        <GameField/>
      </div>
    </main>
  )
}
