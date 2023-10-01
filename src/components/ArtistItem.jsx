export function ArtistsItem({ key, name, image, role, location }) {
  return (
    <>
      <li key={key}>
        <img
          className="aspect-[14/13] w-full rounded-2xl object-cover"
          src={image}
          alt=""
          loading="lazy"
        />
        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
          {name}
        </h3>
        <p className="text-base leading-7 text-gray-300">{role}</p>
        <p className="text-sm leading-6 text-gray-500">{location}</p>
      </li>
    </>
  )
}
