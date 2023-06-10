import React from 'react'
import cardContainer from "./Project.modules.css"


const Project = () => {
    const projects = [
        {
            id:1,
            title:'Savvy Marketplace',
            description:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            id:2,
            title:'Public Art Walk',
            description:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            id:1,
            title:'Savvy Marketplace',
            description:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            id:2,
            title:'Public Art Walk',
            description:'Lorem ipsum dolor sit amet consectetur.'
        }
    ]
  return (
    
    <div className='cardContainer'>
          {projects.map((project,i)=>(
            <div key ={i}>
                <div className="styles.project-image"></div>
                <div className="styles.project-details">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            ))}
    </div>
  )
}

export default Project
