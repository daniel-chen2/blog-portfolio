import Link from 'next/link'
import { getAllProjects } from 'app/project/projectService'
import Image from 'next/image'
import { ArrowIcon } from './arrow-icon'

export function Projects() {
  const allProjects = getAllProjects()

  return (
    <ul>
      {allProjects.map((project, i) => (
        <Link
          href={project.projectUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <li key={i} className='mb-4 flex gap-6' >
            <div className='w-1/3'>
              <Image
                src={project.imageUrl}
                alt=''
                width={200}
                height={150}
              >
              </Image>
            </div>
            <div className='w-2/3'>
              <span
                className="flex gap-2 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              >
                <h2 className="h-7 font-semibold">{project.title}</h2>
                <ArrowIcon />
              </span>

              <p>{project.summary}</p>
            </div>
            <div />
          </li>
        </Link>
      ))}
    </ul>
  )
}
