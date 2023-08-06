'use client'

import Image from 'next/image'
import { useState } from 'react'
import ButtonMain from './components/ButtonMain'
import Work from './components/work'
import Personal from './components/personal'

export default function Home() {
  enum PageSection{
    default = "DEFAULT",
    work = "WORK",
    personal = "PERSONALPROJECTS",
    info = "INFO",
    contact = "CONTACT",
  }

  const [showPageSection, setShowPageSection] = useState(PageSection.default)

  const updatePageSection = (activePageSection:PageSection) =>{
    setShowPageSection(activePageSection)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      

      <div className="relative  top-[200px] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      { showPageSection === PageSection.work && <Work/> }
      { showPageSection === PageSection.personal && <Personal/> }

      <div className="absolute bottom-10 mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <ButtonMain title={"Work"} description={"The projects I have worked on over the last few years for employers."} updatePageSection={updatePageSection}/>
        <ButtonMain title={"Personal projects"} description={"Some personal projects I have been working on in my spare time."} updatePageSection={updatePageSection}/>
        <ButtonMain title={"Info"} description={"Some of my personal info."} updatePageSection={updatePageSection}/>
        <ButtonMain title={"Contact"} description={"Ways to contact me."} updatePageSection={updatePageSection}/>
      </div>
    </main>
  )
}
