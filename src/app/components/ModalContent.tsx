import Image from 'next/image'

interface Props{
    onClose: any,
    imageSrc: string,
}

const ModalContent = ({ onClose, imageSrc }: Props) => {
    return ( 
        <div className="absolute top-[50px] w-[600] inset-x-0 bg-blue-900 w-fit mx-auto">
            <button onClick={onClose} className='absolute w-16 h-8 top-0 right-0 bg-blue-900/50 rounded-md hover:bg-sky-900/80'>X</button>
            <Image
                src={imageSrc}
                width={600}
                height={100}
                alt={''}
                style={{margin: '0 auto'}}
            />
        </div>
     );
}
 
export default ModalContent;