import React from 'react'
import Project from './Project/Project'
const ProjectList = () => {
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
    <section>
      {projects.map((project,i)=>(
        <Project{...project} key={i}></Project>
        ))}
    </section>
  )
}

export default ProjectList
