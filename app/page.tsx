import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>DAshboard</h1>
      <UserButton />
    </div>
  )
}

export default Home