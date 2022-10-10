import React from 'react'
// import img from '../../assets/images/mads-schmidt-rasmussen-xfngap_DToE-unsplash.jpg'

const TopBlogCard = ({ title }) => {
    return (
        <div className='relative cursor-pointer min-w-[250px] md:min-w-[300px] border rounded-lg'>
            <img className='max-h-36 md:max-h-52 w-full rounded-t-lg' src='https://images.unsplash.com/photo-1639776571978-fd41fece893b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt="" />
            <section className='bg-[#272727] py-4 px-6 rounded-b-lg text-white font-montSerrat'>
                <p className='text-xl md:text-2xl font-semibold'>{title}</p>
                <p className='text-xs md:text-sm py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed ornare ultricies eu at. Enim, sit cras arcu odio pulvinar erat senectus et. Pulvinar commodo in eget tortor.</p>
                <div className='flex flex-row justify-between mt-4 md:mt-8'>
                    <p className='font-semibold'>John Doe</p>
                    <button className='bg-acccentColor px-5'>Go to blog</button>
                </div>
            </section>
        </div>
    )
}

export default TopBlogCard