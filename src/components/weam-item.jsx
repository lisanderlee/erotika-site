import Image from 'next/image'

export function Weam({
  name,
  image,
  category,
  location,
  description,
  link,
  instagram,
}) {
  return (
    <>
      <div className="mx-auto rounded-2xl flex w-full mt-10 flex-col lg:flex-row bg-[#5E18EA] hover:bg-[#5E18EA]/80 ">
        <div>
        <div className=" flex flex-row ">
          <Image
            className="aspect-square rounded-t-2xl  h-full object-cover shadow-xl"
            src={  "https://grgbwbcnguxjlihzzawp.supabase.co/storage/v1/object/public/images/uploads/world.png"}
            width={600}
            height={333}
            alt="Picture of the author"
            loading="lazy"
          />
          
        </div>
        <div className="hidden md:hidden lg:flex ">
          <Image
            className="aspect-square  h-full object-cover shadow-xl"
            src={  "https://grgbwbcnguxjlihzzawp.supabase.co/storage/v1/object/public/images/uploads/foto.jpg"}
            width={600}
            height={333}
            alt="Picture of the author"
            loading="lazy"
          />
          
        </div>
        <div className="hidden lg:flex ">
          <Image
            className="aspect-square  h-full object-cover shadow-xl"
            src={  "https://grgbwbcnguxjlihzzawp.supabase.co/storage/v1/object/public/images/uploads/Erika-Lust-4.webp"}
            width={600}
            height={333}
            alt="Picture of the author"
            loading="lazy"
          />
          
        </div>
        <div className="hidden xl:flex ">
          <Image
            className="aspect-square  h-full object-cover shadow-xl"
            src={  "https://grgbwbcnguxjlihzzawp.supabase.co/storage/v1/object/public/images/uploads/from-erika-s-lust-x-confessions1498418158.jpg"}
            width={600}
            height={333}
            alt="Picture of the author"
            loading="lazy"
          />
          
        </div>
        <div className="hidden lg:flex ">
          <Image
            className="aspect-square rounded-b-2xl h-full object-cover shadow-xl"
            src={  "https://grgbwbcnguxjlihzzawp.supabase.co/storage/v1/object/public/images/uploads/foto3.webp"}
            width={600}
            height={600}
            alt="Picture of the author"
            loading="lazy"
          />
          
        </div>
        
        </div>
        <div className="flex basis-2/4 justify-center flex-col px-5 py-8 lg:p-14">
          <h3 className=" font-display text-6xl  tracking-tight text-pink-300">
            The Wilzig Collection

          </h3>
          <p className=" font-display mt-5 text-2xl font-bold leading-7 text-pink-100">
            Programming for The EROTIKA Biennale.
          </p>
      
          <p className="mt-10 text-4xl font-display leading-7 text-pink-300">
            FEB 2:
          </p>
          <p className="mt-3 text-2xl font-display leading-7 text-pink-100">
            Screening Program
          </p>
          <p className="mt-10 text-lg leading-6 text-pink-100">Exclusive screening program featuring a curated selection of films by Erika Lust, a
            renowned filmmaker whose work explores diverse and empowering perspectives on
            intimacy and desire.</p>
          <ul className='list-disc mt-5 ml-10'>
            <li>A Man of Faith - 14 min</li>
            <li>el intro (POEMA) a A Love Letter to All Those Men</li>
            <li>Rain Goddess - 14 min</li>
            <li>A Sex Toy Story - 15 min</li>
            <li>Theatrical Dirty Martini Sex Party: 13 min</li>
          </ul>
          <div className="w-full mt-10  border-t border-gray-300/50" />
          <p className="mt-14 text-4xl font-display leading-7 text-pink-300">
            FEB 8:
          </p>
          <p className="mt-3 text-2xl font-display leading-7 text-pink-100">
            Demonstrations
          </p>
          <p className="mt-10 italic text-base font leading-7 text-pink-100">
            Justin Gottlieb and Jaqueline Michelle.
          </p>
          <p className="mt-1 text-lg font-bold leading-7 text-pink-100">
            Tantra &amp; Sexual Freedom Coach
          </p>
          <p className="mt-2 text-lg leading-6 text-pink-100">Lets talk about how you can become sexually liberated in the modern day using
            Tantra, sensuality, shibari and more. In this event, your facilitators/sexperts,
            Jaqueline Michelle and Justin Gottlieb, will be addressing pertinent issues and
            exchanging ideas with the audience. There will be teachings on sexual healing,
            pleasure, and empowerment as well as a Q&amp;A where you can ask anything you
            want related to sexual liberation.</p>
          <div className='divide-solid'></div>
          <p className="mt-10  italic text-base leading-7 text-pink-100">
            Velvet Lips Sex Education
          </p>
          <p className="mt-2 text-lg font-bold leading-7 text-pink-100">
            The Charm of Choking
          </p>
          <p className="mt-2 text-lg leading-6 text-pink-100">Join an intensive class that focuses on practical skills, exploring the nuances of
            dirty talk and the art of safe and sensual choking.</p>
            <div className="w-full mt-10  border-t border-gray-300/50" />
          <p className="mt-14 text-4xl font-display leading-7 text-pink-300">
            FEB 15:
          </p>
          <p className="mt-3 text-2xl font-display leading-7 text-pink-100">
            Artists Talk on Miami&#39;s Erotic Art Scene
          </p>
          <p className="mt-10 text-lg leading-6 text-pink-100">A discussion on erotic art within contemporary art practices. Moderated by Biennale co-
            curator Gladys Garrote, the panel includes invited artists: OONA, Reniel Diaz, Justyna
            Kisielewicz, and Marlon Portales.</p>
            <div className="w-full mt-10  border-t border-gray-300/50" />
          <p className="mt-14 text-4xl font-display leading-7 text-pink-300">
            FEB 22:
          </p>
          <p className="mt-3 text-2xl font-display leading-7 text-pink-100">
            Spanish Language Workshops
          </p>
          <p className="mt-10 text-base  italic font-bold leading-7 text-pink-100">
            Paola Andrea Rodriguez: &quot;Workshop: Ingredients for Creating Your Erotic Garden&quot;
      
          </p>
          <p className="mt-2 text-lg leading-6 text-pink-100">In this workshop, Paola will guide you through the exploration of essential elements to
            cultivate your own erotic garden. Through reflective discussions, interactive exercises,
            and insightful demonstrations, you&#39;ll gain valuable insights to enhance pleasure,
            intimacy, and connection in your sexual life. Join us to create a positive, judgment-free
            space where everyone is welcome.</p>
          <p className="mt-10 text-base italic font-bold leading-7 text-pink-100">
            Belén Solo Pídemelo: &quot;Workshops for Women 40 and Above to Rediscover Their
            Sexuality&quot;
          </p>
          <p className="mt-2 text-lg leading-6 text-pink-100">Workshop specifically tailored for women aged 40 and above who wish to rediscover
            and embrace their sexuality with confidence. These workshops provide a safe and
            welcoming space to explore, learn, and grow, offering practical tools to empower and
            enrich your sexual journey. Don&#39;t miss the opportunity to embark on this journey of self-
            discovery and sensual connection!</p>
            <div className="w-full mt-10 border-t border-gray-300/50" />
          <div className="mt-8 flex flex-row">
            <a
              target='_blank'
              href={link}
              className="group inline-flex flex-none items-center justify-center rounded-full bg-pink-300 px-8 py-2 text-base font-semibold text-[#5E18EA] hover:bg-pink-200 hover:text-[#5E18EA] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-pink-400 active:text-violet-100"
            >
              Website
            </a>
            <a
              target='_blank'
              href={instagram}
              className="group ml-5 inline-flex flex-none items-center justify-center rounded-full bg-pink-300 px-8 py-2 text-base font-semibold text-[#5E18EA] hover:bg-pink-200 hover:text-[#5E18EA] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-pink-400 active:text-violet-100"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
