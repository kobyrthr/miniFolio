import React from 'react'
import * as locals from './Project.module.css'
import thumbnail from '../../../images/savvy-thumbnail.png'


const Project = ({id,title,description}) => {   
  return (
            <div key ={id} className={locals.cardContainer}>
                <img src={thumbnail}className={locals.projectImage}></img>
                <div className={locals.projectDetails}>
                {title}<br></br>{description}</div>
            </div>

  )
}

export default Project
