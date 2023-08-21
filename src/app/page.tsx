'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ButtonMain from './components/ButtonMain'
import Work from './components/work'
import Personal from './components/personal'
import Info from './components/Info'
import Contact from './components/Contact'

export default function Home() {
  enum PageSection{
    default = "DEFAULT",
    work = "WORK",
    personal = "PERSONALPROJECTS",
    info = "INFO",
    contact = "CONTACT",
  }

  const [activePageSection, setActivePageSection] = useState(PageSection.default)
  const [isOnMobileDevice, setIsOnMobileDevice] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const updateActivePageSection = (activePageSection:PageSection) =>{
    setActivePageSection(activePageSection)
    setShowMobileNav(false)
  }

  const handleMobileNavClick = () =>{
    setShowMobileNav(true)
  }

  useEffect(() => {
    if(window.innerWidth <= 1024){
      setIsOnMobileDevice(true)
    }
    console.log("device width is")
    console.log(window.innerWidth)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 overflow-hidden">      

      <div className="relative top-[200px] w-full place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-9/12 after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      { activePageSection === PageSection.work && <Work/> }
      { activePageSection === PageSection.personal && <Personal/> }
      { activePageSection === PageSection.info && <Info/> }
      { activePageSection === PageSection.contact && <Contact/> }

      { !isOnMobileDevice && <div className="group absolute h-10 lg:h-auto hover:h-auto overflow-hidden bottom-0 lg:bottom-10 mb-12 lg:mb-0 grid text-center lg:grid-cols-5 lg:text-left rounded-lg hover:bg-black/90 hover:lg:bg-inherit transition ease-in-out duration-300 ease-in-out">
        <button className='group-hover:hidden lg:hidden mb-3 text-2xl font-semibold'>Menu</button>
        <ButtonMain title={"Introduction"} description={"Just some info about this website"} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
        <ButtonMain title={"Work"} description={"The projects I have worked on over the last few years for employers."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
        <ButtonMain title={"Personal projects"} description={"Some personal projects I have been working on in my spare time."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
        <ButtonMain title={"Info"} description={"Some of my personal info."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
        <ButtonMain title={"Contact"} description={"Ways to contact me."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
      </div>}
      { isOnMobileDevice && !showMobileNav && 
        <button className='absolute h-10 bottom-0 mb-3 text-2xl font-semibold' onClick={handleMobileNavClick}>Menu</button>
      }
      { isOnMobileDevice && showMobileNav &&
        <div className="group absolute lg:h-auto hover:h-auto overflow-hidden bottom-0 lg:bottom-10 mb-12 lg:mb-0 grid text-center lg:grid-cols-5 lg:text-left rounded-lg hover:bg-black/90 hover:lg:bg-inherit transition ease-in-out duration-300 ease-in-out">
          <ButtonMain title={"Work"} description={"The projects I have worked on over the last few years for employers."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
          <ButtonMain title={"Personal projects"} description={"Some personal projects I have been working on in my spare time."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
          <ButtonMain title={"Info"} description={"Some of my personal info."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
          <ButtonMain title={"Contact"} description={"Ways to contact me."} updateActivePageSection={updateActivePageSection} activePageSection={activePageSection}/>
        </div>
      }
    </main>
  )
}
