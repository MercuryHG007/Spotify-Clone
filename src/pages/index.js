import Head from 'next/head'
import Sidebar from '../../components/Sidebar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mercurify - Web Player: Music for everyone</title>
        <meta name="description" content="A Mercury's take on Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="spotify3.png" />
      </Head>
      <div
        className='bg-black h-screen overflow-hidden'
      >
        <main
          className=''
        >
          {/* SIDEBAR */}
          <Sidebar />

          {/* CENTER */}
        </main>
        <div>
          {/* PLAYER */}

        </div>
      </div>
    </>
  )
}
