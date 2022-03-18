import React from 'react'
// import InfinitySpin from 'react-loader-spinner'
// import { InfinitySpin } from 'react-loader-spinner'
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className='flex justify-center items-center py-2 mt-10'>
        {/* <InfinitySpin color="grey" /> */}

        <ClipLoader  size={150} />
    </div>
  )
}
