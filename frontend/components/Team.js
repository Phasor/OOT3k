import React from 'react'
import Card from './Card'

export default function Team() {

  const Team = [
    {name: 'HANZBLADE', role: 'Founder', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun. Cool dude big gun. Cool dude, big gun.Cool dude big gun. Cool dude, big gun.', twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'PHAS0R', role: 'Developer', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun. Cool dude big gun. Cool dude, big gun.Cool dude big gun. Cool dude, big gun.',twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'MIKE', role: 'Developer', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun. Cool dude big gun. Cool dude, big gun.Cool dude big gun. Cool dude, big gun.',twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'FAELINA', role: 'Lore', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun. Cool dude big gun. Cool dude, big gun.Cool dude big gun. Cool dude, big gun.',twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'ALEX', role: 'Game Design', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun. Cool dude big gun. Cool dude, big gun.Cool dude big gun. Cool dude, big gun.',twitter:'https://twitter.com/cryptotoolhub'}
  ]
   
  return (
    <section id="team" className='w-full  bg-[#74acf7] flex justify-center items-center'>
        <div className="max-w-8xl">
          <h2 className='mt-20 mb-8 text-4xl p-2 font-lucky text-gray-100'>Oceans of Talent</h2>
          <div className=' grid grid-col-1 md:grid-cols-4 gap-10'>
            {Team.map((member, index) => {
              return (
                <Card key={index} profile={member}/>
                )
               })
            }
          </div>
        </div>
    </section>
  )
}
