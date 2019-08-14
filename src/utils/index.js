import React from 'react'

export const renderTime = () => {
    const currentTime = new Date().toLocaleTimeString()
    return (<p className='render-time'>{currentTime}</p>)
}

export const renderDate = () => {
    const currentDate = new Date().toLocaleDateString()
    return (<p className='render-date'>{currentDate}</p>)
}