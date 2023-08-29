import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ImageModal from './ImageModal';

const Personal = () => {
    const opts: YouTubeProps['opts'] = {
        width: '100%',
        height: '100%'
    }

    const [showModal, setShowModal] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const blenderImages:string[] = ['/portfolioweb/Anvil1_a.png', '/portfolioweb/Axe_1.png', '/portfolioweb/AnvilAxe_1.png', '/portfolioweb/AnvilAxe_4.png', 'lev39HNa8nU']
    // const blenderImages:string[] = ['/Anvil1_a.png', '/Axe_1.png', '/AnvilAxe_1.png', '/AnvilAxe_4.png', 'lev39HNa8nU']

    const handleClick = (index:number) =>{
        setCurrentImageIndex(index)
        if(window.innerWidth >= 1024){
            setShowModal(true)
        }
    }

    return ( 
        <div className="overflow-y-auto calculated-height lg:w-[900px] slide-in from-left place-content-center space-y-10 px-5 lg:pr-5 scrollbar">
        
            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                { showModal && createPortal(
                    <ImageModal onClose={() => setShowModal(false)} imageSrc={blenderImages[currentImageIndex]}/>, document.body
                )}
                <Carousel infiniteLoop autoPlay className='mb-2' showThumbs={false} showIndicators={false} onClickItem={handleClick}
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
                    {blenderImages.map((imgSrc, index) =>
                        index === blenderImages.length-1 ?
                        (<div key={index}>
                            <Youtube videoId={imgSrc} opts={opts} className="w-full lg:w-full aspect-video"/>
                        </div>)
                        :
                        <div key={index}>
                            <Image
                                src={imgSrc}
                                width={960}
                                height={257}
                                alt={''}
                            />
                        </div>
                    )}
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Blender{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                        I have been learning Blender for work and in my spare time. I started by watching the now world renowned &apos;Donut&apos; video. After completing that challenge I tried an Anvil then picked my own object to model which was an axe which I had in the tool shed. Going from taking reference photos to the modelling process to rendering was a lot of fun.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
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
                        <Youtube videoId='KwcxnjQw59g' opts={opts} className='w-full lg:w-full aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='XAEgGmiAOuE' opts={opts} className='w-full lg:w-full aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='D3BaPQ1JKSI' opts={opts} className='w-full lg:w-full aspect-video'/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Unreal Engine{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                        Learning Unreal Engine specifically for Virtual Reality has kept me pretty busy. An ongoing project has been recreating places from childhood in combination with movies/games that I grew up with. These are the first projects I made with no prior knowledge of Unreal Engine or Virtual reality or modelling. I had no experience with Blender and created some pretty bad models. I will be continuing on with this project shortly and hopefully can use my new skills and create some good stuff.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='cRcMj7uK9Js' opts={opts} className='w-full lg:w-full aspect-video mb-2'/>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Animations{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                    Currently only have 1 animation which I submitted to an online render challenge. The theme was 'boss fight' where a basic camera animation and point of interest was given and you had to make the rest up. I chose a boss fight where the hero and boss were intangled in a dance fight to the death.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:text-left">
            <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        This website{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-md opacity-50`}>
                        I created this website using react.js, next.js, typescript and tailwindcss. I had played around with react.js a while ago when playing with some gesture recognition scripts, but nothing like this. Basically I didn&apos;t have a lot of experience in these frameworks and just wanted to have a play and see what they were like.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Personal;