import Link from 'next/link'
import { getAllProjects } from 'app/project/projectService'
import Image from 'next/image'
import { ArrowIcon } from './arrow-icon'
import React from 'react'

export function Projects() {
  const allProjects = getAllProjects()

  return (
    <>
    {
      allProjects.map((project, i) => (
        <Link
          key={i}
          href={project.projectUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='mb-8 flex md:flex-nowrap flex-wrap gap-6' >
            <div className='md:w-1/3 w-full'>
              <Image
                src={project.imageUrl}
                alt=''
                width={200}
                height={150}
              >
              </Image>
            </div>
            <div className='md:w-2/3 w-full'>
              <span
                className="flex gap-2 items-center transition-all hover:text-neutral-800"
              >
                <h2 className="h-7 font-semibold">{project.title}</h2>
                <ArrowIcon />
              </span>

              <p>{project.summary}</p>
              <div className='mt-4'>
                {project.technologies.map((tech, i) => (
                  <span key={i} className='mr-2 rounded-lg bg-red-100 px-2 py-1'>{tech}</span>
                ))}
              </div>
            </div>
            <div />
          </div>
        </Link>
      ))
    }
    </>
  )
}
