import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { CSSProperties, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ImageModal from './ImageModal';
import React from 'react';
import SkillList from './SkillList';
import { SkillsType } from '../_types/types';
import ContentSection from './ContentSection';

const Work = () => {
    const opts: YouTubeProps['opts'] = {
        width: '100%',
        height: '100%'
    }

    // State
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [carouselOneAutoPlay, setCarouselOneAutoPlay] = useState(true)

    // Paths
    const glimsImages:string[] = ['/portfolioweb/GLIMS_web_1.jpg', '/portfolioweb/GLIMS_web_2.jpg', '/portfolioweb/GLIMS_web_3.jpg']
    const wacImages:string[] = ['/portfolioweb/WACStocktakerWeb.jpg']

    const handleClick1 = (index:number) =>{
        setCurrentImageIndex(index)
        if(window.innerWidth >= 1024){
            setShowModal1(true)
        }
    }
    const handleClick2 = (index:number) =>{
        setCurrentImageIndex(index)
        if(window.innerWidth >= 1024){
            setShowModal2(true)
        }
    }

    return (
        <div className="overflow-y-auto calculated-height lg:w-[900px] slide-in from-right place-content-center space-y-20 px-5 lg:pr-5 scrollbar">
            
            <h1 className={`text-3xl text-center font-semibold mb-8`}>
                Wairoa Appliance Centre{' '}
            </h1>

            <ContentSection
                sectionTitle='EXO POS report converter'
                sectionDescription='After the business changed point of sale systems I was tasked with finding a way to view customer invoice data from the old system MYOB EXO after access to the web portal was shut down. I created a custom report to export customer warranty data, then created a NextJS webapp that could convert the .csv file into a local database. This allowed the business to view customer invoice data offline and on a local computer. I added functionality to search for specific invoices and view the data in a table format. Users can also print specific invoices if needed.'
                skills={[SkillsType.TYPESCRIPT, SkillsType.TAILWIND, SkillsType.REST, SkillsType.NEXTJS, SkillsType.JSON]}
                youtubeIds={['8WeSTRnORcY']}
            />

            {/* <div className="grid text-center grid-rows-none lg:mb-0 lg:text-left">
                <div className='grid lg:grid-cols-2 lg:gap-x-5 gap-x-0 grid-cols-[0px 1fr]'>
                    <div></div>
                    <div>
                        <h2 className='mb-3 text-2xl text-center font-semibold'>
                            EXO POS report converter{' '}
                        </h2>
                        <SkillList skills={[SkillsType.TYPESCRIPT, SkillsType.TAILWIND, SkillsType.REST, SkillsType.NEXTJS, SkillsType.JSON]}/>
                    </div>
                </div>
                <div className='grid text-center items-center gap-x-5 grid-rows-none lg:mb-0 lg:grid-cols-2 lg:text-left'>
                    <Youtube videoId='8WeSTRnORcY' opts={opts} className='w-full lg:w-full aspect-video'/>
                    <div>
                        <p className='m-0 max-w-full text-md opacity-50'>
                            After the business changed point of sale systems I was tasked with finding a way to view customer invoice data from the old system MYOB EXO after access to the web portal was shut down. I created a custom report to export customer warranty data, then created a NextJS webapp that could convert the .csv file into a local database. This allowed the business to view customer invoice data offline and on a local computer. I added functionality to search for specific invoices and view the data in a table format. Users can also print specific invoices if needed.
                        </p>
                    </div>
                </div>
            </div> */}

            <ContentSection
                sectionTitle='Web & Android App'
                sectionDescription='For a small retail appliance shop in Wairoa called Wairoa Appliance Centre I am creating a stock taking application for Web previously written with HTML, javascript and CSS. I have rewritten it in React with Typescript and created a Nodejs server which will run along side it. I also created an accompanying Android application coded with ReactNative. I also setup and maintain their Wordpress website.'
                skills={[SkillsType.REACTJS, SkillsType.REACTNATIVE, SkillsType.TYPESCRIPT, SkillsType.CSS, SkillsType.REST, SkillsType.NODE, SkillsType.JSON]}
                youtubeIds={['x6I5056uxFo', 'xjbrUTmjmmo']}
            />

            {/* <div className="grid text-center items-center grid-rows-none lg:mb-0 lg:text-left">
                <div className='grid lg:grid-cols-2 lg:gap-x-5 gap-x-0 grid-cols-[0px 1fr]'>
                    <div></div>
                    <div>
                        <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                            Web & Android App{''}
                        </h2>
                        <SkillList skills={[SkillsType.REACTJS, SkillsType.REACTNATIVE, SkillsType.TYPESCRIPT, SkillsType.CSS, SkillsType.REST, SkillsType.NODE, SkillsType.JSON]}/>
                    </div>
                    
                </div>
                <div className='grid text-center gap-x-5 grid-rows-none lg:mb-0 lg:grid-cols-2 lg:text-left'>
                    <Carousel infiniteLoop autoPlay className='' showThumbs={false} showIndicators={false} 
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] left-0 hover:bg-black z-10 opacity-20 hover:opacity-60 transition ease-in duration-350 carousel-customarrow">
                                    <p className='customArrow customArrow-left'></p>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] right-0 hover:bg-black opacity-20 hover:opacity-60 z-2 transition ease-in duration-350 carousel-customarrow">
                                    <p className='customArrow customArrow-right'></p>
                                </button>
                            )
                        }
                    >
                        <div>
                            <Youtube videoId='x6I5056uxFo' opts={opts} className='w-full lg:w-full aspect-video'/>
                        </div>
                        <div>
                            <Youtube videoId='xjbrUTmjmmo' opts={opts} className='w-full lg:w-full aspect-video'/>
                        </div>
                    </Carousel>
                    <div>
                        <p className={`m-0 max-w-full text-md opacity-50`}>
                            For a small retail appliance shop in Wairoa called Wairoa Appliance Centre I am creating a stock taking application for Web previously written with HTML, javascript and CSS. I have rewritten it in React with Typescript and created a Nodejs server which will run along side it. I also created an accompanying Android application coded with ReactNative. I also setup and maintain their Wordpress website.
                        </p>
                    </div>
                </div>
            </div> */}


            <h2 className={`mb-3 text-3xl text-center font-semibold`}>
                Jean Swainson Foundation{' '}
            </h2>

            <ContentSection
                sectionTitle='Blender'
                sectionDescription='Apart from some minor 3d asset creation I was tasked with using Blender to create from real life building schematics a prefabricated building used for fire/police safety training. I recreated everything from the concrete foundation, studs/joists, stairs, walls and even an example wall which had their patented fire insulation which allows these buildings to be continuously lit on fire and put out by training fire fighters.'
                skills={[SkillsType.BLENDER]}
                youtubeIds={['sibpJ7O4gBo']}
            />

            {/* <div className="grid text-center grid-rows-none lg:mb-0 lg:text-left">
                <div className='grid lg:grid-cols-2 lg:gap-x-5 gap-x-0 grid-cols-[0px 1fr]'>
                    <div></div>
                    <div>
                        <h2 className='mb-3 text-2xl text-center font-semibold'>
                            Blender{' '}
                        </h2>
                        <SkillList skills={[SkillsType.BLENDER]}/>
                    </div>
                </div>
                <div className='grid text-center gap-x-5 grid-rows-none lg:mb-0 lg:grid-cols-2 lg:text-left'>
                    <Youtube videoId='sibpJ7O4gBo' opts={opts} className='w-full lg:w-full aspect-video'/>
                    <div>
                        <p className='m-0 max-w-full text-md opacity-50'>
                            Apart from some minor 3d asset creation I was tasked with using Blender to create from real life building schematics a prefabricated building used for fire/police safety training. I recreated everything from the concrete foundation, studs/joists, stairs, walls and even an example wall which had their patented fire insulation which allows these buildings to be continuously lit on fire and put out by training fire fighters.
                        </p>
                    </div>
                </div>
            </div> */}

            <ContentSection
                sectionTitle='Playcanvas'
                sectionDescriptionHTML={<p className='m-0 max-w-full text-md opacity-50'>
                    Using the online 3d engine Playcanvas. I created multiple projects. I worked on the coding which was done primarily in javascript with some HTML and CSS when UI was involved. For one project I was tasked with creating an interactive marae experience where as players completed lessons/quests on the GLIMS platform different parts of a marae were unlocked. You can also see information about specific carvings/buildings which is displayed on an in game kiosk. For another project I recreated an Unreal Engine avatar system in Playcanvas where you can buy and sell gear and view your avatar which was linked up to the online learning platform GLIMS. The latest project I did for <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://playcanv.as/p/G8x53x9D/" target='_blank'>FireFacilities</a> recreated a fire safety building where players are able to walk throughout the building to get a better idea of the layout and size.
                </p>}
                skills={[SkillsType.PLAYCANVAS, SkillsType.BLENDER, SkillsType.HTML, SkillsType.CSS, SkillsType.JAVASCRIPT]}
                youtubeIds={['f5VyI8u00W0', 'n1HBvVlhOEo', 'G_yu7YLvEew', 'xD3Lu968Q0o']}
            />

            {/* <div className="grid text-center grid-rows-none lg:mb-0 lg:text-left">
                <div className='grid lg:grid-cols-2 lg:gap-x-5 gap-x-0 grid-cols-[0px 1fr]'>
                    <div></div>
                    <div>
                        <h2 className='mb-3 text-2xl text-center font-semibold'>
                            Playcanvas{' '}
                        </h2>
                        <SkillList skills={[SkillsType.PLAYCANVAS, SkillsType.BLENDER, SkillsType.HTML, SkillsType.CSS, SkillsType.JAVASCRIPT]}/>
                    </div>
                </div>
                <div className='grid text-center gap-x-5 grid-rows-none lg:mb-0 lg:grid-cols-2 lg:text-left'>
                    <Carousel infiniteLoop autoPlay className='' showThumbs={false} showIndicators={false}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] left-0 hover:bg-black z-10 opacity-20 hover:opacity-60 transition ease-in duration-350 carousel-customarrow">
                                    <p className='customArrow customArrow-left'></p>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] right-0 hover:bg-black opacity-20 hover:opacity-60 z-2 transition ease-in duration-350 carousel-customarrow">
                                    <p className='customArrow customArrow-right'></p>
                                </button>
                            )
                        }
                    >
                        <div>
                            <Youtube videoId='f5VyI8u00W0' opts={opts} className='w-full lg:w-full aspect-video'/>
                        </div>
                        <div>
                            <Youtube videoId='n1HBvVlhOEo' opts={opts} className='w-full lg:w-full aspect-video'/>
                        </div>
                        <div>
                            <Youtube videoId='G_yu7YLvEew' opts={opts} className='w-full lg:w-full aspect-video'/>
                        </div>
                        <div>
                            <Youtube videoId='xD3Lu968Q0o' opts={opts} className='w-full lg:w-full aspect-video'/>
                        </div>
                    </Carousel>
                    <div>
                        <p className='m-0 max-w-full text-md opacity-50'>
                            Using the online 3d engine Playcanvas. I created multiple projects. I worked on the coding which was done primarily in javascript with some HTML and CSS when UI was involved. For one project I was tasked with creating an interactive marae experience where as players completed lessons/quests on the GLIMS platform different parts of a marae were unlocked. You can also see information about specific carvings/buildings which is displayed on an in game kiosk. For another project I recreated an Unreal Engine avatar system in Playcanvas where you can buy and sell gear and view your avatar which was linked up to the online learning platform GLIMS. The latest project I did for <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://playcanv.as/p/G8x53x9D/" target='_blank'>FireFacilities</a> recreated a fire safety building where players are able to walk throughout the building to get a better idea of the layout and size.
                        </p>
                    </div>
                </div>
            </div> */}

            <ContentSection
                sectionTitle='Unreal Engine'
                sectionDescription='I designed an Unreal Engine level for a project that tied together with a players progress from the online learning platform GLIMS. You could either progress through lessons/quests through the web application or complete quests through the Unreal game. I created 1 of about 3 levels which is shown in the videos. This was my first time creating something like this which I really enjoyed. I also got to do some blueprint programming to add things like different sounds playing as the player moved over different terrain and getting different fire particles to play during different times of the day/night cycle.'
                skills={[SkillsType.UNREALFOUR, SkillsType.UNREALBLUEPRINTS]}
                youtubeIds={['amMytHUVcNw', '0aPOS-wi1ns']}
            />

            {/* <div className="grid text-center items-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay className='mb-2' showThumbs={false} showIndicators={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] left-0 hover:bg-black z-10 opacity-20 hover:opacity-60 transition ease-in duration-350 carousel-customarrow">
                                <p className='customArrow customArrow-left'></p>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] right-0 hover:bg-black opacity-20 hover:opacity-60 z-2 transition ease-in duration-350 carousel-customarrow">
                                <p className='customArrow customArrow-right'></p>
                            </button>
                        )
                    }
                >
                    <div>
                        <Youtube videoId='amMytHUVcNw' opts={opts} className='w-full lg:w-full aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='0aPOS-wi1ns' opts={opts} className='w-full lg:w-full aspect-video'/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Unreal Engine{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                        I designed an Unreal Engine level for a project that tied together with a players progress from the online learning platform GLIMS. You could either progress through lessons/quests through the web application or complete quests through the Unreal game. I created 1 of about 3 levels which is shown in the videos. This was my first time creating something like this which I really enjoyed. I also got to do some blueprint programming to add things like different sounds playing as the player moved over different terrain and getting different fire particles to play during different times of the day/night cycle.
                    </p>
                </div>                
            </div> */}


            <ContentSection
                sectionTitle='GLIMS'
                sectionDescription=''
                sectionDescriptionHTML={
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                        I was involved in multiple projects over the last 3 years I contracted for the Jean Swainson Foundation. My work ranged from javascript programming in Playcanvas to Blueprint programming in Unreal Engine to 3D model creation using Blender. I Managed development of their online learning platform <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://afedsquad.co.nz/glims" target='_blank'>GLIMS</a> working closely with the lead programmer. I also got to a point where I could make small fixes and additions to the platform which uses Vue2.js.
                    </p>
                }
                skills={[SkillsType.HTML, SkillsType.CSS, SkillsType.JAVASCRIPT, SkillsType.PLAYCANVAS, SkillsType.VUE2JS]}
                imagePaths={glimsImages}
            />

            <div className="grid text-center items-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                { showModal1 && createPortal(
                    <ImageModal onClose={() => setShowModal1(false)} imageSrc={glimsImages[currentImageIndex]}/>, document.body
                )}
                <Carousel infiniteLoop autoPlay className='mb-2' showThumbs={false} onClickItem={handleClick1}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] left-0 hover:bg-black z-10 opacity-20 hover:opacity-60 transition ease-in duration-350 carousel-customarrow">
                                <p className='customArrow customArrow-left'></p>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} className="absolute h-[100px] md:h-[300px] lg:h-[100px] w-[30px] right-0 hover:bg-black opacity-20 hover:opacity-60 z-2 transition ease-in duration-350 carousel-customarrow">
                                <p className='customArrow customArrow-right'></p>
                            </button>
                        )
                    }
                >
                    {glimsImages.map((imgSrc, index) =>
                    <div key={index}>
                        <Image
                            src={imgSrc}
                            width={960}
                            height={257}
                            alt={''}
                        />
                    </div>)}
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        GLIMS{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                        I was involved in multiple projects over the last 3 years I contracted for the Jean Swainson Foundation. My work ranged from javascript programming in Playcanvas to Blueprint programming in Unreal Engine to 3D model creation using Blender. I Managed development of their online learning platform <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://afedsquad.co.nz/glims" target='_blank'>GLIMS</a> working closely with the lead programmer. I also got to a point where I could make small fixes and additions to the platform which uses Vue2.js.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Work;