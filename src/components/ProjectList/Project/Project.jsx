import React from 'react'
import styles from './ProjectList.modules.css'




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
        }
    ]
  return (
    
    <div className='styles.card-container'>
          {projects.map((project,i)=>(
            <div key ={i}>
                <div className="project-image"></div>
                <div className="project-details">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            ))}
    </div>
  )
}

export default Project
