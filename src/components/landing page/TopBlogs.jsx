import React from 'react'
import Lines from '../../assets/images/Group 10.svg'
import TopBlogCard from './TopBlogCard'

const TopBlogs = () => {
    return (
        <div>
            <span className='flex flex-row justify-center font-poppins font-semibold text-3xl space-x-2 mt-20'><p className='text-purpleAccColor'>Top </p> <p> Blogs</p></span>
            <img className='mx-auto mt-2 mb-2' src={Lines} alt="" />
            <div className='grid grid-cols-4 mx-12 my-8 gap-10'>
                <TopBlogCard title='Mountains' />
                <TopBlogCard title='Trees' />
                <TopBlogCard title='Roads' />
                <TopBlogCard title='Trek' />
            </div>
        </div>
    )
}

export default TopBlogs