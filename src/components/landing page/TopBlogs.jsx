import React, { useRef, useState } from 'react'
import Lines from '../../assets/images/Group 10.svg'
import TopBlogCard from './TopBlogCard'
import { IoIosArrowForward } from 'react-icons/io';

const TopBlogs = () => {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <span className='flex flex-row justify-center font-poppins font-semibold text-3xl space-x-2 mt-20'><p className='text-purpleAccColor'>Top </p> <p> Blogs</p></span>
            <img className='mx-auto mt-2 mb-2' src={Lines} alt="" />
            <div className="group relative md:-ml-2 h-full my-6">
                <IoIosArrowForward
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 rotate-180 ${!isMoved && 'hidden'
                        }`}
                    onClick={() => handleClick('left')}
                />
                <div
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:px-6"
                    ref={rowRef}>
                    <TopBlogCard title='Mountains' />
                    <TopBlogCard title='Trees' />
                    <TopBlogCard title='Roads' />
                    <TopBlogCard title='Trek' />
                    <TopBlogCard title='Mountains' />
                    <TopBlogCard title='Trek' />
                    <TopBlogCard title='Mountains' />

                </div>
                <IoIosArrowForward
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    )
}

export default TopBlogs