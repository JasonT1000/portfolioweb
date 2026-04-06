'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ButtonMain from './components/ButtonMain'
import Work from './components/work'
import Personal from './components/personal'
import Info from './components/Info'
import Contact from './components/Contact'
import Introduction from './components/introduction'

export default function Home() {
  enum PageSection {
    introduction = "INTRODUCTION",
    work = "WORK",
    personal = "PERSONALPROJECTS",
    info = "INFO",
    contact = "CONTACT",
  }

  const [activePageSection, setActivePageSection] = useState(PageSection.introduction)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const iconSrc: string = '/portfolioweb/menu-burger.svg'

  const updateActivePageSection = (activePageSection: PageSection) => {
    setActivePageSection(activePageSection)
    setShowMobileNav(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 overflow-hidden">

      <div className="relative top-[200px] w-full place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-9/12 after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      {activePageSection === PageSection.introduction && <Introduction />}
      {activePageSection === PageSection.work && <Work />}
      {activePageSection === PageSection.personal && <Personal />}
      {activePageSection === PageSection.info && <Info />}
      {activePageSection === PageSection.contact && <Contact />}

      <div className="hidden group absolute lg:h-auto hover:h-auto overflow-hidden bottom-10 mb-3 lg:mb-0 md:grid text-center lg:grid-cols-5 lg:text-left rounded-lg hover:bg-black/90 hover:lg:bg-inherit bg-black/100 transition ease-in-out duration-300">
        <ButtonMain title={"Introduction"} description={"Just some info about this website"} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
        <ButtonMain title={"Work"} description={"The projects I have worked on over the last few years for employers."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
        <ButtonMain title={"Personal projects"} description={"Some personal projects I have been working on in my spare time."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
        <ButtonMain title={"Info"} description={"Some of my personal info."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
        <ButtonMain title={"Contact"} description={"Ways to contact me."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
      </div>

      {
        showMobileNav &&
        <div className="md:hidden absolute hover:h-auto overflow-hidden bottom-10 mb-3 grid text-center rounded-lg hover:bg-black/90 bg-black/100 transition ease-in-out duration-300">
          <ButtonMain title={"Introduction"} description={"Just some info about this website"} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
          <ButtonMain title={"Work"} description={"The projects I have worked on over the last few years for employers."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
          <ButtonMain title={"Personal projects"} description={"Some personal projects I have been working on in my spare time."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
          <ButtonMain title={"Info"} description={"Some of my personal info."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
          <ButtonMain title={"Contact"} description={"Ways to contact me."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection} />
        </div>
      }

      <button className='absolute flex justify-center lg:hidden bottom-2 h-10 w-auto text-2xl font-semibold' onClick={() => setShowMobileNav(!showMobileNav)}><Image src={iconSrc} alt={''} width={30} height={30} /></button>
    </main>
  )
}
