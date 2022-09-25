import React from 'react'
import img from '../../assets/images/mads-schmidt-rasmussen-xfngap_DToE-unsplash.jpg'

const TopBlogCard = ({ title }) => {
    return (
        <div className='w-full border rounded-lg'>
            <img className='!max-h-52 w-full rounded-t-lg' src={img} alt="" />
            <section className='bg-[#272727] py-4 px-6 rounded-b-lg text-white font-montSerrat'>
                <p className='text-2xl font-semibold'>{title}</p>
                <p className='text-sm py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed ornare ultricies eu at. Enim, sit cras arcu odio pulvinar erat senectus et. Pulvinar commodo in eget tortor.</p>
                <div className='flex flex-row justify-between mt-8'>
                    <p className='font-semibold'>John Doe</p>
                    <button className='bg-acccentColor px-5'>Go to blog</button>
                </div>
            </section>
        </div>
    )
}

export default TopBlogCard