import React from 'react'
import cardContainer from "./Project.modules.css"
import thumbnail from '../../../images/savvy-thumbnail.png'


const Project = ({id,title,description}) => {   
  return (
            <div key ={id} className='cardContainer'>
                <img src={thumbnail}className="styles.projectImage"></img>
                <div className="styles.projectDetails">
                {title}<br></br>{description}</div>
            </div>

  )
}

export default Project
