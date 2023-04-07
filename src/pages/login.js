import React from 'react'

import {
  getProviders,
  signIn
} from 'next-auth/react'
import Image from 'next/image';

function Login({ providers }) {
  return (
    <div
      className='h-[100vh] flex flex-col items-center justify-center bg-black text-white'
    >
      <div
        className='flex flex-col items-center justify-center'
      >
        <div
          className='w-[100vw] flex items-center justify-center p-3 gap-3 mb-4'
        >
          <Image
            className=''
            src='/spotify3.png'
            alt='Mercurify'
            width={50}
            height={50}
          />
          <h1
            className='text-4xl font-semibold'
          >
            Mercurify
          </h1>
        </div>
        <h1
          className='mb-2 text-base font-medium'
        >To continue, log in to Mercurify.</h1>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
          >
            <button
              className='flex items-center justify-center gap-1 bg-[#12C64D] p-3 text-white uppercase rounded-lg'
              onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            >
              Continue with {provider.name}
              <Image
                className='inline-flex'
                alt='spotifyImg'
                src="/spotify.png"
                width={30}
                height={30}
              />
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    }
  }
}