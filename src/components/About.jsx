import React from 'react'
import {Team} from './index.js'

export default function About() {
  
  
  return (
    <div className="bg-gray-50 py-12 lg:py-16">
      <div className="container px-4">
        <div className="grid gap-12 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-center">Welcome to Our World</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
              Discover the magic behind our creations and the passion that drives us forward.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-center">Our Achievements</h2>
            <ul className="grid gap-4 list-disc pl-6">
              <li className="flex items-start space-x-2">
                <span className="text-lg text-gray-600 dark:text-gray-400">Unmatched customer satisfaction</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lg text-gray-600 dark:text-gray-400">Revolutionary product innovations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lg text-gray-600 dark:text-gray-400">Acclaimed industry recognition</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-center">Meet Our Visionaries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 border gap-8">
                {
                  Team.map((user)=>{
                    return(
                      <div key={user.id} className='border  w-full rounded-full flex'>
                        <img
                          src={user.src}
                          width={120}
                          height={120}
                          className='rounded-full'
                        />
                        <div className='m-4'>
                        <h1 className='text-2xl '>{user.name}</h1>
                        <p className='text-sm font-thin mt-1 '>{user.work}</p>

                        </div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

