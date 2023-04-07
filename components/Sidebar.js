import React from 'react'

import {
    UserRemoveIcon,
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    BookmarkIcon,
} from "@heroicons/react/outline"
import { signOut } from 'next-auth/react'

function Sidebar() {
  return (
    <div
        className='text-zinc-400 font-bold p-5 text-base border-r border-gray-900'
    >
        <div
            className='space-y-4'
        >
            <button
                className='flex items-center space-x-2 hover:text-white'
                onClick={() => signOut()}
            >
                <UserRemoveIcon 
                    className='h-5 w-5'
                />
                <p>Logout</p>
            </button>
            <button
                className='flex items-center space-x-2 hover:text-white'
            >
                <HomeIcon 
                    className='h-5 w-5'
                />
                <p>Home</p>
            </button>
            <button
                className='flex items-center space-x-2 hover:text-white'
            >
                <SearchIcon 
                    className='h-5 w-5'
                />
                <p>Search</p>
            </button>
            <button
                className='flex items-center space-x-2 hover:text-white'
            >
                <LibraryIcon 
                    className='h-5 w-5'
                />
                <p>Your Library</p>
            </button>
            <hr 
                className='border-t-[0.1px] border-gray-900'
            />

            <button
                className='flex items-center space-x-2 hover:text-white'
            >
                <PlusCircleIcon
                    className='h-5 w-5'
                />
                <p>Create Playlist</p>
            </button>
            <button
                className='flex items-center space-x-2 hover:text-white'
            >
                <HeartIcon 
                    className='h-5 w-5'
                />
                <p>Liked Songs</p>
            </button>
            <button
                className='flex items-center space-x-2 hover:text-white'
            >
                <BookmarkIcon 
                    className='h-5 w-5'
                />
                <p>Your Episodes</p>
            </button>
            <hr 
                className='border-t-[0.1px] border-gray-900'
            />

            {/* PLAYLISTS */}
            <div
                className='space-y-4 h-[50vh] overflow-y-scroll'
            >
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
                <p className='font-medium cursor-pointer hover:text-white'> Playlist Name </p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar