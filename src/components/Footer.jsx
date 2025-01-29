import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="bg-stone-950 flex justify-center">
      <div className="h-16 w-4/5 flex flex-row text-red-400 items-center">
        <div>
        <FontAwesomeIcon icon={faCopyright} /> Copyright 2024
        </div>
      </div>
    </div>
  )
}
