import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { ReactNode, RefObject, createRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ImageModal from './ImageModal';
import React from 'react';

const Work = () => {
    const opts: YouTubeProps['opts'] = {
        width: '100%',
        height: '100%'
    }

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const blenderImages:string[] = ['/Anvil1_a.png', '/Axe_1.png', '/AnvilAxe_1.png', '/AnvilAxe_4.png']

    const handleClick1 = (index:number, item: ReactNode) =>{
        setCurrentImageIndex(index)
        setShowModal1(true)
    }
    const handleClick2 = (index:number, item: ReactNode) =>{
        setCurrentImageIndex(index)
        setShowModal2(true)
    }

    return (
        <div className="slide-in from-right h-4/6 lg:h-[600px] lg:w-[800px] overflow-y-auto place-content-center space-y-10 scrollbar">
            
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                Jean Swainson Foundation{' '}
            </h2>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                { showModal1 && createPortal(
                    <ImageModal onClose={() => setShowModal1(false)} imageSrc={blenderImages[currentImageIndex]}/>, document.body
                )}
                <Carousel infiniteLoop autoPlay showThumbs={false} onClickItem={handleClick1}>
                    {blenderImages.map((imgSrc, index) =>
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
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        I was apart of multiple projects over the last 2 years contracting for the Jean Swainson Foundation. My work ranged from javascript programming in Playcanvas to Blueprint programming in Unreal Engine to 3D model creation using Blender. I also got to a point where I could make small additions to the their online learning platform GLIMS using Vue.js
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay showThumbs={false} showIndicators={false}>
                    <div>
                        <Youtube videoId='n1HBvVlhOEo' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='xD3Lu968Q0o' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='G_yu7YLvEew' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Playcanvas{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        Using the online 3d engine Playcanvas. I created multiple projects. I worked on the coding which was done primarily in javascript with some HTML and CSS when UI was involved. For one project I was tasked with recreating an avatar system where you could buy and sell gear and view your avatar which was linked up the online learning platform GLIMS.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='sibpJ7O4gBo' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Blender{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        Apart from some minor 3d asset creation the main project I was tasked with used Blender to create from real life building schematics a prefabricated building used for fire/police safety training. I recreated everything in a default building from the concrete foundation to the studs/joists to stairs, walls and even an example wall which had their patented fire insulation which allows these buildings to be continuously lit on fire and put out buy training fire fighters.
                    </p>
                </div>                
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay showThumbs={false} showIndicators={false}>
                    <div>
                        <Youtube videoId='amMytHUVcNw' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='0aPOS-wi1ns' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Unreal Engine{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        I designed an Unreal Engine level for a project that tied together with a players progress from the online learning platform GLIMS. You could either progress through lessons/quests through the web application or complete quests through the Unreal game. I created 1 of about 3 levels which is shown in the videos. This was my first time creating something like this which I really enjoyed. I also got to do some blueprint programming to add things like different sounds playing as the player moved over different terrain and getting different fire particles to play during different times of the day/night cycle.
                    </p>
                </div>                
            </div>

            <div className='grid'></div>
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                Wairoa Appliance Centre{' '}
            </h2>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                { showModal2 && createPortal(
                    <ImageModal onClose={() => setShowModal2(false)} imageSrc={'/WACStocktakerWeb.jpg'}/>, document.body
                )}
                <Carousel infiniteLoop autoPlay showThumbs={false} onClickItem={handleClick2}>
                    <div>
                        <Image
                            src={'/WACStocktakerWeb.jpg'}
                            width={960}
                            height={257}
                            alt={''}
                        />
                    </div>
                    <div>
                        <Youtube videoId='xjbrUTmjmmo' opts={opts} className='w-full lg:w-[380px] aspect-video'/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Web & Android App{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        For Wairoa Appliance Centre I created a stock taking application for Web written with HTML, javascript and CSS. I also created an accompanying Android application coded with ReactNative. I also setup and maintain their Wordpress website.
                    </p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Work;