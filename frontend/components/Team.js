import React from 'react'
import Card from './Card'

export default function Team() {

  const Team = [
    {name: 'HANZBLADE', role: 'Founder', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun', twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'PHAS0R', role: 'Developer', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun',twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'MIKE', role: 'Developer', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun',twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'FAELINA', role: 'Lore', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun',twitter:'https://twitter.com/cryptotoolhub'},
    {name: 'ALEX', role: 'Game Design', image: '/placeholder.png', description: 'Cool dude big gun. Cool dude, big gun',twitter:'https://twitter.com/cryptotoolhub'}
  ]
   
  return (
    <section id="team" className='w-full h-screen bg-[#74acf7] flex justify-center items-center'>
        <div className="max-w-6xl">
          <div className='grid grid-cols-5 gap-[6rem]'>
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
