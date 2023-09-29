import { EventItem } from '@/components/EventItem'

const events = [
  {
    name: 'Eleven Erotika Night',
    description:
      'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: '3000 NE 2nd Ave Miami',
    date: '02/23/2024',
    tier: 'vip',
    payed: '$$$',
  },
  {
    name: 'Eleven Erotika Night',
    description:
      'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: '3000 NE 2nd Ave Miami',
    date: '02/23/2024',
    tier: 'vip',
    payed: '$$$',
  },
  {
    name: 'Eleven Erotika Night',
    description:
      'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: '3000 NE 2nd Ave Miami',
    date: '02/23/2024',
    tier: 'vip',
    payed: '$$$',
  },
  {
    name: 'Eleven Erotika Night',
    description:
      'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: '3000 NE 2nd Ave Miami',
    date: '02/23/2024',
    tier: 'vip',
    payed: '$$$',
  },
]

export default function Home() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Events
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
      </div>

      <ul role="list">
        {events.map((event) => (
          <EventItem
            key={event.title}
            title={event.tile}
            image={event.imageUrl}
            description={event.description}
            location={event.location}
            date={event.date}
            tier={event.tier}
            payed={event.payed}
          />
        ))}
      </ul>
    </div>
  )
}
