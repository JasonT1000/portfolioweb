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

    const blenderImages:string[] = ['/Anvil1_a.png', '/Axe_1.png', '/AnvilAxe_1.png', '/AnvilAxe_4.png']

    const handleClick = (index:number) =>{
        setCurrentImageIndex(index)
        if(window.innerWidth >= 1024){
            setShowModal(true)
        }
    }

    return ( 
        <div className="overflow-y-auto h-4/6 lg:h-[600px] lg:w-[820px] slide-in from-left place-content-center space-y-10 lg:pr-5 scrollbar">
        
            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                { showModal && createPortal(
                    <ImageModal onClose={() => setShowModal(false)} imageSrc={blenderImages[currentImageIndex]}/>, document.body
                )}
                <Carousel infiniteLoop autoPlay showThumbs={false} onClickItem={handleClick}>
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
                        Blender{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        I have been learning Blender for work and in my spare time. I started by watching the now world renouned 'Donut' video. After completing that challenge I did an Anvil then picked my own object to model of an axe which I had in the tool shed.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay showThumbs={false} showIndicators={false}>
                    <div>
                        <Youtube videoId='n1HBvVlhOEo' opts={opts} className='w-full lg:w-[390px] aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='qDTaFPzYvU4' opts={opts} className='w-full lg:w-[390px] aspect-video'/>
                    </div>
                    <div>
                        <Youtube videoId='ZNAqwJ7pXmY' opts={opts} className='w-full lg:w-[390px] aspect-video'/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Unreal Engine{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        Learning Unreal Engine specifically in relation to Virtual Reality has kept me pretty busy. An ongoing project has been recreating places of friends and my childhood in combination with movies that we grew up with.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Personal;