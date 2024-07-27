import React, { FC } from 'react'

export interface ErrorM
{
    children ? : React.ReactNode;
}


const ErrorM : FC<ErrorM>= ({ children }) => {

  return (
    <div className='text-danger'>
        {children}
    </div>
  )
}

export default ErrorM