"use client"
import Link from 'next/link'
import React from 'react'

const AnalyticsPageDefault = () => {
  return (
    <div>
        default page for main parallel routes
        <Link className='mx-2' href="/paralel_routes/settings">Go to Setting</Link>
    </div>
  )
}

export default AnalyticsPageDefault