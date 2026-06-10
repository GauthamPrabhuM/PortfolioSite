import { Navigation } from '@/components/Navigation'
import { Intro } from '@/components/Intro'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Publications } from '@/components/Publications'
import { Skills } from '@/components/Skills'
import { Achievements } from '@/components/Achievements'
import { Contact } from '@/components/Contact'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="container-page">
        <Intro />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
