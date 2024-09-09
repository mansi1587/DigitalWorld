import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

function About() {
  return (
    <div className='about'>
      <div className="about_left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon'/>
      </div>
      <div className="about_right">
        <h3>About Us</h3>
        <h2>A Trusted Digital Marketing Partner</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam libero quidem 
            temporibus cupiditate sequi maxime aliquid voluptas, dolor harum alias illum. Ipsum iusto 
            iure consequatur soluta corporis quam quas, suscipit rem dolorem tempore ducimus mollitia 
            blanditiis rerum deleniti hic tenetur architecto commodi at pariatur earum. Labore est saepe
             minima.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, culpa reiciendis 
            nostrum laborum voluptas sit voluptatibus! Unde sunt suscipit eius vero adipisci. Incidunt 
            nihil veniam modi sunt esse eaque accusantium!
        </p>
      </div>
    </div>
  )
}

export default About
