import Image from 'next/image'

interface Props{
    onClose: any,
    imageSrc: string,
}

const ImageModal = ({ onClose, imageSrc }: Props) => {
    return ( 
        <div className="absolute top-[20px] bottom-[20px] inset-x-0 w-5/6 max-h-full mx-auto">
            <button onClick={onClose} className='absolute w-16 h-8 top-0 right-0 bg-blue-900/50 rounded-md hover:bg-sky-900/80'>X</button>
            <Image
                src={imageSrc}
                width={1920}
                height={1080}
                alt={''}
                style={{margin: '0 auto', width:'100%', height: '100%'}}
            />
        </div>
     );
}
 
export default ImageModal;