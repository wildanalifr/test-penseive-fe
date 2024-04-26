'use client'
import Image from 'next/image'
import Pill from './Pill'
import { usePokemonStore } from '@/zustand/pokemon'

type Props = {
  item: any
}

export default function Card({ item }: Props) {
  const { isCompareMode, setComparePokemon } = usePokemonStore()

  return (
    <div className="rounded-md bg-white">
      <div className="flex flex-col justify-center items-center relative">
        <Image
          src={item?.sprites?.back_default}
          alt="image"
          width={100}
          height={100}
          priority
        />
        <p className="text-black text-center">{item?.name}</p>
        {isCompareMode && (
          <div
            className={`absolute top-0 right-0 w-7 h-w-7 rounded-full bg-blue-400 flex justify-center items-center`}
          >
            <p
              className="text-white text-xl hover:cursor-pointer"
              onClick={() => setComparePokemon(item)}
            >
              +
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-between p-1">
        {item?.types?.map((type: any, index: any) => (
          <Pill
            key={index}
            pillName={type?.type?.name}
            classCss="bg-orange-400"
          />
        ))}
      </div>
    </div>
  )
}
