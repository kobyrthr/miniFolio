import React from 'react'
import * as locals from './Project.module.css'
import TagList from '../../TagList/TagList'
import thumbnail from '../../../images/savvy-thumbnail.png'


const Project = ({id,title,description}) => {   
  return (
            <div key ={id} className={locals.cardContainer}>
                <div className={locals.projectImage}>
                <img src={thumbnail}></img>
                </div>
                <div className={locals.projectDetails}>
                    <p>{title}<br></br>{description}</p>
                    <TagList>asdfadf</TagList>
                </div>
            </div>

  )
}

export default Project
