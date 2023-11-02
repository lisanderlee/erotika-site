import Federica from '@/images/Federica.png'
import Tam from '@/images/tam.png'
import Lisandro from '@/images/Lisandro.png'
import Gladys from '@/images/gladys.png'
import Image from 'next/image'
import { BsLink45Deg } from 'react-icons/bs'
const people = [
  {
    name: 'Gladys Garrote',
    role: 'Curator',
    linkUrl: "https://linktr.ee/tropical_jewel",
    imageUrl: Gladys,
    bio: 'Art Curator and Art History professor, Gladys specializes in art-tech intersections, focusing on contemporary art and themes such as feminism and cultural memory.  Her notable achievements in the NFT space include curatorial contributions to dozens of collections and projects across  blockchains and institutions and the onboarding of 100+ minority artists into the NFT ecosystem.',
  },
  {
    name: 'Tam Gryn',
    role: 'Curator',
    linkUrl: "https://www.tamgryn.com/",
   
    imageUrl: Tam,
    bio: 'Art Curator and Author Tam, a guest lecturer at Harvard and New York Academy of the Arts, formerly led Fine Arts at Rally and curated at SHOWFIELDS. She curated and organized various exhibitions and fundraisers, collaborating with notable museums and brands. Educated in Art History, Politics, and Negotiation at Sorbonne, Reichman, and Tel Aviv Universities.',
  },
  {
    name: 'Federica Pogliani',
    role: 'Digital Strategist',
    linkUrl: "https://www.blumede.it",
    imageUrl: Federica,
    bio: 'Italian art historian Federica Pogliani, with specializations in Contemporary Art History and Visual Arts, also holds an MBA in Digital Innovation for Arts and Culture. She has worked at Galleria Marcolini and is currently a Digital Strategist at Menabò Group, focusing on branding and communication.',
  },
  {
    name: 'Lisandro Ancewicz',
    role: 'Creative Director',
    linkUrl: "https://lisanderlee.com",
    imageUrl: Lisandro,
    bio: 'Lisandro Ancewicz is a Cannes / Clio / D&AD and OneShow award-winning art director/designer originally from Buenos Aires, Argentina. Lisandro also likes to design XR experiences using software like Cinema4d, WebGL, WebXr, and React. He also finds inspiration in the real world creating custom steel furniture and sailing the Pacific.',
  },
  // More people...
]

export default function Team() {
  return (
    <div className=" ">
      <div className="mx-auto mb-20 mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="sm:text-45l font-display text-7xl tracking-tight text-pink-300">
            Meet the team
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="font-display text-lg leading-8 tracking-tight text-pink-300">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-pink-100">
                  {person.role}
                </p>
                <p className="mt-6 text-sm leading-7 text-pink-100">
                  {person.bio}
                </p>
                <div className='mt-4'>
               <a target='_blank'  href={person.linkUrl} className='  text-gray-400'><BsLink45Deg size={24} /></a> 
               </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
