import React from 'react'
import Lines from '../../assets/images/Group 10.svg'
import whyTravImg from '../../assets/images/whyTravImg.svg'

const WhyTraveloggers = () => {
    return (
        <div className=''>
            <span className='flex flex-row justify-center font-poppins font-semibold text-3xl space-x-2 mt-12'><p className='text-purpleAccColor'>Why </p> <p> Traveloggers??</p></span>
            <img className='mx-auto my-2' src={Lines} alt="" />
            <div className='grid grid-cols-1 lg:grid-cols-2 my-12 mx-6 md:mx-10 lg:mx-16'>
                <img className='' src={whyTravImg} alt="" />
                <p className='overflow-hidden text-justify my-auto text-lg font-montSerrat m-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sit massa amet, volutpat scelerisque sed venenatis, felis, at. Vel commodo accumsan, leo sodales posuere est mattis convallis. Facilisis in dolor sit nam amet suspendisse augue nec, praesent. Tempor nunc vel lacus, sit. <br />
                    Congue aliquam faucibus aliquam, netus integer nec interdum nunc. Lobortis mattis aliquet iaculis nisi, iaculis. Aliquet aliquam egestas amet feugiat. Sem dictum eget libero, posuere interdum. Turpis in ut fermentum curabitur scelerisque rhoncus lectus nisi nunc. Nec leo, purus dictum aliquam bibendum vel hac urna. <br />
                    Congue aliquam faucibus aliquam, netus integer nec interdum nunc. Lobortis mattis aliquet iaculis nisi, iaculis. Aliquet aliquam egestas amet feugiat. Sem dictum eget libero, posuere interdum. Turpis in ut fermentum curabitur scelerisque rhoncus lectus nisi nunc. Nec leo, purus dictum aliquam bibendum vel hac urna.

                </p>
            </div>
        </div>
    )
}

export default WhyTraveloggers