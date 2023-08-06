import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

const Personal = () => {
    const opts: YouTubeProps['opts'] = {
        height: '257',
        width: '380',
    }

    const [showModal, setShowModal] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const blenderImages:string[] = ['/Anvil1_a.png', '/Axe_1.png', '/AnvilAxe_1.png', '/AnvilAxe_4.png']

    const handleClick = (index:number) =>{
        console.log("clicked carousel slide")
        console.log("index is " + index)
        setCurrentImageIndex(index)
        setShowModal(true)
    }

    return ( 
        <div className="overflow-y-auto h-[600px] w-[800px] slide-in from-left place-content-center space-y-10 scrollbar">
        
        <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                { showModal && createPortal(
                    <ModalContent onClose={() => setShowModal(false)} imageSrc={blenderImages[currentImageIndex]}/>, document.body
                )}
                <Carousel infiniteLoop autoPlay showThumbs={false} onClickItem={handleClick}>
                    {blenderImages.map((imgSrc, index) =>
                    <div key={index}>
                        <Image
                            src={imgSrc}
                            width={380}
                            height={100}
                            alt={''}
                        />
                    </div>)}
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Blender{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        I have been learning Blender in my spare time. It started by watching the now world renouned 'Donut' video. After completing that challenge I did an Anvil then picked my own object to model.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay showThumbs={false}>
                    <div>
                        <Youtube videoId='4HagyiqJM7g' opts={opts}/>
                    </div>
                    <div>
                        <Youtube videoId='qDTaFPzYvU4' opts={opts}/>
                    </div>
                    <div>
                        <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Unreal Engine{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        Learning Unreal Engine specifically in relation to Virtual Reality has kept me pretty busy. A ongoing project has been recreating places of my childhood in combination with movies that I grew up with.
                    </p>
                </div>
            </div>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Blender{' '}
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                    </p>
                </div>                
            </div>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    This is the last paragraph of content
                </p>
            </div>
        </div>
     );
}
 
export default Personal;