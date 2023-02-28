import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-[720px] w-full relative top-0  ">
        <Image
          src="/assets/img/hero-image.jpg"
          alt="Hero Section"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
    </>
  )
}
