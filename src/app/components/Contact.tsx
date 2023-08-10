import Image from 'next/image'

const Contact = () => {
    return ( 
        <div className="overflow-y-auto h-3/4 lg:w-[900px] slide-in from-left place-content-center space-y-10 px-5 lg:pr-5 scrollbar">
            <div>
                <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                    Networks{' '}
                </h2>
                <div className='flex justify-center gap-x-5'>
                    <div>
                        <a href="https://www.linkedin.com/in/jason-tollison-63443018b/" target='_blank' className='w-fit flex-initial flex items-center float-left lg:hover:bg-white/50 rounded'>
                            <Image
                                src={'/In-Blue-34.png'}
                                width={34}
                                height={34}
                                alt={''}
                                className='float-left'
                            />
                            <p className={`m-0 pr-4 pl-2 max-w-full float-left text-md opacity-50`}>
                                LinkedIn
                            </p>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/JasonT1000" target='_blank' className='w-fit flex-initial flex items-center float-left lg:hover:bg-white/50 rounded'>
                            <Image
                                src={'/github-mark-white.png'}
                                width={34}
                                height={33}
                                alt={''}
                                className='float-left'
                            />
                            <p className={`m-0 pr-4 pl-2 max-w-full float-left text-md opacity-50`}>
                                Github
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                    General Contact Info{' '}
                </h2>

                <div className='flex flex-col items-center'>
                    <div className=''>
                        <p className={`m-0 max-w-full text-md opacity-50`}>
                            Email: jteetechsolutions@gmail.com
                        </p>
                        <p className={`m-0 max-w-full text-md opacity-50`}>
                            Name: Jason Tollison
                        </p>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Contact;