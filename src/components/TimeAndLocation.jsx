import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

const TimeAndLocation = ({weather:{dt, timezone, name, country}}) => {
  return (
    <div className=''>
        <div className="flex flex-row items-center justify-center gap-1 my-6">
            <p className="text-normal font-normal text-slate-200">{formatToLocalTime(dt, timezone)}</p>
            
        </div>
        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-bold">
                {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation