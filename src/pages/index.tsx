import BookCard from '@/components/BookCard'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='bg-[#7de3bb]  w-full flex m-auto  h-60 '>


        <Image
          src="/assets/img/used books banner.png"
          alt="wishlist Section"
          width={400}
          height={150}
          className="object-cover m-auto  rounded-lg flex items-center"
          quality={100}
        />

        <Image
          src="/assets/img/used books banner.png"
          alt="wishlist Section"
          width={400}
          height={150}
          className="object-cover m-auto  rounded-lg flex items-center"
          quality={100}
        />
        <Image
          src="/assets/img/used books banner.png"
          alt="wishlist Section"
          width={400}
          height={150}
          className="object-cover m-auto  rounded-lg flex items-center"
          quality={100}
        />
      </div>
      <div className='grid  grid-cols-4  m-auto'>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />

      </div>

    </>
  )
}
