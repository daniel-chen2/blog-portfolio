import { BlogPosts } from 'app/components/posts'
import { Projects } from './components/projects'

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Daniel Chen
        </h1>

        <p className="mb-4">
          Hi 👋 My name is Daniel, I am a Professional Full-Stack Engineer with also a bit of experience with Machine Learning. I also occasionally do some freelancing work aside from my regular job.
          <br /><br />
          In 2025 I want to learn as much as I possibly can about the field of developing Software. I have created this website so I can document my journey and learnings.
        </p>

        <h2>My Favourite Technologies:</h2>
        Frontend - Angular, Next JS
        <br />
        Backend - Spring Boot (Java), Django (Python)
        <br />
        Code Editors - Cursor, Vim (Although I mainly just use the shortcuts in other editors nowadays)
      </section>

      <section>
        <br/>
        <h2 className='mb-4 text-lg font-semibold'>Projects and Client Work</h2>
        <Projects/>
      </section>

      <section>
        <br/>
        <h2 className='mb-4 text-lg font-semibold'>Latest Posts</h2>
        Coming Soon!
        {/* <BlogPosts/> */}
      </section>
    </>
  )
}
