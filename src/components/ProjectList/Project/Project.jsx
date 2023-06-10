import React from 'react'
import cardContainer from "./Project.modules.css"


const Project = ({id,title,description}) => {   
  return (
    

            <div key ={id} className='cardContainer'>
                <div className="styles.project-image">{title}</div>
                <div className="styles.project-details">{description}</div>
            </div>

  )
}

export default Project
