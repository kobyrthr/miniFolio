import React from 'react'
import Project from './Project/Project'
import * as locals from './ProjectList.module.css'
const ProjectList = () => {
    const projects = [
        {
            id:1,
            title:'Savvy Marketplace',
            description:'Lorem ipsum dolor sit amet consectetur.',
            tags:['JavaScript','Python','MongoDB','SQL','React']
        },
        {
            id:2,
            title:'Public Art Walk',
            description:'Lorem ipsum dolor sit amet consectetur.',
            tags:['JavaScript','Python','MongoDB','SQL','React']
        },
        {
            id:1,
            title:'Savvy Marketplace',
            description:'Lorem ipsum dolor sit amet consectetur.',
            tags:['JavaScript','Python','MongoDB','SQL','React']
        },
        {
            id:2,
            title:'Public Art Walk',
            description:'Lorem ipsum dolor sit amet consectetur.',
            tags:['JavaScript','Python','MongoDB','SQL','React']
        }
    ]
  return (
    <section className={locals.projectList}>
      {projects.map((project,i)=>(
        <Project{...project} key={i}></Project>
        ))}
    </section>
  )
}

export default ProjectList
