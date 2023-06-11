import React from 'react'
import Tag from './Tag/Tag'
import * as locals from './TagList.module.css'

const TagList = () => {
    const tags = ['JavaScript','Python','APIs','SQL','MongoDB','React','Django']

  return (
    <div className={locals.tagList}>
      {tags.map((tag,i)=>

        <Tag tag={tag} key={i}></Tag>
        
      )}
    </div>
  )
}

export default TagList
