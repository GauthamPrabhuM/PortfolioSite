import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { InteractiveTerminal } from '@/components/InteractiveTerminal'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Publications } from '@/components/Publications'
import { Skills } from '@/components/Skills'
import { Achievements } from '@/components/Achievements'
import { Contact } from '@/components/Contact'

export default function Page() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="aurora" aria-hidden="true" />
      <Navigation />
      <main className="container-prose pb-20">
        <Hero />
        <div className="mt-9">
          <InteractiveTerminal />
        </div>
        <About />
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
