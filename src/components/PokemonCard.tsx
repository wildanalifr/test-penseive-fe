import Image from 'next/image'
import Pill from './Pill'

export default function PokemonCard({ item }: any) {
  return (
    <div key={item?.name} className="card w-96 bg-base-100 shadow-xl mb-6 mx-4">
      <figure>
        <Image
          src={item?.sprites?.back_default}
          alt="image"
          width={100}
          height={100}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <div className="flex space-x-2 my-2">
          {item?.types?.map((type: any) => (
            <Pill
              key={type?.slot}
              pillName={type?.type?.name}
              classCss="bg-blue-500"
            />
          ))}
        </div>
        <div className="flex items-center w-14">
          <p className="mr-2">Height:</p>
          <Pill pillName={item?.height} classCss="bg-red-400" />
        </div>
        <div className="flex items-center w-14">
          <p className="mr-2">Weighy:</p>
          <Pill pillName={item?.weight} classCss="bg-yellow-600" />
        </div>
      </div>
    </div>
  )
}
