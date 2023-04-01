import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mercurify - Web Player: Music for everyone</title>
        <meta name="description" content="A Mercury's take on Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="spotify3.png" />
      </Head>
      <main
        className='h-[100vh] w-[100vw] flex justify-center items-center'
      >
        <p className='text-6xl text-orange-500 p-7'>
          Mercurify
        </p>
      </main>
    </>
  )
}
