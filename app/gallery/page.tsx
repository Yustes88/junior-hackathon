import Link from "next/link";

export default function Gallery() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='text-7xl'>
        Gallery
        </div>
        <div className="text-white text-md">
        <Link href={'/'}>Go to game page</Link>
      </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa laboriosam nostrum rem sed iusto delectus id repellendus voluptatibus tempora eveniet repudiandae, eos eum voluptatum. Modi numquam magni dolores culpa?
        </div>
      </main>
    )
  }