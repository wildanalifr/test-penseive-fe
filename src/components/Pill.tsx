import React from 'react'

interface PillProps {
  pillName: string
  classCss: string
  onClick?: (pillName: string) => void
}

const Pill: React.FC<PillProps> = ({ pillName, classCss, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(pillName)
    }
  }

  return (
    <div className={`py-1 px-3 rounded-full ${classCss}`} onClick={handleClick}>
      <p className="text-white">{pillName}</p>
    </div>
  )
}

export default Pill
