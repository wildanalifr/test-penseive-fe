'use client'
import { usePokemonStore } from '@/zustand/pokemon'

export default function CompareSwitch() {
  const { isCompareMode, switchCompare } = usePokemonStore()

  return (
    <div className="flex space-x-2 items-center">
      <p>Compare : </p>
      <label className="swap">
        <input type="checkbox" onChange={switchCompare} />

        {isCompareMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#2ac63c" stroke-width="2">
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12l3 3l5-6" />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 20 20"
          >
            <path
              fill="#df2020"
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66m9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83z"
            />
          </svg>
        )}
      </label>
    </div>
  )
}
