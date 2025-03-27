import { SkillsType } from "../_types/types";
import SkillList from "./SkillList";
import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useState } from "react";
import { createPortal } from 'react-dom';
import ImageModal from './ImageModal';

interface Props {
    sectionTitle: string
    sectionDescription?: string
    sectionDescriptionHTML?: React.ReactNode
    skills: SkillsType[]
    youtubeIds?: string[]
    imagePaths?: string[]
}

const ContentSection = (props: Props) => {

    const opts: YouTubeProps['opts'] = {
        width: '100%',
        height: '100%',
        hostedByYoutube: true
    }

    // State
    const [showModal1, setShowModal1] = useState(false)
    // const [showModal2, setShowModal2] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // useEffect(() => {
    //     console.log("youtubeid length")
    //     console.log(props.youtubeIds?.length)
    //     console.log("imagepath length")
    //     console.log(props.imagePaths?.length)
    //   }, [props])

    // Handlers
    // const handleClick1 = (index:number) =>{
    //     setCurrentImageIndex(index)
    //     if(window.innerWidth >= 1024){
    //         setShowModal1(true)
    //     }
    // }
    // const handleClick2 = (index:number) =>{
    //     setCurrentImageIndex(index)
    //     if(window.innerWidth >= 1024){
    //         setShowModal2(true)
    //     }
    // }

    const getCarouselChildren = (): React.ReactNode[] => {
        return  [...createImageElements(), ...createYoutubeElements()]
    }

    const createYoutubeElements = (): React.ReactNode[] => {
        if(props.youtubeIds && props.youtubeIds.length > 0){
           return props.youtubeIds.map((youtubeId, index) => (
                <div key={'youtube'+index}>
                    <Youtube videoId={youtubeId} opts={opts} className='w-full lg:w-full aspect-video'/>
                </div>
            ))
        }

        return []
    }
    
    const createImageElements = (): React.ReactNode[] => {
        if(props.imagePaths && props.imagePaths.length > 0){
            return props.imagePaths?.map((imgPath, index) => (
                <div key={'image' + index}>
                    <Image
                        src={imgPath}
                        width={960}
                        height={257}
                        alt={''}
                    />
                </div>
            ))
        }

        return []
    }

    

    const getContentElement = () => {

        if(props.youtubeIds){
            return <Youtube videoId={props.youtubeIds[0]} opts={opts} className='w-full lg:w-full aspect-video'/>
        }
        else if(props.imagePaths){
            return <div><Image src={props.imagePaths[0]} width={960} height={257} alt={''} /></div>
        }
        
        return null
    }

    return (
        <>
            <div className="grid text-center grid-rows-none lg:mb-0 lg:text-left">
                <div className='grid lg:grid-cols-2 lg:gap-x-5 gap-x-0 grid-cols-[0px 1fr]'>
                    <div></div>
                    <div>
                        <h2 className='mb-3 text-2xl text-center font-semibold'>
                            {props.sectionTitle}
                        </h2>
                        <SkillList skills={props.skills}/>
                    </div>
                </div>
                <div className='grid text-center gap-x-5 grid-rows-none lg:mb-0 lg:grid-cols-2 lg:text-left'>
                    {
                        props.imagePaths && showModal1 && createPortal(
                            <ImageModal onClose={() => setShowModal1(false)} imageSrc={props.imagePaths[currentImageIndex]}/>, document.body
                        )
                    }
                    {
                        (props.youtubeIds && props.youtubeIds.length > 1) || (props.imagePaths && props.imagePaths.length > 1)?
                        (
                            <Carousel
                                infiniteLoop
                                autoPlay
                                className=''
                                showThumbs={false}
                                showIndicators={false}
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
                                {getCarouselChildren()}

                            </Carousel>
                        )
                        :
                        (
                            getContentElement()
                        )
                    }
                    
                    <div>
                        <p className="content-section-p">
                            {props.sectionDescription}
                        </p>
                        {props.sectionDescriptionHTML}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ContentSection;