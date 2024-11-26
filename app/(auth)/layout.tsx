import React from 'react'
import { Logo } from './_components/logo'

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({children}: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-6'>
      <Logo/>
      {children}
    </div>
  )
}

export default AuthLayout