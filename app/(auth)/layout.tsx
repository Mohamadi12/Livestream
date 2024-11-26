import React from 'react'

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({children}: Props) => {
  return (
    <div className='flex h-full items-center justify-center p-4'>{children}</div>
  )
}

export default AuthLayout