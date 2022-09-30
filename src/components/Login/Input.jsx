import React from 'react'

const Input = ({ placeholder, type }) => {
    return (
        <input className='border-b border-b-black bg-transparent placeholder-black/90 text-sm px-2 outline-none py-1' placeholder={placeholder} type={type} />
    )
}

export default Input