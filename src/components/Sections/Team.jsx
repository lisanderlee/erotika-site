import Federica from "@/images/Federica.png"
import Tam from "@/images/tam.png"
import Lisandro from "@/images/Lisandro.png"
import Image from "next/image"
const people = [
  {
    name: 'Gladys Garrote',
    role: 'Curator',
    twitterUrl: '#',
    linkedinUrl: '#',
    imageUrl:
      Federica,
    bio: 'Art Curator and professor with a Master&apos;s in Art History, Gladys specializes in art-tech intersections, focusing on contemporary art and themes like feminism and cultural memory. She&apos;s notable in the NFT space for contributing to various projects and introducing over 100 artists to NFTs.',
  },
  {
    name: 'Tam Gryn',
    role: 'Curator',
    twitterUrl: '#',
    linkedinUrl: '#',
    imageUrl:
      Tam,
    bio: 'Art Curator and Author Tam, a guest lecturer at Harvard and New York Academy of the Arts, formerly led Fine Arts at Rally and curated at SHOWFIELDS. She&apos;s organized various exhibitions and fundraisers, collaborating with notable museums and brands. Educated in Art History, Politics, and Negotiation at Sorbonne, Reichman, and Tel Aviv Universities.',
  },
  {
    name: 'Federica Pogliani',
    role: 'Senior Designer',
    twitterUrl: '#',
    linkedinUrl: '#',
    imageUrl:
      Federica,
    bio: 'Italian art historian Federica Pogliani, with specializations in Contemporary Art History and Visual Arts, also holds an MBA in Digital Innovation for Arts and Culture. She has worked at Galleria Marcolini and is currently a Digital Strategist at Menabò Group, focusing on branding and communication.',
  },
  {
    name: 'Lisandro Ancewicz',
    role: 'Creative Director',
    twitterUrl: '#',
    linkedinUrl: '#',
    imageUrl:
      Lisandro,
    bio: 'Lisandro Ancewicz is a Cannes / Clio / D&AD and OneShow award-winning art director/designer originally from Buenos Aires, Argentina. Lisandro also likes to design XR experiences using software like Cinema4d, WebGL, WebXr, and React. He also finds inspiration in the real world creating custom steel furniture and sailing the Pacific.',
  },
  // More people...
]

export default function Team() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="font-display text-4xl tracking-tight text-pink-300 sm:text-4xl">
            The Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-pink-100">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best experiences.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex h-80 flex-col gap-6 xl:flex-row"
            >
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src= {person.imageUrl}
                alt=""
                width={275}
                height={357}
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
