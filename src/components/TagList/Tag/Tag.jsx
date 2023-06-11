import React from 'react'
import * as locals from './Tag.module.css'

const Tag = ({tag}) => {
  return (
    <div className={locals.tag}>
     <p>{tag}</p>
    </div>
  )
}

export default Tag
