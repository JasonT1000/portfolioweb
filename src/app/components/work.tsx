import Youtube, { YouTubeProps } from 'react-youtube'

const Work = () => {
    const opts: YouTubeProps['opts'] = {
        height: '257',
        width: '380'
    }

    return (
        <div className="slide-in from-right h-[600px] w-[800px]">
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                My Work{' '}
            </h2>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            
        </div>
     );
}
 
export default Work;