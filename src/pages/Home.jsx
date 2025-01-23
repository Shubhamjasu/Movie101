import React, { useEffect, useState } from 'react'
import withData from '../components/withData'
import DisplayCard from '../components/DisplayCard'
import DisplayList from '../components/DisplayList'

export default function Home() {
  const EnhancedDisplayCard = withData(DisplayCard)
  const EnhancedDisplayList = withData(DisplayList)
  return (
    <div>
      <EnhancedDisplayCard></EnhancedDisplayCard>
      {/* <EnhancedDisplayList></EnhancedDisplayList> */}
    </div>
  )
}
