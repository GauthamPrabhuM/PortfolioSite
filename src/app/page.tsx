import { Masthead } from '@/components/Masthead'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Reveal } from '@/components/Reveal'
import { Experience } from '@/components/Experience'
import { Research } from '@/components/Research'
import { Publications } from '@/components/Publications'
import { Education } from '@/components/Education'
import { Stack } from '@/components/Stack'
import { Colophon } from '@/components/Colophon'

/*
  A dark stage with live fluid, then one column of type: an about block
  and five numbered sections. Secondary detail folds behind "More".
*/
export default function Page() {
  return (
    <>
      <Masthead />
      <Hero />
      <main className="wrap">
        <About />
        <Experience />
        <Research />
        <Publications />
        <Education />
        <Stack />
      </main>
      <Colophon />
      <Reveal />
    </>
  )
}
