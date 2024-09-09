import React from 'react'
import './Services.css'
import service_1 from '../../assets/service-1.jpg'
import service_2 from '../../assets/service-2.jpg'
import service_3 from '../../assets/service-3.jpg'
import program_icon_1 from '../../assets/program_icon_1.png'
import program_icon_2 from '../../assets/program_icon_2.png'
import program_icon_3 from '../../assets/program_icon_3.png'

function Services() {
  return (
    <div className='services'>
        <div className='service'>
             <img src={service_1} alt="" />
             <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Digital Marketing Strategy</p>
             </div>
        </div>
        <div className='service'>
             <img src={service_2} alt="" />
             <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Search Engine Optimization</p>
             </div>
        </div>
        <div className='service'>
             <img src={service_3} alt="" />
             <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Social & Paid Media</p>
             </div>
        </div>
        

      
    </div>
  )
}

export default Services
