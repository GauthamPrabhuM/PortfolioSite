import { Navigation } from '@/components/Navigation'
import { SideRails } from '@/components/SideRails'
import { Hero } from '@/components/Hero'
import { InteractiveTerminal } from '@/components/InteractiveTerminal'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Publications } from '@/components/Publications'
import { Achievements } from '@/components/Achievements'
import { Resume } from '@/components/Resume'
import { Contact } from '@/components/Contact'

export default function Page() {
  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <Navigation />
      <SideRails />
      <main className="container-prose pb-16">
        <Hero />
        <div className="mt-6">
          <InteractiveTerminal />
        </div>
        <About />
        <Resume />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
