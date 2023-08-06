import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

const Work = () => {
    const opts: YouTubeProps['opts'] = {
        height: '257',
        width: '380'
    }

    return (
        <div className="slide-in from-right h-[600px] w-[800px] overflow-y-auto place-content-center space-y-10 scrollbar">
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                Jean Swainson Foundation{' '}
            </h2>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay>
                    <div>
                        <Image
                            src={'/Anvil1_a.png'}
                            width={380}
                            height={100}
                            alt={''}
                        />
                    </div>
                    <div>
                        <Image
                            src={'/Axe_1.png'}
                            width={380}
                            height={100}
                            alt={''}
                        />
                    </div>
                    <div>
                        <Image
                            src={'/AnvilAxe_1.png'}
                            width={380}
                            height={100}
                            alt={''}
                        />
                    </div>
                    <div>
                        <Image
                            src={'/AnvilAxe_4.png'}
                            width={380}
                            height={100}
                            alt={''}
                        />
                    </div>
                </Carousel>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        GLIMS{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        I was apart of multiple projects over the last 2 years contracting for the Jean Swainson Foundation. My work ranged from javascript programming in Playcanvas to Blueprint programming in Unreal Engine. I designed an Unreal Engine level for a project that tied together with a players progress from the web application.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Carousel infiniteLoop autoPlay>
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
                        Playcanvas{' '}
                    </h2>
                    <p className={`m-0 max-w-full text-sm opacity-50`}>
                        Learning Unreal Engine specifically in relation to Virtual Reality has kept me pretty busy. A ongoing project has been recreating places of my childhood in combination with movies that I grew up with.
                    </p>
                </div>
            </div>

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
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

            <div className="grid text-center gap-x-5 lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <div>
                    <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                        Unreal Engine{' '}
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                    </p>
                </div>                
            </div>
            
        </div>
     );
}
 
export default Work;