import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Daniel Chen
        </h1>
        <p className="mb-4">
          Hi 👋 My name is Daniel, I am a Professional Full-Stack Engineer with also a bit of experience with Machine Learning.
          <br /><br />
        </p>
        <h2>My Favourite Technologies:</h2>
        Frontend - Angular, Next JS
        <br />
        Backend - Spring Boot (Java), Django (Python)
        <br />
        Code Editors - Cursor, VIM (Although I mainly just use the shortcuts in other editors nowadays)
      </section>
    </>
  )
}
