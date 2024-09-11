'use client'
import React from 'react'
import CountUp from 'react-countup';


export const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <>
    <p className='w-full'>
         <CountUp duration={2.75} prefix="£" end={amount} decimal="," decimals={2} />
    </p>
    </>
  )
}
