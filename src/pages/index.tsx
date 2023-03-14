import BookCard from '@/components/BookCard'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <div className='bg-[#7de3bb]  w-full flex m-auto  h-60 '>


        <AdsCard />
        <AdsCard />
        <AdsCard />
      </div>
      {/* //BookCard */}
      <BookCard />
    </>
  )
}
const AdsCard = () => {
  return (

    <div className="object-cover m-auto rounded-lg overflow-hidden  flex items-center " >
      <Image
        src="/assets/img/used books banner.png"
        alt="wishlist Section"
        width={400}
        height={150}

        quality={100}
      />
    </div >
  );
};