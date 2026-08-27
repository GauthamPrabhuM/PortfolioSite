import { Masthead } from '@/components/Masthead'
import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { Research } from '@/components/Research'
import { Publications } from '@/components/Publications'
import { Education } from '@/components/Education'
import { Stack } from '@/components/Stack'
import { Colophon } from '@/components/Colophon'

/*
  One ground, one column of type, six numbered sections.
  No aurora, no side rails, no terminal, no theme fork.
*/
export default function Page() {
  return (
    <>
      <Masthead />
      <main className="wrap">
        <Hero />
        <Experience />
        <Research />
        <Publications />
        <Education />
        <Stack />
      </main>
      <Colophon />
    </>
  )
}
